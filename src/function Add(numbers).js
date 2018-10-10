function Add(numbers)
{
	if(numbers === '')
	{	
		return 0;	
	}
	if(parseInt(numbers) < 0 )
	{	
		var NegNumbers = GetNegative(numbers);
		throw NegativeNumbersException("negativenumbers are not allowed" + NegNumbers);

	}
	if(parseInt(numbers) >= 1000)
	{
		/*var regex = new RegExp('[1-9][0-1]{0,3}|100');
		var inputNumbers = numbers.split(",");
		var found = numbers.match(regex);

		found.slice(inputNumbers);*/
		var inputNumbers = numbers.split(",");
	
		return ArrayOfNumbers(inputNumbers);
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
			if(inputNumbers.length <= 1000)
			{
				totalnumbers+=parseInt(inputNumbers[i]);
			}
		}

		return totalnumbers;
}

function GetNegative(inputNumbers)
{		
	
	var negativenumbers = inputNumbers.split(",").filter(inputNumbers=> inputNumbers < 0);
			
	return negativenumbers;
}



module.exports =  Add;