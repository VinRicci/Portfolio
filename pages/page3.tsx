import styles from '/styles/page3.module.css'
import Image from 'next/image'
import Link from 'next/link'
import docencia from '/images/docencia.png'
import ad from '/images/AD.jpg'
import alcancia from 'images/alcancia.png'

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
                    {/* <Image src={docencia} alt="Imagen1" className={styles.itemp} width={500} height={500} /> */}
                    <div className={styles.itemp}></div>
                    <div className={styles.info} id='project1' >
                        <h2>Proyecto de asistencias en URL</h2>
                        <p id='project2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus ex eveniet aspernatur commodi consequuntur corporis cupiditate veniam eligendi, inventore dolorum praesentium! Ea sint placeat delectus repellendus, illo nobis laborum nemo!</p>
                    </div>
                </div>
                <div className={styles.container}>
                    <Image src={alcancia} alt="Imagen1" className={styles.itemp} width={500} height={500} />
                    <div className={styles.info}>
                        <h2>Proyecto de alcancia</h2>
                        <p  id='project3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quas dolor a, magnam cum error voluptas autem ut perspiciatis dolores odit excepturi architecto libero quo nostrum, est totam eaque? Iusto.</p>
                    </div>
                </div>
                <div className={styles.container}>
                    <Image src={ad} alt="Imagen1" className={styles.itemp} width={500} height={500} />
                    <div className={styles.info}>
                        <h2>Proyecto de Active Directory</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi tempora eius maxime aperiam pariatur quidem, ad recusandae, expedita ipsam, assumenda quo culpa doloribus totam tenetur omnis sit optio praesentium sed?</p>
                    </div>
                </div>
            </div>
            <div className={styles.shapebottom}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className={styles.shapefillbottom}></path>
                </svg>
            </div>
        </div>
        
        </>
    )
}