import React from 'react'

const Spinner = () => {
    return (
        <div className="flex justify-center items-center my-6">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#eeb2b6]" />
        </div>
    )
}

export default Spinner