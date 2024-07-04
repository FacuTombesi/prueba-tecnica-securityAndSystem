"use client"

import styles from "../styles/page.module.css";
import Header from "@/components/Header";
import About from "@/components/About";
import Interests from "@/components/Interests";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <About />
      <Interests />
      <ContactForm />
      <Footer />
    </main>
  )
}
