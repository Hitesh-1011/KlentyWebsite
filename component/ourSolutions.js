import React from "react";
import Image from "next/image";
import img1 from "../Images/crmImg01.png";
import img2 from "../Images/crmImg02.png";
import img3 from "../Images/crmImg03.png";

var cardData = [
  {
    imgUrl: img1,
    heading: "Never update your contacts manually",
    description:
      "Any contact you add in CRM gets updated automatically in Klenty. Set up Triggers to drive leads from Klenty back into the CRM.  Save hours everyday to focus on critical activities",
  },
  {
    imgUrl: img2,
    heading: "Engage instantly with prospects who show intent",
    description:
      "Auto-sync email engagement data like opens, clicks and replies from Klenty right into your CRM. Get notified immediately. Followup without skipping a beat.",
  },
  {
    imgUrl: img3,
    heading: "Outreach without leaving your CRM ",
    description:
      "Engage with prospects straight from your CRM.Book meetings using Klenty- without ever logging into Klenty. No more switching screens to execute sales outreach.",
  },
];

export default function OurSolutions() {
  return (
    <section className="crmSection">
      <div className="crmSectionDiv">
        <div className="crmheaderSection">
          <h1>CRM Acceleration</h1>
          <p>Everything CRM Integrations was supposed to be. And more.</p>
        </div>
        <div className="cardContainer">
          {cardData.map((data) => (
            <div className="cardDesign">
              <Image
                src={data.imgUrl}
                alt="Picture of the author"
                width={50}
                height={50}
              />
              <h3>{data.heading}</h3>
              <p>{data.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
