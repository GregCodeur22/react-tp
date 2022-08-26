import React, { useState } from 'react';

const App = () => {

    //state
    const [fruits, setFruits] = useState([
        {id: 1, nom:'abricot'},
        {id: 2, nom:'banane'},
        {id: 3, nom:'cerise'},
    ])

    const [nouveauFruit, setNouveauFruit] = useState("")

  

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

    const handleSubmit = (e) => {
        e.preventDefault()
        //copie du state
        const fruitCopy = [...fruits]

        //manipuler mon state copier
        const id = new Date().getTime()
        const nom = nouveauFruit
        fruitCopy.push({id, nom})
        
        
        //modifier mon state avec le setter 
        setFruits(fruitCopy)
        setNouveauFruit('')
                
    }

    const handleChange = (e) => {
        console.log(e.target.value);
        setNouveauFruit(e.target.value)
    }

    //affichage
    return (
        <div>
            <h1>liste de fruits</h1>
            <ul>{fruits.map((fruit) => {
                return <li key={fruit.id}> {fruit.nom} <button onClick={() => handleDelete(fruit.id)}>x</button> </li>
            })}</ul>

            <form action="submit"onSubmit={handleSubmit}>
                <input
                 value={nouveauFruit}
                 type="text"
                 placeholder='Ajouter un fruit...' 
                 onChange={handleChange}/>
                <button>Ajouter</button>
            </form>
        </div>
    );
};

export default App;


// gestion du formulaire

// création du formulaire

//soumission du formulailre

// collecte des données du formulaire 
