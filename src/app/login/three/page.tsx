import React from 'react';
import '@/assets/styles/three.css';

function Page() {
    return (
        <section>
            {/* <!-- 背景颜色 --> */}
            <div className="color"></div>
            <div className="color"></div>
            <div className="color"></div>
            <div className="box">
                {/* <!-- 背景圆 --> */}
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                {/* <!-- 登录框 --> */}
                <div className="container">
                    <div className="form">
                        <h2>登录</h2>
                        <form>
                            <div className="inputBox">
                                <input type="text" placeholder="姓名" />
                            </div>
                            <div className="inputBox">
                                <input type="password" placeholder="密码" />
                            </div>
                            <div className="inputBox">
                                <input type="submit" value="登录" />
                            </div>
                            <p className="forget">
                                忘记密码?<a href="#">点击这里</a>
                            </p>
                            <p className="forget">
                                没有账户?<a href="#">注册</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Page;
