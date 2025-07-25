exports.suma = (numeroUno, numeroDos) => {
    const n1 = Number(numeroUno);
    const n2 = Number(numeroDos);

    if (isNaN(n1) || isNaN(n2)) {
        throw new Error('No son números válidos');
    }

    return n1 + n2;
};
