function saludar() {
    if (typeof nombre !== 'string' || nombre.trim() === '') {
        throw new Error('El nombre debe ser una cadena no vacía');
    }
    return `Hola ok`;
}

