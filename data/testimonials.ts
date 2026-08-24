export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export const featuredTestimonial: Testimonial = {
  quote:
    "Their professionalism and attention to detail set them apart from any other agency I've worked with. I'm now thriving in my new role, and I owe it all to their expertise. I can't recommend them enough!",
  name: "Ethan Carter",
  role: "Marketing Manager",
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "They took the time to thoroughly understand our business, our culture, and the specific qualifications required for the position. The result was a perfect match – the candidate they found has exceeded our expectations and become an invaluable part of our leadership team. We are incredibly grateful for their expertise and partnership.",
    name: "Ethan",
    role: "CEO / Framify",
  },
  {
    quote:
      "We were struggling to fill a critical leadership position, but they came through with excellent candidates. The hire has been a game-changer.",
    name: "Alexander",
    role: "Lead Manager",
  },
  {
    quote:
      "Their attention to detail and commitment to finding the right talent made all the difference. We couldn't be happier with the results!",
    name: "Michael",
    role: "VP of HubMart",
  },
  {
    quote:
      "Their recruitment team was fantastic. They quickly identified and delivered exceptional talent that has helped our company grow.",
    name: "Liam",
    role: "Co-Founder of Framify",
  },
  {
    quote:
      "They exceeded our expectations in every way—professional, responsive, and always focused on finding the right fit for our team.",
    name: "James",
    role: "Marketing Manager",
  },
  {
    quote:
      "From start to finish, they made the recruitment process easy and stress-free. The candidates we hired are thriving in their roles.",
    name: "Oliver",
    role: "Designer",
  },
  {
    quote:
      "We partnered with them during a period of rapid growth and were impressed by their attention to detail and dedication to our success. They not only sourced top-tier talent for our engineering and marketing teams but also provided insightful guidance throughout the hiring process.",
    name: "Jacob",
    role: "Head of HR Team",
  },
];

export const reviewers = [
  { name: "Liam Parker", image: "0uZ62sOCkY6MQ1xDvZubEttWE.png" },
  { name: "Nathan Brooks", image: "15y2uYxJR65kqK8lXLK3YfJtME.png" },
  { name: "Lucas Shaw", image: "P4vB5xV4Bd5VKFlxAEkSqZAbjM.png" },
  { name: "Samuel Reed", image: "6RhPqEmOwb7vN6bm2YsYb1RjBA.png" },
  { name: "Ethan Collins", image: "7oH7exiO1Qqr2K7SEIDldsYInuk.png" },
  { name: "Jacob Bennett", image: "LNRMyIXmiGKc6Fsz3nJa7LBVSE.png" },
  { name: "Oliver Grant", image: "BDIeFX9Eb19eOIHlTjfGXdVgjhA.jpg" },
  { name: "Daniel Hayes", image: "FMXFnCSm9afwofQP76raqd4muLk.jpg" },
].map((r) => ({
  ...r,
  image: `https://framerusercontent.com/images/${r.image}`,
  rating: "4.9 Ratings",
}));
