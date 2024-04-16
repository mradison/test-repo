// import { useState } from 'react'
// import MPCLogo from './assets/MPC.png'
// import viteLogo from '/vite.svg'

import { Outlet } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   createHttpLink,
// } from "@apollo/client";

// import { setContext } from "@apollo/client/link/context";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// const httpLink = createHttpLink({
//   uri: "/graphql",
// });

// const authLink = setContext((_, { headers }) => {
//   // get the authentication token from local storage if it exists
//   const token = localStorage.getItem("id_token");
//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : "",
//     },
//   };
// });

// const client = new ApolloClient({
//   // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
//   // link: authLink.concat(httpLink),
//   // cache: new InMemoryCache(),
// });

function App() {
  return (
    // <ApolloProvider client={client}>
    <div className="App">
      <Header />
      <Navbar />
      <div style={{ flex: 1, overflowY: 'auto', padding: 20 }}>
        <Outlet />
      </div>
      <Footer />
    </div>
    // </ApolloProvider>
  );
}

export default App
