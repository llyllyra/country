import React from 'react';

const Articles = ({articles}) => {

    const dateFormater = (date) => {
        let newDates = new Date(date).toLocaleDateString("fr-BE", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
        });
        return newDates
    }


    return (
        <li className="article">
            <div className="card-header">
                <h3>{articles.author}</h3>
                <em>Posté le {dateFormater(articles.date)}</em>
            </div>
            <p>
                {articles.content}
                <span className="btn-container">
                    <button>Edit</button>
                    <button>Supprimer</button>
                </span>
            </p>
        </li>

    );
};

export default Articles;