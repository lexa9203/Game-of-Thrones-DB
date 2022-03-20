import React from 'react';
import ItemList from '../../components/itemList/itemList';
import ItemDetails from '../../components/itemDetails/itemDetails';
import GotService from '../../service/gotService';
import Field from '../../components/field/field'

export default class BooksPage extends React.Component {

    gotService = new GotService();

    state = {
        selectBook: null
    }

    selectedBook = (id) => {
        this.setState({
            selectBook: id
        })
    }

    render() {
        return(
            <div className='char-detals'>
                <div className='char-detals-item'>
                    <ItemList 
                        selectedItem={this.selectedBook}
                        getData={this.gotService.getAllBooks} />
                </div>
                <div className='char-detals-item'>
                    <ItemDetails selectName="выберите книгу" charId={this.state.selectBook} getDataOnId={this.gotService.getBook}>
                        <Field field="authors" label="Authors" />
                        <Field field="numberOfPages" label="Pages" />
                        <Field field="publisher" label="Publisher" />
                        <Field field="country" label="Country" />
                    </ItemDetails>
                </div>
            </div>
        )
    }
}