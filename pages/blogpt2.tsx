import styles from '/styles/page2.module.css'
import Image from 'next/image'
import axios from 'axios';
import img from '/images/ha.png'
import Link from 'next/link'
import { GetServerSideProps } from 'next';
import { FaArrowLeft } from 'react-icons/fa';

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
    data: Post;
}
interface Props {
    posts: Post;
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
    const endpoint = `${process.env.STRAPI_URL}/blogs/${3}`;
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

export default function blog2 (props: Props) {
    const { posts } = props;
    return (
        <>
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
                    {/* {posts.map(post => (
                        <h1 key={post.id}>{post.attributes.Title}</h1>
                    ))}
                    {posts.map(post => (
                        <p key={post.id}>{post.attributes.Content}</p>
                    ))} */}
                    <h1>{posts.attributes.Title}</h1>
                    <p>{posts.attributes.Content}</p>
                </div>
            </div>
            {/* <FaArrowLeft className={styles.icons}></FaArrowLeft> */}
            <div className={styles.shapebottom}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 0L0 0 598.97 114.72 1200 0z" className={styles.shapefillbottom}></path>
                </svg>
            </div>
        </div>
        </>
    )
}