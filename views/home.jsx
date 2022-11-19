const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
              <div>
                <img src="/images/istockphoto-1166092206-1024x1024.jpg" alt="Sausages with vegetables"/>
                <div>
                  Photo by <a href="https://www.istockphoto.com/portfolio/Yingko?mediatype=photography">Yingko</a> on <a href="https://www.istockphoto.com/photo/sausages-with-vegetables-gm1166092206-321091594">Istock</a>
                </div>
              </div>
              <a href="/places">
                <button className="btn btn-primary">Places Page</button>
              </a>

          </main>
      </Def>
    )
  }
  

module.exports = home
