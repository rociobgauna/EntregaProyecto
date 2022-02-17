class Product {
	constructor(product, price) {
		this.product = product,
		this.price = price
	}
}

//olicito producto y precio mediante promt

let items = [];
function questionProducts() {
	items = [new Product(prompt("Ingrese producto: "), parseFloat(prompt("Ingrese precio del producto: ")))];

	//genero bucle que finaliza cuando el usuario selecciona la opcion de lo contrario se solicita otro producto

	let questionPrompt = prompt(`Agregar otro producto? \na.Si \nb.Finalizar`);

	while (questionPrompt != "b") {
		items.push(new Product(prompt("Nombre del producto"), parseFloat(prompt("Precio del producto"))));
		questionPrompt = prompt(`Agregar otro producto? \na.Si \nb.Finalizar`);
	}

	//suma de productos para generar un total

	function printProducts(order) {
		let listado = `Lista de productos (${order}):\n`;
		let total = 0;

		for (let i = 0; i < items.length; i++) {
			listado += `${i + 1}. Producto: ${items[i].product} - Precio: $${items[i].price}\n`;
			total += items[i].price;
		}

		console.log(`${listado} \nTotal: $${total}`);
		alert(`${listado} \nTotal: $${total}`);
	}

	//Orden de productos

	let orderPrompt = prompt(`Ordenar productos por: \n1. Menor a mayor precio. \n2. Mayor a menor precio.`);
	while (orderPrompt != 1 && orderPrompt != 2) {
		orderPrompt = prompt(`Opción no válida, intenta de nuevo! \nOrdenar productos por: \n1. Orden alfabetico. \n2. Menor a mayor precio. \n3. Mayor a menor precio.`)
	}
	if (orderPrompt == 1) { //opcion 1
		items.sort(function (a, b) {
			if (a.price > b.price) {
				return 1
			}
			if (a.price < b.price) {
				return -1
			}
			return 0
		});
		printProducts("Menor a mayor precio");
	};

	if (orderPrompt == 2) { //opcion 2
		items.sort(function (a, b) {
			if (a.price < b.price) {
				return 1
			}
			if (a.price > b.price) {
				return -1
			}
			return 0
		});
		printProducts("Mayor a menor precio");
	};
}