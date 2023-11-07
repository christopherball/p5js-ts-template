let sketch = (p: p5) => {
    let x = 100;
    let y = 100;

    p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
    };

    p.draw = () => {
        p.background(128);
        p.fill(255);
        p.rect(x, y, 50, 50);
    };
};

let p = new p5(sketch);