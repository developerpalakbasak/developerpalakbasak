"use client";
import React from 'react';
import { GoDotFill } from "react-icons/go";
import SingleProject from './SingleProject';

/**
 * Projects Component
 * Orchestrates the display of professional and personal projects using a unified data array.
 */
const Projects = () => {
    // Project data repository: Includes freelance work and personal full-stack projects
    const projects = [
        {
            title: 'Hutchinson APAC',
            titleQute: 'Freelance — HR Management System',
            description: 'Built a full-featured internal HR management and employee tracking platform for Hutchinson APAC. The system includes employee onboarding, attendance tracking, leave management, payroll processing, and role-based access control — all in a clean, modern dashboard.',
            completionTime: 'Freelance Project',
            technologies: 'Next.js, Node.js, Express, MongoDB, Tailwind CSS, JWT',
            imageSrc: '/hutchinsonapac.webp',
            liveDemo: 'https://hutchinsonapac.com/',
            github: ''
        },
        {
            title: 'Templeton Trustees Ltd',
            titleQute: 'Freelance — HR Management System',
            description: 'Developed a comprehensive internal human resource management and tracking tool for Templeton Trustees Ltd. Features include employee directory, task assignment, performance tracking, reporting dashboards, and secure admin controls — enabling the company to manage their workforce digitally and efficiently.',
            completionTime: 'Freelance Project',
            technologies: 'Next.js, Node.js, Express, MongoDB, Tailwind CSS, JWT',
            imageSrc: '/templetontrusteesltd.webp',
            liveDemo: 'https://templetontrusteesltd.com',
            github: ''
        },
        {
            title: 'Web based cloud IDE',
            titleQute: 'Personal Project — MERN Stack',
            description: 'A browser-based cloud IDE supporting real-time collaborative coding with containerized execution environments. Users can write, run, and share code entirely in the browser with zero local setup.',
            completionTime: '3 Months',
            technologies: 'Next.js, Express, MongoDB, Node.js, Socket.io, Docker, Traefik',
            imageSrc: '/cloud-ide.webp',
            liveDemo: '',
            github: 'https://github.com/developerpalakbasak/cloud_ide_frontend'
        },
        {
            title: 'Social Media App',
            titleQute: 'Personal Project — MERN Stack',
            description: 'A full-stack social media platform with real-time feeds, follow/unfollow, likes, comments, and user profiles — built with the MERN stack and a responsive React frontend.',
            completionTime: '3 Months',
            technologies: 'React, Express, MongoDB, Node.js',
            imageSrc: '/social-media.webp',
            liveDemo: '',
            github: 'https://github.com/developerpalakbasak/social_media_frontend'
        },
        {
            title: 'Studio Landing Page',
            titleQute: 'Personal Project — Next.js Frontend',
            description: 'A cinematic, visually stunning landing page for a film production studio — designed with motion-inspired aesthetics, smooth scroll transitions, and a bold visual identity using Next.js and Tailwind CSS.',
            completionTime: '2 Days',
            technologies: 'Next.js, Tailwind CSS',
            imageSrc: '/studio.webp',
            liveDemo: 'https://stinkfilms.vercel.app/',
            github: 'https://github.com/developerpalakbasak/stinkfilms'
        },
        {
            title: 'E-commerce Website with Admin Panel',
            titleQute: 'Personal Project — Next.js Full Stack',
            description: 'A production-ready e-commerce platform with a full admin dashboard. Users can browse and purchase products; admins can manage inventory, orders, and users. Integrated with Google/GitHub OAuth via NextAuth and Cloudinary for image storage.',
            completionTime: '1 Month',
            technologies: 'Next.js, Tailwind CSS, MongoDB, NextAuth, Cloudinary',
            imageSrc: '/ecommerce.webp',
            liveDemo: 'https://pizzahut-pi.vercel.app/',
            github: 'https://github.com/developerpalakbasak/pizzahut'
        },
        {
            title: 'Personal Blog Website',
            titleQute: 'Personal Project — Next.js Full Stack',
            description: 'A dynamic personal blog platform with Markdown-based content creation, category filtering, and a clean reading experience — built with Next.js and MongoDB for persistent post storage.',
            completionTime: '7 Days',
            technologies: 'Next.js, Tailwind CSS, MongoDB',
            imageSrc: '/blog.webp',
            liveDemo: 'https://dev-blog-frontend-tailwind-test.vercel.app',
            github: 'https://github.com/developerpalakbasak/dev_blog_frontend_tailwind_test'
        },
    ];

    return (
        <div
            id='projects'
            className="w-full max-w-6xl lg:max-w-7xl xl:max-w-[1200px] 2xl:max-w-[1600px] mx-auto mt-5 py-5 2xl:py-10 p-6 2xl:p-12 bg-card border border-card-border rounded-xl sm:rounded-2xl lg:rounded-3xl 2xl:rounded-[2.5rem]"
        >
            {/* Section Header: Context for the project showcase */}
            <div className='flex flex-col items-center justify-center gap-3'>
                <p className='text-primary flex gap-0.5 justify-center items-center text-xs sm:text-sm md:text-base 2xl:text-xl'>
                    <GoDotFill /> Projects
                </p>
                <h3 className='text-lg sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-5xl font-bold'>
                    My Recent <span className='text-gradient'>Works</span>
                </h3>
            </div>

            {/* Project List: Iterates through project data and renders SingleProject components */}
            {projects.map((project, index) => (
                <SingleProject
                    key={index}
                    project={project}
                    index={index}
                    islast={projects.length - 1 === index}
                />
            ))}
        </div>
    );
};

export default Projects;