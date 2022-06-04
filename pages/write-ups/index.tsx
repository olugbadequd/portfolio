import { categories } from "../../data/constants"
import WriteUpCategoryContainer from "../../components/WriteUpCategoryContainer"
import { NextPage } from "next"

const WriteUps:NextPage = () => {
    return (
        <section>
            <WriteUpCategoryContainer blogs={categories}/>
        </section>
    )
}

export default WriteUps