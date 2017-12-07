
uniform sampler2D textureSample_0; //sand texture
uniform sampler2D textureSample_1; //grass texture
varying vec2 texCoord;

void main() 
{
	vec4 grass, sand;
	float alpha;

	grass = texture2D(textureSample_1, gl_TexCoord[0].st);
	alpha = texture2D(textureSample_1, texCoord).a;
	sand = texture2D(textureSample_0, gl_TexCoord[0].st);

	gl_FragColor = (grass * alpha + sand * (1.0 - alpha) ) * gl_Color;
	gl_FragColor.a = 1.0;
	

}

