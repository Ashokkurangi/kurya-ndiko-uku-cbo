import type { IconName } from "@/components/Icon";

export const ORG_NAME = "Kurya Ndiko Uku Community Based Organisation";
export const ORG_SHORT_NAME = "Kurya Ndiko Uku CBO";
export const SITE_URL = "https://kurya-ndiko-uku-cbo.bloom1.workers.dev";

// Every "Donate" button goes to the Donate page. Add real payment details there when available.
export const DONATE_HREF = "/donate";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Our Children", href: "/our-children" },
  { label: "Education & Programs", href: "/education-programs" },
  { label: "Our Community", href: "/our-community" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Contact Us", href: "/contact-us" },
];

/*
 * Photographs. All of these were provided by the organisation.
 * To replace one, drop the new file into /public/images and update src/alt here.
 */
export const photos = {
  hero: { src: "/images/Hero.png", alt: "Nursery children in blue uniforms raising their hands outside the Bana Mbatose breakfast and lunch building" },
  mealTable: { src: "/images/1.png", alt: "Plates of rice, bread rolls and juice laid out for the children, with nursery children waiting in the background" },
  porridgeMat: { src: "/images/2.png", alt: "Nursery children in blue uniforms sitting together on a mat eating porridge" },
  servingPorridge: { src: "/images/3.png", alt: "A carer serving cups of porridge to nursery children sitting on a blue mat outdoors" },
  diningHall: { src: "/images/4.png", alt: "Children sharing a meal at a long table in the dining hall, decorated with flags from supporters around the world" },
  porridgeBoy: { src: "/images/5.png", alt: "A young boy in a giraffe jumper smiling while eating porridge from a red cup" },
  maizeFlour: { src: "/images/6.png", alt: "A laughing child in a blue uniform carrying bags of maize flour" },
  communityWomen: { src: "/images/people-food.png", alt: "A group of women from the community in colourful wraps crocheting together outdoors" },
};

/*
 * Official CBO registration certificate, as supplied by the organisation. Do not crop or edit the file.
 * If it is replaced, update `width`/`height` to the new file's real pixel size.
 */
export const registrationCertificate = {
  src: "/images/kurya-ndiko-uku-cbo-registration-certificate.png",
  width: 1020,
  height: 760,
  alt: "Certificate of CBO registration awarded to Kurya Ndiko Uku Community Based Organisation of Daniel Gausi VDC, TA Mzikubola, by M'Mbelwa District Council",
  caption: "Official registration certificate for Kurya Ndiko Uku Community Based Organisation.",
};

// Factual statements used instead of numerical impact counters.
export const keyFacts: { title: string; icon: IconName }[] = [
  { title: "Supporting Communities Across 17 Villages", icon: "pin" },
  { title: "Community Work Since 2005", icon: "sprout" },
  { title: "Formally Registered as a CBO in 2010", icon: "award" },
  { title: "Focused on Children and Families", icon: "people" },
];

export const storyParagraphs = [
  "Kurya Ndiko Uku Community Based Organisation is a community-focused organisation working to support children, caregivers, families and communities in Malawi.",
  "Our community work began in 2005 after we saw how unwell many children were because of poor nutrition.",
  "We began by looking at foods that were already available in local villages and exploring ways to improve cooking methods so children could receive better nutrition from locally available resources.",
  "Kurya Ndiko Uku was formally registered as a Community Based Organisation on 30 July 2010.",
  "Since then, we have continued working with children, caregivers and families, providing practical support in areas including nutrition, education, healthcare access, basic needs and community transportation.",
  "Our work is rooted in the community and focuses on responding to real needs using the resources available to us.",
];

export const timeline = [
  { year: "2005", title: "Community work begins", text: "Seeing how unwell many children were, we started improving nutrition using foods already available in local villages." },
  { year: "2010", title: "Formally registered", text: "Kurya Ndiko Uku was registered as a Community Based Organisation on 30 July 2010." },
  { year: "Today", title: "Across 17 villages", text: "We support children, caregivers and community members across 17 villages." },
];

export const missionStatement =
  "Our mission is to support vulnerable children and families in our communities by improving access to food, education, healthcare, clothing, transportation and other essential support.";
