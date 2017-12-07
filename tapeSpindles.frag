
uniform sampler2D textureSample_0; //alpha channel for spindles
uniform float currentTime;

void main()
{

	mat2 rot;
	rot[0][0] = cos(currentTime);
	rot[0][1] = -sin(currentTime);
	rot[1][0] = sin(currentTime);
	rot[1][1] = cos(currentTime);

	gl_FragColor = texture2D(textureSample_0, gl_TexCoord[0].st * rot) * gl_Color;
}
