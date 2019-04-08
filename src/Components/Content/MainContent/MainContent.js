import React,{Component} from 'react';
// import logo from './logo.png'
import './mainContent.css'
// import aih from '../../../img/Аихризончик.png';
import ContentFlower from '../../ContentFlower/ContentFlower'

const dataFlowers = [
    {
        name : "Variegatum",
        price: "2000",
        img : "https://pp.userapi.com/c639221/v639221636/241f7/P6x2YAMEvC8.jpg"
    },
    {
        name : "Hobbit",
        price: "2000",
        img : "https://pp.userapi.com/c639221/v639221636/241d3/Fp9K5nfrfBQ.jpg"
    },
    {
        name : "minor",
        price: "2000",
        img : "https://pp.userapi.com/c639221/v639221636/241ca/tJVu0dG4bWI.jpg"
    },
    {
        name : "Catuledon",
        price: "2000",
        img : "https://pp.userapi.com/c639221/v639221636/24532/72Lv3iZLDfg.jpg"
    },
    {
        name : "Echeueria",
        price: "20",
        img : "https://pp.userapi.com/c639221/v639221636/241dc/8PzlcyHG720.jpg"
    },{
        name : "Variegatum",
        price: "2000",
        img : "https://pp.userapi.com/c639221/v639221636/241f7/P6x2YAMEvC8.jpg"
    },
    {
        name : "Hobbit",
        price: "2000",
        img : "https://pp.userapi.com/c639221/v639221636/241d3/Fp9K5nfrfBQ.jpg"
    },
    {
        name : "minor",
        price: "2000",
        img : "https://pp.userapi.com/c639221/v639221636/241ca/tJVu0dG4bWI.jpg"
    },
    {
        name : "Catuledon",
        price: "2000",
        img : "https://pp.userapi.com/c639221/v639221636/24532/72Lv3iZLDfg.jpg"
    },
    {
        name : "Echeueria",
        price: "20",
        img : "https://pp.userapi.com/c639221/v639221636/241dc/8PzlcyHG720.jpg"
    },
    
]

export default class MainContent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <div className="flowers">
                {
                    dataFlowers.map((flower, index)=>{
                        return(
                            <ContentFlower className="col-md-4 col-lg-4 col-sm-4" img={flower.img} key={index} name={flower.name} price={flower.price}/>
                        )
                    })
                }
                </div>
            </div>
        )
    }
}