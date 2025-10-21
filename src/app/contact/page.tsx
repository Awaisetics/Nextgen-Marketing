import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | NextGen Marketing",
  description: "Get in touch with NextGen Marketing for your digital marketing needs. Contact us for web development, social media management, and lead generation services.",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Contact />
    </>
  );
};

export default ContactPage;
