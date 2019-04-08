import React,{Component} from 'react';
import './contacts.css';

export default class Contacts extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="contacts">
                <span>Контактный номер: 8-800-555-35-35</span>
                <span>Почта: myEmail@mail.ru</span>
            </div>
        )
    }
}
