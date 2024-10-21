import { motion } from "framer-motion"
import { PROJECTS } from "../constants"

const Project = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 ">
            <motion.h2 whileInView={{opacity:1, y:0}} initial={{opacity:0, y:-100}} transition={{duration:0.5}} className="my-20 text-center text-4xl">Projects</motion.h2>
            <div>
                {PROJECTS.map ((project, index)=>(
                   <div key={index} className="mb-8 flex flex-wrap lg:justify-center" >
                    <motion.div whileInView={{opacity:1, y:0}} initial={{opacity:0, y:-100}} transition={{duration:0.5}}  className="w-full lg:w-1/4">
                    <img src={project.gambar} width={150} height={150} className="mb-6 rounded-md"/>
                    </motion.div>
                    <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration:0.5}} className="w-full max-w-xl lg:w-3/4">
                    <h6 className="mb-2 font-semibold">{project.judul}</h6>
                    <p className="mb-4 text-neutral-400">{project.deskripsi}</p>
                        {project.teknologi.map ((tech, index)=>(
                            <span key = {index} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm text-blue-700">{tech}</span>
                        ))}
                    </motion.div>
                    <motion.a whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{duration:0.5}} className="mb-4 bg-gradient-to-r from-blue-600 via-slate-300 to-blue-300 bg-clip-text tracking-tight text-transparent mt-8 mx-2" href={project.visit}>Visit This Project</motion.a>
                   </div> 
                ))}
            </div>
        </div>
    )
}

export default Project