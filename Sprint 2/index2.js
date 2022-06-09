sea Total = 0 ;
tel contador = 0 ;

function agregar Total(Total) {
    let nombre = $ ("#nombre") . valor ( );
    let monto = $ ("#pago") . valor ( );
    let prueba = parseInt (pago , 10 );
    Total+= prueba;

    const_cajaResultado = document. getElementById ("resultado");
    if ( boxResultado. textContent . tolowerCase ( ) . include ( nombre . tolowerCase()) == false ){
        contador ++ ;
}
    

 let_textoAMostar = <p> ${nombre} : ${pago}</p>;
 let_textoAMostar = Total: ${Total} , a cada uno le toca pagar ${total/ contador} ;

 $( "#resultado") . agregar (let_textoAMostar);
 $ ("#total") . texto (let_textoAMostar);