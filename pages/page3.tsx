import styles from '/styles/page3.module.css'
import Image from 'next/image'
import Link from 'next/link'
import docencia from '/images/docencia.png'
import ad from '/images/AD.jpg'
import alcancia from 'images/alcancia.png'
import img from '/images/perfil.png'

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
                    {/* <Link href='https://github.com/AsistenciaURL/docencia-api-v2'><Image src={img} alt="Imagen1" className={styles.itemp} width={500} height={500} /></Link> */}
                    {/* <a href='https://github.com/AsistenciaURL/docencia-api-v2'><Image src={img} alt="Imagen1" className={styles.itemp} width={500} height={500} /></a> */}
                    <Image src={img} alt="Imagen1" className={styles.itemp} width={500} height={500} />
                    <div className={styles.info} id='project1' >
                        <h2>Proyecto de asistencias en URL</h2>
                        <p id='project2'>El proyecto de asistencias fue realizado para el curso de Administración de proyectos 
                        de sistemas, el cual era un programa diseñado para la toma de asistencias, la finalidad era automatizar 
                        la forma en la que se tomaban las asistencias, haciendo algo más rápido, intuitivo y que no se pudiera falsificar 
                        la asistencia de dicho día. Para esto se realizó un código QR que expiraba y una aplicación para móvil. Yo estuve 
                        trabajando en el Backend de la aplicación, el cual fue desarrollado en Prisma.</p>
                    </div>
                </div>
                <div className={styles.container}>
                    {/* <Link href='https://github.com/AlcanciaURL/alcancia-api'><Image src={img} alt="Imagen1" className={styles.itemp} width={500} height={500} /></Link> */}
                    <Image src={img} alt="Imagen1" className={styles.itemp} width={500} height={500} />
                    <div className={styles.info}>
                        <h2>Proyecto de alcancia</h2>
                        <p  id='project3'>Es un proyecto para el curso de Ingeniería de software 2, el cual busca erradicar la problemática 
                        que existe alrededor de los gastos hormiga y la mala planificación en cuanto a las finanzas personales. También se 
                        implemento un modelo de familia el cual podía hacer ingresos y egresos de toda la familia para un control en conjunto. 
                        Yo estuve trabajando en el Backend, el cual fue desarrollado en Prisma y NestJS.</p>
                    </div>
                </div>
                <div className={styles.container}>
                    <Image src={img} alt="Imagen1" className={styles.itemp} width={500} height={500} />
                    <div className={styles.info}>
                        <h2>Proyecto de Active Directory</h2>
                        <p>Este proyecto fue realizado para el curso de Redes 2 y constaba de montar un sistema de Windows Server virtualizado 
                            que nos permitiera el control de usuarios y políticas. Esto no se ve en hogares, mas bien es una solución empresarial 
                            para controlar los accesos de los colaboradores a los archivos, páginas web e instalación de programas. Este tipo de 
                            solución se ve mucho en call center.</p>
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