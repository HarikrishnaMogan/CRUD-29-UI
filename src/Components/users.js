import {Link} from "react-router-dom";
 export let userdata = [
    {
     "createdAt": "2021-09-19T08:43:01.845Z",
     "name": "Wilson Kunze",
     "company": "Bradtke Inc",
     "city": "Langstad",
     "country": "Berkshire",
     "email": "Aylin13@gmail.com",
     "address": "442 Kessler Mills",
     "id": "1"
    },
    {
     "createdAt": "2021-09-19T14:30:42.392Z",
     "name": "Marcella Yost",
     "company": "Hartmann - Pfannerstill",
     "city": "East Keshawn",
     "country": "Borders",
     "email": "Elinor_Klein@gmail.com",
     "address": "94558 Delores Crossing",
     "id": "2"
    },
    {
     "createdAt": "2021-09-18T23:29:14.154Z",
     "name": "Warren Sipes",
     "company": "Rippin and Sons",
     "city": "Shanelletown",
     "country": "Bedfordshire",
     "email": "Lila54@hotmail.com",
     "address": "294 Stanton Expressway",
     "id": "3"
    },
    {
     "createdAt": "2021-09-19T03:10:06.309Z",
     "name": "Wilma Hermann I",
     "company": "Jacobi Inc",
     "city": "Lake Donnyville",
     "country": "Buckinghamshire",
     "email": "Aglae.Friesen@yahoo.com",
     "address": "34102 Bahringer Lane",
     "id": "4"
    },
    {
     "createdAt": "2021-09-18T21:35:08.864Z",
     "name": "Mr. Angel Dare",
     "company": "Rippin Inc",
     "city": "Uliseshaven",
     "country": "Cambridgeshire",
     "email": "Dino_Ward54@gmail.com",
     "address": "456 Opal Views",
     "id": "5"
    }
   ]
    

function Users()
{
    return(
        <>
        <div className="container">
           {
               userdata.map((user)=>{
                   return    <div className="card mx-auto my-5" key={user.id} style={{width:"80%"}}>
                    <div className="card-body">
                        <div className="row">
                        <div className="col-md-6">
                        <h3 className="text-muted">{user.name}
                        </h3>
                        </div>
                       <div className="col-md-6 text-left mb-2 text-md-right">
                         
                       <Link to={`edit-profile/${user.id}`} className="btn btn-outline-info  ">Edit Profile</Link>
                       
                       </div>
                        
                        </div>
                        <p><b>Email</b><br/>{user.email}</p>
                        <p><b>Country</b><br/>{user.country}</p>
                        <div className="mt-2 row" >
                            <Link to={`edituser/${user.id}`} className="btn col-md-3 mt-2 col-lg-2 btn-outline-primary mx-2">Edit User</Link>
                            <Link to={`profile/${user.id}`} className="btn  col-lg-2 mt-2 col-md-3 btn-dark  mx-2">Profile</Link>
                            <button className="btn btn-danger  col-lg-2 col-md-3 mt-2 mx-2" data-toggle="modal" data-target="#mymodal" >Delete</button>
                        </div>   
                    </div>
                   </div> 
               })
           } 

           <div className="modal fade" id="mymodal">
               <div className="modal-dialog">
                   <div className="modal-content">
               <div className="modal-body">
                   Are you sure, You want to delete User?
               </div>
               <div className="modal-footer">
                   <button className="btn btn-danger" data-dismiss="modal" >Delete</button>
                   <button className="btn btn-info" data-dismiss="modal" >Cancel</button>
               </div>
               </div>
               </div>
           </div>
          </div>
        </>
    );
}
export default Users;