export const missionBelief =
  "We believe every child deserves the opportunity to grow up healthy, receive an education and build a better future.";

export type Programme = {
  id: string;
  title: string;
  icon: IconName;
  summary: string;
  details: string[];
  points?: string[];
  note?: string;
};

export const programmes: Programme[] = [
  {
    id: "nutrition",
    title: "Nutrition & Food Support",
    icon: "bowl",
    summary: "Food for children and caregivers has been at the heart of our work since 2005.",
    details: [
      "Our work began because many children in our community were unwell from poor nutrition. We started with foods already available in local villages and better ways of cooking them.",
      "Today, the funds we receive are mostly used to buy food for children and caregivers. Some former nursery school children sometimes return to us when they need food.",
      "In recent years harvests have not been good, and food security has become increasingly difficult for families in the community.",
    ],
    note: "Because our resources are limited, we have had to reduce the meals we provide. At present we are providing porridge, and lunch provision has had to stop. We hope additional support will allow us to restore and expand the food programme.",
  },
  {
    id: "education",
    title: "Education",
    icon: "book",
    summary: "Supporting children's education and creating opportunities for their future.",
    details: [
      "Our Bana Mbatose Nursery was created to give young children in the local community access to early years education in a welcoming environment.",
      "Where funds are available, we also provide education-related support to vulnerable children.",
      "One of our first nursery school children has now been selected to attend one of the top universities in Malawi, and we are seeking well-wishers to help with her university fees.",
    ],
  },
  {
    id: "healthcare",
    title: "Healthcare",
    icon: "medical",
    summary: "Helping community members access healthcare and medical assistance.",
    details: [
      "We previously ran a Sunday clinic where members of the community could see a local doctor who came once a week. Our UK support team helped pay the doctor's allowance.",
      "The UK team also sent medicines to support the community, but this became too expensive and had to stop.",
      "The Sunday clinic is sadly missed. We hope to find sustainable ways to restore access to community healthcare services in the future.",
    ],
  },
  {
    id: "community-support",
    title: "Community Support",
    icon: "people",
    summary: "Working alongside caregivers, families and community members across 17 villages.",
    details: [
      "We believe sustainable change begins within the community.",
      "We work to understand the needs of children and families and use the resources available to us to provide practical support.",
    ],
  },
  {
    id: "vulnerable-children",
    title: "Support for Vulnerable Children",
    icon: "heart",
    summary: "Helping children who may otherwise struggle to access basic necessities.",
    details: ["Where funds are available, we help vulnerable children with basic necessities. This can include:"],
    points: ["Food", "Clothing", "Shoes", "Education-related support", "Assistance for vulnerable children", "Support for caregivers"],
  },
  {
    id: "transport",
    title: "Community Transportation",
    icon: "car",
    summary: "A 7-seater vehicle that helps children, families and community members when transport is needed.",
    details: [
      "Our UK support team paid for a 7-seater vehicle for the CBO. It has become an important practical resource for the organisation and the community. It helps when:",
    ],
    points: [
      "Children become sick",
      "CBO members need medical assistance",
      "Families need transportation",
      "Community members require urgent transport",
      "People from the surrounding 17 villages need assistance",
    ],
    note: "People from the 17 villages can request transport when they need it, with fuel purchased when possible. The CBO looks after the maintenance of the vehicle.",
  },
];

// Bana Mbatose Nursery aims.
export const nurseryPoints = [
  "Learn through play",
  "Develop early learning skills",
  "Build confidence",
  "Interact with other children",
  "Develop communication skills",
  "Receive care and encouragement",
];

export const communityAreas: { title: string; icon: IconName; text: string; href: string }[] = [
  { title: "Nutrition", icon: "bowl", text: "Food and nutritional support for children and caregivers.", href: "/education-programs#nutrition" },
  { title: "Education", icon: "book", text: "Supporting children's education and creating opportunities for their future.", href: "/education-programs#education" },
  { title: "Healthcare", icon: "medical", text: "Helping community members access healthcare and medical assistance.", href: "/education-programs#healthcare" },
  { title: "Basic Needs", icon: "shirt", text: "Providing clothing, shoes and other essential items to vulnerable children.", href: "/education-programs#vulnerable-children" },
  { title: "Transportation", icon: "car", text: "Using the CBO vehicle to assist children, families and community members when transportation is needed.", href: "/education-programs#transport" },
];

