import React, { Component } from 'react';
import axios from 'axios';

import { JSON_DB_URL } from '../config'

class List extends Component{

    state={
        items:[],
        type:this.props.type,
        start:this.props.start,
        end:this.props.start + this.props.amount,
        amount: this.props.amount,
        dshow: this.props.dshow
    }
    componentWillMount(){
        this.request(this.state.start, this.state.end)
    }
    request = (start, end)=>{
        axios.get(`${JSON_DB_URL}/articles`)
        .then( response=>{
            this.setState({
                items:[...this.state.items, ...response.data]
            })
        })
    }
    showHandler=()=>{
        let end = this.state.end + this.state.amount;
        this.request(this.state.end, end)
    }

    showListHandler(type){    
        let template = null
            switch (type){
                case('card'):
                template = this.state.items.map( (item, i)=>(
                    <div>
                        <div key={i} className="newslist_item">
                            <h2>{item.title}</h2>
                        </div>
                    </div>
                ))
                break;
            default:
                template=null
            }
            return template;
        }

    render(){
        var btnStyle ={
            border: '1px solid #ccc',
            padding: '10px',
            margin: '10px auto',               
            display: 'block',
            cursor:'pointer',
            width: '75px',
            backgroundColor: 'azure',
            borderRadius: '10px',
            boxShadow: '0 2px 1px #dcdcdc'
        }
            
        return(
            <div>
                <div>
                    <div style={{clear:'both', overflow:'hidden'}}>
                        {this.showListHandler( this.props.type )}
                        <div>
                            <a style={btnStyle}
                            onClick={()=> this.showHandler()}
                            >showMore</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default List;