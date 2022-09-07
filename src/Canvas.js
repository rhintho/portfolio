import {TestClass} from "./TestClass.js";

class Canvas {

    canvasId = "canvas";
    canvas;
    ctx;

    constructor() {
        this.canvas = document.getElementById(this.canvasId);
        this.ctx = this.canvas.getContext("2d");
        this.resizeCanvas(window.innerHeight, window.innerWidth);
    }

    getCanvas() {
        return this.canvas;
    }

    getCanvasSize() {
        return {"height": this.canvas.height, "width": this.canvas.width};
    }

    printCanvasSize() {
        console.log(this.getCanvasSize());
    }

    resizeCanvas(height, width) {
        this.canvas.height = height;
        this.canvas.width = width;
    }

    addReziseListener() {
        window.addEventListener("resize", this.resizeEventHandler.bind(this));  // bind to hold object
    }

    resizeEventHandler(event) {
        this.resizeCanvas(window.innerHeight, window.innerWidth);
        this.printCanvasSize();
    }

    main() {
        console.log("Start Portfolio Canvas Application");
        this.addReziseListener();
    }
}

new Canvas().main();