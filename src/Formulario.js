import './Formulario.css';
import Item from './components/item-component/item'
import Select from './components/select-component/select'
import Termo from './components/termo-component/termo'
function Formulario() {
  return (
    <div className="App">
      <div className='quest-wrapper'>
        <Item titulo='Nome' texto='Nome' tipo='text'></Item>
        <Item titulo='Idade' texto='Idade' tipo='number'></Item>
        <Item titulo='Identidade' texto='Identidade' tipo='number'></Item>
        <Item titulo='CPF' texto='CPF' tipo='number'></Item>
        <Item titulo='Endereço' texto='Endereço' tipo='text'></Item>
        <Item titulo='Descreva' texto='Descreva quais dias e horários disponíveis em que o projeto poderá ser realizado por você voluntário (a/e)' tipo='text'></Item>
        <Select></Select>
        <Termo></Termo>
        <button className='submit-button' type='submit' disabled onClick={(ev) => {
          [...document.querySelectorAll('.input')].forEach(el => {
            let titulo = document.querySelector(`.${el.id}`);
            if (el.value == 0) {
              titulo.style.color = 'red';
              el.scrollIntoView({behavior: 'smooth', block: 'start'})
              ev.preventDefault();
            } else {
              titulo.style.color = 'black'
            }
            if (document.getElementById('CPF').value.length < 11) {
              titulo.style.color = 'red';
              document.getElementById('CPF').scrollIntoView({behavior: 'smooth', block: 'start'})
              ev.preventDefault();
            }
          })
        }}>ENVIAR</button>
      </div>
    </div>
  );
}

export default Formulario;
