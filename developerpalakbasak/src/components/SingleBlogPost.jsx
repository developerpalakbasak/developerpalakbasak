import Link from 'next/link';
import React from 'react'

const SingleBlogPost = ({ post }) => {

    const truncateDescription = (text, maxWords = 50) => {
        const words = text.split(' ');
        if (words.length <= maxWords) {
            return text;
        }
        return words.slice(0, maxWords).join(' ') + '...';
    };

    return (
        <div className="w-full gap-3 flex my-5 flex-col justify-center">
            <h1 className="text-2xl">
                {post.title} {" - "} <span className="text-primary text-xl"> {post.subTitle}</span>
            </h1>
            <p className='text-xs text-gray-500'>
                {truncateDescription(post.description)}
            </p>

            <div className='text-base'>
                <span className='flex gap-10 justify-between border-b-2 border-gray-600 py-2 text-xs md:text-sm'>
                    <p>Created At: </p>
                    <p>{post.createdAt}</p>
                </span>
                <span className='flex gap-10 justify-between border-b-2 border-gray-600 py-2 text-xs md:text-sm'>
                    <p>Technologies</p>
                    <span className='flex gap-1'>{post.technologies.map((item, index) => (
                        <p key={item}>
                            {item}{index < post.technologies.length - 1 ? ',' : ''}
                        </p>
                    ))}
                    </span>
                </span>
            </div>

            <span className='flex justify-center items-center'>
                <Link
                    href="/projects"
                    className="px-3 py-2  border-primary border-2 rounded-full dark:text-primary text-black hover:text-white font-bold hover:bg-primary transition-colors text-xs sm:text-sm"
                >
                    See Post
                </Link>
            </span>
        </div>
    )
}

export default SingleBlogPost