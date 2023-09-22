import Pic from '../../assets/home.png';
import CV from "../../assets/jatin-rai-cv.pdf"

import ReactTyped from 'react-typed';

import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

import { motion } from 'framer-motion';

const About = () => {
    return (
        <motion.section
            className="flex flex-col-reverse sm:flex-row gap-20 py-28 sm:py-14 px-10 sm:px-28 dark:bg-cyan-950 text-gray-600 dark:text-gray-300"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: "150%" }}
        >
            <div className="flex flex-col sm:w-1/2 justify-center gap-8">
                <h1 className="flex flex-col pt-5 gap-4 text-3xl sm:text-4xl font-semibold">
                    Hi,{" "}
                    <span>
                        I&apos;m
                        <span className='text-red-500 dark:text-cyan-300'> Jatin </span>Rai
                    </span>
                </h1>
                <div className="text-red-600 dark:text-cyan-300 text-2xl sm:text-4xl font-bold">
                    <h3>
                        <ReactTyped
                            strings={["Software Engineer", "Frontend Developer", "Techie"]}
                            typeSpeed={100}
                            backSpeed={20}
                            loop
                            showCursor
                        />
                    </h3>
                </div>
                <p className='text-sm sm:text-base'>
                    Experienced and creative professional in frontend development with over one year of hands-on experience. Skilled in building engaging user interfaces, problem-solving, feature implementation, and successful deployment.
                </p>
                <div className='py-2 animate-bounce'>
                    <a
                        className='border-2 border-red-600 dark:border-cyan-300 rounded-full py-2 px-6 text-red-600 dark:text-cyan-300 shadow-md hover:bg-red-600 dark:hover:bg-cyan-300 hover:text-white dark:hover:text-white hover:shadow-xl'
                        href={CV}
                        target='_blank'
                        rel="noreferrer"
                    >
                        View CV
                    </a>
                </div>
                <div className="flex gap-4">
                    <a href="https://www.linkedin.com/in/jatinrai96/" target='_blank' rel="noreferrer">
                        <FaLinkedin className="text-blue-800 text-3xl hover:animate-spin" />
                    </a>
                    <a href="https://github.com/Jatin-Rai" target='_blank' rel="noreferrer">
                        <FaGithub className="text-3xl hover:animate-spin" />
                    </a>
                    <a href="https://www.instagram.com/jatin.j.rai/" target='_blank' rel="noreferrer">
                        <FaInstagram className="text-pink-600 text-3xl hover:animate-spin" />
                    </a>
                </div>
            </div>
            <div className="flex items-center cursor-pointer sm:w-1/2">
                <img src={Pic} alt="Jatin Rai" width={550} className='dark:filter dark:grayscale dark:brightness-150' />
            </div>
        </motion.section>
    );
};

export default About;
