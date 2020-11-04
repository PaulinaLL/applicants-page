import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/index";
import Dashboard from "./components/Dashboard/index";

let api_url =
  "https://raw.githubusercontent.com/PaulinaLL/mock-api/main/db.json";

function App() {
  let [data, setData] = useState([]);
  let [isLoaded, setIsLoaded] = useState(false);
  let [err, setErr] = useState(null);
  useEffect(() => {
    const getData = () => {
      fetch(api_url)
        .then((res) => {
          if (res.status >= 400) {
            throw new Error("Upss something went wrong (server errror)!");
          }
          return res.json();
        })
        .then(
          (data) => {
            setData(data);
            setIsLoaded(true);
          },
          (err) => {
            setErr(err);
            setIsLoaded(true);
          }
        );
    };
    getData();
  }, []);

  if (err) {
    return <div> {err.message} </div>;
  } else if (!isLoaded) {
    return <div> Loading... </div>;
  } else {
    return (
      <div className="App">
        <Header contacts={data} />
        <Dashboard contacts={data} />
        <ul>
          <li>AGB - </li>
          <li> Datenschutz - </li>
          <li> Impressum</li>
        </ul>
      </div>
    );
  }
}

export default App;
