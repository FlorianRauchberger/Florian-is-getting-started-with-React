//This brings the React library into scope and gives us access to all the cool features
import React from "react";
import './style.css'
//That's more or less what a component is
const App = () => {
  //This is what get’s returned from this component
  //Info: <div> <h1> etc. are NOT HTML tags. They are called JSX (JavaScript XML). This basically allows us to mix JavaScript and HTML together ^^
  return (
    
    <div className="contact-card"> {/*To acces CSS classes/id's we need to use className because class is reserved for JS*/}
    <img src="https://via.placeholder.com/150" alt="profile" />
    <div className="user-details">
            <p>Name: Florian Nairolf</p>
            <p>Email: Florian@reactjs.org</p>
            <p>Age: 16</p>
    </div>
</div>
  );
}
//We're also going to export this function so we can use it elsewhere
export default App;
