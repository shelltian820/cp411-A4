
// This pixel shader basically says: "I don't care about anything else,
// just paint this pixel (aka "fragment") white no matter what!"

void main() 
{
	//gl_FragColor = vec4(1.0,1.0,1.0,1.0);
	
	gl_FragColor = gl_LightSource[0].diffuse;
}

