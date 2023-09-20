import React, { memo } from 'react';
//Utilizamos la función memo, la cual es una función que va regresar la forma memorizada del componente, y sólo
// se va disparar si los props cambian (en este caso 'valor').
export const ResultadoContador = memo(({ valor }) => {
    //Este console.log se va llamar cada vez que se cree el componente.
    console.log('Componente creado...');
    return (
        <small>{valor}</small>
    )
}
);
