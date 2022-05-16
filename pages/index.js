import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import NavBar from "../component/navbar";
import AboutUs from "../component/aboutUs";
import OurClients from "../component/ourClients";
import OurSolutions from "../component/ourSolutions";

export default function Home() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Palette+Mosaic&family=Poppins:wght@200&family=Roboto:ital,wght@1,500&family=Rock+3D&display=swap"
        rel="stylesheet"
      />
      <NavBar />
      <AboutUs />
      <OurSolutions />
      <OurClients />
    </>
  );
}
