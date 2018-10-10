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
	/*
	if(numbers.includes(",") || numbers.includes("\n") )
	{
		return numbers.split('/,|\n/');
	}
	else */ 

	if(numbers.includes("\n") && numbers.includes(","))
	{
		//numbers.split(',')
		//numbers.split('\n');
		
		return numbers.split('\n') ;

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
		if(parseInt(inputNumbers[i]) <= 1000){
            totalnumbers = totalnumbers + parseInt(inputNumbers[i]);
        }
		 
	}
	return totalnumbers
		
}

module.exports =  Add;