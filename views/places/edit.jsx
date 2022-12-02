
const React = require('react')
const Def = require('../default.jsx')

function edit_form (data) {
        return (
            <Def>
              <main>
                <h1>Add a New Place</h1>
                <form method="POST" action={`/places/${data.id}?_method=PUT`}>
                    <div className="row">
                    <div className="form-group col-sm-6">
                        <label htmlFor="name">Place Name</label>
                        <input 
                        className="form-control" 
                        id="name" 
                        name="name"
                        value={data.place.name} 
                        required />
                    </div>
                    <br></br>
                    <div className="form-group col-sm-6">
                        <label htmlFor="pic">Place Picture</label>
                        <input 
                        className="form-control" 
                        id="pic" 
                        name="pic" 
                        value={data.place.pic}/>
                    </div>
                    <br></br>
                    <div className="form-group col-sm-6">
                        <label htmlFor="city">City</label>
                        <input 
                        className="form-control" 
                        id="city" 
                        name="city" 
                        value={data.place.city}/>
                    </div>
                    <br></br>
                    <div className="form-group col-sm-6">
                        <label htmlFor="state">State</label>
                        <input 
                        className="form-control" 
                        id="state" 
                        name="state" 
                        value={data.place.state}/>
                    </div>
                    <br></br>
                    <div className="form-group">
                        <label htmlFor="cuisines">Cuisines</label>
                        <input 
                        className="form-control" 
                        id="cuisines" 
                        name="cuisines" 
                        required 
                        value={data.place.cuisines}/>
                    </div>
                    </div>
                    <br></br>&nbsp;
                    <input 
                    className="btn btn-primary" 
                    type="submit" 
                    value="Edit Place" />
                    
                </form>
    
              </main>
            </Def>
        )
     
    return (
        <Def>
          <main>
            <h1>Edit Place</h1>
          </main>
        </Def>
    )
}

module.exports = edit_form



