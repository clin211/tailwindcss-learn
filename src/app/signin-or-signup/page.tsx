'use client'
import React from 'react'
import styles from "./style.module.css"

const Page = () => {
    return (
        <div className={styles.main}>
            <h2 className={styles.h2}>Weekly Coding Challenge #1: Sign in/up Form</h2>
            <div className={styles['container']} id="container">
                <div className={styles['form-container sign-up-container']}>
                    <form action="#" className={styles.form}>
                        <h1>Create Account</h1>
                        <div className={styles['social-container']}>
                            <a href="#" className={[styles.a, styles['social']]}><i className={styles['fab fa-facebook-f']}></i></a>
                            <a href="#" className={[styles['social'], styles.a]}><i className={styles['fab fa-google-plus-g']}></i></a>
                            <a href="#" className={[styles['social'], styles.a]}><i className={styles['fab fa-linkedin-in']}></i></a>
                        </div>
                        <span className={styles.span}>or use your email for registration</span>
                        <input className={styles.input} type="text" placeholder="Name" />
                        <input className={styles.input} type="email" placeholder="Email" />
                        <input className={styles.input} type="password" placeholder="Password" />
                        <button>Sign Up</button>
                    </form>
                </div>
                <div className={styles['form-container sign-in-container']}>
                    <form action="#" className={styles.form}>
                        <h1>Sign in</h1>
                        <div className={styles['social-container']}>
                            <a href="#" className={[styles.a, styles['social']]}><i className={styles['fab fa-facebook-f']}></i></a>
                            <a href="#" className={[styles.a, styles['social']]}><i className={styles['fab fa-google-plus-g']}></i></a>
                            <a href="#" className={[styles.a, styles['social']]}><i className={styles['fab fa-linkedin-in']}></i></a>
                        </div>
                        <span>or use your account</span>
                        <input className={styles.input} type="email" placeholder="Email" />
                        <input className={styles.input} type="password" placeholder="Password" />
                        <a href="#" className={styles.a}>Forgot your password?</a>
                        <button>Sign In</button>
                    </form>
                </div>
                <div className={styles['overlay-container']}>
                    <div className={styles['overlay']}>
                        <div className={styles['overlay-panel overlay-left']}>
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button className={styles['ghost']} id="signIn">Sign In</button>
                        </div>
                        <div className={styles['overlay-panel overlay-right']}>
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button className={styles['ghost']} id="signUp">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>

            <footer className={styles.footer}>
                <p className={styles.p}>
                    Created with <i className={styles['fa fa-heart']}></i> by
                    <a className={styles.a} target="_blank" href="https://florin-pop.com">Florin Pop</a>
                    - Read how I created this and how you can join the challenge
                    <a className={styles.a} target="_blank" href="https://www.florin-pop.com/blog/2019/03/double-slider-sign-in-up-form/">here</a>.
                </p>
            </footer>
        </div>
    )
}

export default Page