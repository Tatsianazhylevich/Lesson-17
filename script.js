// =================TASK 1=======================================

let country = {
	set generator(array) {
		for(let item of array) {
			this[item.propertyTitle] = item.propertyValue;
		}
	}
};

country.generator = [{propertyTitle: 'name', propertyValue: 'Belarus'},
{propertyTitle: 'capital', propertyValue: 'Minsk'}, {propertyTitle: 'regional centers', propertyValue: ['Brest', 'Vitebsk', 'Grodno', 'Gomel', 'Mogilev']}];

console.log(country);