import React,{Component} from 'react';
// import logo from './logo.png'
// import './logo.css'
import './footer.css';
import Contacts from '../Contacts/Contacts';

export default class Footer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <footer>
                <div className="towns">
                    <span>Наши магазины есть в:</span>
                    <ul>
                        <li>Шумерля</li>
                        <li>Чебокрары</li>
                        <li>Вурнары</li>
                        <li>Порецкое</li>
                        <li>Тарханы</li>
                        <li>Хадары</li>
                    </ul>
                </div>
                <Contacts/>
            </footer>
        )
    }
}