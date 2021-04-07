
import gamesService from './gamesService.js';
export async function renderGames() {
    let gamesList = document.getElementById('gamesList');
    
    try {
        const games = await gamesService.getGames();

        gamesList.innerHTML = '';
        for (const game of games) {
            gamesList.innerHTML += game.toHTML();
        }
    } catch (error) {
        gamesList.innerHTML = `<li> ${error} </li>` 
    }
}

export async function renderGamesWithSinun(maNihtav) {

    let gamesList = document.getElementById('gamesList');
    
    try {
        const games = await gamesService.getGames();
        const gamesToRender = games.filter(x => x.shem.includes(maNihtav));
        gamesList.innerHTML = '';

        for (const game of gamesToRender) {
            gamesList.innerHTML += game.toHTML();
        }
    } catch (error) {
        gamesList.innerHTML = `<li> ${error} </li>` 
    }
}


