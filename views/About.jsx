const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')


module.exports = class Edit extends React.Component {
    render() {
        const meme = this.props.meme
        return (
            <DefaultLayout title="About Page">
                <h1>Meme Marketplace</h1>
                <div className="about-content">
                    <p>This is about the Meme Marketplace. The number one place to buy memes. We have all types of memes in stock with a great selection on programming memes. Browse through our selection and pick the ones you like. We list our stock online so you can see what is available. </p>

                </div>

                

                <button><a href={'/memes'}>Back</a></button>
              
            </DefaultLayout>
        )
    }
} 
