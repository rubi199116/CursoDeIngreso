function mostrar()
{
	var nombre;
	var edad;
 	var sexo;
 	var estadoCivil;
 	var respuesta;
 	var HombreMasJovenCasado
 	var contador;
 	var acumulador;
 	var pasajeroMasViejo;
 	var acumuladorMujeres;
 	var contadorMujeres;
 	var promedioMujeres;
 	var contadorHombresSolteros;
 	var acumuladorHombresSolteros;
 	var promedioHombres;
 	var contadorMujeresCasadasOViudas;
 	respuesta="si";
 	contador=0;
 	acumulador=0;
 	acumuladorMujeres=0;
 	contadorMujeres==0;
 	contadorHombresSolteros=0;
 	acumuladorHombresSolteros=0;
 	contadorMujeresCasadasOViudas=0;
 	acumuladorMujeresViudasOSolteras=0;
 	
 	while(respuesta=="si");
 	{
 		do
 		{
 			nombre=prompt("ingrese su nombre");
 		}while(!isNaN(nombre));
 		
 		do
 		{
 			edad=prompt("ingrese su edad")
 			edad=parseInt(edad);
 		}while(isNaN(edad) || edad<18);

 		do
 		{
 			sexo=prompt("ingrese f o m");
 		}while(!isNaN(sexo) || sexo!="f" && sexo!="m");

 		do
 		{
 			estadoCivil=prompt("ingrese su estado civil");
 		}while(!isNaN(estadoCivil) || estadoCivil!="casado" && estadoCivil!="soltero" && estadoCivil!="viudo");

 		if(contador==0 && estadoCivil=="casado" && sexo=="m"|| edad<HombreMasJovenCasado);
 		{
 			HombreMasJovenCasado=edad;
 			HombreMasJovenCasado=nombre;
 		}
 		if(sexo=="f" && estadoCivil!="soltero")
 		{
 			contadorMujeresCasadasOViudas++;
 		}
 		if(contador==0 && sexo=="f" && sexo=="m" || pasajeroMasViejo<edad)
 		{
 			pasajeroMasViejo=edad;
 			pasajeroMasViejo=nombre;
 		}
 		if(contadorMujeres==0 && sexo=="f")
 		{
 			contadorMujeres++;
 			acumuladorMujeres++;
 		}
 		if(sexo=="f")
 		{
 			contadorMujeresSolteras++;
 			acumuladorMujeresSolteras++;

 		}else
 		{
 			if(sexo!="soltero")
 			{
 				contadorMujeres++;
 			}else
 			{
 				if(sexo=="m")
 			{
 				contadorHombresSolteros++;
 				acumuladorHombresSolteros++
 			}
 		}	
 		contador++
 		respuesta=prompt("Quiere seguir ingresando datos?");
	 }
	 
 	acumuladorHombresSolteros=acumuladorHombresSolteros+contadorHombresSolteros
 	acumuladorMujeres=acumuladorMujeres+contadorMujeres
 	acumuladorMujeresViudasOSolteras=acumuladorMujeresViudasOSolteras+contadorMujeresCasadasOViudas
 	promedioMujeres=acumuladorMujeres/contadorMujeres;
	 promedioHombres=acumuladorHombresSolteros/contadorHombresSolteros;
	 

 	document.write("<br>"+"el hombre casado mas joven es: " +HombreMasJovenCasado);
 	document.write("<br>"+"el pasajero mas viejo es:" +pasajeroMasViejo);
 	document.write("<br"+"la cantidad de mujeres viudas o casadas es "+contadorMujeresCasadasOViudas)
 	document.write("<br>"+"el promedio de edad de las mujeres es"+ promedioMujeres);
	 document.write("<br>"+ "el promedio de edad de hombres solteros es de : "+promedioHombres);
	 

}
	}
