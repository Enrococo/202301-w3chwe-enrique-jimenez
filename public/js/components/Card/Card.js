import Component from '../Component.js';
export const series = [
    {
        id: 1,
        name: 'The Sopranos',
        creator: 'David Chase',
        year: 1999,
        poster: 'https://m.media-amazon.com/images/M/MV5BZGJjYzhjYTYtMDBjYy00OWU1LTg5OTYtNmYwOTZmZjE3ZDdhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg',
        watched: true,
        score: 5,
        emmies: 21,
    },
    {
        id: 2,
        name: 'Game of Thrones',
        creator: 'David Benioff D. B. Weiss',
        year: 2011,
        poster: 'https://t1.pixers.pics/img-1fb6f67c/posters-game-of-thrones.jpg?H4sIAAAAAAAAA3VOW27EIAy8DpGS2BAIkBvs394gIjy2afNAQNtVT1_Sqp-VZXs80ngG3o9sggfrj-IT7Ktzm4ewbvXKU_J5_fJkUGOLzVTZjSBWdH74ZNMZSUcH1VLRCsbaUYpm-jRVuJv0Rl5KiXkCyEMf12f9VpfNYPcMDKkEVCC00lpYzh1aN8cuF3M4k1zH8TliH49Hi1c1f0EkYiuvACWtO6mJzupVyGt8NPCP3y-GqoL7DSgCsp-JwNnFzvcbRWS1kbNZuEELHox0izdBeoUYLBVej9qZEMIsFmmWRY7Kec_n_hu83S9APwEAAA==',
        watched: false,
        score: 0,
        emmies: 164,
    },
    {
        id: 3,
        name: 'Mad Men',
        creator: 'Matthew Weiner',
        year: 2007,
        poster: 'https://es.web.img3.acsta.net/pictures/21/02/10/20/02/0834301.jpg',
        watched: true,
        score: 5,
        emmies: 116,
    },
    {
        id: 4,
        name: '6 feet under',
        creator: 'Alan Ball',
        year: 2001,
        poster: 'https://www.cine.com/media/series/2711.jpg',
        watched: true,
        score: 5,
        emmies: 53,
    },
    {
        id: 5,
        name: 'Atypical',
        creator: 'Robia Rashid',
        year: 2017,
        poster: 'https://www.cine.com/media/series/2711.jpg',
        watched: false,
        score: 0,
        emmies: 0,
    },
];
export default class PokemonCard extends Component {
    #i;
    constructor(parentElement, i, cssClasses = '') {
        super(parentElement, 'article', cssClasses);
        this.#i = i;
    }
    render() {
        super.render();
        this.element.innerHTML = `<div class="pokemonCard-pic">
              <img class="pokemonCard-pic__gif"
                src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif"
                alt="Pokemon" /> </div>
              <div class="pokemonCard-info"><h4 class="pokemonCard-info__name">Bulbasaur</h4>
              <ul class="pokemonCard-info__characteristics">
                <li> Type: Grass </li>
                <li> Base experience: 64 </li>
                <li> Weight: 69 </li></div>
             <div class="pokemonCard-extra">
             <span>1/1000</span>
             <i class="fa-light fa-circle-plus"></i>
             </div>
              `;
    }
}
