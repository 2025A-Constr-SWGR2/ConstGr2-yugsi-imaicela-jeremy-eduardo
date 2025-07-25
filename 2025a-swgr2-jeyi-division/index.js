exports.division = (numeroUno, numeroDos) => {
    const n1 = Number(numeroUno);
    const n2 = Number(numeroDos);

    if (isNaN(n1) || isNaN(n2)) {
        throw new Error('No son números válidos');
    }

    if (n2 === 0) {
        throw new Error('No se puede dividir para 0');
    }

    return n1 / n2;
};
