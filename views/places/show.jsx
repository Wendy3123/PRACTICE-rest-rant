const React = require('react')
const Def = require('../default')

function show(data) {
    let comments = (
        <h3 className='inactive'>
            No comments yet!
        </h3>
    )
    if (data.place.comments.length) {
        comments = data.place.comments.map(c => {
            return (
                <div key={c.id} className="border">
                    <h2 className="rant">{c.rant ? 'Rant! 😡 ' : 'Rave! 😻'}</h2>
                    <h5>{c.content}</h5>
                    <h3>
                        <strong>- {c.author}</strong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                </div>
            )
        })
    }
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
                        <p>{data.place.showEstablished()}</p>
                        <p>Serving {data.place.cuisines}</p>
                    </div>
                    <div className='showjsx-editndeletebox'>
                        <div>
                            <a href={`/places/${data.place.id}/edit`}>
                                <i className="bi bi-pencil-fill"></i>
                            </a>
                        </div>
                        <form method='POST' action={`/places/${data.place.id}?_method=DELETE`}>
                            <button type="submit">
                                <i className="bi bi-trash"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <hr></hr>
            <footer>
                <form action={`/places/${data.place.id}/comment`} method='POST'>
                    <div className='form-group'>
                        <label htmlFor='author'>Author: </label>
                        <input className='form-control' id='author' name='author' required/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='content'>Content: </label>
                        <textarea className='form-control' id='content' name='content' required/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='stars'>Star Rating: </label>
                        <input className='form-control' id='stars' name='stars' type='range' step='0.5' max='5' min='0' required/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='rant'>Rant?: </label>
                        <input className='form-control' id='rant' name='rant' type='checkbox' />
                    </div>
                    <button type='submit'>Add Comment</button>
                </form>
                <div className='showjsx-footer'>
                    <h2>Comments</h2>
                    <div className='showjsx-comments'>
                        {comments}
                    </div>
                </div>
            </footer>
        </Def>
    )
}

module.exports = show



