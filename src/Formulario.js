import './Formulario.css';
import Termo from './components/termo-component/termo'
import Submit from './components/item-submit/submit'
import Form from './components/form-component/form'

function Formulario() {
  return (
    <div className="App">
      <div className='quest-wrapper'>
        <Form></Form>
        <Termo></Termo>
        <Submit></Submit>
      </div>
    </div>
  );
}

export default Formulario;
