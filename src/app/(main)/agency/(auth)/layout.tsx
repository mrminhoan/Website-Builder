import React from 'react'

const LayoutAuth = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='h-full flex items-center justify-center flex-col'>
            {children}
        </div>
    )
}

export default LayoutAuth
