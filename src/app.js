import Express, { response } from "express";

const app = Express();
app.use(Express.json())

const games = [
  {
    "id": 1,
    "name": "Valorant",
  },
];

app.get("/", (request, response) => {
  response.status(200).send("Meu curso!");
});


app.get("/games",(request,response)=>{ //metodo de get
    response.status(200).json(games)
});

app.get('/games/:id',(request,response)=>{ //metodo que busca por id
    let index = buscaGame(request.params.id);
    response.json(games[index])
})


app.post('/games',(request,response)=>{
    games.push(request.body); //adiciona um post
    response.status(201).send('Livro cadastrado!')
});

app.put('/games/:id',(request,response)=>{ //metodo de atualização
    let index = buscaGame(request.params.id);
    games[index].name = request.body.name;
    response.json(games)
})


app.delete('/games/:id',(request,response)=>{ //metodo de deletar
    let index = buscaGame(request.params.id);
    games.splice(index,1);
    response.send(`O livro ${request.params.id} foi deletado com sucesso!`);
})
    

function buscaGame(id){
    return games.findIndex(game => game.id == id); // Busca id que seja igual ao que foi passado no corpo da requisição
}

export default app;