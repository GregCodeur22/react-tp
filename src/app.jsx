import React, { useState } from 'react';



const App = () => {

    //state
    const [compteur, setCompteur] = useState(1)

    //comportement
    const handleCLick = () => {
        setCompteur(compteur + 1)
    }

    //affichage
    return (
        <div>
            <h1 > {compteur} </h1>
            <button onClick={handleCLick}>Incrément</button>
        </div>
    );
};

export default App;