// Every "Donate" button goes to the Donate page. Add real payment details there when available.
export const DONATE_HREF = "/donate";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Our Children", href: "/our-children" },
  { label: "Education & Programs", href: "/education-programs" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Contact Us", href: "/contact-us" },
];

export const missionItems = [
  { title: "Education", icon: "book", text: "Helping young children access quality early years education and supporting their journey through school." },
  { title: "Nutrition", icon: "bowl", text: "Helping children receive nutritious food so they can learn, play and grow." },
  { title: "Care & Wellbeing", icon: "heart", text: "Creating a safe, welcoming and supportive environment where children can feel valued." },
  { title: "Community Support", icon: "people", text: "Working together with families, local communities and international supporters to respond to local needs." },
  { title: "Future Opportunities", icon: "sprout", text: "Helping children develop the knowledge, confidence and skills they need for their future." },
] as const;

export const whatWeDo = [
  { title: "Early Years Education", icon: "book", text: <>Our <strong>Bana Mbatose Nursery</strong> provides early years education for young children in our local community.</> },
  { title: "Breakfast & Nutrition", icon: "bowl", text: <>The <strong>Bana Mbatose Breakfast Club</strong> aims to provide children from local villages with a nutritious breakfast.</> },
  { title: "Community Development", icon: "people", text: <>We work alongside local community members to identify needs and develop practical ways to support children and families.</> },
  { title: "International Partnerships", icon: "globe", text: <>Friends and supporters around the world help us raise awareness, share our story and provide resources for community projects.</> },
] as const;

export const nurseryPoints = [
  "Learn through play",
  "Develop early learning skills",
  "Build confidence",
  "Interact with other children",
  "Develop communication skills",
  "Receive care and encouragement",
];

export const educationBlocks = [
  { title: "School Support", icon: "school" },
  { title: "Food & Breakfast", icon: "bowl" },
  { title: "Early Years Education", icon: "book" },
  { title: "Learning Resources", icon: "pencil" },
  { title: "Child Development", icon: "sprout" },
] as const;

export const helpCards = [
  { title: "Donate", icon: "heart", text: "Your financial contribution can help support education, nutrition and community programs." },
  { title: "Support Education", icon: "pencil", text: "Help provide books, stationery, school supplies and other educational resources." },
  { title: "Support the Breakfast Club", icon: "bowl", text: "Help provide nutritious breakfasts for children from local villages." },
  { title: "Become a Partner", icon: "handshake", text: "Schools, businesses, community groups and organisations can work with us to support our programs." },
] as const;

export const impactStats = [
  "Children Supported",
  "Education Programs",
  "Meals / Breakfasts Provided",
  "Community Initiatives",
];

// Contact form destination. PLACEHOLDER: leave empty until a form service
// (e.g. a Formspree endpoint: "https://formspree.io/f/xxxxxxxx") or API route is chosen.
// While empty, the form validates but tells visitors it is not connected yet.
export const CONTACT_FORM_ENDPOINT = "";

export const contactTopics = [
  "Making a donation",
  "Supporting education",
  "Supporting the Breakfast Club",
  "Becoming a partner",
  "Something else",
];
