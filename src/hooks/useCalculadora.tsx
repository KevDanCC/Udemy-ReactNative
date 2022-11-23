import { useRef, useState } from "react";


enum Operadores {
    sumar, restar, multiplicar, dividir
}


export const useCalculadora = () => {
    const [numeroAnterior, setNumeroAnterior] = useState('0');
    const [numero, setNumero] = useState('0');

    const ultimaOperacion = useRef<Operadores>()

    const limpiar = () => {
        setNumero('0');
        setNumeroAnterior('0');
    }

    const armarNumero = (numeroEntrante: string) => {
        // No aceotar doble punto
        if (numero.includes('.') && numeroEntrante === '.') return;

        if (numero.startsWith('0') || numero.startsWith('-0')) {

            // Condiciones entre cero y punto decimal
            if (numeroEntrante === '.')
                setNumero(numero + numeroEntrante);
            // Evaluar si es 0 y tiene punto decimal
            else if (numeroEntrante === '0' && numero.includes('.'))
                setNumero(numero + numeroEntrante);
            // Evaluar si no es cero y no tiene punto decimal
            else if (numeroEntrante !== '0' && !numero.includes('.'))
                setNumero(numeroEntrante)
            // Evitar 000000.0
            else if (numeroEntrante === '0' && !numero.includes('.')) return;
            else
                setNumero(numero + numeroEntrante);

        } else
            setNumero(numero + numeroEntrante);

    }


    const positivoNegativo = () => {
        if (numero.includes('-'))
            setNumero(numero.replace('-', ''));
        else
            setNumero('-' + numero);
    }

    const btnDelete = () => {
        const actualNumber = numero.slice(0, numero.length - 1);
        if (actualNumber.length === 0 || (actualNumber.length === 2 && actualNumber.startsWith('-')))
            setNumero('0');
        else
            setNumero(actualNumber);
    }


    const cambiarNumPorAnterior = () => {
        (numero.endsWith('.'))
            ? setNumeroAnterior(numero.slice(0, -1))
            : setNumeroAnterior(numero)
        setNumero('0');

    }

    const btnDividir = () => {
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.dividir;
    }

    const btnMultiplicar = () => {
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.multiplicar;
    }

    const btnRestar = () => {
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.restar;
    }

    const btnSumar = () => {
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.sumar;
    }


    const calcular = () => {


        const numero1 = Number(numero);
        const numero2 = Number(numeroAnterior);

        switch (ultimaOperacion.current) {
            case Operadores.sumar:
                setNumero(`${numero1 + numero2}`);
                break;
            case Operadores.restar:
                setNumero(`${numero2 - numero1}`);
                break;

            case Operadores.multiplicar:
                setNumero(`${numero1 * numero2}`);
                break;
            case Operadores.dividir:
                setNumero(`${numero2 / numero1}`);
                break;
            default:
                break;
        }

        setNumeroAnterior('0');

    }

    return {
        numeroAnterior,
        numero,
        limpiar,
        positivoNegativo,
        btnDelete,
        btnDividir,
        armarNumero,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        calcular
    }





}
