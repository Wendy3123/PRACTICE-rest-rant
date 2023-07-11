const React = require('react')
const Def = require('../default')

function placesIndex(data) {
    //Def is a react functional component we render it using tags like so <Def>
    console.log('data',data)
    let placesFormatted = data.places.map((place)=>{
        return(
            <div>
                <h2>{place.name}</h2>
                <img src={place.pic} alt={place.name}></img>
            </div>
        )
    })
    return (
        <Def>
            <main>
                <h1>PLACES/INDEX PAGE</h1>
                {placesFormatted}
            </main>
        </Def>
    )
}

module.exports = placesIndex