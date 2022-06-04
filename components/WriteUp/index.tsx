import React from "react";
import styles from './styles.module.css'
import { useRouter } from 'next/router'

interface Props {
    category: string;
}


const WriteUp: React.FC<Props> = ({category}) => {
    
    const router = useRouter()

    return (
        <div className={styles.blogItem}>
            <p
            onClick={()=>router.push(`/write-ups/${category.toLowerCase()}`)}
            >{category}</p>
        </div>
    )
}

export default WriteUp