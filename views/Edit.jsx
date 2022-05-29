const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')


module.exports = class Edit extends React.Component {
    render() {
        const meme = this.props.meme
        return (
            <DefaultLayout title="Edit">
                <h1>{meme.name.toUpperCase()} Edit Page</h1>
                <form action={`/memes/${meme._id}?_method=PUT`} method="POST">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" defaultValue={meme.name} />
                    <label htmlFor="price">Price:</label>
                    <input type="text" id="price" name="price" defaultValue={meme.price}/>
                    <label htmlFor="quantity">Quantity:</label>
                    <input type="text" id="quantity" name="quantity" defaultValue={meme.quantity}/>
                    <label htmlFor="readyToEat">Ready to eat:</label>
                    <input type="checkbox" id="readyToEat" name="readyToEat" defaultChecked={meme.readyToEat}/>
                    <input type="submit" value="Edit Meme"/>
                </form>
            </DefaultLayout>
        )
    }
} 
