const React = require('react')
const Def = require('./default')

function home() {
    //Def is a react functional component we render it using tags like so <Def>
    return (
        <Def>
            <main>
                <h1>HOME PAGE</h1>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>

            </main>
        </Def>
    )
}

module.exports = home