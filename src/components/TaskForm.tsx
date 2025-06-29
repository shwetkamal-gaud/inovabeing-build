import React, { useEffect, useState } from 'react'
import GlassCard from './GlassCard';
type TaskFormProps = {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (task: { title: string; status: string }) => void;
    initialData?: { title: string; status: string };
};
const TaskForm = ({ isOpen, onClose, onSubmit, initialData }: TaskFormProps) => {
    const [title, setTitle] = useState('');
    const [status, setStatus] = useState('pending');

    useEffect(() => {
        if (initialData) {
            setTitle(initialData.title);
            setStatus(initialData.status);
        } else {
            setTitle('');
            setStatus('pending');
        }
    }, [initialData, isOpen]);


    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <GlassCard>
                <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                    {initialData ? 'Edit Task' : 'Add Task'}
                </h2>
                <form onSubmit={(e) => { e.preventDefault(); onSubmit({ title, status }) }} className="space-y-4">
                    <input
                        className="w-full px-4 py-2 dark:text-white rounded-lg bg-white/30 border border-white/20 dark:bg-black/30 focus:outline-none"
                        placeholder="Task title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                    <select

                        required
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        className="w-full px-4 py-2 rounded-lg dark:text-white focus:outline-none bg-white/30 dark:bg-black/30 border border-white/20"
                    >
                        <option value="pending">Pending</option>
                        <option value="done">Done</option>
                    </select>
                    <div className="flex justify-end gap-2">
                        <button onClick={onClose} className="px-4 py-2 dark:bg-[#FEC1C5] text-white bg-[#310320] rounded">
                            Cancel
                        </button>
                        <button type='submit'

                            className="px-4 py-2 bg-[#FEC1C5] dark:bg-[#310320] rounded text-white"
                        >
                            {initialData ? 'Update' : 'Create'}
                        </button>
                    </div>
                </form>
            </GlassCard>
        </div>
    )
}

export default TaskForm