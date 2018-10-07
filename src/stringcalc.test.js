const Add = require('./stringcalc');

test("returns 0 if string is empty", () => {
	expect(Add('')).toEqual(0);
});