import React, {useEffect, useState} from 'react';
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import axios from "axios";
import Articles from "../components/Articles";

const Blog = () => {
    const [blogData, setBlogData] = useState([])
    const [content, setContent] = useState("");
    let [error, setError] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        if (content.length < 70) {
            setError(true);
        } else {
            axios.post("http://localhost:3004/articles", {
                author: "test",
                content,
                date: Date.now(),
            })
            setError(false);
        }
    }
    const getData = () => {
        axios
            .get("http://localhost:3004/articles")
            .then((res) => setBlogData(res.data))
    };
    useEffect(() => getData(), []);

    return (
        <div className="blog-container">
            <Logo/>
            <Navigation/>
            <h1>Blog</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" placeholder="Nom"/>
                <textarea
                    style={{border: error ? "5px solid red" : "1px solid #61dafb"}}
                    placeholder="Votre message"
                    onChange={(e) => setContent(e.target.value)}></textarea>
                {error && <p>Veuillez écrire un minimum de 140 caractères</p>}
                <input type="submit" value="Envoyer"/>
            </form>
            {/*article*/}
            <ul>
                {blogData
                    .sort((a, b) => b.date - a.date)
                    .map((articles) => (
                        <Articles key={articles.id} articles={articles}/>
                    ))}
            </ul>
        </div>
    );
}
export default Blog;