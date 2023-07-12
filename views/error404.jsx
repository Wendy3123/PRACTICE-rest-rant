const React = require('react')
const Def = require('./default')

function error404() {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this place!</p>
                <div>
                    <img src='/images/404img.jpg' alt='status 404 picture'width='420px' ></img>
                    <div>
                        Photo by <a href='https://unsplash.com/photos/JpTY4gUviJM'>visuals</a> on <a href='https://unsplash.com/s/photos'>UNSPLASH</a>
                    </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = error404