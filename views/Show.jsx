const React = require('react');
const memes = require('../models/memes');

class Show extends React.Component{
    render(){
        console.log(this.props)
        const meme = this.props.meme

        return(
            <div>
                <h1>SHOW PAGE</h1>
        <p>The {meme.name}'s and {meme.color}</p>
        <p>{
        meme.readyToEat
        ? 
        "It's ready to eat"
        : 
        "It's not ready to eat....Cant touch this"
        }</p>
        <button><a href={'/'}>Back</a></button>
            </div>
        )
    }
}

module.exports = Show