export const pokemonsList = [];
export const getPokemonList = (offset) => new Promise((resolve, reject) => {
    fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=100`)
        .then(response => response.json())
        .then(data => {
        const dataResults = data.results;
        const pokemonUrlList = [];
        for (let i = 0; i < dataResults.length; i++) {
            pokemonUrlList.push(data.results[i].url);
        }
        const promisesForUrls = pokemonUrlList.map(url => fetch(url)
            .then(response => response.json())
            .then(data => {
            pokemonsList.push(data);
        }));
        Promise.all(promisesForUrls)
            .then(() => {
            pokemonsList.sort((a, b) => a.id - b.id);
            resolve();
        })
            .catch(err => reject(err));
    })
        .catch(err => reject(err));
});
