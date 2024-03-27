/*Fazer programa para calcular valor de uma viajem:
3 variáveis:
Preço médio combustivel;
Consumo medio combustivel;
Distancia emKm da viagem; */

const precoCombustivel = 5.79;
const kmPorLitros = 10; 
const distanciaEmKm = 100;

const litrosCosumidos = distanciaEmKm / kmPorLitros;
const valorGasto = litrosCosumidos * precoCombustivel;
console.log(valorGasto.toFixed(2));
