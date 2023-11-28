new p5((s: p5) => {
    let x = 100;
    let y = 100;

    s.setup = () => {
        s.createCanvas(s.windowWidth, s.windowHeight);
    };

    s.draw = () => {
        s.background(64);
        s.fill(255);
        s.rect(x, y, 50, 50);
    };
});
