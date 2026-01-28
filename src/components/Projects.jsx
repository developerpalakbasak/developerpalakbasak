"use client";
import React from 'react'
import { GoDotFill } from "react-icons/go";
import SingleProject from './SingleProject';
import { motion } from 'framer-motion';


const Projects = () => {



    const projects = [
        {
            title: 'Web based cloud IDE',
            titleQute: 'MERN Stack',
            description: 'With expertise in cutting-edge technologies such as MongoDB, Express, React, NodeJS, and NEXTJS ... I deliver web solutions that are both innovative and robust',
            completionTime: '3 Months',
            technologies: 'Nextjs, Expressjs, MongoDB, Node.js, socket.io, docker, traefik',
            imageSrc: 'https://res.cloudinary.com/palakbasak/image/upload/v1763635569/Screenshot_3_xn5muf.png',
            liveDemo: '',
            github: 'https://github.com/developerpalakbasak/cloud_ide_frontend'
        },
        {
            title: 'Social Media App',
            titleQute: 'MERN Stack',
            description: 'With expertise in cutting-edge technologies such as MongoDB, Express, React, NodeJS, and NEXTJS ... I deliver web solutions that are both innovative and robust',
            completionTime: '3 Months',
            technologies: 'React, Expressjs, MongoDB, Node.js',
            imageSrc: 'https://res.cloudinary.com/palakbasak/image/upload/v1763634943/Screenshot_1_tpb8oc.png',
            liveDemo: '',
            github: 'https://github.com/developerpalakbasak/social_media_frontend'
        },
        {
            title: 'Studio Landing Page',
            titleQute: 'NEXTJS Frontend',
            description: 'Created a beautiful landing page for film website using NextJS and Tailwind CSS. With expertise in cutting-edge technologies such as MongoDB, Express, React, NodeJS, and NEXTJS ... I deliver web solutions that are both innovative and robust',
            completionTime: '2 Days',
            technologies: 'Next, Tailwind,',
            imageSrc: 'https://res.cloudinary.com/palakbasak/image/upload/v1763635150/Screenshot_3_booxrk_jxnd2x.png',
            liveDemo: 'https://stinkfilms.vercel.app/',
            github: 'https://github.com/developerpalakbasak/stinkfilms'
        },
        {
            title: 'E-commerce Website with Admin Panel ',
            titleQute: 'NEXTJS Full Stack',
            description: 'Created a full-stack e-commerce website with an admin panel using NextJS, Tailwind, MongoDB, NextAuth, Cloudinary. Here user can buy products and admin can manage products, orders, and users. All the data is stored in MongoDB Atlas and images are stored in Cloudinary. With Sign in and Sign up functionality using NextAuth. Currently added Sign in with Google and GitHub.',
            completionTime: '1 Month',
            technologies: 'NextJS, Tailwind, MongoDB, NextAuth, Cloudinary',
            imageSrc: 'https://res.cloudinary.com/palakbasak/image/upload/v1763635159/pizza_b0ke8x.png',
            liveDemo: 'https://pizzahut-pi.vercel.app/',
            github: 'https://github.com/developerpalakbasak/pizzahut'
        },
        {
            title: 'Personal Blog Website',
            titleQute: 'NEXTJS Full Stack',
            description: 'With expertise in cutting-edge technologies such as MongoDB, Express, React, NodeJS, and NEXTJS ... I deliver web solutions that are both innovative and robust',
            completionTime: '7 Days',
            technologies: 'Next, Tailwind, MongoDB',
            imageSrc: 'https://res.cloudinary.com/palakbasak/image/upload/v1763635178/Screenshot_1_bbnedz.png',
            liveDemo: 'https://dev-blog-frontend-tailwind-test.vercel.app',
            github: 'https://github.com/developerpalakbasak/dev_blog_frontend_tailwind_test'
        },
    ];





    return (
        <div
        id='projects'
            className="max-w-6xl mx-auto mt-5 py-5 p-6 bg-section rounded">


            <div className='flex flex-col items-center justify-center gap-3'>
                <p
                    // initial={{ y: 100, opacity: 0 }}
                    // whileInView={{ y: 0, opacity: 1 }}
                    // transition={{ duration: 0.25 }}
                    // viewport={{ once: true }} 
                    className='text-primary flex gap-0.5 justify-center items-center'
                >
                    <GoDotFill /> Projects
                </p>
                <h3
                    // initial={{ y: 100, opacity: 0 }}
                    // whileInView={{ y: 0, opacity: 1 }}
                    // transition={{ duration: 0.35 }}
                    // viewport={{ once: true, amount: 0.3 }}
                    className='text-3xl'>
                    My Recent{" "}
                    <span className='text-slate-500'>
                        Works
                    </span>
                </h3>
            </div>





            {projects.map((project, index) => (



                <SingleProject key={index} project={project} index={index} islast={projects.length - 1 == index} />


            ))}

            <span
                // initial={{ y: 100, opacity: 0 }}
                // whileInView={{ y: 0, opacity: 1 }}
                // transition={{ duration: 0.5 }}
                // viewport={{ once: true, amount: 0.3 }}
                className='flex justify-center items-center'
            >



            </span>
        </div>
    )
}

export default Projects