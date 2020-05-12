import React, {Component} from "react";
import ArticleItem from "./ArticleItem";

class Articles extends Component {
    state = {
        articles: [],
        isLoaded: false,
    };

    componentDidMount() {
        const url = "https://chronicles.katanawebworld.com/wp-json/wp/v2/posts";
        fetch(url)
            .then((res) => res.json())
            .then((data) =>
                this.setState({
                    articles: data,
                    isLoaded: true,
                })
            )
            .catch((error) => console.log(error));
    }

    render() {
        const {articles, isLoaded} = this.state;
        if (isLoaded) {
            return (
               <div className="container">
                   <div className="row">
                       {articles.map((article, index) => (
                           <div className="col-md-8 col-offset-md-2" key={article.id}>
                               <ArticleItem article={article} />
                               <hr className={ index < articles.length - 1 ? "show" : "hide"}/>
                           </div>
                       ))}
                   </div>
               </div>
            );
        }

        return <h3>Loading...</h3>;
    }
}

export default Articles;
