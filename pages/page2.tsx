import styles from '/styles/page2.module.css'
import Image from 'next/image'
import axios from 'axios';
import img from '/images/perfil.png'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';

interface Post {
    id: number;
    attributes: {
        Title: string;
        Content: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
    };
}

interface StrapiResponse {
    data: Post[];
}
interface Props {
    posts: Post[];
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
    const endpoint = `https://strapi-production-ff73.up.railway.app/api/blogs`;
    const response = await axios.get<StrapiResponse>(endpoint,{
        headers: {
            Authorization: `Bearer ${process.env.STRAPI_TOKEN}`
        }
    });
    const posts = response.data.data;
    return {
    props: {
        posts,
    },
    };
};

export default function page2 (props: Props) {
    const { posts } = props;
    return (
        <>
        {/* <section>
            <h1>Posts</h1>
            {posts.map(post => (
                <p key={post.id}>{post.attributes.Title}</p>
            ))}
        </section> */}
        <div className={styles.page}>
            <div className={styles.shapetop}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 0L0 0 598.97 114.72 1200 0z" className={styles.shapefilltop}></path>
                </svg>
            </div>
            <nav className={styles.bar}>
                <Link href='/' className={styles.enlace}>#Home</Link>
                <Link href='/#aboutme' className={styles.enlace}>#About-me</Link>
                <Link href='/page3' className={styles.enlace}>#Portfolio</Link>
                <Link href='/#contact' className={styles.enlace}>#Contact</Link>
                <Link href='/page2' className={styles.enlace}>#Blog</Link>
            </nav>
            <div className={styles.container}>
                <Image src={img} alt="Imagen1" className={styles.itemp} />
                <div className={styles.texto}>
                    {posts.map(post => (
                        <h1 key={post.id}>{post.attributes.Title}</h1>
                    ))}
                    {/* <h1>Titulo</h1> */}
                    {posts.map(post => (
                        <p key={post.id}>{post.attributes.Content}</p>
                    ))}
                    {/* <p>Descripcion</p> */}
                </div>
            </div>
            <div className={styles.container}>
                <Image src={img} alt="Imagen1" className={styles.itemp} />
                <div className={styles.texto}>
                    <h1>Titulos</h1>
                    <p>Descripcion</p>
                </div>
            </div>
            <div className={styles.shapebottom}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 0L0 0 598.97 114.72 1200 0z" className={styles.shapefillbottom}></path>
                </svg>
            </div>
        </div>
        </>
    )
}