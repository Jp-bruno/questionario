import React from 'react';
import Item from '../item-component/item';
import Select from '../select-component/select';
import axios from 'axios';

class Form extends React.Component {
    handleSubmit = ev => {
        ev.preventDefault();


        const Objeto = {equipes: []};

        //Abaixo está a validação dos inputs: nome, idade, identidade, cpf, endereço, descreva
        if (document.getElementById('CPF').value.length !== 11) {
            document.getElementById('CPF').style.color = 'red';
            document.getElementById('CPF').scrollIntoView({ behavior: 'smooth' })
        } 

        [...document.querySelectorAll('.input')].forEach(el => {
            let titulo = document.querySelector(`.${el.id}`);
            let primeiro_elemento = document.querySelector('#Nome')

            if (el.value == 0) {
                titulo.style.color = 'red';
                primeiro_elemento.scrollIntoView({ behavior: 'smooth', block: 'center' })
                return
            } else {
                titulo.style.color = 'black'
                switch (el.id) {
                    case 'Nome':
                        Objeto.nome = el.value
                        break;
    
                    case 'Idade':
                        Objeto.idade = el.value
                        break;
    
                    case 'Identidade':
                        Objeto.identidade = el.value
                        break;
    
                    case 'CPF':
                        Objeto.cpf = el.value
                        break;
    
                    case 'Endereço':
                        Objeto.endereço = el.value
                        break;
    
                    case 'Descreva':
                        Objeto.descreva = el.value
                        break;
    
                    default:
                        break;
                }
            }
        })

        //Abaixo está a validação da seleção de equipes
        let _equipes = document.querySelectorAll('.item_equipe')

        _equipes.forEach(el => {
            if (el.classList.contains('ativo')) {
                Objeto.equipes.push(el.innerText)
            }
        })
        
        if (Objeto.equipes.length === 0) {
            document.querySelector('#equipes_holder').scrollIntoView({behavior: 'smooth', block: 'center'})
        } else {
            console.log(Objeto)
            axios.post('https://mighty-oasis-77266.herokuapp.com/teams', Objeto).then(r => console.log(r)).catch(e => console.log(e))
        }

        
    }

    render() {
        return (
            <form id='formulario' onSubmit={this.handleSubmit}>
                <Item titulo='Nome' texto='Nome' tipo='text'></Item>
                <Item titulo='Idade' texto='Idade' tipo='number'></Item>
                <Item titulo='Identidade' texto='Identidade' tipo='number'></Item>
                <Item titulo='CPF' texto='CPF' tipo='number'></Item>
                <Item titulo='Endereço' texto='Endereço' tipo='text'></Item>
                <Item titulo='Descreva' texto='Descreva quais dias e horários disponíveis em que o projeto poderá ser realizado por você voluntário (a/e)' tipo='text'></Item>
                <Select></Select>
            </form>
        )
    }
}

export default Form;