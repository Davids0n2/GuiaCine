const apikey =  "fe7da511"
const filmesEN = [ 
    "interstellar", 
    "Avengers",
    "Harry Potter", 
    "Pirates of the Caribbean", 
    "Star Wars",
    "The Lord of the Rings" , 
    "tron" , 
    "tron legacy","noah" , "assassin's creed"
]

// Titulos dos filmes em português
const filmesPT = [
    "Interestelar", 
    "Vingadores",
    "Harry Potter", 
    "Piratas do Caribe", 
    "Guerra nas Estrelas" , 
    "O Senhor dos Anéis" , 
    "Tron" , 
    "Tron: O Legado", 
    "Noé" , 
    "Assassin's Creed"
]



async function CatalagoFilmes() {
    const filme = document.querySelector(".filmes-container")
    let html = `<div class = "fcontainer">`

    for (let i = 0; i < filmesEN.length; i++) {
        const resposta = await fetch(`http://www.omdbapi.com/?t=${filmesEN[i]}&apikey=${apikey}`) //busca  a resposta da API
        const dados = await resposta.json()

        if(dados.Response === "True"){
            
            html +=`
            <div class = "fcontainer">
                <div class = "filme">
                    <img class="poster" src="${dados.Poster}" alt="Poster do filme ${dados.Title}" loading="lazy" >
                    <p id="genero">${dados.Genre}</p>
                    <h2>${filmesPT[i]}</h2>
                    <p>&#x23F2; ${dados.Runtime}</p>
                </div>
            </div>    
            `
            //<p>${dados.Released}</p> mostra a data de lançamento do filme
            //<p>${dados.imdbRating} / 10</p> mostra a nota do filme
        }
        
    }
    html+= `</div>`
    filme.innerHTML = html
}
CatalagoFilmes()

