const React = require('react')

class DefaultLayout extends React.Component {
    
  render() {
    

    return (
      <html lang="en">
        <head>
            
            <link rel="stylesheet" href="/css/styles.css"></link>
          <title>{this.props.title}</title>
        </head>
        <body>
          {/* <script defer src="script.js"></script> */}
          <h1>{this.props.title}</h1>
          {this.props.children}
          
        </body>
      </html>
    )
  }
}

module.exports = DefaultLayout