import { userdata } from "./users";
export default function Profile({match})
{
    return(
        <>
        <div className="container">
         <div className="card profile mt-3">
             <div className="card-body">
                 <h2 className="text-center">Profile</h2>
                 <p><b>Name</b><br/>
                  {userdata[match.params.id].name}
                 </p>
                 <p><b>Email</b><br/>
                  {userdata[match.params.id].email}
                 </p>
                 <p><b>Company</b><br/>
                  {userdata[match.params.id].company}
                 </p>
                 <p><b>Country</b><br/>
                  {userdata[match.params.id].country}
                 </p>
                 <p><b>City</b><br/>
                  {userdata[match.params.id].city}
                 </p>
                 <p><b>Address</b><br/>
                  {userdata[match.params.id].address}
                 </p>
             </div>
         </div>
         </div>
        </>
    );
}