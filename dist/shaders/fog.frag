precision highp float;
varying vec2 vTexCoord;
uniform sampler2D img;
uniform sampler2D depth;
uniform vec3 fog;

void main() {
  gl_FragColor = mix(texture2D(img, vTexCoord), vec4(fog / 255., 1.), pow(texture2D(depth, vTexCoord).r, 6.));
}