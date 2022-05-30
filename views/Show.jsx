const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')
const script = require('../public/script.js')
class Show extends React.Component {

  

    render() {
        console.log(this.props.meme)
        const meme = this.props.meme
        return (
            <DefaultLayout title="Show">
                <div>
                    
        <p className="content"><img className="image" src={meme.image} alt={meme.name}></img>The {meme.name}'s price is ${meme.price} and there are {meme.quantity} in stock.</p>
        <p>   </p>
                    <p>
                        {
                            meme.readyToEat
                                ?
                                "It's ready to eat"
                                :
                                "It's not ready to eat...Can't touch this"
                        }
                    </p>

                    <div id='stock'>
                                        {meme.quantity > 0
                                            ? <form action={`/memes/${meme._id}/stock?_method=PUT`} method="POST">
                                            <button className="add-to-cart" type="submit">Add to Cart</button>
                                            </form>
                                            : <div className='outOfStock'>Out Of Stock!</div> 
                                        }
                                    </div>

                    <button><a href={'/memes'}>Back</a></button>
                    <hr />
                    <form action={`/memes/${meme._id}?_method=DELETE`} method="POST">
                        <input type="submit" value="DELETE" />
                    </form>
                    <button><a href={`/memes/${meme._id}/edit`}>{`Edit ${meme.name}`}</a></button>
                    
                    </div>
            </DefaultLayout>
        )
    }
}

module.exports = Show