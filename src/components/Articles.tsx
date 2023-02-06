import { useEffect, useState } from "react";
import PozycjaNaLiscie from "./PozycjaNaLiscie";
import Article from "../model/Article";

const ArticlesInfo = () => {
    const [articles, setArticles] = useState<Array<Article>>([]);

    useEffect(() => {
        fetch(`http://localhost:9001/articles`)
            .then(res => res.json())
            .then(data => {
                setArticles(data)
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

export default ArticlesInfo;