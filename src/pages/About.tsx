// src/pages/About.tsx
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaFacebook, FaXTwitter, FaLinkedin } from "react-icons/fa6";
import Event from "./Events";
import { fetchImageUrl } from "../utils/storageUtils";
import Volunteer from "../components/Volunteer";

interface TeamMember {
  name: string;
  position: string;
  imageUrl: string;
  facebookUrl: string;
  twitterUrl: string;
  linkedinUrl: string;
}

const initialTeamMembers: TeamMember[] = [
  {
    name: "John Doe",
    position: "Software Engineer",
    imageUrl: "ADP_7008.jpg",
    facebookUrl: "https://facebook.com/johndoe",
    twitterUrl: "https://twitter.com/johndoe",
    linkedinUrl: "https://linkedin.com/in/johndoe",
  },
  {
    name: "Jane Doe",
    position: "Software Engineer",
    imageUrl: "IMG_6749.jpg",
    facebookUrl: "https://facebook.com/johndoe",
    twitterUrl: "https://twitter.com/johndoe",
    linkedinUrl: "https://linkedin.com/in/johndoe",
  },
  {
    name: "James Dane",
    position: "Software Engineer",
    imageUrl: "ADP_7008.jpg",
    facebookUrl: "https://facebook.com/johndoe",
    twitterUrl: "https://twitter.com/johndoe",
    linkedinUrl: "https://linkedin.com/in/johndoe",
  },
  {
    name: "Jane Smith",
    position: "Project Manager",
    imageUrl: "IMG_6749.jpg",
    facebookUrl: "https://facebook.com/janesmith",
    twitterUrl: "https://twitter.com/janesmith",
    linkedinUrl: "https://linkedin.com/in/janesmith",
  },
];

const About: React.FC = () => {
  const [teamMembers, setTeamMembers] =
    useState<TeamMember[]>(initialTeamMembers);
  const [sectionBackgroundImageUrl, setSectionBackgroundImageUrl] =
    useState<string>("");

  useEffect(() => {
    const loadImages = async () => {
      const sectionImageUrl = await fetchImageUrl("IMG_6753.jpg");

      if (sectionImageUrl) setSectionBackgroundImageUrl(sectionImageUrl);

      const updatedTeamMembers = await Promise.all(
        initialTeamMembers.map(async (member) => {
          const imageUrl = await fetchImageUrl(member.imageUrl);
          return { ...member, imageUrl: imageUrl || member.imageUrl };
        })
      );
      setTeamMembers(updatedTeamMembers);
    };

    loadImages();
  }, []);

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

      <div className="absolute top-[550px] md:top-[400px] rounded-2xl px-28 h-auto w-full">
        <img
          src="https://img.freepik.com/free-photo/pleased-looking-side-young-african-american-male-hat-wearing-green-shirt-isoloated-white-background_141793-138920.jpg?t=st=1723810482~exp=1723814082~hmac=6657cb9e7956a588ed788e50d4cfcfe2a584470e667ea51cbef179f1bfdc2482&w=1380"
          alt="NGO group"
          className="rounded-lg w-full h-96 object-cover"
        />
        <button
          className="absolute inset-0 flex items-center justify-center"
          aria-label="Play Video"
        >
          <div className="bg-white p-4 rounded-full">
            <svg
              className="w-12 h-12 text-gray-800"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1.72-9.78a.75.75 0 011.16-.64l4.5 2.25a.75.75 0 010 1.28l-4.5 2.25a.75.75 0 01-1.16-.64v-4.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </button>
      </div>

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
            src={sectionBackgroundImageUrl}
            className="h-[396px] md:h-[448px] md:w-[612px] w-full rounded-xl mb-14 md:mb-0 md:py-16 object-cover"
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
      <Volunteer />
      <Event />
      <Footer />
    </div>
  );
};

export default About;
