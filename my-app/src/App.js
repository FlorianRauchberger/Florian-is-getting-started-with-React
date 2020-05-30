//This brings the React library into scope and gives us access to all the cool features
import React from "react";
import './style.css'
//That's more or less what a component is
const App = () => {
  //This is what get’s returned from this component
  //Info: <div> <h1> etc. are NOT HTML tags. They are called JSX (JavaScript XML). This basically allows us to mix JavaScript and HTML together ^^
  //This renders 3 times ContactCard. With exporting/importing you can render things from file 1 in file 2. Very useful when you have a Website with i.e a Header. You change the header one time in a file and it applies to all sites i.e Contact/Blog/Home.
  return (
    <>
      <ContactCard />
      <ContactCard />
      <ContactCard />
    </>
  );
}

const ContactCard = () => {
  return (
    <div className="contact-card">
      <img src="https://via.placeholder.com/150" alt="profile" />
      <div className="user-details">
        <p>Name: Florian Niarolf</p>
        <p>Email: Florian@reactjs.org</p>
        <p>Age: 16</p>
      </div>
    </div>
  );
};
//We're also going to export this function so we can use it elsewhere
export default App;
