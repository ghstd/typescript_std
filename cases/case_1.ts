const enum Status {
	Success = 'success',
	Faild = 'faild'
}

interface IRequesData {
	sum: number,
	from: number,
	to: number
}

interface IReques extends IRequesData { }

interface ISuccessResponseData extends IRequesData {
	dbId: number,
}

interface IFaildResponseData {
	errMes: string,
	errCode: number
}

interface ISuccessResponse {
	status: Status.Success,
	data: ISuccessResponseData
}

interface IFaildResponse {
	status: Status.Faild
	data: IFaildResponseData
}

type Res = ISuccessResponse | IFaildResponse;

type Func = (res: Res) => number;

function isSuccess(res: Res): res is ISuccessResponse {
	if (res.status === Status.Success) {
		return true
	} else {
		return false
	}
}

const guardFn: Func = (res: Res): number => {
	if (isSuccess(res)) {
		return res.data.dbId
	} else {
		throw new Error(res.data.errMes)
	}
}

// ==================================================

const reques: IReques = {
	sum: 10,
	from: 2,
	to: 4
};

const successResponse: ISuccessResponse = {
	status: Status.Success,
	data: {
		dbId: 5,
		sum: 10,
		from: 2,
		to: 4
	}
};

const faildResponse: IFaildResponse = {
	status: Status.Faild,
	data: {
		errMes: 'repeat',
		errCode: 4
	}
};



















































