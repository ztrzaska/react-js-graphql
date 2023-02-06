interface Article {
    id: string
    name: string
    pageCount: number
    type: string
    author: string
    comments: Array<string>
    releaseDate: string
    createdAt: string
}

export default Article;