const React = require('react')
const Def = require('./default')

function home() {
    //Def is a react functional component we render it using tags like so <Def>
    return (
        <Def>
            <main>
                <h1>HOME PAGE</h1>
                <div>
                    <img src='/images/cake.jpg' alt='cake picture' width='300px'></img>
                    <div>
                        Photo by <a href='https://unsplash.com/photos/Mzy-OjtCI70'>Anna Tukhfatullina</a> on <a href='https://unsplash.com/s/photos/food'>UNSPLASH</a>
                    </div>
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>

            </main>
        </Def>
    )
}

module.exports = home