import React,{Component} from 'react';
import Header from "../../Header/Header"
import Footer from "../../Footer/Footer"

// import './header.css'

export default class About extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="aboutWrap">
                <Header/>
                <div className="aboutContent">
                
                    <h1>О нас</h1>

                    <p>Мы просто группа которым нравиться ухаживать за цветами и делиться ими с другими</p>

                </div>
                <Footer/>
            </div>
        )
    }
}