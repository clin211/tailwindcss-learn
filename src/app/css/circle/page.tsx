import React from "react";

const Page = () => {
    return (
        <div className='font-sans'>
            <div className="px-7 pt-7 pb-2.5 max-w-[760px] mr-auto ml-auto clearfix">
                <div className="bg-no-repeat bg-[url(https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg)] w-60 h-60 rounded-full float-left shape-outside m-7"></div>
                <h1 className='mb-0'>Atom</h1>
                <h2 className='mt-2.5 font-normal leading-tight'>A hackable text editor for the 21st Century</h2>
                <p className='leading-normal'>
                    Atom is a text editor that&apos;s modern, approachable, yet
                    hackable to the core—a tool you can customize to do anything
                    but also use productively without ever touching a config
                    file.
                </p>
                <p className='leading-normal'>
                    <strong>Cross-platform editing</strong> Atom works across
                    operating systems. You can use it on OS X, Windows, or
                    Linux.
                </p>
                <p className='leading-normal'>
                    <strong>Built-in package manager</strong> Search for and
                    install new packages or start creating your own—all from
                    within Atom.
                </p>
            </div>

            <div className="w-[500px]">
                <div className="w-2/5 h-[12ex] bg-lime-300 float-start [shape-outside:polygon(0%_0%,100%_100%,0%_100%)] [clip-path:polygon(0%_0%,100%_100%,0%_100%)]"></div>
                <div className="w-2/5 h-[12ex] bg-lime-300 float-end [shape-outside:polygon(100%_0%,100%_100%,0%_100%)] [clip-path:polygon(100%_0%,100%_100%,0%_100%)]"></div>
                <p className='text-center'>
                    Sometimes a web page's text content appears to be funneling your attention
                    towards a spot on the page to drive you to follow a particular link.
                    Sometimes you don't notice.
                </p>
            </div>

        </div>
    );
};

export default Page;
