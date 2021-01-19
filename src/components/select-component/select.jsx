import React from 'react';
import Item_equipe from '../item-equipe-component/item-equipe'

class Select extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            error: null,
            loaded: false,
            equipes: []
        }
    }

    renderEquipe(equipe) {
        return <Item_equipe value={equipe.name}></Item_equipe>
    }

    componentDidMount() {
        const success = (response) => {
            this.setState({ loaded: true, equipes: response })
        }

        const error = error => this.setState({ loaded: true, error: error });

        fetch("https://mighty-oasis-77266.herokuapp.com/teams")
            .then(res => res.json())
            .then(success, error)
    }
    
    render() {
        const { error, loaded, equipes } = this.state;

        if (error) {
            return <div>Error...</div>
        }

        if (!loaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <section id='select_holder'>
                    <div className='titulo equipe'><p>Selecione as equipes que você faz parte</p></div>
                    <div id='equipes_holder'>
                        {equipes.map(this.renderEquipe)}
                    </div>
                </section>
            )
        }
    }

}

export default Select;