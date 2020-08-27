// write your CatList component here
import React, { Component } from 'react';

export default class CatList extends Component {

    renderCatPics = () => {
        return this.props.catPics.map(cat => {
            return <img key={cat.id} src={cat.url}/>
        })
    }

    render(){
        return(
            <div>
                {this.props.loading ? <h1>LOADING!</h1> : this.renderCatPics()}
            </div>
        )
    }
}