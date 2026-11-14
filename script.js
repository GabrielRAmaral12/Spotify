document.addEventListener('DOMContentLoaded', () =>{

    const trendingSongs = [
        {name: 'Eu Me Rendo - Ao Vivo', artist: 'Felipe & Rodrigo', image: './img/eu-me-rendo.jpg'},
        {name: 'Exigente', artist: 'Deu Bão, Luan Pereira, Bison e Comassetto', image: './img/exigente.jpg'},
        {name: 'Boneco De Pano - Ao Vivo', artist: 'Danilo & Davi', image: './img/boneco-de-pano.jpg'},
        {name: 'Farra É Comigo', artist: 'Mari Fernandez, Eduardinho Dos Teclados', image: './img/farra-e-comigo.jpg'},
        {name: 'Primavera', artist: 'Jorge & Mateus', image: './img/primavera.jpg'},
    ];

    const artistsData = [
    {name: 'Henrique & Juliano', image: './img/artista-henrique-juliano.jpg'},
    {name: 'Jorge & Mateus', image: './img/artista-jorge-mateus.jpg'},
    {name: 'Zé Neto & Cristiano', image: './img/artista-ze-neto.jpg'},
    {name: 'Gustavo Lima', image: './img/artista-gustavo-limma.jpg'},
    {name: 'Luan Santana', image: './img/artista-luan-santana.jpg'},
];

const albumsData = [
    {name: 'White Noise (Sleep & Relation Sounds)', artist: 'Sleepy John', image: './img/album-white-noise.jpg'},
    {name: 'O Céu Explica Tudo (Ao Vivo)', artist: 'Henrique & Juliano', image: './img/album-ceu-explica.jpg'},
    {name: 'Nada Como Um Dia Após O Outro', artist: 'Racionais', image: './img/album-racionais.jpg'},
    {name: 'Hit Me Hard And Soft', artist: 'Billie Eilish', image: './img/album-hit-me.jpg'},
    {name: 'CAJU', artist: 'Liniker', image: './img/album-caju.jpg'},
];

const trendingGrid = document.querySelector('.trending-grid');

trendingSongs.forEach( trend => {
    const trendingCards = document.createElement('div');
    trendingCards.classList.add('trending-cards');

    trendingCards.innerHTML = `
        <img src="${trend.image}" alt="imagem do ${trend.name}">
        <h3>${trend.name}</h3>
        <p>${trend.artist}</p>
    `
    trendingGrid.appendChild(trendingCards);
})

const artistsGrid = document.querySelector('.artists-grid');

artistsData.forEach(artists => {
    const artistsCards = document.createElement('div');
    artistsCards.classList.add('artists-cards');

    artistsCards.innerHTML = `
        <img src="${artists.image}" alt="imagem de ${artists.name}">
        <h3>${artists.name}</h3>
        <p>Artista<p/>
    `

    artistsGrid.appendChild(artistsCards);
})

const albumsGrid = document.querySelector('.albums-grid');

albumsData.forEach(albums => {
    const albumsCards = document.createElement('div');
    albumsCards.classList.add('albums-cards');

    albumsCards.innerHTML = `
        <img src="${albums.image}" alt="imagem de ${albums.name}">
        <h3>${albums.name}</h3>
        <p>${albums.artist}</p>
    `

    albumsGrid.appendChild(albumsCards);
})
})