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
      <NavBar />
      <AboutUs />
      <OurSolutions />
      <OurClients />
    </>
  );
}
