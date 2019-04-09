import React,{Component} from 'react';
import Accessories from '../../Accessories/Accessories'

import Header from "../../Header/Header"
import Footer from "../../Footer/Footer"

import './accessoriescontent.css'

export default class AccessoriesContent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <Header/>
                <div className="accessories-content">
                    <Accessories/>
                </div>
                <Footer/>
            </div>
        )
    }
}