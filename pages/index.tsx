import { Inter } from 'next/font/google'
import styles from '/styles/principal.module.css'
import Image from 'next/image'
import perfil from '/images/yo.png'
import img from '/images/perfil.png'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
    <>
    <div className={styles.page}>
        <nav className={styles.bar}>
            <Link href='/' className={styles.enlace}>#Home</Link>
            <Link href='#aboutme' className={styles.enlace}>#About-me</Link>
            <Link href='#portfolio' className={styles.enlace}>#Portfolio</Link>
            <Link href='#contact' className={styles.enlace}>#Contact</Link>
            <Link href='/page2' className={styles.enlace}>#Blog</Link>
        </nav>
        <div className={styles.contenedor2} id='aboutme'>
            <div className={styles.bubble}>
                <div className={styles.izqui}>
                    <div className={styles.profilec}>
                    <Image src={perfil} alt="Imagen1"/>
                    </div>
                </div>
                <div className={styles.derec}>
                    <div><p>Hola, mi nombre es:</p></div>
                    <div><h1>Vinicio Ricci</h1></div>
                    <div><p>Estudiante de quinto año de la carrera Ingeniería en informática y sistemas en la universidad
                        Rafael Landívar.  Conocimiento en diferentes lenguajes de programación tales como: 
                        Java, MySQL, Python.  Además de eso tengo experiencia en elaboración de bases de datos. 
                        Soy una persona activa  que disfruta de los retos, me gusta aprender cosas nuevas y 
                        ponerlas en práctica.
                    </p> </div>
                </div>
            </div>
        </div>
        <div className={styles.contenedor} id='portfolio'>
            <h1 className={styles.titulo}>Portfolio</h1>
            <div className={styles.proyecto}>
                <div className={styles.item}>
                    <Link href='/page3'><Image src={img} alt="Imagen1" className={styles.itemp} /></Link>
                    <p>Proyecto que tomaba las asistencias de los estudiantes</p>
                </div>
                <div className={styles.item}>
                    <Link href='page3/#project2'><Image src={img} alt="Imagen1" className={styles.itemp}/></Link>
                    <p>Flujo de caja que ayuda al usuario a mantener sus finanzas en orden</p>
                </div>
                <div className={styles.item}>
                    <Link href='page3/#project3'><Image src={img} alt="Imagen1" className={styles.itemp}/></Link>
                    <p>Active directory que almacena usuarios y otorga permisos</p>
                </div>
                </div>
        </div>
        <div className={styles.contenedor} id='contact'>
            <h1 className={styles.titulo}>Contacto</h1>
        </div>
    </div>
    </>
)
}
