function Add(numbers)
{
	if(numbers === '')
	{	
		return 0;	
	}
	if(numbers.includes(","))
	{
		var inputNumbers = numbers.split(",");
		return ArrayOfNumbers(inputNumbers);
	}
	else if(numbers = parseInt(numbers))
	{
		return parseInt(numbers);
	}
}

function ArrayOfNumbers(inputNumbers)
{
	var totalnumbers = 0;
	for(var i = 0; i < inputNumbers.length; i++)
	{
		totalnumbers = totalnumbers + parseInt(inputNumbers[i]);
	}
	return totalnumbers;
}

module.exports =  Add;