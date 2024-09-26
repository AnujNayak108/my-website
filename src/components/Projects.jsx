import React from "react"
import img1 from '../assets/project1.png'
import img2 from '../assets/project2.png'
const Projects = () => {
    return (
        <div id="Projects" className="p-20 flex flex-col items-center justify-center text-white w-screen overflow-x-hidden">
            <h1 data-aos = "fade-down" className="text-[60px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500">Projects</h1>
            <div className="flex flex-col lg:justify-start lg:items-start justify-center items-center">
                <h1 className="text-3xl">Personal website</h1>
                <div className="lg:w-[50%] mt-8 flex lg:flex-row flex-col lg:justify-start lg:items-start justify-center items-center lg:gap-12">
                    <a href="https://anujnayak108.github.io/my-website/">
                    <img src={img2} alt="" />
                    </a>
                    <div>
                        description
                    </div>
                    
                </div>
            </div>
            <div className="mt-12 flex flex-col lg:justify-start lg:items-start justify-center items-center">
                <h1 className="text-3xl ">EDC BIT Mesra</h1>
                <div className="lg:w-[50%] mt-8 flex lg:flex-row flex-col lg:justify-start lg:items-start justify-center items-center lg:gap-12">
                    <a href="https://www.edcbitmesra.in/">
                    <img src={img1} alt="" />
                    </a>
                    <div>
                        description
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;