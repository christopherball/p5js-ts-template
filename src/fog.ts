new p5((s: p5) => {
  let layer: p5.Framebuffer, fogShader: p5.Shader, fog: p5.Color;

  s.preload = () => {
    fogShader = s.loadShader("shaders/fog.vert", "shaders/fog.frag");
  };

  s.setup = () => {
    s.createCanvas(200, 200, s.WEBGL);
    // @ts-ignore
    layer = s.createFramebuffer();
    fog = s.color("#b2bdcf");
    s.noStroke();
  };

  s.draw = () => {
    // Draw a scene to a framebuffer
    layer.begin();
    // @ts-ignore
    s.clear();
    s.lights();
    s.fill("red");
    for (let i = 0; i < 12; i++) {
      s.push();
      s.translate(
        s.sin(s.frameCount * 0.05 + i * 1) * 50,
        s.sin(s.frameCount * 0.051 + i * 2) * 50,
        s.sin(s.frameCount * 0.049 + i * 3) * 175 - 75
      );
      s.sphere(10);
      s.pop();
    }
    layer.end();

    // Apply fog to the scene
    s.shader(fogShader);
    fogShader.setUniform("fog", [s.red(fog), s.green(fog), s.blue(fog)]);
    fogShader.setUniform("img", layer.color);
    fogShader.setUniform("depth", layer.depth);
    s.rect(0, 0, s.width, s.height);
  };
});
