import React,{Component} from 'react';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="flowerItem">
                <img src={this.props.img}/>
                <h3>{this.props.name}</h3>
                <span>Цена : {this.props.price}</span>
                <a href="">Подробнее..</a>
            </div>
        )
    }
}