// src/pages/About.tsx
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaFacebook, FaXTwitter, FaLinkedin } from "react-icons/fa6";
import Event from "./Events";

interface TeamMember {
  name: string;
  position: string;
  imageUrl: string;
  facebookUrl: string;
  twitterUrl: string;
  linkedinUrl: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "John Doe",
    position: "Software Engineer",
    imageUrl:
      "https://img.freepik.com/free-photo/pleased-looking-side-young-african-american-male-hat-wearing-green-shirt-isoloated-white-background_141793-138920.jpg?t=st=1723810482~exp=1723814082~hmac=6657cb9e7956a588ed788e50d4cfcfe2a584470e667ea51cbef179f1bfdc2482&w=1380",
    facebookUrl: "https://facebook.com/johndoe",
    twitterUrl: "https://twitter.com/johndoe",
    linkedinUrl: "https://linkedin.com/in/johndoe",
  },
  {
    name: "Jane Doe",
    position: "Software Engineer",
    imageUrl:
      "https://img.freepik.com/free-photo/african-woman-posing-looking-up_23-2148747978.jpg?t=st=1723810574~exp=1723814174~hmac=ca76bccd3bdbcbf402a14eb8234ecf7b648a611673fb8026824696f9f3b4ddf4&w=740",
    facebookUrl: "https://facebook.com/johndoe",
    twitterUrl: "https://twitter.com/johndoe",
    linkedinUrl: "https://linkedin.com/in/johndoe",
  },
  {
    name: "James Dane",
    position: "Software Engineer",
    imageUrl:
      "https://img.freepik.com/free-photo/attractive-mixed-race-male-with-positive-smile-shows-white-teeth-keeps-hands-stomach-being-high-spirit-wears-white-shirt-rejoices-positive-moments-life-people-emotions-concept_273609-15527.jpg?t=st=1723810470~exp=1723814070~hmac=55eff90a04cdb97aaf01b5c76c99594fc7b92cb19335f813a4d01d5b5b5e4ebb&w=1380",
    facebookUrl: "https://facebook.com/johndoe",
    twitterUrl: "https://twitter.com/johndoe",
    linkedinUrl: "https://linkedin.com/in/johndoe",
  },
  {
    name: "Jane Smith",
    position: "Project Manager",
    imageUrl:
      "https://img.freepik.com/free-photo/happiness-wellbeing-confidence-concept-cheerful-attractive-african-american-woman-curly-haircut-cross-arms-chest-self-assured-powerful-pose-smiling-determined-wear-yellow-sweater_176420-35063.jpg?t=st=1723810610~exp=1723814210~hmac=156847f94b0301af7a8596f7a821e384f67b216cd96d018f261701ba58e47107&w=1380",
    facebookUrl: "https://facebook.com/janesmith",
    twitterUrl: "https://twitter.com/janesmith",
    linkedinUrl: "https://linkedin.com/in/janesmith",
  },
  // Add more team members as needed
];

const About: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <section className="flex flex-col px-3 py-[69px] pb-56 text-[#1D2130]">
        <div className="flex items-center gap-4">
          <div className="border border-black h-[1px] w-12" />
          <p className="text-base font-bold">KNOW ABOUT US</p>
        </div>
        <div className="pt-8 px-[75px]">
          <h1 className="font-bold text-4xl mb-5">
            We are a non-governmental organization
          </h1>
          <p className="font-bold text-xl mb-9">
            Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc
            ut sem vitae risus tristique posuere.
          </p>
          <p className="font-normal text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Suspendisse varius enim elementum tristique.
          </p>
        </div>
      </section>

      <section className="text-[#1D2130] bg-[#FCEDC6] pt-56 py-14 px-11 pb-16">
        <div className="mb-16">
          <h1 className="font-bold text-base mb-4">Our Mission</h1>
          <h1 className="font-bold text-2xl">
            We make sure to provide inclusive care for children with special
            needs
          </h1>
          <p className="text-base font-normal mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
            imperdiet. Nunc ut sem vitae risus tristique posuere.
          </p>
        </div>
        <div>
          <h1 className="font-bold text-base mb-4">Our Vision</h1>
          <h1 className="font-bold text-2xl mb-2">
            We make sure to provide inclusive care for children with special
            needs
          </h1>
          <p className="text-base font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
            imperdiet. Nunc ut sem vitae risus tristique posuere.
          </p>
        </div>
      </section>
      <section className="py-11 px-11 mb-16 text-[#1D2130]">
        <div className="bg-[#F2C94C] rounded-lg px-12 py-14 flex flex-col lg:gap-10 lg:flex-row">
          <div>
            <h1 className="font-bold text-base">OUR</h1>
            <h1 className="font-bold text-base ml-4 mb-20 md:mb-[90px]">
              JOURNEY
            </h1>
            <p className="font-normal text-base md:mb-8 mb-11">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh.
            </p>
            <div className="px-16 md:px-0 flex gap-8 text-black mb-14">
              <div>
                <p className="font-medium text-2xl">34M+</p>
                <p className="font-medium text-xs">Donation Recieved</p>
              </div>

              <div>
                <p className="font-medium text-2xl">400+</p>
                <p className="font-medium text-xs">Volunteers</p>
              </div>

              <div>
                <p className="font-medium text-2xl">20+</p>
                <p className="font-medium text-xs">Care Homes</p>
              </div>
            </div>
          </div>
          <img
            src="https://images.pexels.com/photos/2361103/pexels-photo-2361103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="image"
            className="h-[396px] md:h-[448px] md:w-[612px] w-full rounded-lg mb-14 md:mb-0 md:py-16 object-cover"
          />
        </div>
      </section>
      <section className="py-11 px-11 mb-16 text-[#1D2130]">
        <h1 className="font-bold text-5xl text-center mb-4">Meet our team</h1>
        <p className="font-normal text-base text-center mb-14">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <img
                src={member.imageUrl}
                alt={member.name}
                className="rounded-lg h-80 w-72 mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.position}</p>
              <div className="mt-4 flex justify-center space-x-4 text-gray-400">
                <a
                  href={member.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="w-6 h-6 hover:text-blue-800" />
                </a>
                <a
                  href={member.twitterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter className="w-6 h-6 hover:text-black" />
                </a>
                <a
                  href={member.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="w-6 h-6 hover:text-blue-900" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="flex flex-col justify-center items-center text-white px-4 h-96 mb-16">
        <div
          className="bg-cover flex flex-col justify-center items-center text-white w-full rounded-lg h-96 px-6"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/free-photo/medium-shot-smiley-african-boys_23-2148860433.jpg?t=st=1723810992~exp=1723814592~hmac=1f55ed6ad9ca3a4e4633467d7ee438883cbd3388124021f2ea8f23dec238470b&w=1380')",
          }}
        >
          <p className="font-bold text-4xl text-center mb-4 w-[620px]">
            You can contribute to provide a place for children with special
            needs!
          </p>
          <div className="flex text-black gap-6">
            <button className="bg-[#F2C94C] px-4 py-2 rounded-sm font-medium">
              Join as a volunteer
            </button>
            <button className="bg-white px-4 py-2 rounded-sm font-medium">
              Donate
            </button>
          </div>
        </div>
      </section>
      <Event />
      <Footer />
    </div>
  );
};

export default About;
