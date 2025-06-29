import { Edit, Trash2 } from 'lucide-react'
import React, { Dispatch, SetStateAction } from 'react'
import GlassCard from './GlassCard';
import { Task } from '@/types/types';

interface TaskCardProp {
    _id: string
    title: string;
    status: string;
    createdAt: string;
    setTask: Dispatch<SetStateAction<Task| null>>;
    setShowForm: Dispatch<SetStateAction<boolean>>
    setShowDelete: Dispatch<SetStateAction<boolean>>
}

const TaskCard = ({ _id, title, status, createdAt, setTask, setShowForm, setShowDelete }: TaskCardProp) => {
    return (
        <GlassCard >
            <div className="flex justify-between items-center">
                <div>
                    <h3 title={title} className="text-lg font-semibold break-words truncate w-30 line-clamp-2">{title}</h3>
                    <p className="text-xs text-gray-400">{createdAt}</p>
                </div>
                <div
                    className={`px-3 py-1 text-sm rounded-xl ${status === 'done' ? 'bg-green-400 text-white' : 'bg-gray-400/20 text-gray-800 dark:text-white'
                        }`}
                >
                    {status}
                </div>
                <div className='flex items-center gap-2'>
                    <button onClick={() => { setShowForm(true); setTask({ _id, title, status, createdAt }) }}>
                        <Edit />
                    </button>
                    <button onClick={() => { setTask({ _id, title, status, createdAt }); setShowDelete(true) }}>
                        <Trash2 />
                    </button>
                </div>
            </div>
        </GlassCard>
    )
}

export default TaskCard