import styles from './styles.module.css'
import Aside from '../Aside'



const Layout = ({children}:any) => {
    return (
        <section className={styles.container}>
           
            <Aside />

            <main>
                {children}
            </main>
        </section>
    )
}

export default Layout