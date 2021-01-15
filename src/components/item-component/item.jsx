import React from 'react';

function Item(props) {
    return(
        <div className="item">
            <div className={`titulo ${props.titulo}`} ><p>{props.texto}</p></div>
            <div><input className='input' id={props.titulo} type={props.tipo} onKeyUp={(ev) => {
                if (props.titulo === 'CPF') {
                    let input = document.getElementById(`${props.titulo}`)
                    let titulo = document.querySelector(`.${props.titulo}`)

                    if (!input.onfocus) {
                        if (!!(input.value.match(/^\d{11}$/))) {
                            input.style.borderBottomColor = 'black';
                            titulo.style.color = 'black';
                        }
                        
                        if (!(input.value.match(/^\d{11}$/))) {
                            input.style.borderBottomColor = 'red';
                            titulo.style.color = 'red';
                        }
                    }
                }
            }}/>
            </div>
        </div>
    )
}

export default Item;