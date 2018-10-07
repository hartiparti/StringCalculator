function Add(numbers)
{
	if(numbers === '')
	{	
		return 0;	
	}
	if(numbers.includes(","))
	{
		var first = parseInt(numbers.charAt(0));
		var second = parseInt(numbers.charAt(2));
		return parseInt(first + second);
	}
	else if(numbers = parseInt(numbers))
	{
		return parseInt(numbers);
	}
}

module.exports =  Add;