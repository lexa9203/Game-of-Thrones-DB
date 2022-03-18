import React from 'react';
import Header from '../header/header';
import RandomChar from '../randomChar/randomChar';
import ItemList from '../itemList/itemList';
import CharDetails from '../charDetails/charDetails';

import './app.css'

export default class App extends React.Component {
    constructor() {
        super();
        this.toggleRandom = this.toggleRandom.bind(this)
    }

    state = {
        random: false
    }

    toggleRandom() {
        this.setState({
            random: !this.state.random
        })
    }

    render() {

        const rand = !this.state.random ? <RandomChar/> : null;

        return(
            <> 
                <div className='container'>
                    <Header />
                </div>
                <div className='container'>
                    <div className='char-detals'>
                        <div>
                            {rand}
                            <button className='btn-toggle' onClick={this.toggleRandom}>{this.state.random?"Показать персонажа":"Скрыть персонажа"}</button>
                        </div>
                    </div>
                    <div className='char-detals'>
                        <div className='char-detals-item'>
                            <ItemList />
                        </div>
                        <div className='char-detals-item'>
                            <CharDetails />
                        </div>
                    </div>
                </div>
            </>
        )
    } 
  
};