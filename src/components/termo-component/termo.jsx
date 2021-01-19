import React from 'react';

function Termo(props) {
    return (
        <div id='termos_holder'>
            <div className='titulo'><p>Leia o termo de adesão ao serviço voluntário</p></div>

            <div id='iframe_holder' onScroll={(ev) => {
                let holder = document.querySelector('#iframe_holder')
                let check = document.querySelector('#li_e_concordo')

                if (holder.scrollTop >= 2600) {
                    check.hasAttribute('disabled') ? check.removeAttribute('disabled') : console.log('oi')
                }
            }}>
                <iframe id='iframe' title='termo' src="https://drive.google.com/file/d/1MiC4J_VZVev1_QhbNnHMLQlLkZP_N1GC/preview" width="100%"></iframe>
            </div>

            <div id="check_holder">
                <p className='li_e_concordo'>
                    <input type="checkbox" disabled id="li_e_concordo" onChange={() => {
                        let submit_button = document.querySelector('#submit-button');
                        submit_button.hasAttribute('disabled') ? submit_button.removeAttribute('disabled') : submit_button.setAttribute('disabled', true)
                    }} />Li e concordo com os termos acima.
                </p>
            </div>
        </div>

    )
}

export default Termo;