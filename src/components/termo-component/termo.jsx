import React from 'react';

function Termo(props) {
    return(
        <div id='termos_holder'>
            <iframe id='termo' title='termo' src="https://drive.google.com/file/d/1MiC4J_VZVev1_QhbNnHMLQlLkZP_N1GC/preview" width="100%" height="480"></iframe>
            <p className='li_e_concordo'><input type="checkbox" name="check" id="li_e_concordo" onClick={(ev) => {
                let botao = document.querySelector('.submit-button')
                botao.hasAttribute('disabled') ? botao.removeAttribute('disabled') : botao.setAttribute('disabled', true)
            }}/>Li e concordo com os termos acima.</p>
        </div>

    )
}

export default Termo;