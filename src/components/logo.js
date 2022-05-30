import React from 'react';

const Logo = () => {
    return (
        <div className="logo">
            {/*les images importées depuis la balise img sont accèssibles dans "public"*/}
            <img src="./logo192.png" alt="logo react"/>
            <h3>React Movie</h3>
        </div>
    );
};

export default Logo;