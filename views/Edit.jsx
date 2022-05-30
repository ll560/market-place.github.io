const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')


module.exports = class Edit extends React.Component {
    render() {
        const meme = this.props.meme
        return (
            <DefaultLayout title="Edit">
                <h2>{meme.name.toUpperCase()} Edit Page</h2>
                <form action={`/memes/${meme._id}?_method=PUT`} method="POST">
                <div className="card-content">
                    <label htmlFor="image">Image URL:</label>
                    <input type="text" id="image" name="image" defaultValue={meme.image}></input>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" defaultValue={meme.name} />
                    <label htmlFor="price">Price:</label>
                    <input type="text" id="price" name="price" defaultValue={meme.price}/>
                    <label htmlFor="quantity">Quantity:</label>
                    <input type="text" id="quantity" name="quantity" defaultValue={meme.quantity}/>
                    {/* <label htmlFor="readyToEat">Ready to eat:</label>
                    <input type="checkbox" id="readyToEat" name="readyToEat" defaultChecked={meme.readyToEat}/> */}
                    <input id="style" className="edit"type="submit" value="Edit Meme"/>
                </div>
                </form>
                <hr></hr>
                <button><a href={'/memes'}>Back</a></button>
            </DefaultLayout>
        )
    }
} 
