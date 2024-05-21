
const promiseWrapper = async (callback: (resolve: (value?: any) => void, reject: (reason?: any) => void) => void, timer: number = 1, msgTimerError: string) => {

    let setTimer: NodeJS.Timeout;

    await new Promise<any>((resolve, reject) => {
        callback(resolve, reject);

        setTimer = setTimeout(() => {
            if (msgTimerError) reject(new Error(msgTimerError));
            else reject(new Error("Timeout in process..."));
        }, timer * 1000);

    })
        .then((msg) => { if (msg) console.log(msg); clearTimeout(setTimer); })
        .catch((err) => {
            clearTimeout(setTimer);
            if (err[1] && err[2]) throw new Error(err[2]);
            else throw err;
        })
}

export default promiseWrapper;