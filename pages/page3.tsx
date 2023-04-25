import styles from '/styles/page3.module.css'

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
            <p>#Home</p>
            <p>#About-me</p>
            <p>#Portfolio</p>
            <p>#Contact</p>
            <p>#Blog</p>
        </nav>
            <div className={styles.contenedor}>
                <div className={styles.container}>
                    {/* imagen */}
                    <div className={styles.info}>
                        <h2>Titulo</h2>
                        <p>Descripcion</p>
                    </div>
                </div>
                <div className={styles.container}>
                    {/* imagen */}
                    <div className={styles.info}>
                        <h2>Titulo</h2>
                        <p>Descripcion</p>
                    </div>
                </div>
                <div className={styles.container}>
                    {/* imagen */}
                    <div className={styles.info}>
                        <h2>Titulo</h2>
                        <p>Descripcion</p>
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