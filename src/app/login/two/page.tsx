import React from 'react';
import {
    FaGithub,
    FaGoogle,
    FaFacebookF,
    FaSquareXTwitter,
} from 'react-icons/fa6';

function Page() {
    return (
        <main className="w-full h-screen bg-[url(https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_1280.jpg)] bg-no-repeat bg-cover flex justify-center items-center">
            <div className="w-1/5 min-w-[300px] bg-[#00000060] m-auto mt-40 text-center rounded-xl py-12  px-12">
                <h2 className="text-white/90 mt-[5%]">LOGIN</h2>
                <div className="mt-[5%]">
                    <input
                        className="w-3/5 min-w-[197px] text-[15px] text-white bg-transparent border-b-2 border-solid border-white px-2.5 py-1.25 outline-none mt-2.5 placeholder:text-[12px]"
                        type="text"
                        placeholder="请输入用户名"
                    />
                </div>
                <div className="mt-[5%]">
                    <input
                        className="w-3/5 min-w-[197px] text-[15px] text-white bg-transparent border-b-2 border-solid border-white px-2.5 py-1.25 outline-none mt-2.5 placeholder:text-[12px]"
                        type="password"
                        placeholder="请输入密码"
                    />
                </div>
                <p className="text-gray-400 mt-[5%] text-right">忘记密码?</p>
                <button className="mt-12 min-w-[197px] w-3/5 h-8 rounded-sm text-[#fff] text-center text-[0.94rem] leading-5 bg-[linear-gradient(to_right,_#30cfd0,_#330867)] focus-within:bg-[linear-gradient(to_right,_#30cfd070,_#33086770)]">
                    登录
                </button>
                <p className="text-[#abc1ee] mt-2 flex select-none">
                    没有账号?
                    <a href="#" className="ms-2 decoration-none text-[#30cfd0]">
                        立即注册
                    </a>
                    <p className="mx-2">或者</p>
                </p>

                {/* 三方服务 */}
                <div className="w-3/5 min-w-[197px] flex justify-between text-white pt-4">
                    <FaGithub size={24} className="cursor-pointer" />
                    <FaGoogle size={24} className="cursor-pointer" />
                    <FaFacebookF size={24} className="cursor-pointer" />
                    <FaSquareXTwitter size={24} className="cursor-pointer" />
                </div>
            </div>
        </main>
    );
}

export default Page;
