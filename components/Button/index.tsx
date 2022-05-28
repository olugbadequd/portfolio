import { ButtonHTMLAttributes } from "react"
import styles from './styles.module.css'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
    buttonType?: 'solid' | 'link' | 'outline',
    size?: 'sm' | 'md' | 'lg',
    text: string
}

const Button:React.FC<Props> = ({
    buttonType='solid', 
    size='md', 
    text, 
    ...props}) => {
    return (
        <button
        className={`${styles.button} ${styles[buttonType]} ${styles[size]}`} 
        {...props}
        >
            {text}
        </button>
    )
}

export default Button