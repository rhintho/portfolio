class Sprite {

    #source;
    #img;
    #ctx;
    #x;
    #y;

    constructor(source, ctx, x, y) {
        this.#source = source;
        this.#img = new Image();
        this.#img.src = this.#source;
        this.#ctx = ctx;
        this.#x = x;
        this.#y = y;
    }

    drawSprite(ctx) {
        this.#img.addEventListener("load", this.#drawOnCanvas.bind(this));
    }

    #drawOnCanvas(event) {
        this.#ctx.drawImage(this.#img, this.#x, this.#y);
    }
}

export {Sprite};