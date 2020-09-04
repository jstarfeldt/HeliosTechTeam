import React from "react";
import Layout from "../../Layout";
import "./home.scss";

export default function Home() {
  console.log("hello!");
  return (
    <Layout>
      <div className="container">

        <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
          <div className="col-md-6 px-0" style={{marginRight: '50%'}} >
            <h1 className="display-4 font-italic">Recent project Title</h1>
            <p className="lead my-3">Mission statement placeholder</p>
          </div>
        </div>
        <div className="introduction">
          <div className="center">
            <div className="title">Introduction</div>
            <div className="details">
              On the UW campus, dated technology and overuse can rapidly increase
              bills and cause irreversible harm to our environment. The Helios Team
              identifies where UW suffers from inefficiencies and works toward 
              creating practical,
              inexpensive and impactful renewable solutions. From
              working with the University, to replacing old fluorescent light bulbs
              on campus with LED’s, to heading the installation of solar panels on
              campus buildings, the Helios Team constantly searches for the most
              efficient renewable energy solutions.
            </div>
          </div>

          <div className="right">
          </div>
        </div>
      </div>
    </Layout>
  );
}
