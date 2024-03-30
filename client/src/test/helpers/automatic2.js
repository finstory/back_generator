//HORARIO

export const firstHours = () => {
  const horarioAleatorio = new Date();
  const horaAleatoria = Math.floor(Math.random() * 12) + 1;
  const minutosAleatorios = Math.floor(Math.random() * 60);
  const amOpm = Math.floor(Math.random() * 2);
  let amOpmString = "";
  if (amOpm === 0) {
    amOpmString = "AM";
  } else {
    amOpmString = "PM";
  }
  horarioAleatorio.setHours(horaAleatoria);
  horarioAleatorio.setMinutes(minutosAleatorios);
  return {
    hora: horarioAleatorio.getHours(),
    minutos: horarioAleatorio.getMinutes(),
    amOpmString,
  };
};

export const secondHours = () => {
  const primerHorario = firstHours();
  const segundoHorario = new Date();
  segundoHorario.setHours(primerHorario.hora + 3);
  segundoHorario.setMinutes(primerHorario.minutos);
  let segundoAmOpm = primerHorario.amOpmString;
  if (segundoHorario.getHours() >= 12) {
    segundoAmOpm = segundoHorario.getHours() === 12 ? "PM" : "AM";
  }
  return { primerHorario, segundoHorario, segundoAmOpm };
};

export const resultHours = () => {
  const { primerHorario, segundoHorario, segundoAmOpm } = secondHours();
  const primerHorarioFormateado = `${primerHorario.hora}:${
    primerHorario.minutos < 10 ? "0" : ""
  }${primerHorario.minutos} ${primerHorario.amOpmString}`;
  const segundoHorarioFormateado = `${segundoHorario.getHours()}:${
    segundoHorario.getMinutes() < 10 ? "0" : ""
  }${segundoHorario.getMinutes()} ${segundoAmOpm}`;

  // Mostrar los horarios concatenados
  return `${primerHorarioFormateado} - ${segundoHorarioFormateado}`;
};

//FECHA

export const resultDate = () => {
  const fecha = new Date();
  const meses = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];
  const nombreMes = meses[fecha.getMonth()];
  const anio = fecha.getFullYear();
  const nombreMesAnio = `${nombreMes}, ${anio}`;
  return nombreMesAnio
};


//LUMENES 

export const cantLumenes = () => {
   var values = [3000, 3500, 4000, 4500, 5000, 5500, 6000];
   var result = Math.floor(Math.random() * values.length);
   return values[result];
}