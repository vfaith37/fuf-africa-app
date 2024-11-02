/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { FaDog, FaHandHoldingMedical, FaHotel, FaWater } from "react-icons/fa6";

import Hero from "../components/Hero";
import InfoSection from "../components/InfoSection";
import Volunteer from "../components/Volunteer";
import Event from "../components/Events";
// import PWHD from "../components/ProjectsWeHaveDone";
import { getImageUrl } from "../function/getImage";

// Define interfaces for better type safety
// interface ServiceItem {
//   icon: React.ReactNode;
//   title: string;
//   description: string;
// }

const Home: React.FC = () => {
  const [imageUrls, setImageUrls] = useState<Record<string, string>>({
    main: "",
    secondary: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string>("");

  const navigate = useNavigate();

  const imagePaths = ["IMG_7018.jpg", "founder.jpg"] as const;

  // Services data separated for better maintainability
  // const services: ServiceItem[] = [
  //   {
  //     icon: <FaHotel color="#FCEDC6" size={28} />,
  //     title: "Family support",
  //     description:
  //       "FUF Africa provides emotional support, education, health programs, and empowerment, with a focus on children with special needs and girl child empowerment.",
  //   },
  //   {
  //     icon: <FaHandHoldingMedical color="#FCEDC6" size={28} />,
  //     title: "Health benefits",
  //     description:
  //       "We run health programs and facilitate access to health education and preventive care.",
  //   },
  //   {
  //     icon: <FaWater color="#FCEDC6" size={28} />,
  //     title: "Scholarships and Educational Support",
  //     description:
  //       "FUF provides scholarships and educational resources to help children reach their full potential.",
  //   },
  //   {
  //     icon: <FaDog color="#FCEDC6" size={28} />,
  //     title: "Therapy",
  //     description:
  //       "We provide emotional and psychological support for individuals affected by trauma using sports, music, dance and the arts.",
  //   },
  // ];

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setIsLoading(true);
        const [mainImageUrl, secondaryImageUrl] = await Promise.all([
          getImageUrl(imagePaths[0]),
          getImageUrl(imagePaths[1]),
        ]);

        if (!mainImageUrl || !secondaryImageUrl) {
          throw new Error("Failed to load one or more images");
        }

        setImageUrls({
          main: mainImageUrl,
          secondary: secondaryImageUrl,
        });
      } catch (err) {
        setError("Failed to load images. Please try again later.");
        console.error("Error fetching images:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
    window.scrollTo(0, 0);
  }, []);

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  // const ServiceCard: React.FC<ServiceItem> = ({ icon, title, description }) => (
  //   <div className="flex items-start gap-6">
  //     <div className="bg-black p-2 text-white rounded-lg">{icon}</div>
  //     <div>
  //       <h3 className="text-lg font-bold">{title}</h3>
  //       <p className="text-sm md:text-base">{description}</p>
  //     </div>
  //   </div>
  // );

  return (
    <>
      <Hero />

      {/* About Founder */}
      <section className="grid grid-cols-1 md:grid-cols-2 text-black px-5 md:px-10 py-10 md:py-16 xl:px-56 gap-8">
        <div>
          <div className="flex items-center gap-4">
            <div className="border border-black h-[1px] w-12" />
            <p className="text-sm md:text-base font-bold">
              KNOW ABOUT THE FOUNDER
            </p>
          </div>
          <div className="pt-6 md:pt-8 px-2">
            <h1 className="font-bold text-2xl md:text-3xl mb-4 md:mb-5">
              FRANCISCO BIATUS UDOFIA
            </h1>
            <p className="font-normal font-Roboto text-sm md:text-base">
              Francisco is a passionate change optimist. He holds
              a certification as an international protocol consultant from the
              United States institute of diplomacy and human rights and a degree
              in International Law and Diplomacy and is a humanitarian activist
              and public speaker dedicated to inspiring positive impact.He is an
              origin of Akwa Ibom state , Nigeria ,through his humanitarian
              service, he has paid JAMB fees for over 200 high school students
              in South-South Nigeria (Niger delta region) and partnered with
              various organizations for outreach initiatives. While at
              university, he was part of the organizing team of the TEDBabcock
              event in 2023, featuring outstanding speakers and attracting over
              200 attendees with a 95% satisfaction rate. As the Director of
              Transport and Ventures for the Babcock University Student
              Association in 2022/2023, he renovated the Student Union building,
              executed high-profile events, implemented a campus-wide recycling
              program, and negotiated partnerships with ride-sharing services,
              reducing transportation costs by 20%, among other achievements. He
              also served as Vice President of the Babcock University
              Entrepreneurship Association for 2023/2024 and the Director of
              Works for the International Law and Diplomacy Student Association
              in 2021/2022. With a strong belief in the power of collective
              action, Francisco advocates for human rights, social justice, and
              sustainable development. Through his speaking engagements and
              activism, he empowers individuals and communities to drive
              meaningful change and create a better world for all.
            </p>
            {/* <button
              className="bg-[#F2C94C] p-3 rounded-sm font-medium hover:bg-[#e0b93d] transition-colors"
              onClick={() => navigate("about")}
            >
              Learn more
            </button> */}
          </div>
        </div>
        {isLoading ? (
          <div className="animate-pulse bg-gray-200 rounded-lg w-full h-full min-h-[400px]" />
        ) : (
          <img
           className="w-full h-auto md:h-full object-cover rounded-lg"
            src={imageUrls.secondary}
            alt="About Francisco Udofia"
          />
        )}
      </section>

      {/* About Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 bg-[#FEF5E7] text-black px-5 md:px-10 py-10 md:py-16 xl:px-56 gap-8">
        <div>
          <div className="flex items-center gap-4">
            <div className="border border-black h-[1px] w-12" />
            <p className="text-sm md:text-base font-bold">KNOW ABOUT US</p>
          </div>
          <div className="pt-6 md:pt-8 px-2">
            <h1 className="font-bold text-2xl md:text-3xl mb-4 md:mb-5">
              TRANSFORMING LIVES AND EMPOWERING COMMUNITIES, ONE INITIATIVE AT A
              TIME: THE FRANCISCO UDOFIA FOUNDATION.
            </h1>
            <p className="font-normal font-Roboto text-sm md:text-base mb-6 md:mb-9">
              The Francisco Udofia Foundation (FUF), founded by Francisco Biatus
              Udofia in July 2023, was born out of a deep passion for creating
              lasting change and holistic transformation in the lives of youths
              and disadvantaged communities. This foundation focuses on
              providing training, empowerment, and exposure to life-changing
              innovations, ensuring that the most vulnerable members of society
              receive the support they need to thrive. At its core, FUF is
              committed to spreading love and compassion on a broader scale,
              offering essential resources, services, and opportunities that
              improve the wellbeing and prospects of children and communities,
              particularly in Africa.
            </p>
            <button
              className="bg-[#F2C94C] p-3 rounded-sm font-medium hover:bg-[#e0b93d] transition-colors"
              onClick={() => navigate("about")}
            >
              Learn more
            </button>
          </div>
        </div>
        {isLoading ? (
          <div className="animate-pulse bg-gray-200 rounded-lg w-full h-full min-h-[400px]" />
        ) : (
          <img
            className="w-full h-auto md:h-full object-cover rounded-lg"
            src={imageUrls.main}
            alt="About Francisco Udofia Foundation"
          />
        )}
      </section>

      {/* Services Section */}
      {/* <section className="grid grid-cols-1 md:grid-cols-2 gap-24 bg-[#FEF5E7] px-5 md:px-10 py-10 md:py-16 xl:px-56">
        <div className="flex flex-col justify-center order-2 md:order-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="border border-black h-[1px] w-12" />
            <p className="text-sm md:text-base font-bold">WHAT WE DO</p>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Some services we provide
          </h2>
          <div className="md:hidden order-3 my-8">
            {isLoading ? (
              <div className="animate-pulse bg-gray-200 rounded-lg w-full h-64" />
            ) : (
              <img
                className="w-full h-auto object-cover rounded-lg"
                src={imageUrls.secondary}
                alt="Our services"
              />
            )}
          </div>
          <div className="space-y-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
        <div className="hidden md:block order-1 md:order-2 mt-12">
          {isLoading ? (
            <div className="animate-pulse bg-gray-200 rounded-lg w-full h-64" />
          ) : (
            <img
              className="w-[480px] h-[658px] object-cover rounded-lg"
              src={imageUrls.secondary}
              alt="Family support services"
            />
          )}
        </div>
      </section> */}

      {/* <PWHD /> */}
      <InfoSection />
      <Volunteer />
      <Event />
    </>
  );
};

export default Home;
