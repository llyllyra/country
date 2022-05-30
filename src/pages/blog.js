import React from 'react';
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const Blog = () => {
    return (
        <div className="blog-container">
            <Logo/>
            <Navigation/>
            <h1>Blog</h1>
            <form>
                <input type="text" placeholder="Nom"/>
                <textarea placeholder="Votre message"></textarea>
                <input type="submit" value="Envoyer"/>
            </form>
            {/*article*/}
            <ul>

            </ul>
        </div>
    );
};

export default Blog;