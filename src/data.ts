type CarouselItem = {
  id: number;
  title: string;
  image: string;
};


type TeamMember = {
  name: string;
  position: string;
  imageUrl: string;
  facebookUrl: string;
  twitterUrl: string;
  linkedinUrl: string;
}



type Menu = {
  name: string;
  content: string;
}


type Event = {
  id: number;
  title: string;
  date: string;
}

export const events: Event[] = [
  {
    id: 1,
    title: "Say no to plastic usage and save the planet",
    date: "August 20, 2024",
  },
  {
    id: 2,
    title: "Monthly orphanage visits",
    date: "August 20, 2024",
  },
  {
    id: 3,
    title: "Annual Tech Conference",
    date: "August 20, 2024",
  },
  {
    id: 4,
    title: "Annual Tech Conference",
    date: "August 20, 2024",
  }, {
    id: 5,
    title: "Annual Tech Conference",
    date: "August 20, 2024",
  },
  {
    id: 6,
    title: "Web Development Workshop",
    date: "September 15, 2024",
  },
];


export const servicesProvided = [
    {
      title: "Family support",
      description:
        "FUF Africa provides emotional support, education, health programs, and empowerment, with a focus on children with special needs and girl child empowerment.",
      icon: "building",
    },
    {
      title: "Health benefits",
      description:
        "We run health programs and facilitate access to health education and preventive care.",
      icon: "heartbeat",
    },
    {
      title: "Scholarships and Educational Support",
      description:
        "FUF provides scholarships and educational resources to help children reach their full potential.",
      icon: "graduation-cap",
    },
    {
      title: "Therapy",
      description:
        "We provide emotional and psychological support for individuals affected by trauma using sports, music, dance and the arts.",
      icon: "hands-helping",
    },
    {
      title: "Empowerment Initiative",
      description:
        "We equip young people and communities with the necessary skills and resources to improve their livelihoods.",
      icon: "briefcase",
    },
    {
      title: "Special Needs Support",
      description:
        "We care for and support children with special needs by ensuring that their unique educational and social needs are met.",
      icon: "child",
    },
    {
      title: "Girl Child Empowerment",
      description:
        "We educate, support, and promote the wellbeing of young girls and women through our outreach programs.",
      icon: "female",
    },
  ];


  export const scrollData = [
      {
          id: 1,
          title: 'Autism Outreach',
          theme: '“Empowering Autistic Voices”',
          paragraphs: [
              'Themed “Empowering Autistic Voices,” this event was held on March 2nd, 2024, at a school for children with special needs in Sagamu, to acknowledge the challenges and celebrate the uniqueness of not only children with autism but other children with disabilities.'
          ],
          images: [
              'https://img.freepik.com/free-photo/medium-shot-smiley-african-boys_23-2148860433.jpg?t=st=1726655940~exp=1726659540~hmac=9c66cce123abc322d58625aa14d7891391ecd9b197c6ff7e68219ee5bc18bd74&w=1380',
              'https://img.freepik.com/free-photo/medium-shot-smiley-african-boys_23-2148860433.jpg?t=st=1726655940~exp=1726659540~hmac=9c66cce123abc322d58625aa14d7891391ecd9b197c6ff7e68219ee5bc18bd74&w=1380',
              'https://img.freepik.com/free-photo/medium-shot-smiley-african-boys_23-2148860433.jpg?t=st=1726655940~exp=1726659540~hmac=9c66cce123abc322d58625aa14d7891391ecd9b197c6ff7e68219ee5bc18bd74&w=1380',
              'https://img.freepik.com/free-photo/medium-shot-smiley-african-boys_23-2148860433.jpg?t=st=1726655940~exp=1726659540~hmac=9c66cce123abc322d58625aa14d7891391ecd9b197c6ff7e68219ee5bc18bd74&w=1380'
          ],
      },
      {
          id: 2,
          title: 'University Health Fair',
          paragraphs: [
              'In collaboration with Babcock University, FUF Africa organized a University Health Fair focused on raising awareness about men’s health, particularly prostate cancer. The event provided students and staff with essential health information, screenings, and consultations, encouraging proactive health management and early detection.',
              'Recently, we also partnered with Jos University for an outreach in honor of *World Hepatitis Day*. This event aimed to educate the university community about hepatitis prevention, diagnosis, and treatment, while offering free health screenings and resources. Both initiatives are part of our ongoing commitment to improving health outcomes in academic communities.'
          ],
          images: [
                  'https://img.freepik.com/free-photo/medium-shot-smiley-african-boys_23-2148860433.jpg?t=st=1726655940~exp=1726659540~hmac=9c66cce123abc322d58625aa14d7891391ecd9b197c6ff7e68219ee5bc18bd74&w=1380',
                  'https://img.freepik.com/free-photo/medium-shot-smiley-african-boys_23-2148860433.jpg?t=st=1726655940~exp=1726659540~hmac=9c66cce123abc322d58625aa14d7891391ecd9b197c6ff7e68219ee5bc18bd74&w=1380',
                  'https://img.freepik.com/free-photo/medium-shot-smiley-african-boys_23-2148860433.jpg?t=st=1726655940~exp=1726659540~hmac=9c66cce123abc322d58625aa14d7891391ecd9b197c6ff7e68219ee5bc18bd74&w=1380',
                  'https://img.freepik.com/free-photo/medium-shot-smiley-african-boys_23-2148860433.jpg?t=st=1726655940~exp=1726659540~hmac=9c66cce123abc322d58625aa14d7891391ecd9b197c6ff7e68219ee5bc18bd74&w=1380'
              ],
      },
      {
          id: 3,
          title: 'Autism Outreach',
          theme: '“Empowering Autistic Voices”',
          paragraphs: [
              'Themed “Empowering Autistic Voices,” this event was held on March 2nd, 2024, at a school for children with special needs in Sagamu, to acknowledge the challenges and celebrate the uniqueness of not only children with autism but other children with disabilities.'
          ],
          images: [
                  'https://img.freepik.com/free-photo/medium-shot-smiley-african-boys_23-2148860433.jpg?t=st=1726655940~exp=1726659540~hmac=9c66cce123abc322d58625aa14d7891391ecd9b197c6ff7e68219ee5bc18bd74&w=1380',
                  'https://img.freepik.com/free-photo/medium-shot-smiley-african-boys_23-2148860433.jpg?t=st=1726655940~exp=1726659540~hmac=9c66cce123abc322d58625aa14d7891391ecd9b197c6ff7e68219ee5bc18bd74&w=1380',
                  'https://img.freepik.com/free-photo/medium-shot-smiley-african-boys_23-2148860433.jpg?t=st=1726655940~exp=1726659540~hmac=9c66cce123abc322d58625aa14d7891391ecd9b197c6ff7e68219ee5bc18bd74&w=1380',
                  'https://img.freepik.com/free-photo/medium-shot-smiley-african-boys_23-2148860433.jpg?t=st=1726655940~exp=1726659540~hmac=9c66cce123abc322d58625aa14d7891391ecd9b197c6ff7e68219ee5bc18bd74&w=1380'
              ],
      },
      {
          id: 4,
          title: 'Autism Outreach',
          theme: '“Empowering Autistic Voices”',
          paragraphs: [
              'Themed “Empowering Autistic Voices,” this event was held on March 2nd, 2024, at a school for children with special needs in Sagamu, to acknowledge the challenges and celebrate the uniqueness of not only children with autism but other children with disabilities.'
          ],
          images: [
                  'https://img.freepik.com/free-photo/medium-shot-smiley-african-boys_23-2148860433.jpg?t=st=1726655940~exp=1726659540~hmac=9c66cce123abc322d58625aa14d7891391ecd9b197c6ff7e68219ee5bc18bd74&w=1380',
                  'https://img.freepik.com/free-photo/medium-shot-smiley-african-boys_23-2148860433.jpg?t=st=1726655940~exp=1726659540~hmac=9c66cce123abc322d58625aa14d7891391ecd9b197c6ff7e68219ee5bc18bd74&w=1380',
                  'https://img.freepik.com/free-photo/medium-shot-smiley-african-boys_23-2148860433.jpg?t=st=1726655940~exp=1726659540~hmac=9c66cce123abc322d58625aa14d7891391ecd9b197c6ff7e68219ee5bc18bd74&w=1380',
                  'https://img.freepik.com/free-photo/medium-shot-smiley-african-boys_23-2148860433.jpg?t=st=1726655940~exp=1726659540~hmac=9c66cce123abc322d58625aa14d7891391ecd9b197c6ff7e68219ee5bc18bd74&w=1380'
              ],
      },
      ];

  export const carouselData: CarouselItem[] = [
    {
      id: 1,
      title: 'Item 1',
      image: 'https://via.placeholder.com/400x200?text=Slide+1',
    },
    {
      id: 2,
      title: 'Item 2',
      image: 'https://via.placeholder.com/400x200?text=Slide+2',
    },
    {
      id: 3,
      title: 'Item 3',
      image: 'https://via.placeholder.com/400x200?text=Slide+3',
    },
  ];

  export const initialTeamMembers: TeamMember[] = [
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

  export const menus: Menu[] = [
    {
      name: "Overview",
      content:
        "At FUF Africa, we are dedicated to improving the lives of children through education, healthcare, and empowerment programs. Your donations help us provide scholarships, health resources, and emotional support to children in need, ensuring they have the tools and opportunities to succeed. We believe in building a brighter future for these children, and your support plays a vital role in making that vision a reality.",
    },
    { name: "Impact", content: "Every donation you make has a direct and tangible impact on the lives of children. From enabling access to quality education through scholarships to supporting health programs and rehabilitation for trauma-affected kids, your contributions help these children thrive. By donating, you’re empowering young people, particularly girls and children with special needs, to overcome challenges and build a better future. The positive ripple effect of your support extends to families and communities, fostering growth and resilience." },
    { name: "What You Get", content: "When you donate to FUF Africa, you become a part of our mission to create change. You’ll receive regular updates on our projects, highlighting the progress made thanks to your generosity. You’ll also see how your contribution has directly impacted the lives of the children we support. Additionally, you’ll be invited to events and activities where you can further engage with our mission and witness the positive outcomes of your contribution." },
  ];
  