import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import OldroomJPG from "../assets/oldroom.jpg";
import HalfwayroomJPG from "../assets/halfway.jpg";
import NewroomJPG from "../assets/newroom.jpg";

function Homepage({ TasksValue }) {
  return (
    <main className="main">
      <div className="welcome">
      <h1 style={{ textDecoration: "underline" }}>Welcome to Mesa Pioneer Construction</h1>
      </div>

      <div className="friend">
        <h3>Your Friend in the Constuction Business</h3>
      </div>

      <section className="ourServices">
        <h2 style={{ textDecoration: "underline" }}>Our Services</h2>
        <ul>
          <li>Residential Construction</li>
          <li>Renovation and Remodeling</li>
        </ul>
      </section>

      <section className="portfolio">
        <h2 style={{ textDecoration: "underline" }}>Portfolio</h2>
        <div className="imageContainer">
        <p className="LCText">Before</p>
          <div className="imageItem">
            <img className="frontPics" src={OldroomJPG} alt="Before Picture" />
          </div>
          <p className="LCText">During</p>
          <div className="imageItem">
            <img
              className="frontPics"
              src={HalfwayroomJPG}
              alt="Halfway Picture"
            />
          </div>
          <p className="LCText">After</p>
          <div className="imageItem">
            <img className="frontPics" src={NewroomJPG} alt="After Picture" />
          </div>
        </div>
      </section>
    </main>
  );
}
export default Homepage;
