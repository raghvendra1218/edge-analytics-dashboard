import React, {Component} from "react";
import {Route} from "react-router-dom";

//Import Components
import Navbar from "./Navbar/navbar";
import Home from "./home";
import Login from "./login";
// Create a Main Component

class Main extends Component {
    render(){
        return(
            <div>
                {/*Render Different Component based on Route*/}
                <Route exact path="/" component={Home}/>
                <Route exact path="/login" component={Login}/>
            </div>
        )
    }
}
// class Main extends Component {
//     render() {
//         return (
//             <Provider store={store}>
//                 <div>
//                     {/*Render Different Component based on Route*/}
//                     <Route exact path="/" component={Navbar}/>
//                 </div>
//             </Provider>
//         );
//     }
// }

//Export The Main Component
export default Main;