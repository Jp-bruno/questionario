import React from 'react';

function Item_equipe(props) {
    return(
        <div className='item_equipe' onClick={(ev) => {
            let alvo = ev.target;

            if (alvo.classList.contains('ativo')) {
                alvo.style.backgroundColor = 'rgba(0, 0, 0, 0.103)'
                alvo.style.color = 'black'
                alvo.classList.remove('ativo')
            } else {
                alvo.style.backgroundColor = '#14213d'
                alvo.style.color = 'white'
                alvo.classList.add('ativo')
            }
        }}><p className='item_equipe_p'>{props.value}</p></div>
    )
}

export default Item_equipe;