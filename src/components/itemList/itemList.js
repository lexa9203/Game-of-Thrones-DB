import React, {Component} from 'react';
import './itemList.css';

export default class ItemList extends Component {

    state = {
        itemList: null
    }

    componentDidMount() {
        const {getData} = this.props;

        getData()
            .then((itemList) => {
                this.setState({
                    itemList
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

    renderItem = (arr) => {
        return arr.map((item) => {
            let id = (item.url).split("/");
            id = id[id.length - 1];
            return(
                <li
                    key={id}
                    className="list-group-item"
                    onClick={() => {this.props.selectedItem(id)}}>
                    {item.name || "нет имени"}
                </li>
            )
        })
    }

    render() {
        const {itemList} = this.state;

        if(!itemList) {
            return (
                <div>
                    загрузка данных
                </div>
            )
        }

        const items = this.renderItem(itemList);

        return (
            <ul className="list-group">
                {items}
            </ul>
        );
    }
}