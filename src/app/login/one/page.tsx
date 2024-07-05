import React from 'react';

function One() {
    return (
        <div className="h-svh w-svw bg-[linear-gradient(to_right,_#fbc2eb,_#a6c1ee)]">
            <div className="bg-white w-[358px] rounded-[15px] px-[50px] relative left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="text-[38px] weight-[700] text-center leading-[60px]">
                    Login
                </div>
                <div className="w-full">
                    <input
                        type="text"
                        name="username"
                        placeholder="username"
                        className="w-full block mb-[20px] rounded-none p-[10px] border-b border-solid border-[rgb(128, 125, 125)] text-[15px] outline-none placeholder:uppercase"
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="password"
                        className="w-full block mb-[20px] rounded-none p-[10px] border-b border-solid border-[rgb(128, 125, 125)] text-[15px] outline-none placeholder:uppercase"
                    />
                    <p className="text-[#abc1ee] text-right">
                        forget password?
                    </p>
                    <button className="w-full text-center p-[10px] mt-[40px] bg-[linear-gradient(to_right,_#a6c1ee,_#fbc2eb)] text-white rounded-md">
                        Login
                    </button>
                </div>
                <div className="center leading-[88px]">
                    Don&apos;t have account?
                    <a href="#" className="decoration-none text-[#abc1ee]">
                        Sign up
                    </a>
                </div>
            </div>
        </div>
    );
}

export default One;
