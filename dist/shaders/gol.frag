#version 300 es
/*  OLD SYNTAX      MODERN SYNTAX   :   PERMISSION
    uniform         uniform         :   read
    varying         in              :   read
    gl_FragColor    out             :   read / write    */

#ifdef GL_ES
precision highp float;
#endif

uniform vec4 uMouse;
uniform vec2 uMouseSimple;
uniform vec2 uResolution;
uniform float uTime;
uniform sampler2D uState;

in vec2 vTexCoord;

out vec4 fragColor;

void main() {
  int sum = 0;

  sum += int(texture(uState, vec2((gl_FragCoord.x + 1.0) / uResolution.x, 1.0 - (gl_FragCoord.y + 1.0) / uResolution.y)).r);
  sum += int(texture(uState, vec2((gl_FragCoord.x + 1.0) / uResolution.x, 1.0 - (gl_FragCoord.y) / uResolution.y)).r);
  sum += int(texture(uState, vec2((gl_FragCoord.x + 1.0) / uResolution.x, 1.0 - (gl_FragCoord.y - 1.0) / uResolution.y)).r);
  sum += int(texture(uState, vec2((gl_FragCoord.x) / uResolution.x, 1.0 - (gl_FragCoord.y - 1.0) / uResolution.y)).r);
  sum += int(texture(uState, vec2((gl_FragCoord.x - 1.0) / uResolution.x, 1.0 - (gl_FragCoord.y - 1.0) / uResolution.y)).r);
  sum += int(texture(uState, vec2((gl_FragCoord.x - 1.0) / uResolution.x, 1.0 - (gl_FragCoord.y) / uResolution.y)).r);
  sum += int(texture(uState, vec2((gl_FragCoord.x - 1.0) / uResolution.x, 1.0 - (gl_FragCoord.y + 1.0) / uResolution.y)).r);
  sum += int(texture(uState, vec2((gl_FragCoord.x) / uResolution.x, 1.0 - (gl_FragCoord.y + 1.0) / uResolution.y)).r);

  // if (sum == 3)
  //   fragColor = vec4(1.0, 1.0, 1.0, 1.0);
  // else if (sum == 2) {
  //   float current = texture(uState, vec2(vTexCoord.x, 1.0 - vTexCoord.y)).r;
  //   fragColor = vec4(current, current, current, 1.0);
  // } else
  //   fragColor = vec4(0.0, 0.0, 0.0, 1.0);

  float current = texture(uState, vec2(vTexCoord.x, 1.0 - vTexCoord.y)).r;
  if (current == 1. && (sum < 2 || sum > 3))
    fragColor = vec4(0.0, 0.0, 0.0, 1.0);
  else if (current == 1. && (sum == 2 || sum == 3))
    fragColor = vec4(1.0, 1.0, 1.0, 1.0);
  else if (current == 0. && sum == 3)
    fragColor = vec4(1.0, 1.0, 1.0, 1.0);
  else
    fragColor = vec4(0.0, 0.0, 0.0, 1.0);
}