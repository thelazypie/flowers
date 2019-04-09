import React,{Component} from 'react';
import Logo from '../Logo/Logo';
import Contacts from '../Contacts/Contacts'

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
                        <li><a href="/">Главная</a></li>
                        <li><a href="/accessories">Акксесуары</a></li>
                        <li><a href="/delivery">О доставке</a></li>
                        <li><a href="/register">Регистрация</a></li>
                        <li><a href="/about">О нас</a></li>
                    </ul>
                    {/* <Contacts/> */}
            </header>
        )
    }
}