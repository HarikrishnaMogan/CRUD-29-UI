import Header from "./Components/Header";
import {BrowserRouter,Route,Switch} from "react-router-dom"
import Users from "./Components/users";
import CreateUser from "./Components/createUser";
import EditUser from "./Components/EditUser";
import Profile from "./Components/Profile";
import EditProfile from "./Components/EditProfile";
function App()
{
    return (
        <>
       
        <BrowserRouter>
        <Header />
        <Switch>
        <Route exact path="/" component={Users} />
        <Route  path="/createuser" component={CreateUser} />
        <Route path="/edituser/:id" component={EditUser} />
        <Route path="/profile/:id" component={Profile} />
        <Route path="/edit-profile/:id" component={EditProfile} />
        </Switch>
        </BrowserRouter>
        
        </>
    );
}
export default App;
