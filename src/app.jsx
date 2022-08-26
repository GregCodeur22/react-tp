import React, { useState } from 'react';

const App = () => {

    //state
    const [fruits, setFruits] = useState([
        {id: 1, nom:'abricot'},
        {id: 2, nom:'banane'},
        {id: 3, nom:'cerise'},
    ])

    //comportement
    const handleDelete = (id) => {
        console.log(id);


        //copie du state
        const fruitCopie = [...fruits];

        //manipuler mon state copier
        const fruitCopieUpdated = fruitCopie.filter((fruit) => fruit.id !== id)
        
        //modifier mon state avec le setter 
        setFruits(fruitCopieUpdated)
    }

    //affichage
    return (
        <div>
            <h1>liste de fruits</h1>
            <ul>{fruits.map((fruit) => {
                return <li key={fruit.id}> {fruit.nom} <button onClick={() => handleDelete(fruit.id)}>x</button> </li>
            })}</ul>
        </div>
    );
};

export default App;