import React from 'react'

const page = async ({ params }: { params: { id: string } }) => {
    let data;
    try {
        const res = await fetch(
            `https://jsonplaceholder.typicode.com/photos/${params.id}`
            // {
            //     cache: "no-store",
            // }
        )
        data = await res.json()
    } catch (error: any) {
        throw new Error(error);
    }

    return (
        <div>
            <p>Id: {data.albumId}</p>
            <p>Body: {data.title}</p>
        </div>
    )
}

export default page
