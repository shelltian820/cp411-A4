
uniform sampler2D textureSample_0;
uniform sampler2D textureSample_1;

void main() 
{
	gl_FragColor = texture2D(textureSample_0, gl_TexCoord[0].st);
}

