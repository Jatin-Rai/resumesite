import {
    FaReact,
    FaHtml5,
    FaCss3,
    FaJs,
    FaBootstrap,
    FaJava,
    FaGitAlt,
    FaAws,
} from 'react-icons/fa';
import { SiRedux, SiTailwindcss, SiNextdotjs } from 'react-icons/si';

import MUILogo from '../../assets/muilogo.png'

import { motion } from 'framer-motion';

const Skills = () => {
    const skills = [
        { skill: 'React', Icon: <FaReact className='text-cyan-500 text-5xl animate-spin-slow' /> },
        { skill: 'HTML', Icon: <FaHtml5 className='text-orange-500 text-5xl' /> },
        { skill: 'CSS', Icon: <FaCss3 className='text-blue-500 text-5xl' /> },
        { skill: 'JavaScript', Icon: <FaJs className='text-yellow-400 text-5xl' /> },
        { skill: 'Redux', Icon: <SiRedux className='text-purple-600 text-5xl' /> },
        { skill: 'Bootstrap', Icon: <FaBootstrap className='text-purple-500 text-5xl' /> },
        { skill: 'TailwindCSS', Icon: <SiTailwindcss className='text-cyan-500 text-5xl' /> },
        { skill: 'MaterialUI', Icon: <img src={MUILogo} width={50} className='text-blue-500 text-5xl' /> },
        { skill: 'NextJS', Icon: <SiNextdotjs className='text-5xl text-black dark:text-white' /> },
        { skill: 'Java', Icon: <FaJava className='text-blue-700 text-5xl dark:text-red-500' /> },
        { skill: 'Git', Icon: <FaGitAlt className='text-orange-600 text-5xl' /> },
        { skill: 'AWS', Icon: <FaAws className='text-orange-400 text-5xl' /> },
    ];

    return (
        <motion.section
            className='py-20 sm:py-14 px-10 sm:px-28 dark:bg-cyan-950 text-gray-600 dark:text-gray-300'

            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: "150%" }}
        >
            <h1 className='text-3xl py-10 font-semibold'>
                My <span className='text-red-500 dark:text-cyan-300 font-bold'>Skills</span>
            </h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5'>
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className='p-5 bg-gray-100 rounded-xl shadow hover:bg-white hover:shadow-xl flex flex-col items-center cursor-pointer dark:bg-cyan-900 dark:hover:bg-cyan-700'
                    >
                        {skill.Icon}
                        <span className='text-sm font-semibold mt-2'>
                            {skill.skill}
                        </span>
                    </div>
                ))}
            </div>
        </motion.section>
    );
};

export default Skills;
