import styles from '/styles/page3.module.css'
import Image from 'next/image'
import img from '/images/perfil.png'
import Link from 'next/link'

export default function page3 () {
    return(
        <>
        <div className={styles.page}>
            <div className={styles.shapetop}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className={styles.shapefilltop}></path>
                </svg>
            </div>
            <nav className={styles.bar}>
                <Link href='/' className={styles.enlace}>#Home</Link>
                <Link href='/#aboutme' className={styles.enlace}>#About-me</Link>
                <Link href='/page3' className={styles.enlace}>#Portfolio</Link>
                <Link href='/#contact' className={styles.enlace}>#Contact</Link>
                <Link href='/page2' className={styles.enlace}>#Blog</Link>
            </nav>
            <div className={styles.contenedor}>
                <div className={styles.container}>
                    <Image src={img} alt="Imagen1" className={styles.itemp} />
                    <div className={styles.info} id='project1'>
                        <h2>Proyecto de asistencias en URL</h2>
                        <p id='project2'>Descripcion</p>
                    </div>
                </div>
                <div className={styles.container}>
                    <Image src={img} alt="Imagen1" className={styles.itemp} />
                    <div className={styles.info}>
                        <h2>Proyecto de alcancia</h2>
                        <p  id='project3'>Descripcion</p>
                    </div>
                </div>
                <div className={styles.container}>
                    <Image src={img} alt="Imagen1" className={styles.itemp} />
                    <div className={styles.info}>
                        <h2>Proyecto de Active Directory</h2>
                        <p>Descripcion</p>
                    </div>
                </div>
            </div>
            {/* <div className={styles.shapebottom}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className={styles.shapefillbottom}></path>
                </svg>
            </div> */}
        </div>
        </>
    )
}