'use client';
import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import "@/assets/styles/counter.css";

// 源代码: https://codepen.io/borntofrappe/pen/xxobXxJ
interface Props {}
function Page(props: Props) {
    const minusRef = useRef<HTMLButtonElement>(null);
    const addRef = useRef<HTMLButtonElement>(null);
    const [counter, setCounter] = useState(0);

    const handleOnClickIncrement = () => {
        setCounter(c => c -1)
    }

    const handleOnClickDecrement = () => {
        setCounter(c => c + 1)
    }

    useLayoutEffect(() => {
        const buttonDecrement = document.querySelector("button:nth-of-type(1)");
        const buttonIncrement = document.querySelector("button:nth-of-type(2)");
        const counter = document.querySelector("output");

        const increment = () => {
            counter.textContent = +counter.textContent + 1;
        };

        const decrement = () => {
            counter.textContent = +counter.textContent - 1;
        };

        buttonIncrement.addEventListener("click", async () => {
            if (
                document.startViewTransition &&
                matchMedia("(prefers-reduced-motion: no-preference)").matches
            ) {
                counter.style.setProperty("view-transition-name", "value-increment");
                const transition = document.startViewTransition(() => {
                    increment();
                });

                await transition.finished;
                counter.style.removeProperty("view-transition-name");
            } else {
                increment();
            }
        });

        buttonDecrement.addEventListener("click", async () => {
            if (
                document.startViewTransition &&
                matchMedia("(prefers-reduced-motion: no-preference)").matches
            ) {
                counter.style.setProperty("view-transition-name", "value-decrement");
                const transition = document.startViewTransition(() => {
                    decrement();
                });

                await transition.finished;
                counter.style.removeProperty("view-transition-name");
            } else {
                decrement();
            }
        });

    }, [])

    return (
        <div>
            <button ref={minusRef} aria-label="Decrease the counter by one" onClick={handleOnClickDecrement}>
                <svg aria-hidden="true" width="1em" height="1em" viewBox="0 0 1 1">
                    <path stroke="currentColor" strokeWidth="0.2" strokeLinecap="round" d="M 0.1 0.5 0.9 0.5" />
                </svg>
            </button>

            <output>{counter}</output>

            <button ref={addRef} aria-label="Increase the counter by one" onClick={handleOnClickIncrement}>
                <svg aria-hidden="true" width="1em" height="1em" viewBox="0 0 1 1">
                    <path stroke="currentColor" strokeWidth="0.2" strokeLinecap="round" d="M 0.1 0.5 0.9 0.5 M 0.5 0.1 0.5 0.9" />
                </svg>
            </button>
        </div>
    );
}

export default Page;
