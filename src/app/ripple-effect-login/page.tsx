import React from 'react';
import Image from 'next/image';
import waves from '@/assets/images/waves.svg';

function RippleEffectLogin() {
    return (
        <div className="header">
            <div className="h-[75vh] w-full m-0 pt-[120px] box-border">
                <div className="p-5 rounded-lg shadow-lg w-[300px] mx-auto text-center">
                    <h2>登录</h2>
                    <form id="loginForm">
                        <div className="mb-4 text-left">
                            <label htmlFor="username" className="block mb-1">
                                用户名:
                            </label>
                            <input
                                className="w-full p-2 box-border rounded-full"
                                type="text"
                                id="username"
                                name="username"
                                required
                            />
                        </div>
                        <div className="mb-4 text-left">
                            <label htmlFor="password" className="block mb-1">
                                密码:
                            </label>
                            <input
                                className="w-full p-2 box-border rounded-full"
                                type="password"
                                id="password"
                                name="password"
                                required
                            />
                        </div>
                        <p className="text-right text-gray-300 mb-5">
                            forget password?
                        </p>
                        <button
                            type="submit"
                            className="w-24 p-2.5 bg-orange-500 text-white border-none rounded-full cursor-pointer text-base hover:bg-orange-800">
                            登录
                        </button>
                    </form>
                    <p id="error-message" className="text-red-500 mt-2.5"></p>
                </div>
            </div>

            <Image className="w-full h-[15vh]" src={waves} alt="waves" />
        </div>
    );
}

export default RippleEffectLogin;
