
import React,{Component} from 'react';
import Logo from '../Logo/Logo'

import './header.css'

export default class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <header>
                <Logo/>
                <ul>
                    <li>Главная</li>
                    <li>Товары</li>
                    <li>О доставке</li>
                    <li>Регистрация</li>
                    <li>Помощь</li>  
                    <li>О нас</li>
                </ul>
            </header>
        )
    }
}