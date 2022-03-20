import React from 'react';
import ItemList from '../../components/itemList/itemList';
import ItemDetails from '../../components/itemDetails/itemDetails';
import GotService from '../../service/gotService';
import Field from '../../components/field/field'

export default class CharacterPage extends React.Component {

    gotService = new GotService();

    state = {
        selectHouse: null
    }

    selectedHouse = (id) => {
        this.setState({
            selectHouse: id
        })
    }

    render() {
        return(
            <div className='char-detals'>
                <div className='char-detals-item'>
                    <ItemList 
                        selectedItem={this.selectedHouse}
                        getData={this.gotService.getAllHouses} />
                </div>
                <div className='char-detals-item'>
                    <ItemDetails selectName="выберите дом" charId={this.state.selectHouse} getDataOnId={this.gotService.getHouse}>
                        <Field field="region" label="Region" />
                        <Field field="coatOfArms" label="CoatOfArms" />
                    </ItemDetails>
                </div>
            </div>
        )
    }
}