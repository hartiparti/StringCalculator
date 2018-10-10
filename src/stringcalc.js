function Add(numbers)
{	

	var StringNumbers = Split(numbers);

	if(numbers === '')
	{	
		return 0;	
	}
	else if(parseInt(numbers) < 0 )
	{	
		throw NegativeNumbersException("negativenumbers are not allowed");
		CheckNegativeNumbers(StringNumbers);

	} 
	else if(StringNumbers.length <= 1)
	{
		return parseInt(numbers);
	}	
	else
	{
		return Sum(StringNumbers);
	}
			
}

function Split(numbers)
{	

	var delim = "//";

	if(!numbers.includes(","))
	{
		return numbers.split(/delim|;|\\n/);
	}
	if(numbers.includes(",") && numbers.includes("\n") )
	{
		return numbers.split(/,|\n/);
	}

	else if(numbers.includes("\n") && !numbers.includes(","))
	{
	
		return numbers.split("\n");
	}
	else if(numbers.includes(",") && !numbers.includes("\n"))
	{
		return numbers.split(",");
	}

	else
	{
		return numbers;	
	}
	
		
}

function Sum(inputNumbers)
{	
	var totalnumbers = 0;
	for(var i = 0; i < inputNumbers.length; i++)
	{	  
		if(parseInt(inputNumbers[i]) <= 1000)
		{
            totalnumbers = totalnumbers + parseInt(inputNumbers[i]);
        }
	}
	return totalnumbers;		
}

function CheckNegativeNumbers(inputNumbers)
{
	var negativenumbers = 0;
	var stringVal = 'Negatives not allowed:';
	for(var i = 0; i < inputNumbers.length; i++)
	{	
		if(parseInt(inputNumbers[i] < 0))
		{
			 negativenumbers = negativenumbers + parseInt(inputNumbers[i])
		}
		return  'Negatives not allowed:';
     	
    }
}

module.exports =  Add;