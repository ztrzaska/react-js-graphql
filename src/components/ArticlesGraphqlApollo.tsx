import PozycjaNaLiscie from "./PozycjaNaLiscie";
import Article from "../model/Article";
import { useQuery, gql } from "@apollo/client";

const ARTICLES_QUERY = gql`
query { articles {    id    name    pageCount    type    author    comments    releaseDate    createdAt  } } `;

const ArticlesGraphqlApolloInfo = () => {
    
    const { data, loading, error } = useQuery(ARTICLES_QUERY);

    if (loading) return <div>Ładowanie danych...</div>;
    if (error) return <pre>{error.message}</pre>
  
    return (
        <div>
            {
                data.articles.map((item : Article) => {
                    return <span key={item.id}>
                        <PozycjaNaLiscie title={item.name} />
                    </span>
                })
            }
        </div>
    )

};

export default ArticlesGraphqlApolloInfo;