import React from "react"
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import img1 from '../assets/react.svg';
import img2 from '../assets/tailwindcss-color.svg';
import img3 from '../assets/nodedotjs-color.svg';
import img4 from '../assets/express-color.svg';
import img5 from '../assets/javascript-color.svg';
import img6 from '../assets/html5-color.svg';
import img7 from '../assets/css3-color.svg';
import img8 from '../assets/python-color.svg';
import img9 from '../assets/cplusplus-color.svg';
import img10 from '../assets/c-color.svg';
import img11 from '../assets/vite.svg';


const Skills = () => {
    return (
        <div id="Skills" className="p-20 flex flex-col items-center justify-center">
            <h1 data-aos = "fade-down" className="text-[60px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500">Skills</h1>
            <div data-aos = "fade-left"className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 justify-around gap-28">
                <div className="flex flex-col items-center">
                <img src={img1} alt="react icon" className="h-24 w-24"/>
                <h2 className="text-white font-bold lg:text-[24px]">Reactjs</h2>
                </div>
                <div className="flex flex-col items-center">
                <img src={img2} alt="tailwindcss icon" className="h-24 w-24"/>
                <h2 className="text-white font-bold lg:text-[24px]">TailwindCSS</h2>
                </div>
                <div className="flex flex-col items-center">
                <img src={img3} alt="nodedotjs icon" className="h-24 w-24"/>
                <h2 className="text-white font-bold lg:text-[24px]">Nodejs</h2>
                </div>
                <div className="flex flex-col items-center">
                <img src={img4} alt="express icon" className="h-24 w-24"/>
                <h2 className="text-white font-bold lg:text-[24px]">Expressjs</h2>
                </div>
                <div className="flex flex-col items-center">
                <img src={img5} alt="javascript icon" className="h-24 w-24"/>
                <h2 className="text-white font-bold lg:text-[24px]">Javascript</h2>
                </div>
                <div className="flex flex-col items-center">
                <img src={img6} alt="html5 icon" className="h-24 w-24"/>
                <h2 className="text-white font-bold lg:text-[24px]">Html5</h2>
                </div>
                <div className="flex flex-col items-center">
                <img src={img7} alt="css3 icon" className="h-24 w-24"/>
                <h2 className="text-white font-bold lg:text-[24px]">CSS3</h2>
                </div>
                <div className="flex flex-col items-center">
                <img src={img8} alt="python icon" className="h-24 w-24"/>
                <h2 className="text-white font-bold lg:text-[24px]">Python</h2>
                </div>
                <div className="flex flex-col items-center">
                <img src={img9} alt="cplusplus icon" className="h-24 w-24"/>
                <h2 className="text-white font-bold lg:text-[24px]">C++</h2>
                </div>
                <div className="flex flex-col items-center">
                <img src={img10} alt="c icon" className="h-24 w-24"/>
                <h2 className="text-white font-bold lg:text-[24px]">C</h2>
                </div>
                <div className="flex flex-col items-center">
                <img src={img11} alt="vite icon" className="h-24 w-24"/>
                <h2 className="text-white font-bold lg:text-[24px]">Vite</h2>
                </div>
            </div>
        </div>
    )
}

export default Skills;