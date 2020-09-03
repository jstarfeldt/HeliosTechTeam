import React from "react";
import Layout from "../../Layout";
import "./home.scss";

export default function Home() {
  console.log("hello!");
  return (
    <Layout>
      <div className="top-screen">
        <div className="title">We are Helios</div>
        <div className="subtitle">Our Vision Our Purpose Our Campus</div>
      </div>
      <div className="introduction">
        <div className="center">
          <div className="title">Introduction</div>
          <div className="details">
            On the UW campus, dated technology and overuse can rapidly increase
            bills and cause irreversible harm to our environment.The Energy Team
            identifies where UW suffers from inefficiencies, creating practical,
            inexpensive and impactful renewable solutions to solve them. From
            working with the University to replace old fluorescent light bulbs
            on campus with LED’s to heading the installation of solar panels on
            campus buildings, the Energy Team constantly searches for the most
            efficient renewable energy solutions.
          </div>
        </div>

        <div className="right">
        </div>
      </div>
    </Layout>
  );
}
