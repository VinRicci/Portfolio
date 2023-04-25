import { Inter } from 'next/font/google'
import styles from '/styles/principal.module.css'
import Image from 'next/image'
import perfil from '/images/yo.png'
import img from '/images/perfil.png'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
    <>
    <div className={styles.page}>
        <nav className={styles.bar}>
            <p>#Home</p>
            <p>#About-me</p>
            <p>#Portfolio</p>
            <p>#Contact</p>
            <p>#Blog</p>
        </nav>
        <div className={styles.contenedor2}>
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
        <div className={styles.contenedor}>
            <h1 className={styles.titulo}>Portfolio</h1>
            <div className={styles.proyecto}>
                <div className={styles.item}>
                    <Image src={img} alt="Imagen1" className={styles.itemp} />
                    <p>Proyecto que tomaba las asistencias de los estudiantes</p>
                </div>
                <div className={styles.item}>
                <Image src={img} alt="Imagen1" className={styles.itemp}/>
                    <p>Flujo de caja que ayuda al usuario a mantener sus finanzas en orden</p>
                </div>
                <div className={styles.item}>
                <Image src={img} alt="Imagen1" className={styles.itemp}/>
                    <p>Active directory que almacena usuarios y otorga permisos</p>
                </div>
                </div>
        </div>
        <div className={styles.contenedor}>
        <h1 className={styles.titulo}>Contacto</h1>
        </div>
    </div>
    </>
)
}
