const nombreAceitunas = [
    "Manzanilla",
    "Gordal",
    "Verdial",
    "Hojiblanca",
    "Cacereña",
    "Aloreña",
    "Empeltre",
    "Arbequina",
    "Cornicabra",
    "Picual",
    "Lechín",
    "Picudo",
    "Changlot Real",
];
let aceitunas = [];
let maxId = 1;

for(let i = 0; i < 5;i++){
    const newAceituna ={
        id: i+1,
        nombre: nombreAceitunas[i],
        peso: Math.floor(Math.random() *256),
    }
    aceitunas.push(newAceituna);
    maxId++;
}

const getAll = (req, res) => {
    // falta la parte de conseguir los datos de la base de datos
    res.json(aceitunas);
}

const getById = (req, res) => {
    const id = parseInt(req.params.id);
    try{
        const aceituna = aceitunas.find(element=>element.id == id);
        res.json(aceituna);
    }
    catch(e)
    {
        res.status(404).json("Algo ha fallado, asegúrate de que el id existe.");
    }
};

const create = (req, res) => {
    const {tipo, peso} = req.body;
    if(tipo === undefined || peso === undefined){
        return res.status(400).send("falta el 'tipo' y/o el 'peso'");
    }
    const aceituna = {
        id: maxId++,
        tipo,
        peso
    }
    aceitunas.push(aceituna);
    res.json(aceituna);
};

const update = (req, res) => {
    const id = req.params.id;
    const {tipo, peso} = req.body;
    if(tipo === undefined || peso === undefined){
        return res.status(400).send("falta el 'tipo' y/o el 'peso'");
    }
    try{
        const aceitunas = aceitunas.find(element=>element.id == id);
        aceitunas.tipo = tipo;
        aceitunas.peso = peso;
        res.json(aceitunas);
    }
    catch(e){
        res.status(404).json("Algo ha fallado, asegúrate de que el id existe y de que envías los datos 'tipo' y 'peso'.");
    }
}

const remove = (req, res) => {
    const id = req.params.id;
    try{
        const aceituna = aceitunas.find(element=>element.id == id);
        aceitunas = aceitunas.filter(element=>element.id != id);
        res.json(aceituna);
    }
    catch(e){
        res.status(400).json("Algo ha fallado, asegúrate de que el id existe.");
    }
};

/* export{
    getAll,
    getById,
    create,
    update,
    remove
} */

export default {
    getAll,
    getById,
    create,
    update,
    remove
}