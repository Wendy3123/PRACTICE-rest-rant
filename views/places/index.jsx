const React = require('react')
const Def = require('../default')

function placesIndex(data) {
    //Def is a react functional component we render it using tags like so <Def>
    // console.log('data', data)
    let placesFormatted = data.places.map((place,index) => {
        return (
            <div className='col-sm-6'>
                <h2>
                    <a href= {`/places/${index}`}>
                        {place.name}
                    </a>
                </h2>
                <p className='text-left'>
                    {place.cuisines}
                </p>
                <img src={place.pic} alt={place.name}></img>
                <p className='text-left'>
                    Located in {place.city}, {place.state}
                </p>
            </div>
        )
    })
    return (
        <Def>
            <main>
                <h1>Places to Rant or Rave About!</h1>
                <div className='row'>
                    {placesFormatted}
                </div>
            </main>
        </Def>
    )
}

module.exports = placesIndex