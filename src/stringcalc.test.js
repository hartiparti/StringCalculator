const Add = require('./stringcalc');

test("returns 0 if string is empty", () => {
	expect(Add('')).toEqual(0);
});

test("returns a number if string is only a one number", () => {
	expect(Add('2')).toEqual(2);
});

test("returns the sum of two given numbers", ()	=> {
	expect(Add("1,2")).toEqual(3);
});


test("returns the sum of all given numbers", ()	=> {
	expect(Add("1,2,3")).toEqual(6);
});


test("returns the sum of all given numbers, with newline", ()	=> {
	expect(Add("1\n2,3")).toEqual(6);
});

test("returns exception if numbers are negatives", ()	=> {
	expect(() => { Add("-1, 2");
	}).toThrowError("NegativeNumbersException");
});

test("returns exception if numbers are negatives", ()	=> {
	expect(() => { Add("-1,-4,3,-5");
	}).toThrowError("NegativeNumbersException");
});


test("ignores all numbers higer than 1000", ()	=> {
	expect(Add("1001,2")).toEqual(2);
});
