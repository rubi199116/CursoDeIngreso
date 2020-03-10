function mostrar() {

	/* Realizar el algoritmo que permita ingresar los datos de
 una compra de productos de la construccion , hasta que el cliente quiera:-----
tipo (arena cal cemento),-----
cantidad de bolsas------
precio por bolsa (mas de cero)-------
Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.	
El importe total a pagar , bruto sin descuento y...
el importe total a pagar con descuento(solo si corresponde)
Informar el tipo con mas cantidad de bolsas.			
el tipo mas caro.

	var seguir = 's';
	var tipo;
	var bolsas;
	var precio;

	// Realizar el algoritmo que permita ingresar los datos de  una compra de productos de la construccion , hasta que el cliente quiera:

	do {
		//tipo (arena cal cemento),
		tipo = prompt("ingrese un articulo 'arena' , 'cal' ó 'cemento'");
		while (!isNaN(tipo) || tipo != 'arena' && tipo != 'cal' && tipo != 'cemento'); {
			tipo = prompt("reingrese un articulo 'arena' , 'cal' ó 'cemento'");
		}
		// cantidad de bolsas
		bolsas = prompt("Ingrese cantidad de bolsas");
		bolsas = parseInt(bolsas);
		while (isNaN(bolsas)) {
			bolsas = prompt("reingrese cantidad de bolsas");
		}// Precio por bolsa (mas de cero)
		precio = prompt("ingrece el precio");
		precio = parseInt(precio);
		while (isNaN(precio) || precio <= 0) {
			precio = prompt("reingrece el precio");
		}

} while (seguir == 's');*/

	/* Realizar el algoritmo que permita ingresar los datos de
	 una compra de ingredientes para preparar comida al por mayor , hasta que el cliente quiera:
				 peso (entre 10 y 1000)en kilo,
			precio por kilo (más de cero ),
			 tipo validad("v";"a";"m")(vegetal,animal o mezcla ) 
		   Si compro más de 100 kilos en total tenes 15% de descuento sobre el total a pagar.
				Si compro más de 300 kilos en total tenes 25% de descuento sobre el total a pagar.	
					El importe total a pagar , bruto sin descuento y...
					el importe total a pagar con descuento(solo si corresponde)
					Informar el tipo de alimento más caro.			
					El promedio de precio por kilo en total.*/


	var peso;
	var precio;
	var tipo;
	var descuento15;
	var descuento25;
	var preciototal = 0;
	var pesototal = 0;
	var preciototaldescuento15 = 0;
	var preciototaldescuento25 = 0;
	var respuesta;
	var promediodeprecioporkilo = 0;


	do {
		tipo = prompt("desea comprar verduras 'v', producto animal 'a' o mezcla 'm'.");
		while (!isNaN(tipo) || tipo != 'v' && tipo != 'a' && tipo != 'm') {
			tipo = prompt("COMPRAR verduras 'v', producto animal 'a' o mezcla 'm'.");
		}
		peso = prompt("cuantos kilos quiere comprar? entre 10Kls y 1000Kls.");
		peso = parseInt(peso);
		while (isNaN(peso) || peso > 1000 || peso < 10) {
			peso = prompt("ingrese un valor numerico para los kilos que quiere comprar.");
		}
		precio = prompt("ingrese el precio por kilo");
		precio = parseInt(precio);
		while (isNaN(precio) || precio < 0) {
			precio = prompt("reingrese el precio por kilo");
		}

		if (pesototal > 100 || pesototal < 300) {
			preciototal = precio * peso;
			descuento15 = preciototal * 15 / 100;
			preciototaldescuento15 = preciototal - descuento15;
		}
		//Si compro más de 300 kilos en total tenes 25% de descuento sobre el total a pagar.
		else {
			preciototal = precio * peso;
			descuento25 = preciototal * 25 / 100;
			preciototaldescuento25 = preciototal - descuento25;
		}
		respuesta = prompt("deseas continuar comprando si/no");
	} while (respuesta == "si");

	preciototal = precio * peso;
	promediodeprecioporkilo = preciototal / peso;

	document.write("<br>El importe total a pagar , con descuento del 15% es:  " + preciototaldescuento15);
	document.write("<br>El importe total a pagar , con descuento del 25% es:  " + preciototaldescuento25);
	document.write("<br> El importe total a pagar , bruto sin descuento es:  " + preciototal);
	document.write("<br>El promedio de precio por kilo es:  " + promediodeprecioporkilo);

}