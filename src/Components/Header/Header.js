import React,{Component} from 'react';
import Logo from '../Logo/Logo';
import {Col} from 'bootstrap-4-react'
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
                        <li><a href="/">Акксесуары</a></li>
                        <li><a href="/">О доставке</a></li>
                        <li><a href="/register">Регистрация</a></li>
                        <li><a href="/">Помощь</a></li>  
                        <li><a href="/">О нас</a></li>
                    </ul>
                    <Contacts/>
            </header>
        )
    }
}