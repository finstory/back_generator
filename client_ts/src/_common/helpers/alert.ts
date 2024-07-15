export const confirmAlert = async (msg?: string): Promise<boolean> => {
    return new Promise<boolean>((resolve) => {
        const result = window.confirm(msg || "Are you sure?");
        resolve(result);
        setTimeout(() => {
            console.log("timeout");
            resolve(false);
        }, 20000);
    });
}