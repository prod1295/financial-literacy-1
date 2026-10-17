export const site = {
  name: "Financial Literacy for Kids",
  founder: "Alex Lam",
  location: "Dublin, California",
  email: "lam.alex5420@gmail.com",
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Workshops", href: "/workshops" },
  { label: "What We Teach", href: "/what-we-teach" },
  { label: "Our Story", href: "/our-story" },
  { label: "Resources", href: "/resources" },
  { label: "Partner With Us", href: "/partner-with-us" },
];

export const topics = [
  {
    title: "Saving",
    description:
      "Why people save money and how small amounts can add up over time.",
    example: "If you save $2 each week, how long will it take to save $10?",
  },
  {
    title: "Budgeting",
    description:
      "How to plan where money goes instead of spending everything at once.",
    example:
      "You have $10. How much would you spend now, and how much would you keep?",
  },
  {
    title: "Needs vs. Wants",
    description:
      "How to separate things we need from things we would simply like to have.",
    example:
      "Think about a school lunch and a new toy. Which is a need? Which is a want?",
  },
  {
    title: "Responsible Spending",
    description:
      "Thinking before buying something and understanding tradeoffs.",
    example:
      "If you buy something today, what might you have to wait to buy later?",
  },
  {
    title: "Banking Basics",
    description:
      "A simple introduction to bank accounts, deposits, and keeping money safe.",
    example: "What happens when you put money into a bank account?",
  },
  {
    title: "Making Smart Choices",
    description:
      "Using everyday situations to practice financial decision-making.",
    example:
      "Two things you want cost different amounts. How would you decide what to do?",
  },
];

// Publish a real resource by adding its file to public/resources/, setting href,
// and changing status to "Available". Never link to a file before it exists.
export const resources: {
  title: string;
  description: string;
  status: "Coming Soon" | "Available";
  href: string | null;
}[] = [
  {
    title: "Budgeting Worksheet",
    description: "Practice making a plan for a small amount of money.",
    status: "Coming Soon",
    href: null,
  },
  {
    title: "Needs vs. Wants Activity",
    description: "Sort everyday items and talk about the choices.",
    status: "Coming Soon",
    href: null,
  },
  {
    title: "Saving Challenge",
    description: "Set a small goal and keep track of progress.",
    status: "Coming Soon",
    href: null,
  },
  {
    title: "Money Vocabulary Guide",
    description: "Simple explanations of everyday money words.",
    status: "Coming Soon",
    href: null,
  },
];

export type Photo = { src: string; alt: string; caption?: string };

// APPROVED PHOTO PLACEHOLDERS: add your own local image paths here later.
// Obtain permission before publishing identifiable photos of children.
// Keep arrays empty until actual, approved photos are available. No stock images.
export const photos: {
  founder: Photo | null;
  badmintonFundraiser: Photo[];
  workshops: Photo[];
  teachingMaterials: Photo[];
} = {
  founder: null, // Founder photo placeholder.
  badmintonFundraiser: [], // Badminton fundraiser photo placeholders.
  workshops: [], // Workshop photo placeholders.
  teachingMaterials: [], // Teaching materials photo placeholders.
};
