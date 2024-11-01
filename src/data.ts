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
};

type Menu = {
  name: string;
  content: string;
};

type Event = {
  id: number;
  title: string;
  date: string;
  location: string;
  theme: string | undefined;
  description: string[];
  imageUrl: string;
  images?: string[];
  list?: string[];
};

export const events: Event[] = [
  {
    id: 1,
    title: "Autistic people inclusiveness",
    location: "Opp Opolo round about, Yenagoa, Bayelsa, Nigeria",
    theme: "Empowering Autistic Voices",
    date: "April 28, 2024",
    description: [
      'On April 28th, 2024, FUF Africa hosted an impactful event themed "Empowering Autistic Voices" at a school for children with special needs in Sagamu. This outreach was dedicated to raising awareness about autism and other disabilities, focusing on acknowledging the unique challenges these children face while celebrating their individuality and strengths.',
      "The event featured interactive sessions with the children, including therapeutic activities like art and music, designed to help them express themselves in creative ways. There were also discussions with educators and caregivers on strategies for enhancing learning environments for children with autism and other disabilities. Experts in the field provided insights on effective ways to support these children, focusing on inclusivity and empowerment.",
      "In addition to these activities, the outreach emphasized community involvement, encouraging parents, teachers, and local authorities to take a proactive role in advocating for the rights and needs of children with special needs. FUF Africa's goal was to create a supportive space where the voices of children with autism and other disabilities could be heard, valued, and uplifted.",
      "This event marked an important step in FUF Africa’s mission to break down stigmas associated with autism and disabilities, advocating for inclusive education and equal opportunities for all children.",
    ],
    imageUrl: "autism/ADP_6814.jpg",
    images: [
      "autism/ADP_6884.jpg",
      "autism/ADP_6774.jpg",
      "autism/ADP_6770.jpg",
      "autism/ADP_6779.jpg",
      "autism/ADP_6902.jpg",
      "autism/ADP_6795.jpg",
      "autism/ADP_6802.jpg",
      "autism/ADP_6799.jpg",
      "autism/ADP_6781.jpg",
    ],
  },
  {
    id: 2,
    title: "PAD-A-GIRL INITIATIVE",
    location: "Lagos, Nigeria",
    theme: "",
    date: "May, 2024",
    description: [
      "Menstrual hygiene is a huge problem in Nigeria & Africa. Unfortunately, menstruation is a subject that still largely remains a taboo. It is not a subject that is openly discussed. Hence, the scale of the problem and it's devastating impact are less known. The effort of the government and a few individuals alone will not suffice.",
      "It requires contribution by the whole civil society. So we have partnered with 12 medical associations in 6 states of south west nigeria in other to achieve this goal which are:",
    ],
    list: [
      "Babcock University",
      "Olabisi Onabanjo university",
      "Ladoke Akintola University",
      "University of Lagos",
      "Afe Babalola University",
      "Federal university of technology,Akure",
      "Eko university",
      "Lagos state university",
      "Obafemi Awolowo university",
      "Ilorin university",
      "Bowen university",
      "Ekiti state university",
      "Osun state university",
      "University of medical sciences Kwara state",
    ],
    imageUrl: "pad-a-girl/PadAGirl.jpeg",
    images: [
      "pad-a-girl/IMG_7501.jpg",
      "pad-a-girl/IMG_7535.jpg",
      "pad-a-girl/IMG_7625.jpg",
      "pad-a-girl/IMG_7549.jpg",
      "pad-a-girl/IMG_7600.jpg",
      "pad-a-girl/IMG_7672.jpg",
      "pad-a-girl/IMG_7708.jpg",
      "pad-a-girl/IMG_7717.jpg",
      "pad-a-girl/IMG_7621.jpg",
    ],
  },
];

