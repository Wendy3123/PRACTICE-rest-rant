const React = require('react')
const Def = require('../default')

function placesError404() {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this place!</p>
            </main>
        </Def>
    )
}

module.exports = placesError404