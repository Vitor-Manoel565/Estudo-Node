import Express from "express";
import db from "../config/dbConnect.js";
import games from "../models/game.js";

db.on("error", console.error.bind(console, "connection error:")); //mostra erro, caso ocorra
db.once("open", function () {
  console.log("Conectado ao banco de dados!");
});

const app = Express();
app.use(Express.json());

// const games = [
//   {
//     id: 1,
//     name: "Valorant",
//   },
// ];

app.get("/", (request, response) => {
  response.status(200).send("Meu curso!");
});


app.get("/games", (request, response) => {
  //metodo de get
    games.find((error, games) => {
        if (error) {
            return response.status(500).send(error);
        } else {
            return response.status(200).send(games);
        }
    });
});

app.get("/games/:id", (request, response) => {
  //metodo que busca por id
  let index = buscaGame(request.params.id);
  response.json(games[index]);
});

app.post("/games", (request, response) => {
  games.push(request.body); //adiciona um post, push adiciona um item no array
  response.status(201).send("Livro cadastrado!");
});

app.put("/games/:id", (request, response) => {
  //metodo de atualização
  let index = buscaGame(request.params.id);
  games[index].name = request.body.name;
  response.json(games);
});

app.delete("/games/:id", (request, response) => {
  //metodo de deletar
  let index = buscaGame(request.params.id);
  games.splice(index, 1); //exclui item na posição do index
  response.send(`O livro ${request.params.id} foi deletado com sucesso!`);
});

function buscaGame(id) {
  return games.findIndex((game) => game.id == id); // Busca id que seja igual ao que foi passado no corpo da requisição
}

export default app;

let value = false;
console.log("pedir uber");
const promessa = new Promise((resolve, reject) => {
  if (value === false) {
    resolve("carro chegou");
  } else {
    reject("Carro não chegou");
  }
});
console.log("aguardando");
promessa.then((result) => console.log(result));
promessa.catch((error) => console.log(error));

// Promessa é rejeitada e usamos o catch() para capturar o erro
// console.log('pedir uber')
// const promessa = new Promise((resolve, reject) => {
// 	return reject('pedido negado!')
// })

// console.log('aguardando')

// promessa
// 	.then(result => console.log(result))
// 	.catch(erro => console.log(erro))
