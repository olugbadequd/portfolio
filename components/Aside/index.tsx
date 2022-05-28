import Button from '../Button'
import styles from './styles.module.css'
import { useRouter } from 'next/router'

const Aside = () => {
    
    const router = useRouter()

    return (
        <aside className={styles.aside}>
            <img src="https://res.cloudinary.com/dt0wfaxft/image/upload/v1653760650/cover1_yxqqfo.jpg" alt="my_picture" />
            
            <h1>Olugbade Qudus</h1>

            <div className={styles.buttonsBox}>
                <Button
                onClick={()=>router.push('/')} 
                text='Home' 
                buttonType='link'/>
                -
                <Button
                onClick={()=>router.push('/blog')} 
                text='Blog' 
                buttonType='link'/>
                -
                <Button
                onClick={()=>router.push('/roundup')} 
                text='Roundup' 
                buttonType='link'/>
            </div>

            <div className={styles.socialIconsBox}>
            </div>
        </aside>
    )
}

export default Aside