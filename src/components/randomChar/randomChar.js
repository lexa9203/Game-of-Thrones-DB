import React, {Component} from 'react';
import GotService from '../../service/gotService';
import ErrorMesssage from '../error/errorMessage';
import './randomChar.css';

export default class RandomChar extends Component {

    constructor() {
        super();
        this.updateChar = this.updateChar.bind(this)
    }

    gotService = new GotService();

    state = {
        name: null,
        gender: null,
        born: null,
        died: null,
        culture: null,
        error: false
    }
    
    componentDidMount() {
        this.updateChar();
        this.timer = setInterval(this.updateChar, 10000)
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    onError = (err) => {
        this.setState({
            error: true
        })
    }

    updateChar() {
        const id = Math.floor(Math.random()*240+1); // от 1 до 240
        this.gotService.getCharacter(id)
            .then(char => {
                this.setState({
                    name: char.name || "нет данных",
                    gender: char.gender || "нет данных",
                    born: char.born || "нет данных",
                    died: char.died || "нет данных",
                    culture: char.culture || "нет данных"
                })
            })
            .catch(this.onError);
    }

    render() {
        const {name, gender, born, died, culture, error} = this.state;
        // подключение изображений из public папки
        // const loadImg = <img width={25} src="./img/1495.gif"/>;  
        const loadImg = <img alt="loading" width={25} src={process.env.PUBLIC_URL + "/img/1495.gif"}/>;

        if (error) {
            return (
                <div className="random-block">
                    <ErrorMesssage/>   
                </div> 
            )
        }

        return (
            <div className="random-block">
                <h4>Random Character: {name}</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <span className="term">Gender </span>
                        <span>{!gender ? loadImg : gender}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Born </span>
                        <span>{!born ? loadImg : born}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Died </span>
                        <span>{!died ? loadImg : died}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Culture </span>
                        <span>{!culture ? loadImg : culture}</span>
                    </li>
                </ul>
            </div>
        );
    }
}
