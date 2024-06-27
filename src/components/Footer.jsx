import React from "react"
import { AiFillGithub } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaAutoprefixer } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-slate-800 text-white lg:px-48 px-4 py-20">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
                <div className="mb-4 md:mb-0">
                    <span className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase">
                        <FaAutoprefixer className="h-9 w-9"/>
                    </span>
                    <p className="text-[16px] my-4">“Only those who will risk going too far can possibly find out how far one can go.”<br /><br />
                    – T.S.Elliot</p>
                    </div>
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase">Contact</h2>
                        <p className="text-[16px] my-4">Email: anujnayak108@gmail.com</p>
                    </div>
                    <div>
                    <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase">Follow Me</h2>
                    <div className="flex space-x-4 ">
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
        </footer>
    )
}

export default Footer;