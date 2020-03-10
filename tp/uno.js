
function mostrar() {
	/* Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
	de cada una debo obtener los siguientes datos:
	el tipo (validar "barbijo" , "jabón" o "alcohol") ,
	el precio (validar entre 100 y 300),
	la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
	la Marca y el fabricante.
	Se debe Informar al usuario lo siguiente:
	a) Del más caro de los Barbijos, la cantidad de unidades y el fabricante
	b) Del ítem con más unidades, el fabricante
	c) Cuántas unidades de jabones hay en total
	 */

	var tipo;
	var precio;
	var cantidad;
	var marca;
	var fabricante;
	var barbijomascaro = 0;
	var fabricantebarbijomascaro;
	var fabricanteMasItenVendidos = 0;
	var preciobarbijo = 0;
	var tipoconmasunidades = 0;
	var cantidaddejabon = 0;

	//Debemos realizar la carga de 5(cinco) productos de prevención de contagio,

	for (var i = 0; i < 4; i++) {

		// De cada una debo obtener los siguientes datos:

		//el tipo (validar "barbijo" , "jabón" o "alcohol") ,
		tipo = prompt("Ingrese un tipo de producto 'barbijo','jabon' ó 'alcohol'");
		while (!isNaN(tipo) || tipo != 'barbijo' && tipo != 'jabon' && tipo != 'alcohol') {
			tipo = prompt("Reingrese un tipo de producto 'barbijo','jabon' ó 'alcohol'");
		}
		//el precio (validar entre 100 y 300),
		precio = prompt("Ingrese un precio entre 100 y 300");
		precio = parseInt(precio);
		while ((isNaN(precio) || precio < 100 || precio > 300)) {
			precio = prompt("Reingrese un precio entre 100 y 300");
		}
		// la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
		cantidad = prompt("Ingrese una cantidad max de 1000 unidades");
		cantidad = parseInt(cantidad);
		while (isNaN(cantidad) || cantidad < 0 || cantidad > 1000) {
			cantidad = prompt("Reingrese una cantidad max de 1000 unidades");
		}
		// la Marca 
		marca = prompt("Ingrese marca: 'cler' ó 'din'");
		while (!isNaN(marca) || marca != 'cler' && marca != 'din') {
			marca = prompt("Reingrese marca: 'cler' ó 'din'");
		}
		//el fabricante.
		fabricante = prompt("Ingrese fabricante: 'maria' ó 'jose'");
		while (!isNaN(fabricante) || fabricante != 'maria' && fabricante != 'jose') {
			fabricante = prompt("Reingrese fabricante: 'maria' ó 'jose'");
		}
		//Se debe Informar al usuario lo siguiente:

		// a) Del más caro de los Barbijos, la cantidad de unidades y el fabricante
		if (tipo == 'barbijo' && preciobarbijo == 0 || precio > barbijomascaro) {
			barbijomascaro = precio;
			fabricantebarbijomascaro = fabricante;
			barbijomascarocant = cantidad;
			preciobarbijo == 1
		}
		//	b) Del ítem con más unidades, el fabricante
		if (tipoconmasunidades == 0 || cantidadmasalta > 0) {
			cantidadmasalta = cantidad;
			fabricanteMasItenVendidos = fabricante;
			tipoconmasunidades == 1
		}
		//	c) Cuántas unidades de jabones hay en total
		if (tipo == 'jabon') {

			cantidaddejabon = cantidaddejabon + cantidad;

		}

	}

	document.write("<br>" + "El fabricante del mas caro de los barbijos es: " + fabricantebarbijomascaro + "  cantidad de unidades: " + barbijomascaro + "  unidades");
	document.write("<br>" + "El fabricaente con mas items vendidos es:  " + fabricanteMasItenVendidos);
	document.write("<br>" + "Se ingresaron " + cantidaddejabon + " unidades de jabón");

}






