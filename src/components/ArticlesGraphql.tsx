import { useEffect, useState } from "react";
import PozycjaNaLiscie from "./PozycjaNaLiscie";
import Article from "../model/Article";

const ArticlesGraphqlInfo = () => {
    const [articles, setArticles] = useState<Array<Article>>([]);

    useEffect(() => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: '{"query":"query{  articles {    id    name    pageCount    type    author    comments    releaseDate    createdAt  }}"}'
        };
        fetch(`http://localhost:9001/graphql`, requestOptions)
            
            .then(res => res.json())
            .then(data => {
                setArticles(data.data.articles)
            })
            .catch(err => console.log(err))
    }, []);

    if (articles) {
        return (
            <div>
                {
                    articles.map((item, i) => {
                        return <span key={i}>
                            <PozycjaNaLiscie title={item.name} />
                        </span>
                    })
                }
            </div>
        )
    }

    return <h2>Trwa ładowanie danych</h2>;
};

export default ArticlesGraphqlInfo;