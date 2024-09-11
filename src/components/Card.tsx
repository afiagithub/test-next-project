import Image from "next/image";
import Link from "next/link";
import React from "react";

interface PostType {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

const Card = ({ data }: {data: PostType}) => {
    
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <Image src={data.url} alt="Shoes" width={400} height={400} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>{data.title}</p>
                <div className="card-actions justify-end">
                    <Link className="btn btn-primary" href={`/posts/${data.id}`}>
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Card;
