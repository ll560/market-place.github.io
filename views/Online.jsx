const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')


module.exports = class Edit extends React.Component {
    render() {
        const meme = this.props.meme
        return (
            <DefaultLayout title="Where do I find more?">
                <h1>wwww.Google.com</h1>

                <button><a href={'/memes'}>Back</a></button>
              
            </DefaultLayout>
        )
    }
} 
