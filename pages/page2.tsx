import styles from '/styles/page2.module.css'

export default function page2 () {
    return (
        <>
        <div className={styles.shapetop}>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M1200 0L0 0 598.97 114.72 1200 0z" className={styles.shapefilltop}></path>
            </svg>
        </div>
        <div className={styles.shapebottom}>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M1200 0L0 0 598.97 114.72 1200 0z" className={styles.shapefillbottom}></path>
            </svg>
        </div>
        </>
    )
}