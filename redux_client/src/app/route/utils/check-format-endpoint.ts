import printAlert from "@/_common/_plugins/toast-alerts";

export const checkFormatEndpoint = (endpoint: string) => {
    try {
        const characters_especial = /[^a-zA-Z0-9_:\/_]/;
        const upperCase = /[A-Z]/;
        const colonWithoutSlash = /(?<!\/):/;
        if (colonWithoutSlash.test(endpoint)) throw new Error("Slash' ':' error, try only use ':' after '/'. Example => '/:params'");
        if (characters_especial.test(endpoint)) throw new Error("Endpoint can't contain special characters");
        if (upperCase.test(endpoint)) throw new Error("Endpoint can't contain uppercase characters");
        if (!endpoint.startsWith("/")) throw new Error("Endpoint must start with '/'");
    } catch (err) {
        printAlert(err.message, "error");
        throw err;
    }
}