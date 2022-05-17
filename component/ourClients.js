import React, { useRef } from "react";
import Image from "next/image";
import comma from "../Images/Vector.png";
import Slider from "react-slick";
import clientCompanyLogo001 from "../Images/doubleDonationLogo.png";
import clientCompanyLogo002 from "../Images/jmpLogo.png";
import clientCompanyLogo003 from "../Images/red-eye.png";
import clientCompanyText001 from "../Images/doubleDonationText.png";
import clientImage001 from "../Images/ClientImage001.png";
import clientImage002 from "../Images/ClientImage002.png";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

var clientData = [
  {
    clientReview:
      "Klenty has helped us engage a far greater number of leads per week, resulting in an outbound revenue jump of 93%",
    clientCompanyLogo: clientCompanyLogo001,
    clientCompanyText: clientCompanyText001,
    clientImage: clientImage001,
    clientName: "Adam Weinger",
    clientRole: "President,Double The Donation",
  },
  {
    clientReview:
      "From someone who is relatively new to sales and lead generating, Klenty was a highly effective and simple-to-use tool that allowed me to quickly generate leads in a genuine and customisable manner",
    clientCompanyLogo: clientCompanyLogo002,
    clientCompanyText: "",
    clientImage: clientImage002,
    clientName: "Sam W",
    clientRole: "Head of Demand Generation , Jump ",
  },
  {
    clientReview:
      "Klenty has helped us engage a far greater number of leads per week, resulting in an outbound revenue jump of 93%",
    clientCompanyLogo: clientCompanyLogo003,
    clientCompanyText: "",
    clientImage: clientImage001,
    clientName: "Gavin Tye",
    clientRole: "Sales Director , Red Eye",
  },
];

export default function OurClients() {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const ref = useRef();
  return (
    <section className="clientsSection">
      <div className="clientsSectionDiv">
        <div className="clientsSectionHeader">
          <h1>What our customers have to say</h1>
        </div>
        <Slider ref={ref} {...settings}>
          {clientData.map((data, key) => (
            <div>
              <div className="clientCard" id={key}>
                <div>
                  <Image
                    src={comma}
                    alt="Picture of the author"
                    width={70}
                    height={70}
                  />
                  <h2>{data.clientReview}</h2>
                  <div className="clientDetailsDiv">
                    <div className="clientLogoDiv">
                      <Image
                        src={data.clientCompanyLogo}
                        alt="Picture of the author"
                        className="clientlogo"
                        width={28}
                        height={28}
                        objectFit="contain"
                      />
                      {data.clientCompanyText != "" && (
                        <Image
                          src={data.clientCompanyText}
                          alt="Picture of the author"
                          width={87}
                          height={13}
                        />
                      )}
                    </div>
                    <div className="clientNamePlace">
                      <p>{data.clientName}</p>
                      <p>{data.clientRole}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <Image
                    src={data.clientImage}
                    alt="Picture of the author"
                    width={270}
                    height={331}
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="arrowStyle">
        <button
          className="buttonTransparent"
          onClick={() => ref.current.slickPrev()}
        >
          <AiOutlineArrowLeft className="iconStyle" />
        </button>
        <button
          className="buttonTransparent"
          onClick={() => ref.current.slickNext()}
        >
          <AiOutlineArrowRight className="iconStyle" />
        </button>
      </div>
    </section>
  );
}
