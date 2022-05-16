import React from "react";
import Image from "next/image";
import aboutImage from "../Images/aboutImage.png";

export default function AboutUs() {
  return (
    <section className="aboutUsSection">
      <div>
        <h2>
          Don't just integrate <span>Accelerate your CRM</span>
        </h2>
        <p>
          Propel your sales team into a state of flow with CRM Accelerations.
          Switch out boring hours of repetitive work with high-impact
          activities. Build a repeatable sales process.{" "}
        </p>
      </div>
      <div>
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
