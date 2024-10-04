// src/pages/About.tsx
import React, { useEffect, useRef, useState } from "react";
import { FaFacebook, FaXTwitter, FaLinkedin } from "react-icons/fa6";
import Event from "../components/Events";
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
  const iframeRef = useRef<HTMLIFrameElement>(null);

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

  useEffect(() => {
    const handleFocus = () => {
      if (iframeRef.current) {
        iframeRef.current.contentWindow?.postMessage(
          '{"event":"command","func":"playVideo","args":""}',
          "*"
        );
      }
    };

    const section = iframeRef.current?.parentNode;
    if (section) {
      section.addEventListener("focus", handleFocus);
    }

    return () => {
      if (section) {
        section.removeEventListener("focus", handleFocus);
      }
    };
  }, [iframeRef]);
  return (
    <div className="relative overflow-hidden font-Roboto">
      {/* Know about us Section */}
      <section className="flex flex-col text-[#1D2130] pb-[172px] space-y-5">
        <div>
          <div className="flex items-center gap-4 mt-8 mb-4 mx-5">
            <div className="border border-black h-[1px] md:w-8 w-6" />
            <p className="text-base font-bold">KNOW ABOUT US</p>
          </div>
          <div className="space-y-8 mx-10 md:mx-20 pb-10">
            <h1 className="font-bold text-4xl">
              We are a non-governmental organization
            </h1>
            {/* <p className="font-bold text-xl">
              Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
              Nunc ut sem vitae risus tristique posuere.
            </p> */}
            <p className="font-normal text-base">
            At FUF Africa, our foundation’s initiatives cover a variety of programs designed to meet the specific needs of marginalized groups. These initiatives include providing emotional and psychological support for individuals affected by trauma through therapy and rehabilitation, offering scholarships and educational support to help children reach their full potential. We run health programs and facilitate access to health education and preventive care, focusing on reproductive health, HIV awareness and other preventable diseases. We empower young people and communities with the skills and resources needed to improve their livelihoods. We also care for and support children with special needs by ensuring that their unique educational and social needs are met. Through our girl child empowerment outreach program, we educate, support, and promote the wellbeing of young girls and women by providing essential information on menstrual hygiene, supplying sanitary products, and creating safe spaces for their growth.
            </p>
          </div>
        </div>
      </section>

      {/* Video about us */}
      <div className="w-full h-[386px] mt-[-172px]">
        <iframe
          // ref={iframeRef}
          className="rounded-lg mx-auto w-4/5 h-96 object-cover"
          src="https://www.youtube.com/embed/8one9yUgXMs"
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Our Vision and our Mission */}
      <section className="text-[#1D2130] bg-[#FCEDC6] space-y-10 pt-[172px] mt-[-172px]">
        <div className="pb-5 mx-5 md:mx-20 flex flex-col md:flex-row">
          <div className="mx-5 mt-5 space-y-2 pt-10">
            <h1 className="font-bold text-base">Our Mission</h1>
            {/* <h1 className="font-bold text-2xl">
              We make sure to provide inclusive care for children with special
              needs
            </h1> */}
            <p className="text-base font-normal">
            Our mission at the Francisco Udofia Foundation is to restore hope among vulnerable children and communities affected by poverty, abuse, violence, disease, and natural calamities. This foundation is committed to helping those who are often overlooked by society and providing them with opportunities to rebuild their lives. We are dedicated to filling the void for those who are often excluded and ignored by society by providing individuals with the skills, information, and resources they require to rebuild their lives and achieve a better future. Our work is more than just giving emergency assistance; it is about establishing pathways to long-term change. We believe that true transformation comes from addressing both the physical and emotional needs of people, empowering them to take charge of their own destinies. Through targeted programs, strategic partnerships, and a deep-rooted commitment to service, we aim to break cycles of hardship and also empower individuals to become agents of change in their own communities. In a world where inequality and injustice often limit the potential of entire communities, FUF is dedicated to building a brighter future where every child and every community has the opportunity to rise.
            </p>
          </div>
          <div className="space-y-2 mx-5 mt-5 pt-10">
            <h1 className="font-bold text-base">Our Vision</h1>
            {/* <h1 className="font-bold text-2xl">
              We make sure to provide inclusive care for children with special
              needs
            </h1> */}
            <p className="text-base font-normal">
            We envision a world where children and their caregivers are empowered to improve their own livelihoods through appropriate and affordable alternatives. FUF seeks to discover communities in need and create environments where people can succeed regardless of their circumstances by equipping them with the necessary tools and knowledge. By focusing on education, health, empowerment, and community-driven initiatives, the Francisco Udofia Foundation strives to create a ripple effect of transformation that reaches far beyond the immediate beneficiaries. We see a future where hope, opportunity, and dignity are restored, and where empowered individuals lead their communities toward progress and prosperity. Our vision is to foster a society where opportunities are accessible to all, where children grow up safe, healthy, and hopeful, and where communities are empowered to solve their own challenges using innovative and affordable solutions. We aim to be a driving force in transforming lives across Africa, building a legacy of empowerment, and compassion.
            </p>
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="px-2 md:px-11 mb-16 text-[#1D2130] mt-10 md:mt-20">
        <div className="bg-[#F2C94C] rounded-2xl px-12 py-14 flex flex-col lg:gap-10 lg:flex-row">
          <div>
            <h1 className="font-bold text-base">OUR</h1>
            <h1 className="font-bold text-base ml-4 mb-8 md:mb-[20px]">
              JOURNEY
            </h1>
            <p className="font-normal text-base mb-8">
            The Francisco Udofia Foundation (FUF), founded by Francisco Biatus Udofia in July 2023, was born out of a deep passion for creating lasting change and holistic transformation in the lives of youths and disadvantaged communities. This foundation focuses on providing training, empowerment, and exposure to life-changing innovations, ensuring that the most vulnerable members of society receive the support they need to thrive. At its core, FUF is committed to spreading love and compassion on a broader scale, offering essential resources, services, and opportunities that improve the wellbeing and prospects of children and communities, particularly in Africa.
            </p>
            <h1 className="font-bold text-base mb-8 md:mb-[20px]">WHY THIS FOUNDATION WAS ESTABLISHED
            </h1>
            <p className="font-normal text-base mb-8">
              FUF was established based on a simple yet profound conviction that while individual acts of kindness are meaningful, significant change requires a collective effort. Francisco Udofia saw the need for a platform that could extend beyond individual acts of kindness, as well as an opportunity to channel his passion for helping others into aOUR structured platform capable of reaching more people. Udofia’s guiding principle remains, “Why keep it for tomorrow when someone needs it today?”, a reflection of the foundation’s urgency and commitment to making a difference.
            </p>
            <div className="flex gap-8 text-black mb-8 md:mb-14">
              <div>
                <p className="font-medium text-2xl">2M+</p>
                <p className="font-medium text-xs">Donation Recieved</p>
              </div>

              <div>
                <p className="font-medium text-2xl">100+</p>
                <p className="font-medium text-xs">Volunteers</p>
              </div>

              <div>
                <p className="font-medium text-2xl">10+</p>
                <p className="font-medium text-xs">Outreaches</p>
              </div>
            </div>
          </div>
          <img
            src={sectionBackgroundImageUrl}
            className="h-[396px] md:h-auto md:w-[600px] w-full rounded-lg md:py-16 object-cover"
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
            <div key={index} className="text-center md:self-end">
              <img
                src={member.imageUrl}
                alt={member.name}
                className="rounded-lg h-48 md:h-80 w-72 mx-auto mb-4 object-cover"
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
    </div>
  );
};

export default About;
