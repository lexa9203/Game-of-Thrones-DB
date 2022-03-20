import React from 'react';
import Header from '../header/header';
import RandomChar from '../randomChar/randomChar';
import CharacterPage from '../../pages/characterPage/characterPage';
import BooksPage from '../../pages/booksPage/booksPage';
import HousesPage from '../../pages/housesPage/housesPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './app.css'

export default class App extends React.Component {

    state = {
        random: false
    }

    toggleRandom = () => {
        this.setState({
            random: !this.state.random
        })
    }

    

    render() {

        const rand = !this.state.random ? <RandomChar/> : null;

        return(
            <Router>
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
                        <Routes>
                            <Route path="/" />
                            <Route path="/houses" element={<HousesPage />} />
                            <Route path="/books" element={<BooksPage />} />
                            <Route path="/characters" element={<CharacterPage />} />
                        </Routes>                    
                    </div>
                </>
            </Router>
            
        )
    } 
  
};