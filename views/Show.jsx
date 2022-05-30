const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')

class Show extends React.Component {

  

    render() {
        console.log(this.props.meme)
        const meme = this.props.meme
        return (
            <DefaultLayout title="Show">
                <div>
                    
        <div className="show-content">
            <img className="image2" src={meme.image} alt={meme.name}></img>
            <p className="text2">The {meme.name}'s price is ${meme.price} and there are {meme.quantity} in stock.</p>
        </div>
        {/* <p> --- </p>
                    <p>
                        {
                            meme.readyToEat
                                ?
                                "It's ready to eat"
                                :
                                "It's not ready to eat...Can't touch this"
                        }
                    </p> */}

                    <div className='stock2'>
                                        {meme.quantity > 0
                                            ? <form action={`/memes/${meme._id}/stock?_method=PUT`} method="POST">
                                            {/* <button className="add-to-cart" type="submit">Add to Cart</button> */}
                                            </form>
                                            : <div className='outOfStock2'>Out Of Stock!</div> 
                                        }
                                    </div>

                    <button><a href={'/memes'}>Back</a></button>
                    <hr />
                    
                    <button id="style"><a href={`/memes/${meme._id}/edit`}>{`Edit ${meme.name}`}</a></button>
                    <form action={`/memes/${meme._id}?_method=DELETE`} method="POST">
                        <input id="style" type="submit" value="DELETE" />
                    </form>
                    
                    </div>
            </DefaultLayout>
        )
    }
}

module.exports = Show