
export default function EditProfile({match})
{
    return(
        <>
          <div className="container">
        <h1 className="text-center text-info">Edit Profile {match.params.id}</h1>
        <div className="card mx-auto mb-5 createuser" >
            <div className="card-body">
             <form className="form">
                 <div className="form-group">
                    <label className="font-weight-bold">Name:</label><br/>
                    <input className="form-control" type="text" placeholder="UserName" />
                </div>
                <div className="form-group">
                    <label className="font-weight-bold">Email:</label><br/>
                    <input className="form-control" type="email" placeholder="Email" />
                </div>
                <div className="form-group">
                    <label className="font-weight-bold">Company:</label><br/>
                    <input className="form-control" type="text" placeholder="Company" />
                </div>
                <div className="form-group">
                    <label className="font-weight-bold">Country:</label><br/>
                    <input className="form-control" type="text" placeholder="Country" />
                </div>
                <div className="form-group">
                    <label className="font-weight-bold">City:</label><br/>
                    <input className="form-control" type="text" placeholder="City" />
                </div>
                <div className="form-group">
                    <label className="font-weight-bold">Address:</label><br/>
                    <input className="form-control" type="text" placeholder="Address" />
                </div>
               
                <br/>
                <div className="text-center">
                <button className="mx-auto btn btn-primary" type="submit">Submit</button>
                </div>
             </form>
            </div>
        </div>
        </div>
        </>
    );
}