"use strict";
function isSuccess(res) {
    if (res.status === "success" /* Status.Success */) {
        return true;
    }
    else {
        return false;
    }
}
const guardFn = (res) => {
    if (isSuccess(res)) {
        return res.data.dbId;
    }
    else {
        throw new Error(res.data.errMes);
    }
};
// ==================================================
const reques = {
    sum: 10,
    from: 2,
    to: 4
};
const successResponse = {
    status: "success" /* Status.Success */,
    data: {
        dbId: 5,
        sum: 10,
        from: 2,
        to: 4
    }
};
const faildResponse = {
    status: "faild" /* Status.Faild */,
    data: {
        errMes: 'repeat',
        errCode: 4
    }
};
