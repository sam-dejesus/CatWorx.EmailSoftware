// import logo from './logo.svg';
import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink,} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Login from './pages/login/Login'
import Profile from "./pages/profile/Profile";
import Help from './pages/help/Help'
import AddUser from './pages/user/AddUser'
import DeleteUser from './pages/user/DeleteUser'
import AddAdmin from './pages/admin/AddAdmin'
import DeleteAdmin from './pages/admin/DeleteAdmin'
import "bootstrap/dist/css/bootstrap.min.css";

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>

      <Router>

          
          <div className="container master">
            <Routes>
              {/* <Route path="request" element={<Request />} /> */}
              <Route path="/" element={<Login />} />
              <Route path="delete user" element={<DeleteUser />} />
              <Route path="/add user" element={<AddUser />} />
              <Route path="/add admin" element={<AddAdmin />} />
              <Route path="/delete admin" element={<DeleteAdmin />} />
              <Route path="/help" element={<Help />} /> 

              {/* <Route path="/signup" element={<Signup />} /> */}
              <Route path="/profile" element={<Profile />} />
              <Route path="/profiles/:username" element={<Profile />} />
            </Routes>
          </div>
     

      </Router>
      
    </ApolloProvider>
  );

}

export default App;
