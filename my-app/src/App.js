//This brings the React library into scope and gives us access to all the cool features
import React from "react";
//That's more or less what a component is
const App = () => {
  //message holds our message and in return() the {message} shows our message
  const message = "This is my first variable rendered in JSX";
  //This is what get’s returned from this component
  //Info: <div> <h1> etc. are NOT HTML tags. They are called JSX (JavaScript XML). This basically allows us to mix JavaScript and HTML together ^^
  return (
    <div>
       <h1>Hello React World</h1>
       <h2> {/* The curly braces tells the compiler that it should execute the code as JavaScript */}
             {message}
       </h2>
    </div>
  );
}
//We're also going to export this function so we can use it elsewhere
export default App;
