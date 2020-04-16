import React from 'react';
import Keyboard from '../components/Keyboard';
import Display from '../components/Display';

export default function Calculator(){
    return(
        <div>
            <p>Calculadora</p>
            <Display></Display>
            <Keyboard></Keyboard>
        </div>
    );
}
