import WriteUp from '../WriteUp'
import styles from './styles.module.css'

interface Props {
    blogs: any
}

const WriteUpCategoryContainer:React.FC<Props> = ({blogs}) => {
    return (
        <section className={styles.container}>
            <h1>Categories</h1>

            <div>
            {blogs.map((item:any,idx:any)=>{
                return (
                    <WriteUp
                    category={item}
                    key={idx}
                    />
                )
            })}
            </div>
        </section>
    )
}

export default WriteUpCategoryContainer