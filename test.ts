const functionAsync = async (): Promise<{ say: string }> => {
    await new Promise<void>((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 1000);
    });
    return { say: "hello" }
}

const otherFn = async () => {
    return await functionAsync();
}

const main = async () => {
    const result = (await otherFn()).say;
    console.log(result);
};