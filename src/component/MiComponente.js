import React, {Component} from 'react';

class MiComponente extends Component{
    render(){
        let receta={
            nombre: 'Pizza',
            ingredientes:['tomates', 'queso','harina', 'Jamon cocido'],
            calorias:400
        };
        return (
            <div className="mi-componente">
                <h1>{'Receta:' +receta.nombre}</h1>
                <h2>{'Calorias:' +receta.calorias}</h2>
                <h1>{'Ingredientes: ' +receta.ingredientes}</h1>
                <ol>
                    {
                        receta.ingredientes.map((ingrediente,i) => {
                            console.log(ingrediente);
                            return (
                                <li key={1}>
                                    {ingrediente}
                                </li>
                            );
                        }) 

                    }           
                </ol>
                <hr/>
            </div>
            
        );
    
    }    
            
           
    

}
export default MiComponente;