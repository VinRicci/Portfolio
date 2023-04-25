import { Inter } from 'next/font/google'
import styles from '/styles/principal.module.css'

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
                    </div>
                </div>
                <div className={styles.derec}>
                    <h1>Vinicio Ricci</h1>
                </div>
            </div>
        </div>
        <div className={styles.contenedor}>
            <h1 className={styles.titulo}>Portfolio</h1>
            <div className={styles.proyecto}>
                    <img src="" alt="Imagen1"/>
                    <p>Proyecto que tomaba las asistencias de los estudiantes</p>
                </div>
                <div className={styles.proyecto}>
                    <img src="" alt="Imagen2"/>
                    <p>Flujo de caja que ayuda al usuario a mantener sus finanzas en orden</p>
                </div>
                <div className={styles.proyecto}>
                    <img src="" alt="Imagen3"/>
                    <p>Active directory que almacena usuarios y otorga permisos</p>
                </div>
        </div>
    </div>
    </>
)
}
