
// This pixel shader basically says: "I don't care about anything else,
// just paint this pixel (aka "fragment") white no matter what!"

uniform float currentTime;


void main()
{
	float colorValue = abs(sin(currentTime));
	gl_FragColor = vec4(1.0-colorValue, 0.0, 0.0, 1.0);

}
