// 5.7 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola 
// los streamers que incluyan la palabra introducida en el input. De esta forma, si 
// introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si introduzco 'i', 
// me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
// En este caso, muestra solo los streamers filtrados cuando hagamos click en el button. */}
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const input2$$ = document.querySelector('[data-function="toFilterStreamers"]');
const button2$$ = document.querySelector('[data-function="toShowFilterStreamers"]');

button2$$.addEventListener('click',()=>{
	const filterNames = streamers.filter((streamer)=>{
		return streamer.name.toLowerCase().includes(input2$$.value.toLowerCase());
	}); 
	console.log(filterNames);
	
});

