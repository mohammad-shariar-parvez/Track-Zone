// const x = [];

// const filteredArray = x.filter(item => item.name != 10);
// console.log(filteredArray);



// const mappedArray = x.map(item => item.name);

// const myReduce = x.reduce((accumulator, currentValue) => {
// 	if (accumulator.name ==)
// 	return accumulator.concat(currentValue);
// }, []);

// console.log(myReduce);

// let accu = [];
// let finalArray = [];
// for (i = 0; i < x.length; i++) {
// 	if (accu.indexOf(x[i].name) == -1) {
// 		accu.push(x[i].name);
// 		finalArray.push(x[i]);

// 	}
// }
// console.log(finalArray);



// console.log(filteredArray);

// let arr = [
// 	{ name: "string 1", value: "this", other: "that" },
// 	{ name: "string 2", value: "this", other: "that" }
// ];

// let obj = arr.find(o => o.name === 'string 1');

// console.log(obj);

// const time = new Date().toLocaleString('en-US', {
// 	timeZone: "America/Aruba",
// 	timeStyle: 'long',
// });
// const time2 = new Date().toLocaleString('en-US', {
// 	timeZone: "Asia/Kabul",
// 	timeStyle: 'long',
// });

// const time = "135.664";
// const x = time.split('.');
// const y = x.replace(":", ".");
// console.log(`Hours is ${y.split(".")[0]} & Minutes is ${y.split(".")[1]}`);
// console.log(eval(`${5} ${x}`));
// console.log((parseInt(time.split('GMT+'))[1]) + 5);

// console.log(time.toString());

// REMOVE OBJECT
/* const arr = [{ id: 1, name: 'one' }, { id: 2, name: 'two' }, { id: 1, name: 'one' }];

const ids = arr.map(o => o.id);
const filtered = arr.filter(({ id }, index) => !ids.includes(id, index + 1));

console.log(filtered); */
const myTime = '7.12';
const value = '6.32';

let newMytime1 = parseFloat(parseFloat(myTime).toFixed(2).split(".")[0]);
let newMytime2 = parseFloat(parseFloat(myTime).toFixed(2).split(".")[1]);


let itemTime1 = parseFloat(parseFloat(value).toFixed(2).split(".")[0]);
let itemTime2 = parseFloat(parseFloat(value).toFixed(2).split(".")[1]);


if (itemTime2 > newMytime2) {
	newMytime1 = newMytime1 - 1;
	newMytime2 = newMytime2 + 60;
	const final = newMytime1.toString().concat(".").concat(newMytime2);
	console.log((final - value).toFixed(2));
}

else {
	const final = myTime - value;
	console.log(final.toFixed(2));
}

const a = "56";



console.log(a.toString());


