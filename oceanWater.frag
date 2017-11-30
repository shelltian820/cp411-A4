
uniform sampler2D textureSample_0;
uniform float currentTime;

void main()
{
	//gl_FragColor = vec4(0.0, 0.0, 1.0, 1.0);

	gl_FragColor = texture2D(textureSample_0, gl_TexCoord[0].st);

	gl_FragColor.a = 0.75;
}
