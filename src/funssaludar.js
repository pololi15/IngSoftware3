function saludar() {
    if (typeof nombre !== 'string' || nombre.trim() === '') {
        throw new Error('El nombre debe ser una cadena no vacía');
    }
    return `Hola ok`;
}

function saludar(nombre) {
    if (typeof nombre !== 'string' || nombre.trim() === '') {
        throw new Error('El nombre debe ser una cadena no vacía');
    }
    return `Hola, ${nombre}!`;
}

function saludarPorHora(hora) {
    if (typeof hora !== 'number' || hora < 0 || hora > 23) {
        throw new Error('La hora debe ser un número entre 0 y 23');
    }
    if (hora < 12) {
        return 'Buenos días';
    } else if (hora < 18) {
        return 'Buenas tardes';
    } else {
        return 'Buenas noches';
    }
}

function saludarNombreGenero(nombre, genero) {
    if (typeof nombre !== 'string' || nombre.trim() === '') {
        throw new Error('El nombre debe ser una cadena no vacía');
    }
    if (genero !== 'masculino' && genero !== 'femenino') {
        throw new Error('El género debe ser "masculino" o "femenino"');
    }
    return `Hola, ${nombre} (${genero})!`;
}

function saludarNombreEdad(nombre, edad) {
    if (typeof nombre !== 'string' || nombre.trim() === '') {
        throw new Error('El nombre debe ser una cadena no vacía');
    }
    if (typeof edad !== 'number' || edad < 0) {
        throw new Error('La edad debe ser un número positivo');
    }
    return `Hola, ${nombre}! Tienes ${edad} años.`;
}

function saludarEspaniol() {
    return 'Hola, ¿cómo estás?';
}