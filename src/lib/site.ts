export const site = {
  name: "Financial Literacy for Kids",
  founder: "Alex Lam",
  location: "Dublin, California",
  email: "lam.alex5420@gmail.com",
};

export const navigation = [
  { label: "Workshops", href: "/workshops" },
  { label: "Our Story", href: "/our-story" },
  { label: "Resources", href: "/resources" },
  { label: "Ask about a workshop", href: "/partner-with-us" },
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
    title: "Borrowing & Credit",
    description:
      "What it means to borrow money and why borrowed money needs to be repaid.",
    example: "What should you think about before borrowing money?",
  },
  {
    title: "Introductory Investing",
    description:
      "An introduction to investing, time, and the risk that investments can lose value.",
    example: "Why does starting earlier give an investment more time to grow?",
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
