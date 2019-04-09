import React,{Component} from 'react';



const AccData = [
    {
        title: "AllahAkbar",
        price: "100"
    },
    {
        title: "lllsadlslkdlaskd",
        price: "100"
    },
    {
        title: "AllahAkbar",
        price: "100"
    },
    {
        title: "lllsadlslkdlaskd",
        price: "100"
    },
    {
        title: "AllahAkbar",
        price: "100",
    },
    {
        title: "lllsadlslkdlaskd",
        price: "100",
    },
    {
        title: "AllahAkbar",
        price: "100",
    },
    {
        title: "lllsadlslkdlaskd",
        price: "100",
    },
    {
        title: "AllahAkbar",
        price: "100"
    },
    {
        title: "lllsadlslkdlaskd",
        price: "100"
    },
    {
        title: "AllahAkbar",
        price: "100"
    },
    {
        title: "lllsadlslkdlaskd",
        price: "100"
    }
]


export default class Accessories extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="accessories-item">
                {
                    AccData.map((val,index)=>{
                        return(
                            <div key={index}>
                                <h3>{val.title}</h3>
                                <span>{val.desc}</span>
                                <span>{val.price}</span>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}