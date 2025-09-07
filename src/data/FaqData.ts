export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export type FaqCategory = "VPN" | "Security" | "Streaming" | "Legal";

export const faqs: Record<FaqCategory, FaqItem[]> = {
  VPN: [
    {
      id: 1,
      question: "What is a VPN and how does it work?",
      answer:
        "A VPN (Virtual Private Network) encrypts your internet connection and routes it through a secure server, hiding your IP address and keeping your online activity private and protected.",
    },
    {
      id: 2,
      question: "Why should I use a VPN?",
      answer:
        "Using a VPN enhances your privacy, secures your data on public Wi-Fi, helps bypass censorship, prevents tracking, and allows you to access geo-restricted content from anywhere in the world.",
    },
    {
      id: 3,
      question: "Can I use a VPN on multiple devices?",
      answer:
        "Absolutely! Most VPN providers allow you to use one subscription across multiple devices, including smartphones, tablets, laptops, and routers.",
    },
  ],
  Security: [
    {
      id: 4,
      question: "How does a VPN enhance security?",
      answer:
        "A VPN enhances security by encrypting your internet traffic, making it difficult for hackers and third parties to intercept your data.",
    },
    {
      id: 5,
      question: "Can a VPN protect me from hackers?",
      answer:
        "Yes, a VPN protects you by encrypting your traffic and hiding your IP address, making it harder for hackers to intercept your data—especially on unsecured networks like public Wi-Fi.",
    },
    {
      id: 6,
      question: "Does a VPN keep logs of my activity?",
      answer:
        "Not all VPNs are the same. Choose a provider with a strict no-logs policy to ensure your browsing history, connection times, and data are never stored or shared.",
    },
  ],
  Streaming: [
    {
      id: 7,
      question: "How can a VPN help with streaming services?",
      answer:
        "A VPN can help you access geo-restricted content on streaming platforms by masking your IP address and making it appear as if you're browsing from a different location.",
    },
    {
      id: 8,
      question: "Will a VPN slow down my streaming quality?",
      answer:
        "A VPN may slightly affect speed due to encryption, but premium VPNs are optimized for streaming so you can enjoy HD and 4K content without buffering.",
    },
    {
      id: 9,
      question: "Can a VPN bypass streaming blocks?",
      answer:
        "Yes, many VPNs are designed to bypass streaming blocks by rotating servers and updating IP addresses so you can keep accessing your favorite platforms.",
    },
  ],
  Legal: [
    {
      id: 10,
      question: "Is using a VPN legal?",
      answer:
        "Yes, using a VPN is legal in most countries. However, some countries have restrictions on VPN usage, so it's essential to check your local laws.",
    },
    {
      id: 11,
      question: "Can I get banned for using a VPN with streaming services?",
      answer:
        "While it's not illegal, some streaming platforms may restrict accounts if VPN usage is detected. A reliable VPN regularly updates its servers to avoid detection.",
    },
    {
      id: 12,
      question: "Do I need to report VPN usage to my ISP?",
      answer:
        "No, you don’t need to report VPN usage. In most regions, VPNs are completely legal, and your ISP cannot see what you’re doing once connected to a VPN server.",
    },
  ],
};
