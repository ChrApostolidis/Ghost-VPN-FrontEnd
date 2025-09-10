export interface Testimonial {
  id: string;
  name: string;
  review: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah M.',
    review:
      'As someone who works with clients worldwide, privacy and security are a top priority. Ghost VPN gives me peace of mind knowing my data is protected, even when I’m working from coffee shops or airports. The connection is fast and stable—perfect for my daily workflow.',
    rating: 5,
  },
  {
    id: 't2',
    name: 'Daniel R.',
    review:
      'I use Ghost VPN mainly to access study materials and streaming sites that are restricted in my country. It’s super easy to set up, and I’ve never had issues with speed. Honestly, it feels like the internet has no borders anymore.',
    rating: 5,
  },
  {
    id: 't3',
    name: 'Priya K.',
    review:
      'I travel frequently, and Ghost VPN has been a lifesaver. Whether I’m in Europe, Asia, or South America, I can always count on it to keep me safe on public Wi-Fi. Plus, the app is straightforward and beginner-friendly.',
    rating: 5,
  },
  {
    id: 't4',
    name: 'James H.',
    review:
      'I’ve tested several VPNs over the years, and Ghost VPN stands out for its reliability. The no-log policy and strong encryption are exactly what I recommend to anyone concerned about online privacy. It’s secure without sacrificing performance.',
    rating: 5,
  },
  {
    id: 't5',
    name: 'Emily L.',
    review:
      'Since working from home, I’ve had to connect to different networks regularly. Ghost VPN not only protects my work documents but also keeps my personal browsing private. It’s reassuring to know my information is safe 24/7.',
    rating: 4,
  },
  {
    id: 't6',
    name: 'Lucas W.',
    review:
      'Ghost VPN makes streaming so much easier. I can finally watch shows that aren’t available in my region without buffering issues.',
    rating: 5,
  },
  {
    id: 't7',
    name: 'Hannah T.',
    review:
      'I’m not very tech-savvy, but installing and using Ghost VPN was a breeze. It’s simple, fast, and keeps me safe online.',
    rating: 4,
  },
  {
    id: 't8',
    name: 'Omar F.',
    review:
      'Public Wi-Fi always worried me, but with Ghost VPN, I can log into my accounts without stressing about hackers.',
    rating: 5,
  },
  {
    id: 't9',
    name: 'Clara J.',
    review:
      'I use Ghost VPN on my phone and laptop every day. It runs quietly in the background and I forget it’s even there—it just works.',
    rating: 5,
  },
  {
    id: 't10',
    name: 'Marcus P.',
    review:
      'Great value for money. Other VPNs I tried were either too expensive or too slow. Ghost VPN gives me both speed and security.',
    rating: 5,
  },
];

export default testimonials;
