import saludar from './funssaludar';

describe('saludar1', () => {
  it('deberia devolver Hola ok', () => {
    expect(saludar.saludar1()).toEqual('Hola ok');
  });
});

describe('saludar', () => {
  it('deberia saludar a la persona indicada', () => {
    expect(saludar.saludar('juan')).toEqual('Hola juan');
  });
});

describe('saludarPorHora', () => {
  it('deberia devolver Buenos días para horas antes de las 12', () => {
    expect(saludar.saludarPorHora(10)).toEqual('Buenos días');
  });

  it('deberia devolver Buenas tardes para horas entre 12 y 18', () => {
    expect(saludar.saludarPorHora(15)).toEqual('Buenas tardes');
  });

  it('deberia devolver Buenas noches para horas despues de las 18', () => {
    expect(saludar.saludarPorHora(20)).toEqual('Buenas noches');
  });
});

describe('saludarNombreGenero', () => {
  it('deberia saludar a la persona con su genero', () => {
    expect(saludar.saludarNombreGenero('Ana', 'femenino')).toEqual('Hola, Ana (femenino)!');
    expect(saludar.saludarNombreGenero('Carlos', 'masculino')).toEqual('Hola, Carlos (masculino)!');
  });
});

describe('saludarNombreEdad', () => {
  it('deberia saludar a la persona con su edad', () => {
    expect(saludar.saludarNombreEdad('Luis', 30)).toEqual('Hola, Luis! Tienes 30 años.');
  });   
});

describe('saludarEspaniol', () => {
  it('deberia devolver el saludo en español', () => {
    expect(saludar.saludarEspaniol()).toEqual('Hola, ¿cómo estás?');
  });
});    

describe('saludarIngles', () => {
  it('deberia devolver el saludo en inglés', () => {
    expect(saludar.saludarIngles()).toEqual('Hello, how are you?');
  });
});


