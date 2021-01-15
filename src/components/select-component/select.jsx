import React from 'react';
import Item_equipe from '../item-equipe-component/item-equipe'

function Select(props) {
    return (
        <section id='select_holder'>
            <div className='titulo equipe'><p>Selecione as equipes que você faz parte</p></div>
            <div id='equipes_holder'>
                <Item_equipe texto='Equipe de Administração (ADM, Financeiro e Fiscal)'></Item_equipe>
                <Item_equipe texto='Equipe Executiva (Diretores e Coordenadores)'></Item_equipe>
                <Item_equipe texto='Equipe Jurídica'></Item_equipe>
                <Item_equipe texto='Equipe de TI - (Tecnologia da Informação)'></Item_equipe>
                <Item_equipe texto='Equipe de Projetos Web (Desenvolvimento Web)'></Item_equipe>
                <Item_equipe texto='Equipe de Projetos e Mobilização de Recursos'></Item_equipe>
                <Item_equipe texto='Equipe de Diversidade e Inclusão - Já atuantes na área em grupos de afinidades'></Item_equipe>
                <Item_equipe texto='Equipe de Eventos - Técnico de eventos e outros'></Item_equipe>
                <Item_equipe texto='Equipe de Comunicação/Redação Site LGBT+.org'></Item_equipe>
                <Item_equipe texto='Equipe de Comunicação Bilíngue - Tradutores e Redatores no Site LGBT+, Mídias Sociais e Imprensa (Comunicação)'></Item_equipe>
                <Item_equipe texto='Equipe de Assessoria de Imprensa (Comunicação)'></Item_equipe>
                <Item_equipe texto='Equipe de Marketing'></Item_equipe>
                <Item_equipe texto='Equipe de Mídias Sociais'></Item_equipe>
                <Item_equipe texto='Equipe de Arte - Designers e Editores de Vídeo (MKT)'></Item_equipe>
                <Item_equipe texto='Equipe de Fotógrafos - Para captar fotos para as mídias socias da ONG'></Item_equipe>
                <Item_equipe texto='Equipe TV LGBT+ - Apresentadores, Roteiristas, Técnicos e outros'></Item_equipe>
                <Item_equipe texto='Equipe Programa Jornal LGBT+ -  Ancoras, Jornalistas e Repórteres (TV LGBT+)'></Item_equipe>
                <Item_equipe texto='Equipe MarketPlace LGBT+ - Assessores de parcerias, outros'></Item_equipe>
                <Item_equipe texto='Equipe Loja LGBT+ - Criadores dEquipe Rádio LGBT+ - Locutores, Apresentadores, Roteiristas, Técnicos e outros'></Item_equipe>
                <Item_equipe texto='Equipe Rádio LGBT+ - Locutores, Apresentadores, Roteiristas, Técnicos e outros'></Item_equipe>
                <Item_equipe texto='Equipe Podcast LGBT+ - Apresentadores, Roteiristas, Técnicos e outros'></Item_equipe>
            </div>
        </section>
    )
}

export default Select;