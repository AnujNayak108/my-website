import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import img from '../assets/anuj1.png'
import AOS from "aos";
import "aos/dist/aos.css";


const About = () => {
    AOS.init(
        {
            easing: 'ease-out-quart',
            delay: 5,
            duration: 750
        }
    )
    return (
        <div data-aos = "fade-up" id = "About" className="lg:px-56 lg:py-0 p-20 text-center gap-5 flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center w-screen overflow-x-hidden">
            <img data-aos = "fade-right" src={img} width={270} height={270} className="rounded border-2 lg:p-1 border-fuchsia-500 img_glow mt-28" alt="" />
            <div className="h-full lg:py-40 flex flex-col justify-center items-center text-white">
                <h1 data-aos = "fade-down" className="text-[54px] font-semibold mb-8 leading-normal uppercase text-fuchsia-500">About me</h1>
                <p>Hi, I'm Anuj Nayak, a second-year Mathematics and Computing student at <span className="uppercase text-fuchsia-500">BIRLA Institute of Technology , mesra</span>. With a strong foundation in mathematics and a keen interest in computing, I am passionate about solving complex problems and developing innovative solutions.</p>
            </div>
        </div>
    )
}

export default About;