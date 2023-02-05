const CSVToArray = (data, delimiter = ',', omitFirstRow = false) =>
	data
		.slice(omitFirstRow? data.indexOf('\n') + 1 : 0)
		.split('\n')
		.map(v => v.split(delimiter));

let a = CSVToArray('a,b\nc,d')
console.log(a)

let b = CSVToArray('col1,col2\na,b\nc,d', ',', true);
console.log(b)

let c = CSVToArray('col1,col2\na,b\nc,d', ',', false);
console.log(c)