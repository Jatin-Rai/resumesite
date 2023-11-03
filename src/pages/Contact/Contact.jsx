import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { MdLocationPin, MdEmail, MdClose } from 'react-icons/md';
import { FaPhoneAlt, FaThumbsUp } from 'react-icons/fa';
import { Footer } from '../../components';

import { motion } from 'framer-motion';

const Contact = () => {
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [sentSuccess, setSentSuccess] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const serviceId = 'service_t6ii9vc';
        const templateId = 'template_6zajomq';
        const publicKey = 'hOBp26MY2BfZ2DwR5';

        const templateParams = {
            from_name: fullname,
            from_email: email,
            to_name: "Jatin",
            message: message,
        };

        await emailjs
            .send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log(response);
                setSentSuccess("Message Sent!");
                setFullname('');
                setEmail('');
                setMessage('');
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const closeMessage = () => {
        setSentSuccess('');
    };

    return (
        <motion.section
            className="flex flex-col justify-center items-center px-10 sm:px-28 py-20 sm:py-16 dark:bg-cyan-950 text-gray-600 dark:text-gray-300"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: "150%" }}
        >
            <div className="grid md:grid-cols-2 w-full sm:pb-0">
                <div className="w-full">
                    <h1 className="text-4xl mt-8 md:text-6xl font-bold">
                        Get <span className='text-red-500 dark:text-cyan-300'>in touch</span>
                    </h1>
                    <p className="pt-2 pb-4 text-gray-400">
                        Fill in the form to start a conversation
                    </p>
                    <div className="space-y-4">
                        <p className="flex items-center gap-4">
                            <MdLocationPin className="text-2xl text-red-600" />
                            <span>Kolkata, India</span>
                        </p>
                        <p className="flex items-center gap-4">
                            <FaPhoneAlt className="text-xl text-green-500" />
                            <span>+91 7005616900</span>
                        </p>
                        <p className="flex items-center gap-4">
                            <MdEmail className="text-2xl text-yellow-500" />
                            <a
                                href="mailto:jatinrai258@gmail.com"
                                className="italic text-blue-500 dark:text-blue-400 underline underline-offset-4"
                            >
                                jatinrai258@gmail.com
                            </a>
                        </p>
                    </div>
                </div>
                <form
                    noValidate
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-6 mt-16 w-full md:w-96"
                >
                    <input
                        type="text"
                        placeholder="Fullname"
                        className="w-full p-4 rounded-full shadow focus:outline-red-500 outline outline-gray-300 capitalize dark:bg-cyan-900 dark:focus:outline-cyan-300"
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-4 rounded-full shadow focus:outline-red-500 outline outline-gray-300 dark:bg-cyan-900 dark:focus:outline-cyan-300"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <textarea
                        rows="4"
                        placeholder="Message"
                        className="w-full p-4 rounded-lg shadow resize-none focus:outline-red-500 outline outline-gray-300 dark:bg-cyan-900 dark:focus:outline-cyan-300"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                    {sentSuccess && (
                        <div className="sm:absolute sm:w-96 sm:top-12 sm:right-56 px-10 py-3 bg-green-400 text-white flex gap-4 justify-between rounded-full transform translate-x-0">
                            <div className="flex gap-4 items-center">
                                <FaThumbsUp className="text-xl" />
                                <p>Message Sent!</p>
                            </div>
                            <button
                                onClick={closeMessage}
                                className="text-green-100 hover:text-white"
                            >
                                <MdClose className="text-2xl" />
                            </button>
                        </div>
                    )}
                    <button
                        type="submit"
                        className="p-2 border border-red-500 rounded-full text-red-500 hover:bg-red-500 hover:text-white shadow hover:shadow-lg dark:hover:bg-cyan-300 dark:border-cyan-300 dark:text-cyan-300 dark:hover:text-white overflow-hidden"
                    >
                        Submit
                    </button>
                </form>
            </div>
            <Footer />
        </motion.section>
    );
};

export default Contact;
