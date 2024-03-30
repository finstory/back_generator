
const calculator = (value1, value2) => {
    if (value1 === 0 && value2 === 0) {
        return 0;
    }
     return (((value2 - value1) / ((value1 + value2) / 2)) * 100);
}

// AIRE
export const speedAir = () => {
    const random = Math.random();
    const speed = parseFloat((random * (30 - 20 + 1) + 20).toFixed(2));
    return speed;
}



export const yesterdayAir = () => {
    const random = Math.random();
    const result = parseFloat((random * (30 - 20 + 1) + 20).toFixed(2));
    return result;
}

export const differentAir = () => {
    const today = speedAir();
    const yesterday = yesterdayAir();
    const result1 = calculator(today, yesterday).toFixed(2);
    const result2 = Number(result1)
    return result2;
}
// OXIGENO

export const oxygenInAirMedia = () => {
    const random = Math.random();
    const oxygen = parseFloat((random * (21 - 20.5) + 20.5).toFixed(2));
    return oxygen;
}

export const yesterdayOxygen = () => {
    const random = Math.random();
    const oxygen = parseFloat((random * (21 - 20.5) + 20.5).toFixed(2));
    return oxygen;
}

export const differentOxygen = () => {
    const today = oxygenInAirMedia()
    const yesterday = yesterdayOxygen()
    const result = Number(calculator(today, yesterday).toFixed(2))
    return result
}

//MONOXIDO DE CARBONO

export const carbonMonoxide = () =>{
    const random = Math.random();
    const result = parseFloat((random * (24.3 - 23.8) + 24).toFixed(2));
    return result;
}

export const yesterdayCarbonMonoxide = () => {
    const random = Math.random();
    const result = parseFloat((random * (24.3 - 23.8) + 24).toFixed(2));
    return result;
}

export const differentCarbonMonoxide = () => {
const today = carbonMonoxide()
const yesterday = yesterdayCarbonMonoxide()
const result1 = calculator(today, yesterday).toFixed(2)
const result2 = Number(result1)
return result2
}


//POLVO RESPIRABLE

export const respirableDust = () => {
    const random = Math.random();
    const result = parseFloat((random * (24.3 - 23.8) + 24).toFixed(2));
    return result;
}

export const yesterdayRespirableDust = () => {
    const random = Math.random();
    const result = parseFloat((random * (24.3 - 23.8) + 24).toFixed(2));
    return result;
}

export const differentRespirableDust = () => {
    const today = respirableDust()
    const yesterday = yesterdayRespirableDust()
    const result1 = calculator(today, yesterday).toFixed(2)
    const result2 = Number(result1)
    return result2 
}

//DIOXIDO DE CARBONO 

export const carbonDioxide = () => {
    const random = Math.random();
    const result = parseFloat((random * (24.3 - 23.8) + 24).toFixed(2));
    return result;
}

export const yesterdayCarbonDioxide = () => {
    const random = Math.random();
    const result = parseFloat((random * (24.3 - 23.8) + 24).toFixed(2));
    return result;
}

export const differentCarbonDioxide = () => {
    const today = carbonDioxide()
    const yesterday = yesterdayCarbonDioxide()
    const result1 = calculator(today, yesterday).toFixed(2)
    const result2 = Number(result1)
    return result2
}

//AMONIACO

export const ammonia = () => {
    const random = Math.random();
    const result = parseFloat((random * (24.3 - 23.8) + 24).toFixed(2));
    return result;
}

export const yesterdayAmmonia = () => {
    const random = Math.random();
    const result = parseFloat((random * (24.3 - 23.8) + 24).toFixed(2));
    return result;
}

export const differentAmmonia = () => {
    const today = ammonia()
    const yesterday = yesterdayAmmonia()
    const result1 = calculator(today, yesterday).toFixed(2)
    const result2 = Number(result1)
    return result2
}
        