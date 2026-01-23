precision highp float;

uniform float uTime;
uniform float uScroll;
uniform vec2 uResolution;

varying vec2 vUv;

// Simple noise
float noise(vec2 p) {
  return sin(p.x) * sin(p.y);
}

void main() {
  vec2 uv = vUv;
  uv.y += uScroll * 0.15;

  float t = uTime * 0.2;

  // Flow distortion
  uv.x += noise(uv * 6.0 + t) * 0.08;
  uv.y += noise(uv * 4.0 - t) * 0.06;

  // Aurora bands
  float purple = smoothstep(0.3, 0.6,
    sin(uv.y * 5.0 + t + noise(uv * 3.0)) * 0.5 + 0.5
  );

  float blue = smoothstep(0.25, 0.55,
    sin(uv.y * 4.0 - t * 1.2 + noise(uv * 2.0)) * 0.5 + 0.5
  );

  vec3 color = vec3(0.0);

  color += vec3(0.6, 0.2, 1.0) * purple * 0.8;
  color += vec3(0.2, 0.4, 1.0) * blue * 0.9;

  // Fade edges
  float fade = smoothstep(0.0, 0.3, uv.y) * smoothstep(1.0, 0.7, uv.y);
  color *= fade;

  gl_FragColor = vec4(color, 1.0);
}
