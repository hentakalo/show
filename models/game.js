export class Game {
    shem;
    gilMin;
    gilMax;
    screenTime;
    src;

    constructor(shem, gilMin, gilMax, screenTime, src) {
        this.shem = shem;
        this.gilMin = gilMin;
        this.gilMax = gilMax;
        this.screenTime = screenTime;
        this.src = src;
    }

    toHTML() {
        return `<li class="vic-list-item list-group-item">
        <div>
             ${this.shem} :שם 
        </div>
        <div>
            תאריך 2022: ${this.gilMin}-${this.gilMax}
        </div>
        <div>
            זמן ההופעה: ${this.screenTime} שעות
        </div>
        <div class="vic-list-item-image-wrapper">
            <img class="vic-list-item-image" src="${this.src}" alt="" srcset="">
            </div>
        </li>`
    }
    
}