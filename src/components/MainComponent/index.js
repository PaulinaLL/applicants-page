import React, { useState, useEffect } from "react";
import Header from "../Header/index";
import Dashboard from "../Dashboard/index";
import "./index.css";

let api_url =
  "https://raw.githubusercontent.com/PaulinaLL/mock-api/main/db.json";

const MainComponent = ({
  match: {
    params: { name },
  },
}) => {
  let [data, setData] = useState([]);
  let [isLoaded, setIsLoaded] = useState(false);
  let [err, setErr] = useState(null);

  useEffect(() => {
    const getData = () => {
      fetch(api_url)
        .then((res) => {
          if (res.status >= 500) {
            throw new Error("Upss something went wrong (server error)!");
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
    if (name) data.name = name;
    return (
      <>
        <Header contacts={data} />
        <Dashboard contacts={data} />
        <ul className="footer-links">
          <li>AGB </li>
          <li>
            <span>•</span>
          </li>
          <li>Datenschutz </li>
          <li>
            <span>•</span>
          </li>
          <li>Impressum</li>
        </ul>
      </>
    );
  }
};

export default MainComponent;
