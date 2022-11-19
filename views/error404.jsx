
const React = require('react')
const Def = require('./default')


function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div>
                <img src="/images/istockphoto-157286211-1024x1024 (2).jpg" alt="car going over cliff"/>
                <div>
                  Photo by <a href="https://www.istockphoto.com/portfolio/Allkindza?mediatype=photography">ALLkindza Carol Stream, United States</a> on <a href="https://www.istockphoto.com/photo/over-the-edge-2-gm157286211-4372450?utm_source=unsplash&utm_medium=affiliate&utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fcar-cliff&utm_term=car%20cliff%3A%3A%3A">Istock</a>
                </div>
              </div>
          </main>
      </Def>
    )
  }

  module.exports = error404;
  