import React, { useRef } from 'react'
import { Text, View } from 'react-native';
import { BotonCalc } from '../components/BotonCalc';
import { styles } from '../theme/appTheme';
import { useState } from 'react';
import { useCalculadora } from '../hooks/useCalculadora';



export const CalculadoraScreen = () => {

    const { numeroAnterior,
        numero,
        limpiar,
        positivoNegativo,
        btnDelete,
        btnDividir,
        armarNumero,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        calcular } = useCalculadora();



    return (
        <View style={styles.calculadoraContainer}>
            {
                (numeroAnterior !== '0')
                &&
                (<Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>)
            }
            <Text style={styles.resultado}
                numberOfLines={1}
                adjustsFontSizeToFit={true}
            >{numero}</Text>

            {/* Fila de Botones */}
            <View style={styles.fila}>
                <BotonCalc text='C' accion={limpiar} />
                <BotonCalc text='+/-' accion={positivoNegativo} />
                <BotonCalc text='Del' accion={btnDelete} />
                <BotonCalc text='/' color='#FF9427' accion={btnDividir} />
            </View>

            {/* Fila de Botones */}
            <View style={styles.fila}>
                <BotonCalc text='7' accion={armarNumero} />
                <BotonCalc text='8' accion={armarNumero} />
                <BotonCalc text='9' accion={armarNumero} />
                <BotonCalc text='*' color='#FF9427' accion={btnMultiplicar} />
            </View>


            {/* Fila de Botones */}
            <View style={styles.fila}>
                <BotonCalc text='4' accion={armarNumero} />
                <BotonCalc text='5' accion={armarNumero} />
                <BotonCalc text='6' accion={armarNumero} />
                <BotonCalc text='-' color='#FF9427' accion={btnRestar} />
            </View>


            {/* Fila de Botones */}
            <View style={styles.fila}>
                <BotonCalc text='1' accion={armarNumero} />
                <BotonCalc text='2' accion={armarNumero} />
                <BotonCalc text='3' accion={armarNumero} />
                <BotonCalc text='+' color='#FF9427' accion={btnSumar} />
            </View>

            {/* Fila de Botones */}
            <View style={styles.fila}>
                <BotonCalc text='0' ancho accion={armarNumero} />
                <BotonCalc text='.' accion={armarNumero} />
                <BotonCalc text='=' color='#FF9427' accion={calcular} />
            </View>

        </View>

    )

}