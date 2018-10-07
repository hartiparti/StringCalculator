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