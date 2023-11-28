#version 300 es
/*  OLD SYNTAX      MODERN SYNTAX   :   PERMISSION
    uniform         uniform         :   read
    attribute       in              :   read
    varying         out             :   read / write    */

#ifdef GL_ES
precision highp float;
#endif

in vec3 aPosition;
in vec2 aTexCoord;
out vec2 vTexCoord;

void main() {
  vec4 positionVec4 = vec4(aPosition, 1.0);
  positionVec4.xy = positionVec4.xy * 2.0 - 1.0;
  gl_Position = positionVec4;
  vTexCoord = aTexCoord;
}