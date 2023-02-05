const CSVToJSON = (data, delimiter = ',') => {
	const titles = data.slice(0, data.indexOf('\n')).split(delimiter);
	return data
		.slice(data.indexOf('\n') + 1)
		.split('\n')
		.map(v => {
			const values = v.split(delimiter);
			return titles.reduce(
				(obj, title, index) => {
					return ((obj[title] = values[index]), obj);
				},
				{}
			);
		});
};

let a = CSVToJSON('col1,col2\na,b\nc,d');
console.log(a)


// let aa = [1,2,3,4]
// console.log(aa.reduce((prev, cur, index, arr) => {
// 	console.log(prev, cur, index, arr);
// 	return prev+cur;
// }))
