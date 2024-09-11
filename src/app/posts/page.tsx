'use client'
import Card from '@/components/Card'
import React, { useEffect, useState } from 'react'


const Post = () => {
    interface PostType {
        albumId: number;
        id: number;
        title: string;
        url: string;
        thumbnailUrl: string;
    }

    const [posts, setPosts] = useState([])

    const data = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/photos')
        const data = await res.json()
        setPosts(data)
    }
    useEffect(() => {
        data()
    }, [])
    return (
        <div>
            {posts.length}
            <div className='grid grid-cols-3 gap-5'>
                {
                    posts.slice(0, 5).map((post: PostType) => <Card key={post.id} data={post}></Card>)
                }
            </div>
        </div>
    )
}

export default Post
