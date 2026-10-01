import type { IconName } from "@/components/Icon";

// Every "Donate" button goes to the Donate page. Add real payment details there when available.
export const DONATE_HREF = "/donate";

// PLACEHOLDER: Kurya Ndiko Uku CBO has not yet created its PayChangu merchant
// account / Payment Link. Once the organisation signs up at paychangu.com and
// generates a Payment Link for its settlement bank account, replace this with
// that real URL. Until then this points at PayChangu's own product page,
// NOT a working donation checkout for this CBO.
export const PAYCHANGU_DONATE_HREF = "https://paychangu.com/donations";

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

// Approximate figures pending confirmation from the organisation — replace with verified numbers when available.
export const impactStats = [
  { value: "100+", label: "Children Supported" },
  { value: "3+", label: "Education Programs" },
  { value: "200+", label: "Meals / Breakfasts Provided" },
  { value: "5+", label: "Community Initiatives" },
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

/* ---------------- About Us page content ---------------- */

export const SITE_URL = "https://kurya-ndiko-uku-cbo.bloom1.workers.dev";

/*
 * Photographs used on the About Us page. All were provided by the organisation.
 * To replace one, drop the new file into /public/images and update src/alt here.
 */
export const photos = {
  mealTable: { src: "/images/1.png", alt: "Plates of rice, bread rolls and juice laid out for the children, with nursery children waiting in the background" },
  servingPorridge: { src: "/images/3.png", alt: "A carer serving cups of porridge to nursery children sitting on a blue mat outdoors" },
};

/*
 * Official CBO registration certificate, as supplied by the organisation. Do not crop or edit the file.
 * If it is replaced, update `width`/`height` to the new file's real pixel size.
 */
export const registrationCertificate = {
  src: "/images/kurya-ndiko-uku-cbo-registration-certificate.jpeg",
  width: 1462,
  height: 1076,
  alt: "Certificate of CBO registration awarded to Kurya Ndiko Uku Community Based Organisation of Daniel Gausi VDC, TA Mzikubola, by M'Mbelwa District Council",
  caption: "Official registration certificate for Kurya Ndiko Uku Community Based Organisation.",
};

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

export const communityAreas: { title: string; icon: IconName; text: string }[] = [
  { title: "Nutrition", icon: "bowl", text: "Food and nutritional support for children and caregivers." },
  { title: "Education", icon: "book", text: "Supporting children's education and creating opportunities for their future." },
  { title: "Healthcare", icon: "medical", text: "Helping community members access healthcare and medical assistance." },
  { title: "Basic Needs", icon: "shirt", text: "Providing clothing, shoes and other essential items to vulnerable children." },
  { title: "Transportation", icon: "car", text: "Using the CBO vehicle to assist children, families and community members when transportation is needed." },
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
