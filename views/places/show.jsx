const React = require('react')
const Def = require('../default')

function show(data) {
    return (
        <Def>
            <main>
                <h1>{data.place.name}</h1>
            </main>
            <div className='showjsx-maincontainer'>
                <div className='showjsx-img' >
                    <img src={data.place.pic} alt='restaurant picture'></img>
                </div>
                <div className='showjsx-contentcontainer'>
                    <div>
                        <h2>Rating</h2>
                        <p>Not rated yet! Be the first person!</p>
                    </div>
                    <div>
                        <h2>Description</h2>
                        <p>Located in {data.place.city}, {data.place.state} and serving {data.place.cuisines}</p>
                    </div>
                    <div className='showjsx-editndeletebox'>
                        <div>
                            <a href={`/places/${data.id}/edit`} className="btn btn-warning">
                                Edit
                            </a>
                        </div>
                        <form method='POST' action={`/places/${data.id}?_method=DELETE`}>
                            <button type="submit" className="btn btn-danger">
                                Delete
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <hr></hr>
            <footer>
                <div className='showjsx-footer'>
                    <h2>Comments</h2>
                    <p>No comments yet, be the first!</p>
                </div>
            </footer>
        </Def>
    )
}

module.exports = show