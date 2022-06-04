import { NextPage } from "next"
import { useRouter } from "next/router"

const WriteUp: NextPage = () => {

    const router = useRouter()
    console.log(router)

    return (
        <section>
            <h1>{router.query?.category}</h1>
        </section>
    )
}

export default WriteUp