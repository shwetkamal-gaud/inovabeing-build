'use client'
import React, { useEffect, useState } from 'react'
import GlassCard from './GlassCard'
import TaskCard from './TaskCard'
import TaskForm from './TaskForm'
import DeleteModal from './DeleteModal'
import { Task } from '@/types/types'
import { useRouter } from 'next/navigation'

const TodoPage = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState(false);
    const [selectedTask, setSelectedTask] = useState<Task | null>(null);
    const [showForm, setShowForm] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const router = useRouter()
    console.log(selectedTask)
    const fetchTasks = async () => {
        setLoading(true)
        try {
            const res = await fetch(`/api/todos`, { credentials: 'include' });
            const data = await res.json();
            if (res.ok) {
                setTasks(data);
            }
            if (res.status === 401) {
                console.log(data, res.statusText, res.status)
                router.replace('/login')
            }
        }
        catch (e) {
            console.error(e)
        }
        finally {
            setLoading(false)
        }
    };
    useEffect(() => {
        fetchTasks()
    }, [])
    const handleSubmit = async ({ title, status }: { title: string; status: string }) => {
        if (selectedTask) {
            await fetch(`/api/todos/${selectedTask._id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title, status }),
                credentials: 'include'
            });
        } else {
            await fetch(`/api/todos`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title, status }),
                credentials: 'include'
            });
        }
        setShowForm(false);
        setSelectedTask(null);
        fetchTasks();
    };


    const handleDelete = async () => {
        if (!selectedTask) return;
        await fetch(`/api/todos/${selectedTask._id}`, {
            method: 'DELETE',
            credentials: 'include'
        });
        setShowDelete(false);
        setSelectedTask(null);
        fetchTasks();
    };
    return (
        <div className='mt-10  px-5 flex flex-grow  w-full items-center justify-center flex-col dark:text-white'>
            <GlassCard className='md:w-5xl gap-2'>
                <div className="flex flex-col bg gap-2 sticky top-0 z-50  ">
                    <div className="flex items-center justify-between">
                        <h1 className="text-black dark:text-white  text-2xl font-bold">Mini Task Manager</h1>

                    </div>

                    <button onClick={() => {
                        setSelectedTask(null);
                        setShowForm(true);
                    }} className=" p-2  self-end  text-white rounded-lg bg-[#eeb2b6] dark:bg-[#310320] ">
                        Add Task
                    </button>
                </div>
                {loading ? (
                    <p className="text-center text-white">Loading tasks...</p>
                ) : tasks?.length <= 0 ? <p className="text-center text-white">NO tasks...</p> : (
                    tasks?.map((task) => (
                        <TaskCard
                            key={task._id}
                            _id={task._id}
                            title={task.title}
                            status={task.status}
                            createdAt={new Date(task.createdAt).toLocaleDateString()}
                            setTask={setSelectedTask}
                            setShowDelete={setShowDelete}
                            setShowForm={setShowForm}
                        />
                    ))
                )}
            </GlassCard>
            {
                showForm && <TaskForm
                    isOpen={showForm}
                    onClose={() => {
                        setShowForm(false);
                        setSelectedTask(null);
                    }}
                    onSubmit={handleSubmit}
                    initialData={selectedTask || undefined}
                />
            }

            {
                showDelete && <DeleteModal
                    onClose={() => {
                        setShowDelete(false);
                        setSelectedTask(null);
                    }}
                    onConfirm={handleDelete}
                />
            }

        </div>
    )
}

export default TodoPage