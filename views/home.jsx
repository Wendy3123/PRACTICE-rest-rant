const React = require('react')
const Def = require('./default')

function home() {
    //Def is a react functional component we render it using tags like so <Def>
    return (
        <Def>
            <main className='main-container'>
                <h1>REST-Rant</h1>
                <div className='content-container'>
                    <div className='inlinepic'>
                        <img src='/images/cake.jpg' alt='cake picture' width='300px'></img>
                        <div>
                            Photo by <a href='https://unsplash.com/photos/Mzy-OjtCI70'>Anna Tukhfatullina</a> on <a href='https://unsplash.com/s/photos/food'>UNSPLASH</a>
                        </div>
                    </div>
                    <div className='inlinepic'>
                        <img src='/images/salad.jpg' alt='salad picture'></img>
                        <div>
                            Photo by <a href='https://unsplash.com/photos/kcA-c3f_3FE'>Anh Nguyen</a> on <a href='https://unsplash.com/s/photos/food'>UNSPLASH</a>
                        </div>
                    </div>
                </div>
                <div className='action-container'>
                    <a href="/places">
                        <button className="btn btn-primary">Places/Index Page</button>
                    </a>
                </div>
            </main>
        </Def>
    )
}

module.exports = home