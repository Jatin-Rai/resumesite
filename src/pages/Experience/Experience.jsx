import React from 'react';

import { motion } from 'framer-motion';

const Experience = () => {

    const ListItem = ({ title, date, company }) => (
        <li className="flex flex-col my-8 sm:mb-10">
            <div className={`absolute w-4 h-4 bg-white border-4 border-red-500 dark:border-cyan-300 rounded-full -left-[0.6rem]`}></div>
            <p className="font-bold text-base sm:text-lg mb-1 text-red-500 dark:text-cyan-300">{title}</p>
            <p className="italic text-sm mb-2">{date}</p>
            <p className="text-sm sm:text-base">{company}</p>
        </li>
    );


    return (
        <motion.section
            className="w-full h-screen sm:px-16 py-28 sm:py-10 dark:bg-cyan-950 dark:text-white"

            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: "150%" }}
        >
            <div className='flex flex-col sm:flex-row px-12 sm:gap-40 text-gray-600 dark:text-gray-300'>
                <h1 className="flex gap-2 text-3xl font-semibold mt-2 sm:pt-12">
                    My <span className="text-red-500 dark:text-cyan-300 font-bold">Experiences</span>
                </h1>
                <div className="w-full sm:w-4/5 sm:py-8">
                    <ol className="relative border-l-4 border-red-500 dark:border-cyan-300 pl-6">
                        <ListItem
                            title="Software Engineer"
                            date="(May 2022 - Present)"
                            company="Capgemini Technology Services India Limited"
                        />
                        <ListItem
                            title="React Developer"
                            date="(Jan 2022 - May 2022)"
                            company="Shivila Technologies Pvt. Ltd."
                        />
                         <ListItem
                            title="Web Developer"
                            date="(Feb 2021 - May 2021)"
                            company="Shadowfax Technologies Pvt. Ltd."
                        />
                        <ListItem
                            title="Computer Engineer Intern"
                            date="(Oct 2020 - Feb 2021)"
                            company="Aizawl Smart City Limited"
                        />
                    </ol>
                </div>
            </div>
        </motion.section>
    );
}

export default Experience;
