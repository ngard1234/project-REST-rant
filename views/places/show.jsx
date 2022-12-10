const React = require('react')
const Def = require('../default')

function show (data) {
  let comments = (
    <h3 className=" inactive">
      No comments yets!
    </h3>
  )
  let rating = (
    <h3 className="inactive">
      Not yet rated
    </h3>
  )
  if (data.place.comments.length) {
    let sumRatings = data.place.comments.reduce((tot, c) => {
      return tot + c.stars
    }, 0)
    let averageRating = sumRatings / data.place.comments.length
    rating = (
      <h3>
        {averageRating} stars
      </h3>
    )
    comments = data.place.comments.map(c => {
      return (
        <div className="border">
          <h2 className="rant">{c.rant ? 'Rant!😡' : 'Rave! 😻'}</h2>
          <h4>{c.content}</h4>
          <h3>
            <stong>- {c.author}</stong>
          </h3>
          <h4>Rating: {c.stars}</h4>
        </div>
      )
    })
  }
    return (
      
      <Def>
      <main>
        <div className="row">
          <div className="col-sm-6">
           
            <img src={data.place.pic} alt={data.place.name} />
            <h3>
              Located in {data.place.city}, {data.place.state}
            </h3>
          </div>
        <div className="col-sm-6" align="center" > 
        <h1>{data.place.name}</h1>
            <h2>
              Rating
              </h2>
            {rating}
             <br/>
                  <h2>
                    Description
                  </h2>
                  <h3>
                    {data.place.showEstablished()}
                  </h3>
                  <h4>
                    Serving {data.place.cuisines}
                  </h4>
            <span >      
            <a href={`/places/${data.place.id}/edit`} className="btn btn-warning" >Edit</a> &nbsp;&nbsp;
            </span>
            <span>
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
              <button type="submit" className="btn btn-danger" >Delete</button>
            </form> 
            </span>
              
        </div>
            
          </div>
          <hr/>
          <h2>Comments</h2>
            {comments}
            <h1>Add Comments</h1>
                <form method="POST" action={`/places/${data.place.id}/comment`}>
                    <div className="row">
                    <div className="form-group">
                        <label htmlFor="content">Content</label>
                        <input 
                        className="form-control"
                        type = "textarea" 
                        id="content" 
                        name="content" 
                        required/>
                    </div>
                    <br></br>
                    <div className="form-group col-sm-4">
                        <label htmlFor="author">Author Name</label>
                        <input
                        className="form-control"
                        type="text"
                        id="author"
                        name="author" 
                        required />
                    </div>
                    <br></br>
                    
                    <div className="form-group col-sm-4">
                        <label htmlFor="stars">Star Rating (between 1 and 5): </label>
                        <input 
                        className="form-control"
                        type="number" 
                        id="stars" 
                        name="stars" 
                        min="0.5"
                        max="5"
                        required/>
                    </div>
                    <br></br>
                    <div className="form-check col-sm-4">
                        <label htmlfor="rant">Rant</label>
                        <br></br>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input 
                        input type="checkbox" 
                        id="rant" 
                        name="rant" 
                        defaultChecked/>
                    </div>
                    </div>
                    <br></br>&nbsp;
                    <input 
                    className="btn btn-primary" 
                    type="submit" 
                    value="Add Comment" />
                    
                </form>
          </main>
        
        </Def>
    )
}

module.exports = show

