

interface I {
	'a': number,
	'b': number,
	'c': number
}

const o: I = {
	a: 1,
	b: 2,
	c: 3
};

type Res = 'a'[]

const res: Res = Object.keys(o) as (keyof Pick<I, 'a'>)[]




const v: Pick<I, 'a'> = { a: 2 }

const part: Partial<Omit<I, 'b'>> = {
	'a': 2,
	'c': 3
}












































