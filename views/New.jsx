const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')


module.exports = class New extends React.Component {
    render() {
        return (
            <DefaultLayout title="New">
                <h1>Add a Meme Page</h1>

                <form action="/memes" method="POST">
                <div className="card-content">
                    <label htmlFor="image">Image URL:</label>
                    <input type="text" id="image" name="image"></input>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name"/>
                    <label htmlFor="price">Price:</label>
                    <input type="text" id="price" name="price"/>
                    <label htmlFor="quantity">Qty:</label>
                    <input type="text" id="quantity" name="quantity"/>
                    <label htmlFor="readyToEat">Ready to eat:</label>
                    <input type="checkbox" id="readyToEat" name="readyToEat"/>
                    <input type="submit" value="Create Meme"/>
                    </div>
                </form>
            </DefaultLayout>
        )
    }
} 
 
//export listed in the class component 