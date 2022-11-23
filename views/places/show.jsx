const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <p>{ data.place.name }</p>
            <p>{ data.place.city }</p>
            <p>{ data.place.state }</p>
            <p>{ data.place.cuisines }</p>
            <img src={data.place.pic} alt={data.place.name} />
            <p>Rating: Currently Unrated</p>
            <p>Comments : No comments as yet! </p>

            <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
                Edit
            </a>     

            <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
            <button type="submit" className="btn btn-danger">
                Delete
            </button>
            </form> 
     
          </main>
        </Def>
    )
}

module.exports = show
