import { renderGames , renderGamesWithSinun} from './gamesRenderer.js';

renderGames();

$("#sinunShem").keyup(function(event) {
    let maNihtav = $(event.target).val();

    if(maNihtav.length > 0) {
        // tesanen
        renderGamesWithSinun(maNihtav);
    } else {
        renderGames();
    }
  });



