const React = require('react')

module.exports = class New extends React.Component{
    render(){
        return(
            <>{/*react fragment*/}
                <h1>Create Meme Page</h1>
                <form action='/' method='POST'>
                <label htmlFor='name'>Name:</label>
                <input type="text" id='name' name='name'></input>

                <label htmlFor='color'>Color</label>
                <input type='text' id='color' color='color'></input>

                <input type='submit' value='Create New Meme'></input>
                </form>

            </>
        )
    }

}

//export listed in the class component 