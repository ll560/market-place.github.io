const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')

class Show extends React.Component {
    render() {
        console.log(this.props.meme)
        const meme = this.props.meme
        return (
            <DefaultLayout title="Show">
                <div>
                    <p className="content">The {meme.name}'s color is {meme.color}.</p>
                    <p>
                        {
                            meme.readyToEat
                                ?
                                "It's ready to eat"
                                :
                                "It's not ready to eat...Can't touch this"
                        }
                    </p>
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