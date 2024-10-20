
import { RiReactjsLine } from "react-icons/ri"
import { TbBrandNextjs } from "react-icons/tb"
import { FaNodeJs } from "react-icons/fa"
import { SiTailwindcss } from "react-icons/si"
import { SiVite } from "react-icons/si"
import { motion } from 'framer-motion'

const iconVariants = (duration) =>({
    initial: {y: -10},
    animate:{
        y:[10, -10],
        transition:{
            duration:duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})


const Technology = () =>{
    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h1 whileInView={{opacity:1, y:0}} initial={{opacity:1, y:-100}} transition={{duration:0.5}} className="my-20 text-center text-4xl">Technologies</motion.h1>
            <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1}} className="flex flex-wrap items-center justify-center gap-4 ">
                <motion.div  variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 ">
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </motion.div>
                <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 ">
                    <SiVite className="text-7xl text-purple-400" />
                </motion.div>
                <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 ">
                    <TbBrandNextjs className="text-7xl text-neutral-50" />
                </motion.div>
                <motion.div variants={iconVariants(6)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 ">
                    <FaNodeJs className="text-7xl text-green-600" />
                </motion.div>
                <motion.div variants={iconVariants(4)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 ">
                    <SiTailwindcss className="text-7xl text-blue-400" />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Technology