export const servicesProvided = [
  {
    title: "Family support",
    description:
      "FUF Africa provides emotional support, education, health programs, and empowerment, with a focus on children with special needs and girl child empowerment.",
    icon: "./assets/icon.png",
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
    title: "Autism Outreach",
    theme: "“Empowering Autistic Voices”",
    paragraphs: [
      'On April 28th, 2024, FUF Africa hosted an impactful event themed "Empowering Autistic Voices" at a school for children with special needs in Sagamu. This outreach was dedicated to raising awareness about autism and other disabilities, focusing on acknowledging the unique challenges these children face while celebrating their individuality and strengths.',
      "The event featured interactive sessions with the children, including therapeutic activities like art and music, designed to help them express themselves in creative ways. There were also discussions with educators and caregivers on strategies for enhancing learning environments for children with autism and other disabilities. Experts in the field provided insights on effective ways to support these children, focusing on inclusivity and empowerment.",
      "In addition to these activities, the outreach emphasized community involvement, encouraging parents, teachers, and local authorities to take a proactive role in advocating for the rights and needs of children with special needs. FUF Africa's goal was to create a supportive space where the voices of children with autism and other disabilities could be heard, valued, and uplifted.",
      "This event marked an important step in FUF Africa’s mission to break down stigmas associated with autism and disabilities, advocating for inclusive education and equal opportunities for all children.",
    ],
    images: [
      "https://img.freepik.com/free-photo/medium-shot-smiley-african-boys_23-2148860433.jpg?t=st=1726655940~exp=1726659540~hmac=9c66cce123abc322d58625aa14d7891391ecd9b197c6ff7e68219ee5bc18bd74&w=1380",
      "https://img.freepik.com/free-photo/medium-shot-smiley-african-boys_23-2148860433.jpg?t=st=1726655940~exp=1726659540~hmac=9c66cce123abc322d58625aa14d7891391ecd9b197c6ff7e68219ee5bc18bd74&w=1380",
      "https://img.freepik.com/free-photo/medium-shot-smiley-african-boys_23-2148860433.jpg?t=st=1726655940~exp=1726659540~hmac=9c66cce123abc322d58625aa14d7891391ecd9b197c6ff7e68219ee5bc18bd74&w=1380",
      "https://img.freepik.com/free-photo/medium-shot-smiley-african-boys_23-2148860433.jpg?t=st=1726655940~exp=1726659540~hmac=9c66cce123abc322d58625aa14d7891391ecd9b197c6ff7e68219ee5bc18bd74&w=1380",
    ],
  },

  {
    id: 2,
    title: "Pad-A-Girl Initiative",
    theme: "",
    paragraphs: [
      "The Pad-A-Girl Initiative is a transformative outreach program currently active in 14 Nigerian universities, aimed at addressing menstrual health and hygiene for young girls. The initiative provides free sanitary pads to female students, helping to eliminate poor menstrual hygiene, which often leads to health issues and absenteeism from school.",
      "Alongside distributing sanitary pads, the program also focuses on educating young girls about menstrual health, breaking the stigma around menstruation, and fostering open conversations about related issues. Through workshops and seminars, participants learn about proper menstrual care, the importance of hygiene, and how to manage their menstrual cycle with dignity and confidence.",
      "By tackling the challenges surrounding menstrual health, the Pad-A-Girl Initiative empowers young girls to stay in school, maintain good health, and build self-esteem, ensuring that menstruation doesn’t become a barrier to their education and overall well-being.",
    ],
    images: [
      "https://img.freepik.com/free-photo/medium-shot-smiley-african-boys_23-2148860433.jpg?t=st=1726655940~exp=1726659540~hmac=9c66cce123abc322d58625aa14d7891391ecd9b197c6ff7e68219ee5bc18bd74&w=1380",
      "https://img.freepik.com/free-photo/medium-shot-smiley-african-boys_23-2148860433.jpg?t=st=1726655940~exp=1726659540~hmac=9c66cce123abc322d58625aa14d7891391ecd9b197c6ff7e68219ee5bc18bd74&w=1380",
      "https://img.freepik.com/free-photo/medium-shot-smiley-african-boys_23-2148860433.jpg?t=st=1726655940~exp=1726659540~hmac=9c66cce123abc322d58625aa14d7891391ecd9b197c6ff7e68219ee5bc18bd74&w=1380",
      "https://img.freepik.com/free-photo/medium-shot-smiley-african-boys_23-2148860433.jpg?t=st=1726655940~exp=1726659540~hmac=9c66cce123abc322d58625aa14d7891391ecd9b197c6ff7e68219ee5bc18bd74&w=1380",
    ],
  },

  {
    id: 3,
    title: "University Health Fair",
    paragraphs: [
      "In collaboration with Babcock University, FUF Africa organized a University Health Fair focused on raising awareness about men’s health, particularly prostate cancer. The event provided students and staff with essential health information, screenings, and consultations, encouraging proactive health management and early detection.",
      "Recently, we also partnered with Jos University for an outreach in honor of *World Hepatitis Day*. This event aimed to educate the university community about hepatitis prevention, diagnosis, and treatment, while offering free health screenings and resources. Both initiatives are part of our ongoing commitment to improving health outcomes in academic communities.",
    ],
    images: [
      "https://img.freepik.com/free-photo/medium-shot-smiley-african-boys_23-2148860433.jpg?t=st=1726655940~exp=1726659540~hmac=9c66cce123abc322d58625aa14d7891391ecd9b197c6ff7e68219ee5bc18bd74&w=1380",
      "https://img.freepik.com/free-photo/medium-shot-smiley-african-boys_23-2148860433.jpg?t=st=1726655940~exp=1726659540~hmac=9c66cce123abc322d58625aa14d7891391ecd9b197c6ff7e68219ee5bc18bd74&w=1380",
      "https://img.freepik.com/free-photo/medium-shot-smiley-african-boys_23-2148860433.jpg?t=st=1726655940~exp=1726659540~hmac=9c66cce123abc322d58625aa14d7891391ecd9b197c6ff7e68219ee5bc18bd74&w=1380",
      "https://img.freepik.com/free-photo/medium-shot-smiley-african-boys_23-2148860433.jpg?t=st=1726655940~exp=1726659540~hmac=9c66cce123abc322d58625aa14d7891391ecd9b197c6ff7e68219ee5bc18bd74&w=1380",
    ],
  },
];

