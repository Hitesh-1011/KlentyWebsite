import React from "react";
import Image from "next/image";
import aboutImage from "../Images/aboutImage.png";

export default function AboutUs() {
  return (
    <section className="aboutUsSection">
      <div className="headSection">
        <div className="headSectionContent">
          <h2 className="headText">
            Don't just integrate{" "}
            <span className="purpleText">Accelerate your CRM</span>
          </h2>
          <p>
            Propel your sales team into a state of flow with CRM Accelerations.
            Switch out boring hours of repetitive work with high-impact
            activities. Build a repeatable sales process.{" "}
          </p>
          <button className="getStartedButton">GET STARTED</button>
        </div>
      </div>
      <div className="imageSection">
        <Image
          src={aboutImage}
          alt="Picture of the author"
          width={540}
          height={540}
        />
      </div>
    </section>
  );
}
