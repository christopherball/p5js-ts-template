new p5((s: p5) => {
  let golShader: p5.Shader;

  s.preload = () => {
    golShader = s.loadShader("shaders/shared.vert", "shaders/gol.frag");
  };

  s.setup = () => {
    s.createCanvas(s.windowWidth, s.windowHeight, s.WEBGL);
    s.pixelDensity(1);
    s.frameRate(20);
    s.background(0);
    s.noStroke();
    s.fill(255);

    artMode(s, 0);

    s.shader(golShader);
    golShader.setUniform("uResolution", [s.width, s.height]);
  };

  s.draw = () => {
    golShader.setUniform("uState", s.get());
    s.rect(0, 0, s.width, s.height);
  };
});

let artMode = (s: p5, mode: number = 0) => {
  switch (mode) {
    case 0:
      for (let y = -s.height / 2; y < s.height / 2; y += 5) {
        for (let x = -s.width / 2; x < s.width / 2; x += 5) {
          if (Math.random() < 0.5) s.square(x, y, 5);
        }
      }
      break;
    case 1:
      s.rectMode(s.CENTER);
      s.square(0, 0, 500);
  }
};
