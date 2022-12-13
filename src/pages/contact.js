import React from "react";
import Layout from "../components/layout";
import Mailer from "../components/mailer";
import ContactHeader from "../components/contactHeader";

const Contact = () => {
  return (
    <Layout>
      <div className="flex flex-col md:flex-row md:mx-28">
        <ContactHeader />
        <Mailer />
      </div>
    </Layout>
  );
};

export default Contact;
