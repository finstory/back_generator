
export const useManagerText = () => {
    const compiler = {};

    //crea una opcion para poner todas las letras y solo las letras que recibas en mayusuclas, ejemplo: /hellS_ds  => /HELLOS_DS

    compiler.upperCaseList = (list) => {
        return list.map((string) => string[0].toUpperCase() + string.substring(1));
    };

    compiler.firsUpperCase = (string) => {
        return string[0].toUpperCase() + string.slice(1);
    };


    compiler.limitString = (string, limit) => {
        if (string && string.length > limit) return string.substring(0, limit) + "...";
        return string;
    };

    compiler.allFirstUpperCase = (list, split = " ") => {
        return list
            .split(split)
            .map((string) => string.charAt(0).toUpperCase() + string.slice(1))
            .toString()
            .replace(/,/g, split);
    };


    return { ...compiler };

}
