
uniform sampler2D textureSample_0; //alpha channel for spindles
uniform float currentTime;

void main()
{
	//rotation angle = 1/20 * sin(time)
	//rotate gl_texcoord[0].s
	//rotate gl_texcoord[0].t

	mat2 rot;
	float angle = sin(currentTime);
	rot[0][0] = cos(angle);
	rot[0][1] = -sin(angle);
	rot[1][0] = sin(angle);
	rot[1][1] = cos(angle);

	gl_FragColor = texture2D(textureSample_0, gl_TexCoord[0].st) * gl_Color;
}
