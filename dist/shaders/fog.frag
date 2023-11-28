#version 300 es
/*  OLD SYNTAX      MODERN SYNTAX   :   PERMISSION
    uniform         uniform         :   read
    varying         in              :   read
    gl_FragColor    out             :   read / write    */

#ifdef GL_ES
precision highp float;
#endif

uniform sampler2D img;
uniform sampler2D depth;
uniform vec3 fog;

in vec2 vTexCoord;
out vec4 fragColor;

void main() {
  fragColor = mix(texture(img, vTexCoord), vec4(fog / 255., 1.), pow(texture(depth, vTexCoord).r, 6.));
}