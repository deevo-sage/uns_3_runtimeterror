import React, { useContext } from "react";
import {Link} from "@reach/router"
import "./style.css";
import {auth} from "../firebase"
import UserContext from "../usercontext";
const Nav = ()=>{
const [user,setuser]=useContext(UserContext)    
    
    return(
        <div className="nav">
<ul>
<Link to="/"><li>Bot</li></Link>
<Link to="/FAQ">
  <li>FAQ</li>
</Link>
<Link to="/News">
  <li>News</li>
</Link>
{user.admin &&
<Link to="/admin">
  <li>Admin</li>
</Link>}
<a><li onClick={()=>{
auth.signOut();
}}>Signout</li></a>
</ul>
        </div>
    )
}
export default Nav