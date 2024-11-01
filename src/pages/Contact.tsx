import React from "react";
import {
  FaInstagram,
  FaXTwitter,
  FaLinkedin,
  FaTiktok,
  FaPhone,
  FaEnvelopeCircleCheck,
} from "react-icons/fa6";
import ContactForm from "../components/ContactForm";
// import MapView from "./MapView";

const Contact: React.FC = () => {
  return (
    <>
      <section className="text-black px-5 py-12 md:py-20 lg:py-24 bg-[#FCEDC6]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-24">
            <div className="space-y-6 md:space-y-8">
              <div className="flex items-center gap-4 text-[#1D2130]">
                <div className="border-b border-black w-12" />
                <p className="text-sm md:text-base font-bold tracking-wider">
                  TOP NEWS
                </p>
              </div>
              <div className="space-y-4 md:space-y-6">
                <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-[#1D2130]">
                  We'd love to hear from you
                </h1>
                <p className="font-normal text-base md:text-lg text-[#525560] max-w-xl">
                  Have any question in mind or want to enquire? Please feel free
                  to contact us through the form or the following details.
                </p>
              </div>
            </div>
            <div className="text-[#1D2130] flex flex-col gap-8 md:gap-12 justify-center">
              <div className="space-y-2">
                <p className="font-bold text-2xl md:text-3xl">Let's Talk!</p>
                <p className="text-lg font-normal">
                  <FaPhone /> +234 9038481215
                </p>
                <p className="text-lg font-normal">
                  <FaEnvelopeCircleCheck />
                  <a
                    href="mailto:info@fufafrica.org"
                    className="hover:underline text-lg"
                  >
                    info@fufafrica.org
                  </a>
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-bold text-2xl md:text-3xl">Head Office</p>
                <p className="text-lg font-normal">Lagos, Nigeria</p>
              </div>
            </div>
          </div>
          <div className="mt-8 md:mt-12 flex justify-center md:justify-start space-x-6">
            <a
              href="https://www.instagram.com/fuf.africa?igsh=ZzBwcGwyYnA4azQw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1D2130] hover:text-[#E1306C] transition-colors duration-300"
            >
              <FaInstagram className="w-7 h-7" />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="https://www.tiktok.com/@fufafrica?_t=8r0oq3gR5pm&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1D2130] hover:text-[#0c090a] transition-colors duration-300"
            >
              <FaTiktok className="w-7 h-7" />
              <span className="sr-only">Tiktok</span>
            </a>
            <a
              href="https://x.com/fuf_africa?s=21&t=uw45wc9e-FX0H6bdKy6oQA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1D2130] hover:text-[#1DA1F2] transition-colors duration-300"
            >
              <FaXTwitter className="w-7 h-7" />
              <span className="sr-only">Twitter</span>
            </a>
            <a
              href="https://linkedin.com/posts/fuf-africa_health-impact-activity-7237116225019883521-G85r?utm_source=share&utm_medium=member_ios"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1D2130] hover:text-[#0A66C2] transition-colors duration-300"
            >
              <FaLinkedin className="w-7 h-7" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
      </section>
      <ContactForm />
      {/* <MapView /> */}
    </>
  );
};

export default Contact;
