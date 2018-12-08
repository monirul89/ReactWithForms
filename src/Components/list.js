import React, { Component } from 'react';
import axios from 'axios';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

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
        axios.get(`${JSON_DB_URL}/articles?_start=${this.state.start}&_end=${this.state.end}`)
        .then( response=>{
            this.setState({
                items:[...this.state.items, ...response.data]
            })
        })
    }
    showHandler=()=>{
        let end = this.state.end + 1;
        this.request(this.state.end, end)
    }

    showListHandler(type){    
        let template = null
            switch (type){
                case('card'):
                template = this.state.items.map( (item, i)=>(
                    <CSSTransition
                        key={i}
                        timein={0}
                        timeout={500}
                        classNames="fade fade"
                    >
                            <div>
                                <div key={i} className="newslist_item">
                                    <h2>{item.title}</h2>
                                </div>
                            </div>
                    </CSSTransition>
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
                        <TransitionGroup className="todo-list">
                            {this.showListHandler( this.props.type )}
                        </TransitionGroup>
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