import React from "react"
import { AiFillGithub } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import img from '../assets/anuj1.png';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const Banner = () => {
    useEffect(() => {
    AOS.init(
        {
            easing: 'ease-out-quart',
            delay: 5,
            duration: 750
        }
    )
},[])
    return (
        <div className="pt-20 px-2 w-screen overflow-x-hidden">
            <h1 className="text-[54px] font-semibold mb-4 leading-loading uppercase text-center text-white mt-2">welcome to <span className="text-fuchsia-500">my website</span></h1>
        <div data-aos = "fade-up" id="Home" className="lg:px-56 px-2 lg:py-0 text-center gap-5 flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center ">
            <div className="h-full lg:py-20 px-2 flex flex-col justify-center items-center text-white text-center">
                <h2 className="text-[46px] font-semibold mb-2 leading-loading uppercase text-fuchsia-600">Anuj nayak</h2>
                <p className="">Aspiring Engineer | Innovator | Problem Solver</p>
                <p className="mt-2">Explore my projects, skills, and experiences as I journey through the world of engineering. Dive into my portfolio to see how I apply my passion for technology and innovation to real-world challenges. Let's build the future together!</p>
                <div className="flex mt-8 gap-2">
                    <div className="flex items-center justify-center">
                        <div className="flex space-x-2">
                            <a href="https://github.com/AnujNayak108" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
                                <AiFillGithub className = "text-[28px]"/>
                            </a>
                            <a href="https://www.linkedin.com/in/anuj-nayak-189a83233/" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
                                <FaLinkedin className = "text-[28px]"/>
                            </a>
                            <a href="https://x.com/AnujNay30883866" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
                                <AiFillTwitterCircle className = "text-[28px]"/>
                            </a>
                            <a href="https://www.instagram.com/__anuj__nayak/" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
                                <FaInstagram className = "text-[28px]"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <img data-aos = "fade-right" src={img} width={200} height={200} className="rounded-full border-2 lg:p-1 border-fuchsia-500 img_glow" alt="" />
        </div>
        </div>
    )
}

export default Banner;