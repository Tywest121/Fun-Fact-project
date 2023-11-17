import React from 'react'
import  {Link, withRouter } from 'react-router-dom'

const Home = () => {
return (
    <div className="container">
        <div className="heading-container">
        <h1>Fun Facts about Football</h1>
        <p>Click a button to find out more</p>
        </div>
        <div className="buttons">
            <Link to='/funFactOne'><button>fun Fact One</button></Link>
            <Link to='/funFactTwo'><button>fun Fact Two</button></Link>
            <Link to='/funFactThree'><button>fun Fact Three</button></Link>
        </div>
    </div>
)
}

export default withRouter(Home)