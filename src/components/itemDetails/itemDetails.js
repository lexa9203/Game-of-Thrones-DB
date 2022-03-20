import React, {Component} from 'react';
import GotService from '../../service/gotService';

import './itemDetails.css';

export default class ItemDetails extends Component {
    
    gotService = new GotService();

    state = {
        char: null
    }

    componentDidUpdate(prevProps) {
        if(this.props.charId !== prevProps.charId) {
            this.updateChar();
        }
    }

    updateChar() {
        const {charId, getDataOnId} = this.props;
        if(!charId) {
            return;
        }
        getDataOnId(charId)
            .then((char) => {
                this.setState({
                    char
                })
            })
    }

    render() {

        const {selectName} = this.props;

        if(!this.state.char) {
            return <span style={{color:"white"}}>{selectName}</span>
        }

        const {name} = this.state.char;
        const {char} = this.state;

        return (
            <div className="char-details-wrapper">
                <h4 style={{textAlign:"center"}}>{name}</h4>
                <ul className="list-group">
                    {
                        React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, {char})
                        })
                    }
                </ul>
            </div>
        );
    }
}