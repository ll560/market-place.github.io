const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')
//const assets = require('../assets/red-blood-cell.png')

class Index extends React.Component {
    
    render() {
        // Object Destructuring
        const { memes } = this.props
    //    let handleClick=() => {
    //     console.log(this.props.memes[2].quantity-1)
    //    }
        let count=this.props.memes[3].quantity

        return (
            <DefaultLayout title="Meme Marketplace">
                <div>
                    <nav className="new">
                        <a className='link' href="/memes/new">Add a New Meme</a>
                    </nav>
                    <div className="main">
                        <div className="side-bar">
                            <h2>Side Bar</h2>
                            <button >times </button>
        <div>
            {count&&<h1>{count}</h1>}
        
        </div>
                        </div>
                        

                    <ul className="card-container">
                    
                        {
                            
                            memes.map(meme => {
                                return (
                                    <li className="card" key={meme._id}>
                                        
                                        <p><a href={`/memes/${meme._id}`}><img className="image" src={meme.image} alt={meme.name}></img></a></p>
                                        <p><a href={`/memes/${meme._id}`}>{meme.name}</a></p>
                                        <p>Price: ${meme.price}</p>
                                        <p>Quantity: {meme.quantity}</p>
                                        <p>{meme.readyToEat ? 'READY' : 'NOT READY'}</p>
                                        <div id='stock'>
                                        {meme.quantity > 0
                                            ? <form action={`/memes/${meme._id}/stock?_method=PUT`} method="POST">
                                            <button className="add-to-cart" type="submit">Add to Cart</button>
                                            </form>
                                            : <div className='outOfStock'>Out Of Stock!</div> 
                                        }
                                    </div>

                                        
                                        <hr></hr>
                                        <form action={`/memes/${meme._id}?_method=DELETE`}  method="POST">
                                        <input type="submit" value="DELETE" />
                                        </form>
                                        
                                        <button><a href={`/memes/${meme._id}/edit`}>{`Edit ${meme.name}`}</a></button>
                                        

                                    </li>
                                )
                            })
                        }
                    </ul>
                       
                </div>
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Index