// אני פה כדי לשרת (סרביס) את התכנה ולקרוא למידע מהאינטרנט
import { games } from "./meyda.js"

import theInternet from "./TheInternet.js";

class GamesService extends theInternet {

    getGames() {

        return this.getThingsFromTheInternet(games, "walla ein mishakim");
    }
}

export default new GamesService();
