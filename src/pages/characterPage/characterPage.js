import React from 'react';
import ItemList from '../../components/itemList/itemList';
import ItemDetails from '../../components/itemDetails/itemDetails';
import GotService from '../../service/gotService';
import Field from '../../components/field/field'

export default class CharacterPage extends React.Component {

    gotService = new GotService();

    state = {
        selectChar: null
    }

    selectedChar = (id) => {
        this.setState({
            selectChar: id
        })
    }

    render() {
        return(
            <div className='char-detals'>
                <div className='char-detals-item'>
                    <ItemList 
                        selectedItem={this.selectedChar}
                        getData={this.gotService.getAllCharacters} />
                </div>
                <div className='char-detals-item'>
                    <ItemDetails selectName="выберите персонажа" charId={this.state.selectChar} getDataOnId={this.gotService.getCharacter}>
                        <Field field="gender" label="Gender" />
                        <Field field="born" label="Born" />
                        <Field field="died" label="Died" />
                        <Field field="culture" label="Culture" />
                    </ItemDetails>
                </div>
            </div>
        )
    }
}