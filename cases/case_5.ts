

interface IForm {
	name: string
	password: string
}

const form: IForm = {
	name: 'test name',
	password: '123'
}

type IFormMap<T> = {
	[prop in keyof T]: {
		isValid: true
	} | {
		isValid: false
		errorMessage: string
	}
}

const formV: IFormMap<IForm> = {
	name: { isValid: true },
	password: { isValid: false, errorMessage: 'err message' }
};




























































