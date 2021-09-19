
export default function EditUser({match})
{
    return(
        <>
        <div className="container">
        <h1 className="text-center text-info">Edit User {match.params.id}</h1>
        <div className="card mx-auto createuser" >
            <div className="card-body">
             <form className="form">
                 <div className="form-group">
                    <label className="font-weight-bold">Name:</label><br/>
                    <input className="form-control" type="text" placeholder="userName" />
                </div>
                <div className="form-group">
                    <label className="font-weight-bold">Email:</label><br/>
                    <input className="form-control" type="email" placeholder="Email" />
                </div>
                <div className="form-group">
                    <label className="font-weight-bold">Country:</label><br/>
                    <input className="form-control" type="text" placeholder="Country" />
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