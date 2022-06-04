import Button from '../Button'
import styles from './styles.module.css'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'

const Aside = () => {
    
    const router = useRouter()

    return (
        <aside className={styles.aside}>
            <img src="https://res.cloudinary.com/dt0wfaxft/image/upload/v1654362819/4_sqnzo6.jpg" alt="my_picture" onClick={()=>{
                router.push('/')
            }}/>
            
            <h1>Olugbade Qudus</h1>
            <p>Cybersecurity Professional</p>

            <div className={styles.buttonsBox}>
                <Button
                onClick={()=>router.push('/')} 
                text='Home' 
                buttonType='link'/>
                -
                <Button
                onClick={()=>router.push('/write-ups')} 
                text='Write-Ups' 
                buttonType='link'/>
                -
                <Button
                onClick={()=>router.push('/roundup')} 
                text='Roundup' 
                buttonType='link'/>
            </div>

            <div className={styles.socialIconsBox}>
                <Link href={'https://www.linkedin.com/in/qudus-olugbade-8644a5160'}>
                <a target={'_blank'}>
                <FontAwesomeIcon icon={faLinkedin} className={styles.socialIcon}/>
                </a>
                </Link>

                <Link href={'https://twitter.com/olugqud'}>
                <a target={'_blank'}>
                <FontAwesomeIcon icon={faTwitter} className={styles.socialIcon}/>
                </a>
                </Link>

                <Link href={'https://github.com/olugbadequd'}>
                <a target={'_blank'}>
                <FontAwesomeIcon icon={faGithub} className={styles.socialIcon}/>
                </a>
                </Link>

            </div>
        </aside>
    )
}

export default Aside