export const eventData = [
  {
    id: 1,
    title: "A day with our wonderful children",
    location: "Opp Opolo round about, Yenagoa, Bayelsa, Nigeria",
    date: "April 13, 2022 8:30 AM",
    description: [
      "Et morbi vitae lobortis nam odio. Faucibus vitae vel neque nullam in in lorem platea mattis. Euismod aenean rhoncus scelerisque amet tincidunt scelerisque aliquam. Luctus porttitor elit vel sapien, accumsan et id ut est. Posuere molestie in turpis quam. Scelerisque in viverra mi ut quisque. In sollicitudin sapien, vel nulla quisque vitae. Scelerisque eget accumsan, non in. Posuere magna erat bibendum amet, nisi eu id.",
      "Viverra at diam nunc non ornare. Sed ultricies pulvinar nunc, lacus sem. Tellus aliquam ut euismod cursus dui lectus. Ut amet, cras volutpat dui. A bibendum viverra eu cras. Mauris morbi sed dignissim a in nec aliquam fringilla et. Mattis elit dignissim nibh sit. Donec arcu sed elit scelerisque tempor ornare tristique. Integer faucibus duis praesent tempor feugiat ornare in. Erat libero egestas porttitor nunc pellentesque mauris et pulvinar eget.",
    ],
    imageUrl:
      "https://img.freepik.com/free-photo/pleased-looking-side-young-african-american-male-hat-wearing-green-shirt-isoloated-white-background_141793-138920.jpg?t=st=1723810482~exp=1723814082~hmac=6657cb9e7956a588ed788e50d4cfcfe2a584470e667ea51cbef179f1bfdc2482&w=1380",
  },
];

export const carouselData: CarouselItem[] = [
  {
    id: 1,
    title: "Item 1",
    image: "https://via.placeholder.com/400x200?text=Slide+1",
  },
  {
    id: 2,
    title: "Item 2",
    image: "https://via.placeholder.com/400x200?text=Slide+2",
  },
  {
    id: 3,
    title: "Item 3",
    image: "https://via.placeholder.com/400x200?text=Slide+3",
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
  {
    name: "Impact",
    content:
      "Every donation you make has a direct and tangible impact on the lives of children. From enabling access to quality education through scholarships to supporting health programs and rehabilitation for trauma-affected kids, your contributions help these children thrive. By donating, you’re empowering young people, particularly girls and children with special needs, to overcome challenges and build a better future. The positive ripple effect of your support extends to families and communities, fostering growth and resilience.",
  },
  {
    name: "What You Get",
    content:
      "When you donate to FUF Africa, you become a part of our mission to create change. You’ll receive regular updates on our projects, highlighting the progress made thanks to your generosity. You’ll also see how your contribution has directly impacted the lives of the children we support. Additionally, you’ll be invited to events and activities where you can further engage with our mission and witness the positive outcomes of your contribution.",
  },
];
