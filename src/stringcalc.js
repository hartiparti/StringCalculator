function Add(numbers)
{
	if(numbers === '')
	{	
		return 0;	
	}
	if(parseInt(numbers) < 0 )
	{	

		throw NegativeNumbersException("negativenumbers are not allowed");

	}


	if(numbers.includes(",") && !numbers.includes("\n"))
	{
		var inputNumbers = numbers.split(",");
		return ArrayOfNumbers(inputNumbers);
	}

	if(numbers.includes("\n")  &&  numbers.includes(","))
	{
		var oldLine = numbers.split("\n");
		oldLine = ArrayOfNumbers(oldLine);
		var nextLineNumbers = numbers.split(",");
		nextLineNumbers = ArrayOfNumbers(nextLineNumbers);
		return parseInt(oldLine + nextLineNumbers) - 1;
		/*var inputNumbers = numbers.split("
		var firstLineNumbers = ArrayOfNumbers(inputNumbers);
		return ArrayOfNumbers(firstLineNumbers);*/
		
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