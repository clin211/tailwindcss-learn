'use client';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import "@/assets/styles/counter.css";

// 源代码: https://codepen.io/borntofrappe/pen/xxobXxJ
interface Props { }
function Page(props: Props) {
    const counterRef = useRef<HTMLOutputElement>(null);
    const [counter, setCounter] = useState(0);

    const handleOnClickIncrement = async () => {
        if (counterRef.current && document.startViewTransition && matchMedia("(prefers-reduced-motion: no-preference)").matches) {
            counterRef.current.style.setProperty("view-transition-name", "value-increment");
            const transition = document.startViewTransition(() => setCounter(c => c + 1));

            await transition.finished;
            counterRef.current.style.removeProperty("view-transition-name");
        } else {
            setCounter(c => c + 1)
        }

    }

    const handleOnClickDecrement = async () => {
        if (counterRef.current && document.startViewTransition && matchMedia("(prefers-reduced-motion: no-preference)").matches) {
            counterRef.current.style.setProperty("view-transition-name", "value-decrement");
            const transition = document.startViewTransition(() => setCounter(c => c - 1));

            await transition.finished;
            counterRef.current.style.removeProperty("view-transition-name");
        } else {
            setCounter(c => c - 1)
        }
    }



    return (
        <div className='counter-container'>
            <button onClick={handleOnClickDecrement} title='Decrement'>
                <svg aria-hidden="true" width="1em" height="1em" viewBox="0 0 1 1">
                    <path stroke="currentColor" strokeWidth="0.2" strokeLinecap="round" d="M 0.1 0.5 0.9 0.5" />
                </svg>
            </button>

            <output ref={counterRef}>{counter}</output>

            <button onClick={handleOnClickIncrement} title='Increment'>
                <svg aria-hidden="true" width="1em" height="1em" viewBox="0 0 1 1">
                    <path stroke="currentColor" strokeWidth="0.2" strokeLinecap="round" d="M 0.1 0.5 0.9 0.5 M 0.5 0.1 0.5 0.9" />
                </svg>
            </button>
        </div>
    );
}

export default Page;
