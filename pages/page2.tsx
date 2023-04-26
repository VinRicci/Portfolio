import styles from '/styles/page2.module.css'
import Image from 'next/image'
import img from '/images/perfil.png'

export default function page2 () {
    return (
        <>
        <div className={styles.page}>
        <div className={styles.shapetop}>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M1200 0L0 0 598.97 114.72 1200 0z" className={styles.shapefilltop}></path>
            </svg>
        </div>
        <div className={styles.container}>
            <Image src={img} alt="Imagen1" className={styles.itemp} />
            <div className={styles.texto}>
                <h1>Titulo</h1>
                <p>Descripcion</p>
            </div>
        </div>
        <div className={styles.container}>
            <Image src={img} alt="Imagen1" className={styles.itemp} />
            <div className={styles.texto}>
                <h1>Titulo</h1>
                <p>Descripcion</p>
            </div>
        </div>
        {/* <div className={styles.shapebottom}>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M1200 0L0 0 598.97 114.72 1200 0z" className={styles.shapefillbottom}></path>
            </svg>
        </div> */}
        </div>
        </>
    )
}