const React = require('react')

class Index extends React.Component{
    render(){
        //Object Destructing
        const {memes} = this.props;
        return(
            <div>
                <nav>
                    <a href='/fruits/new'>Create a New Meme</a>
                </nav>
                
                {/*map() returns an array (in this case an array of html elements), and excepts a function that iterates over everything in the array*/}
                <h1> Memes Index Page: ALL MEMES</h1>
                <ul>
                    {
                        memes.map((meme, i) => {//the first parameter is a placeholder word for the items in the fruits array
                            return(
                                
                            <li key= {i}>
                                
                                <p>The <a href={`/fruits/${i}`}>{meme.name}</a>'s color is {meme.color}</p>
                            <p>{meme.readyToEat ? 'READY' : 'NOT READY'}</p>
                            </li> //in jsx you are not allowed to return objects. but you have access to the properties
                           
                                
                            )
                        })
                    }
                </ul>

            </div>
        )
    }
}

module.exports = Index