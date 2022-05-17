import React from "react";
import Image from "next/image";
import comma from "../Images/Vector.png";

export default function OurClients() {
  return (
    <section className="clientsSection">
      <div className="clientsSectionDiv">
        <div className="clientsSectionHeader">
          <h1>What our customers have to say</h1>
        </div>
        <div className="clientsReviewSection">
          <div className="clientCard">
            <Image
              src={comma}
              alt="Picture of the author"
              width={540}
              height={540}
            />
            <h3>
              Klenty has helped us engage a far greater number of leads per
              week, resulting in an outbound revenue jump of 93%
            </h3>
            <div className="clientDetailsDiv">
              <Image
                src={comma}
                alt="Picture of the author"
                width={540}
                height={540}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
