import React from "react";
import "../styles/contactPage.styles.css";
import Layout from "../components/layout";
import Mailer from "../components/contactPage/mailer";
import ContactHeader from "../components/contactPage/contactHeader";

const Contact = () => {
  return (
    <Layout>
      <div className="flex flex-col md:flex-row md:mx-[7.2917vw]">
        <ContactHeader />
        <Mailer />
      </div>
    </Layout>
  );
};

export default Contact;
