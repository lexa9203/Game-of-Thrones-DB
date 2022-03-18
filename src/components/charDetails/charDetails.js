import React, {Component} from 'react';
import './charDetails.css';

export default class CharDetails extends Component {

    render() {
        return (
            <div className="char-details-wrapper">
                <h4 style={{textAlign:"center"}}>John Snow</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <span className="term">Gender</span>
                        <span>male</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Born</span>
                        <span>1783</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Died</span>
                        <span>1820</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Culture</span>
                        <span>First</span>
                    </li>
                </ul>
            </div>
        );
    }
}