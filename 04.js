var array = new Array(1500,1400,1200,515,984,1200,699,875,871,578,254,668,944,877,1102,587,5745,847,5748,845,4515);
var pares   = 0, mayor_mil = 0, menor = array[0], mayor = menor, sum = 0;

for(index in array){
	value = array[index];
	sum   += value;
	if((value/2)%1 == 0){
		pares ++;
	}
	if(value > 1000){
		mayor_mil ++;
	}
	if(value < menor){
		menor = value;
	}
	if(value > mayor){
		mayor = value;
	}
}

let array_elements       = array.length,
	porcentaje_pares     = ((pares/array_elements)*100).toFixed(2), // % de numeros pares en el array
	porcentaje_impares   = 100 - porcentaje_pares,
	porcentaje_mayor_mil = ((mayor_mil/array_elements)*100).toFixed(2), // % de numeros mayores que mil
	porcentaje_menor     = ((menor/mayor)*100).toFixed(2), // % porcentaje del numero menor en relación al mayor
	promedio             = (sum/array_elements).toFixed(2), // % promedio de la sumatoria de los valores / el total de elementos
	porcentaje_promedio  = ((promedio/mayor)*100).toFixed(2);

console.log("elementos: " + array_elements);
console.log("Número menor: " + menor);
console.log("Número mayor: " + mayor);
console.log("Números Pares " + porcentaje_pares+" %");
console.log("Números impares " + porcentaje_impares+" %");
console.log("Números mayores a 1000: " + porcentaje_mayor_mil+" %");
console.log("Número menor en % del valor mayor "+ porcentaje_menor+" %");
console.log("Promedio en % del valor mayor: " + porcentaje_promedio+" %");