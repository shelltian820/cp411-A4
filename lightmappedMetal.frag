
uniform sampler2D textureSample_0; //metal sheet texture
uniform sampler2D textureSample_1; //light map
uniform float currentTime;

void main()
{
	vec4 lightColor;
	float colorValue;
	colorValue = abs(sin(currentTime));
	lightColor = texture2D(textureSample_1, gl_TexCoord[0].st) * vec4(1.0-colorValue, 0.0, 0.0, 1.0);
	gl_FragColor = texture2D(textureSample_0, gl_TexCoord[0].st) * gl_Color + lightColor;

}
