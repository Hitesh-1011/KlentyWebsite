import React from "react";
import Image from "next/image";
import logo from "../Images/Big-Logo.png";

export default function navBar() {
  return (
    <nav>
      <div className="image-links-div">
        <Image src={logo} alt="Picture of the author" width={128} height={64} />
        <div className="links">
          <ul>
            <li>
              <a>Platform</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Acceleration</a>
            </li>
            <li>
              <a>Resources</a>
            </li>
            <li>
              <a>Customer Stories</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="buttons-Container">
        <button className="noStyleButton">Log in</button>
        <button className="borderStyleButton">SCHEDULE DEMO</button>
        <button className="backgroundColorButton">TRY for free</button>
      </div>
    </nav>
  );
}
