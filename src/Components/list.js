import React, { Component } from 'react';
import axios from 'axios';



class List extends Component{

    state={
        news:[]
    }
    componentWillMount(){
        axios.get(`http://localhost:3004/articles`)
        .then( response=>{
            this.setState({
                news:response.data
            })
        })
    }
    showListHandler(){
        
    }
    render(){
        console.log(this.state.news)
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

                    </div>
                    <div>
                        <a style={btnStyle}
                        onClick={this.showListHandler.bind(this)}
                        >showMore</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default List;