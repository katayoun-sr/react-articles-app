import Card from "../../components/card/Card"
import {useGetArticles} from "../../hooks/useGetArticles"

function Home(){
    const {articles, loading} = useGetArticles()

    return(
        <div className="container grid grid-cols-5 gap-3">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
}

export default Home