export const leadership = {
  directors: [
    { role: "Director", name: "Lexah Harrison" },
    { role: "Deputy Director", name: "Harvey Muthali" },
  ],
  members: [
    "Elizabeth Chirwa", "Flora Dhlovu", "Sitafelo Tembo", "Racheal Moyo", "Shupe Mhuli", "Fava Nkana",
    "Lucia Gausi", "Elizabeth Chipeta", "Nancy Gausi", "Ellen Phiri", "Annie Gausi", "Mary Phiri",
    "Iris Shaba", "Thoko Muthali", "Maria Chisi", "Happiness Ngoyi", "Rose Banda", "Tina Kaunda",
    "Joyce Mseteka", "Ruth Mbale", "Fiskani Ngulube",
  ],
  accounts: ["Harvey Muthali", "Lexah Harrison", "Shupe Mhuli"],
};

export const ukSupporters = ["Mama Cathy", "Uncle Bobby", "Uncle Dave Harrison"];

// Contact form topics. `key` is used in links such as /contact-us?topic=volunteer.
export const contactTopics = [
  { key: "donation", label: "Making a donation" },
  { key: "nutrition", label: "Supporting children's nutrition" },
  { key: "education", label: "Supporting education / university fees" },
  { key: "healthcare", label: "Supporting healthcare" },
  { key: "vulnerable-children", label: "Supporting vulnerable children" },
  { key: "transport", label: "Supporting community transport" },
  { key: "well-wisher", label: "Becoming a well-wisher" },
  { key: "volunteer", label: "Volunteering" },
  { key: "other", label: "Something else" },
] as const;

export type ContactTopicKey = (typeof contactTopics)[number]["key"];
export const contactHref = (topic: ContactTopicKey) => `/contact-us?topic=${topic}#message`;

export const waysToHelp: { id: string; title: string; icon: IconName; text: string; href: string; action: string }[] = [
  { id: "donate", title: "Donate", icon: "heart", text: "Most of the funds we receive are used to buy food for children and caregivers. Every gift helps.", href: DONATE_HREF, action: "Donate now" },
  { id: "nutrition", title: "Support Children's Nutrition", icon: "bowl", text: "We are currently only able to provide porridge. Help us restore lunches and provide more nutritious meals.", href: contactHref("nutrition"), action: "Get in touch" },
  { id: "education", title: "Support Education", icon: "book", text: "Help children continue learning, including one of our first nursery children who now needs help with university fees.", href: contactHref("education"), action: "Get in touch" },
  { id: "healthcare", title: "Support Healthcare", icon: "medical", text: "Help us find sustainable ways to restore community healthcare, such as our much-missed Sunday clinic.", href: contactHref("healthcare"), action: "Get in touch" },
  { id: "vulnerable-children", title: "Support Vulnerable Children", icon: "shirt", text: "Help provide food, clothing, shoes and education-related support for children who need it most.", href: contactHref("vulnerable-children"), action: "Get in touch" },
  { id: "transport", title: "Support Community Transport", icon: "car", text: "Help keep our vehicle available when children, families and people from the 17 villages need transport.", href: contactHref("transport"), action: "Get in touch" },
  { id: "well-wisher", title: "Become a Well-Wisher", icon: "handshake", text: "Stand with our children and community over time, and help us share our story with others.", href: contactHref("well-wisher"), action: "Get in touch" },
  { id: "volunteer", title: "Volunteer", icon: "sprout", text: "Would you like to offer your time or skills? Get in touch and tell us how you would like to help.", href: contactHref("volunteer"), action: "Get in touch" },
];

// Contact form destination. PLACEHOLDER: leave empty until a form service
// (e.g. a Formspree endpoint: "https://formspree.io/f/xxxxxxxx") or API route is chosen.
// While empty, the form validates but tells visitors it is not connected yet.
export const CONTACT_FORM_ENDPOINT = "";
