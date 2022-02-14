import React from "react";
import "./App.css";
import "./contactus.css";
import "bootstrap/dist/css/bootstrap.css";
import { Header } from "./Header/";
import { Footer } from "./Footer";
import { Home } from "./Home";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { About } from "./About";
import { SignUp } from "./SignUp";
import { SignIn } from "./SignIn";
import { ContactUs } from "./ContactUs";

// setUser({name:"", email:""});
// console.log("Logout");

/*const db = {
  slide: [
    {
      id: 1,
      img: "https://www.francetvinfo.fr/pictures/7jJalUsF5MQt94zmxBSZ6XGSnmA/1500x843/2019/01/01/phpVrW4xq.jpg",
      header: "Masai Mara Park",
      shortDescription: "The proud of Africa",
    },
    {
      id: 2,
      img: "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/itemimages/10/73/1073324_v3.jpeg",
      header: "Serengeti Park",
      shortDescription: "Heritage of Africa",
    },
    {
      id: 3,
      img: "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/itemimages/10/73/1073324_v3.jpeg",
      header: "Ruvubu Park",
      shortDescription: "The heart of Africa",
    },
  ],

  packageList: [
    {
      id: 1,
      name: "Nairobi special offer",
      type: "Couple Package",
      img: "/assets/images/nairobi.jpg",
      location: "Nairobi Central",
      features:
        "Free pickup and drop facility, free wi-fi,free professionnals guide",
      usd: 4500,
    },
    {
      id: 1,
      name: "Holiday in",
      type: "Family",
      img: "/assets/images/plage1.jpg",
      location: "Kajiado Center",
      features: "Free pickup and drop facility, free professionnals guide",
      usd: 3000,
    },
    {
      id: 1,
      name: "short trip to zanzibar",
      type: "Group",
      img: "/assets/images/masaimara.jpg",
      location: "Zanzibar City Center",
      features:
        "Breakfast, Free pickup and drop facility, free wi-fi,free professionnals guide",
      usd: 2800,
    },
  ],
};
*/

// Apollo client
const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />
        <Routes>
          {/* Adding route to pages after creating the component for the page */}
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contactus" element={<ContactUs />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
        </Routes>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}
/*
packageList={db.packageList}
function App() {

  const [user, setUser]=useState({email:"", password:"", isLoggedIn: false, name: ""});
 
  const Logout = () =>{
    // setUser({name:"", email:""});
    // console.log("Logout");

  }


  return (
   <>
        {user?.isLoggedIn ? (
          <>
            <Header />
            <div className="BookFace">
              <LeftSideImages />
              <MainMiddlePart />
            </div>
          </>
        
        ) : (
          <div className="App">
            <Form user={user} setUser={setUser} />
          </div>
        )
        }
    </>
  );
}
*/

export default App;
