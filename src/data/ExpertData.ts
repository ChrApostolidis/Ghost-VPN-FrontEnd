export interface ExpertData {
  image: string;
  context: string;
  name: string;
  description: string;
}

export const ExpertData: ExpertData[] = [
  {
    image:"./ExpertImages/Musk.jpg",
    context:
      "I use Ghost VPN every day. It’s fast, secure, and gives me peace of mind knowing my browsing is private.",
    name: "Elon Musk",
    description: "Founder & CEO of Tesla and SpaceX",
  },
  {
    image:"./ExpertImages/Nadella.jpg",
    context:
      "Ghost VPN is my trusted companion while traveling. I love how it keeps my data encrypted no matter where I am.",
    name: "Satya Nadella",
    description: "CEO of Microsoft",
  },
  {
    image:"./ExpertImages/Cook.jpg",
    context:
      "What I like most about Ghost VPN is the balance of speed and privacy. It just works flawlessly in the background.",
    name: "Tim Cook",
    description: "CEO of Apple",
  },
  {
    image:"./ExpertImages/Zuckerberg.jpg",
    context:
      "I like how Ghost VPN keeps my connections private without slowing me down. It’s the VPN I trust to stay secure every day.",
    name: "Mark Zuckerberg",
    description: "Founder & CEO of Meta",
  },
  {
    image:"./ExpertImages/Bezos.jpg",
    context:
      "Ghost VPN is the only VPN I fully trust. The security is outstanding and I use it as my main privacy tool.",
    name: "Jeff Bezos",
    description: "Founder & former CEO of Amazon",
  },
  {
    image:"./ExpertImages/Wojcicki.jpg",
    context:
      "Ghost VPN gives me confidence every time I go online. I like knowing my browsing and personal data stay completely private.",
    name: "Susan Wojcicki",
    description: "Former CEO of YouTube",
  },
];
