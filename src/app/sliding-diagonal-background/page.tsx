import React from 'react'
import "@/assets/styles/sliding-diagonal-background.css";

const SlidingDiagonalBackground = () => {
    return (
        <main className='w-full h-screen'>
            <div className="bg"></div>
            <div className="bg bg2"></div>
            <div className="bg bg3"></div>
            <div className="content">
                <h1>Hello world</h1>
            </div>
        </main>
    )
}

export default SlidingDiagonalBackground;