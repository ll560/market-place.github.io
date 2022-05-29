const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')
//const assets = require('../assets/red-blood-cell.png')

class Index extends React.Component {
    render() {
        // Object Destructuring
        const { memes } = this.props
        return (
            <DefaultLayout title="Meme Marketplace">
                <div>
                    <nav>
                        
                        <a className='link' href="/memes/new">Create/Add a New Meme</a>
                    </nav>
                    <ul className="card-container">
                        {
                            memes.map(meme => {
                                return (
                                    <li className="card" key={meme._id}>
                                        <img className="image" src="./images/red-blood-cell.png" alt={meme.name}></img>
                                        <p><a href={`/memes/${meme._id}`}>{meme.name}</a></p>
                                        <p> Price: ${meme.price}.</p>
                                        <p>Quantity: {meme.quantity}</p>
                                        <p>{meme.readyToEat ? 'READY' : 'NOT READY'}</p>
                                        <button className="add-to-cart"><a href=" "></a>Add to Cart</button>
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
            </DefaultLayout>
        )
    }
}

module.exports = Index