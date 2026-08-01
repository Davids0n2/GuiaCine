const apikey =  "fe7da511"

const generosPT = {
"Action": "Ação",
"Adventure": "Aventura",
"Sci-Fi": "Ficção Científica",
"Drama": "Drama",
"Comedy": "Comédia",
"Romance": "Romance",
"Horror": "Terror",
"Thriller": "Suspense",
"Animation": "Animação",
"Fantasy": "Fantasia",
"Crime": "Crime",
"Biography": "Biografia",
"Mystery": "Mistério",
"Family": "Família",
"Music": "Música",
"War": "Guerra",
"Western": "Faroeste"
};

function traduzirGenero(genero) {
    return genero
    .split(", ")
    .map(g => generosPT[g] || g)
    .join(", ")
}

const filmes = [
{ en: "interstellar", pt: "Interestelar" },
{ en: "Avengers", pt: "Vingadores" },
{ en: "Harry Potter", pt: "Harry Potter" },
{ en: "Pirates of the Caribbean", pt: "Piratas do Caribe" },
{ en: "Star Wars", pt: "Guerra nas Estrelas" },
{ en: "The Lord of the Rings", pt: "O Senhor dos Anéis" },
{ en: "tron", pt: "Tron" },
{ en: "tron legacy", pt: "Tron: O Legado" },
{ en: "noah", pt: "Noé" },
{ en: "assassin's creed", pt: "Assassin's Creed" },
{ en: "The Matrix", pt: "Matrix" },
{ en: "Inception", pt: "A Origem" },
{ en: "The Dark Knight", pt: "O Cavaleiro das Trevas" },
{ en: "Gladiator", pt: "Gladiador" },
{ en: "Titanic", pt: "Titanic" },
{ en: "Avatar", pt: "Avatar" },
{ en: "The Godfather", pt: "O Poderoso Chefão" },
{ en: "Fight Club", pt: "Clube da Luta" },
{ en: "Forrest Gump", pt: "Forrest Gump" },
{ en: "Pulp Fiction", pt: "Pulp Fiction: Tempo de Violência" },
{ en: "The Shawshank Redemption", pt: "Um Sonho de Liberdade" },
{ en: "The Silence of the Lambs", pt: "O Silêncio dos Inocentes" },
{ en: "Saving Private Ryan", pt: "O Resgate do Soldado Ryan" },
{ en: "The Exorcist", pt: "O Exorcista" },
{ en: "The Grand Budapest Hotel", pt: "O Grande Hotel Budapeste" },
{ en: "Birdman", pt: "Birdman" },
{ en: "Spotlight", pt: "Spotlight: Segredos Revelados" },
{ en: "Parasite", pt: "Parasita" },
{ en: "La La Land", pt: "La La Land: Cantando Estações" },
{ en: "Mad Max: Fury Road", pt: "Mad Max: Estrada da Fúria" }
]




async function CatalagoFilmes() {
    const filme = document.querySelector(".filmes-container")
    let html = `<div class = "fcontainer">`

    for (let i = 0; i < filmes.length && i < 20; i++) {
        const resposta = await fetch(`http://www.omdbapi.com/?t=${filmes[i].en}&apikey=${apikey}`) //busca  a resposta da API
        const dados = await resposta.json()

        if(dados.Response === "True"){
            
            html +=`
            <div class = "fcontainer">
                <div class = "filme">
                    <img class="poster" src="${dados.Poster}" alt="Poster do filme ${dados.Title}" loading="lazy" >
                    <p id="genero">${traduzirGenero(dados.Genre)}</p>
                    <h2>${filmes[i].pt}</h2>
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

