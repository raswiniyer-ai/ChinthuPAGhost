// Content for Live The Day Holidays — ported 1:1 from www.livetheday.co.in
// Copy is preserved from the live site; only structure and presentation changed.

export const WA = '918714695559';

export const brand = {
  name: 'Live The Day',
  legal: 'Live The Day Holidays Pvt Ltd',
  tagline: 'Crafting travel experiences',
  since: 2015,
  address: 'LiveTheDay Holidays, Menachery Building, Church Rd, Thykoodam, Vyttila, Ernakulam, Kerala 682019',
  phones: ['+91 81 97 244 462', '+91 87 14 695 559'],
  whatsapp: '+91 87146 95559',
  socials: {
    facebook: 'https://www.facebook.com/ltdholidays',
    instagram: 'https://www.instagram.com/livetheday_holidays',
    youtube: 'https://www.youtube.com/@LiveTheDayHolidays/shorts',
  },
  rating: { google: '4.6', tripadvisor: '4.7', reviews: '6225' },
};

export const hero = {
  eyebrow: 'Kochi · Kerala · Est. 2015',
  headline: "Let's explore the world with your trusted travel partner",
  sub: 'LiveTheDay ensures a smooth, safe, and stress-free experience by handling the details, securing the best deals, and providing expert guidance every step of the journey. Trust the Experts for a Hassle-Free Journey!',
  services: ['Flights', 'Holiday Packages', 'Hotels', 'Visa Services'],
};

export type Sight = { title: string; body: string };
export type Destination = {
  slug: string;
  name: string;
  country: string;
  image: string;
  intro: string;
  bestTime: string;
  duration: string;
  sights: Sight[];
};

export const destinations: Destination[] = [
  {
    slug: 'bangkok',
    name: 'Bangkok',
    country: 'Thailand',
    image: '/img/dest-bangkok.webp',
    intro:
      "Bangkok, Thailand's capital, is a vibrant city known for its beautiful temples, bustling markets, tasty street food, and lively nightlife. It's a perfect blend of tradition and modernity.",
    bestTime: 'November to February',
    duration: '4 day 3 night',
    sights: [
      {
        title: 'Wat Pho (Temple of the Reclining Buddha)',
        body: "Wat Pho is famous for its massive reclining Buddha statue, covered in gold leaf and measuring 46 meters long. It's one of Bangkok's oldest temples and a center for traditional Thai massage and healing.",
      },
      {
        title: 'Wat Arun (Temple of Dawn)',
        body: 'Wat Arun is a stunning riverside temple known for its towering spires decorated with colorful porcelain. It offers beautiful views of the Chao Phraya River, especially at sunrise and sunset.',
      },
      {
        title: 'Khao San Road',
        body: "Khao San Road is a lively street popular with backpackers, known for its buzzing nightlife, affordable food, and vibrant market stalls. It's a great place to experience Bangkok's energetic atmosphere.",
      },
      {
        title: 'Chatuchak Weekend Market',
        body: "Chatuchak Weekend Market is one of the world's largest markets, offering thousands of stalls selling everything from clothes and crafts to street food. It's a vibrant shopping spot and a must-visit for any Bangkok traveler.",
      },
      {
        title: 'The Grand Palace and Wat Phra Kaew',
        body: "The Grand Palace, Bangkok's historic royal residence, features stunning architecture and beautiful gardens. Inside, Wat Phra Kaew houses the revered Emerald Buddha, a sacred jade statue. Together, they offer a rich glimpse into Thailand's culture.",
      },
    ],
  },
  {
    slug: 'almaty',
    name: 'Almaty',
    country: 'Kazakhstan',
    image: '/img/dest-almaty.webp',
    intro:
      "Almaty, Kazakhstan's largest city and former capital, offers a blend of history, nature, and cultural experiences, nestled against the Tien Shan Mountains, making it a vibrant and accessible destination for travellers.",
    bestTime: 'Any time of the year',
    duration: '4 nights 5 days',
    sights: [
      {
        title: 'Zenkov Cathedral',
        body: "Zenkov Cathedral is a beautiful wooden Russian Orthodox church located in Almaty's Panfilov Park. Built in 1907 without using any nails, it is famous for its bright colours and unique architecture. The cathedral survived a big earthquake in 1911 and remains an important cultural and religious site in the city.",
      },
      {
        title: 'Big Almaty Lake',
        body: 'Big Almaty Lake is a stunning alpine lake located about 30 km south of Almaty, nestled in the Tien Shan mountains. Known for its crystal-clear turquoise water and dramatic mountain backdrop, it is one of the most picturesque spots in Kazakhstan — a peaceful retreat at 2,500 metres.',
      },
      {
        title: 'Green Bazaar',
        body: 'Green Bazaar (Zelyony Bazaar) is a vibrant, century-old market in the heart of Almaty. It offers a sensory feast of colours, aromas and local culture — fresh fruits, vegetables, meats, spices, traditional Kazakh clothing and unique handicrafts.',
      },
      {
        title: 'Shymbulak Ski Resort & Medeu',
        body: "Central Asia's premier mountain destination, combining thrilling winter sports with sweeping alpine scenery and the famous high-altitude Medeu skating rink — an easy cable-car ride from the city.",
      },
    ],
  },
  {
    slug: 'azerbaijan',
    name: 'Azerbaijan',
    country: 'Baku & beyond',
    image: '/img/dest-azerbaijan.webp',
    intro:
      "Baku, Azerbaijan's capital, is a vibrant city on the Caspian Sea, known for its rich history, modern architecture, and unique blend of cultures. It's a major cultural, economic and political hub of the Caucasus.",
    bestTime: 'Any time of the year',
    duration: '4 nights 5 days',
    sights: [
      {
        title: 'Quba & Khinaliq Village',
        body: 'Located in northern Azerbaijan, Quba is a scenic gateway to the Caucasus Mountains, known for its apple orchards, forests and rich culture. Nearby lies Khinaliq, one of the highest and oldest continuously inhabited villages in the world.',
      },
      {
        title: 'Baku',
        body: 'A stunning fusion of ancient history and modern innovation on the shores of the Caspian Sea — a UNESCO-listed Old City with winding alleys alongside the Flame Towers and the Heydar Aliyev Center.',
      },
      {
        title: 'Sheki',
        body: 'Nestled in the lush foothills of the Greater Caucasus Mountains, Sheki is a charming town famous for the Palace of the Sheki Khans, colourful stained glass (shebeke) and traditional sweets.',
      },
      {
        title: 'Gobustan National Park',
        body: 'Just outside Baku, a UNESCO World Heritage Site known for its ancient rock carvings, mysterious mud volcanoes and dramatic desert landscape.',
      },
    ],
  },
  {
    slug: 'abu-dhabi',
    name: 'Abu Dhabi',
    country: 'United Arab Emirates',
    image: '/img/dest-abu-dhabi.webp',
    intro:
      'Abu Dhabi is the capital of the United Arab Emirates, known for its stunning blend of modern architecture, cultural landmarks and coastal beauty — home to iconic sites like the Sheikh Zayed Grand Mosque.',
    bestTime: 'November to March',
    duration: '3 to 5 days',
    sights: [
      {
        title: 'Ferrari World',
        body: "The world's first Ferrari-branded theme park, on Yas Island — high-adrenaline rides including Formula Rossa, the fastest roller coaster on Earth, plus racing simulators and Ferrari heritage exhibitions.",
      },
      {
        title: 'Louvre Abu Dhabi',
        body: 'A world-class museum on Saadiyat Island designed by Jean Nouvel, known for its iconic dome that creates a "rain of light". Artworks from around the world bridge Eastern and Western cultures.',
      },
      {
        title: 'Sheikh Zayed Grand Mosque',
        body: 'One of the largest and most beautiful mosques in the world — white marble architecture, 82 domes, over 1,000 columns, Swarovski crystal chandeliers and the world\u2019s largest hand-knotted carpet.',
      },
      {
        title: 'Yas Island',
        body: 'The entertainment heart of Abu Dhabi — theme parks, Yas Marina Circuit, beach clubs and concerts, all within a short drive of the airport.',
      },
    ],
  },
];

export type Pkg = {
  slug: string;
  region: string;
  title: string;
  nights: string;
  image: string;
  rating: string;
  reviews?: string;
  trending?: boolean;
  blurb?: string;
  dates?: string;
  priceFrom?: string;
};

export const packages: Pkg[] = [
  { slug: 'kerala-scenic-escape', region: 'Munnar · Thekkady · Alleppey · Cochin', title: 'Kerala Scenic Escape', nights: '05 Night - 06 Days', image: '/img/pkg-kerala.webp', rating: '5', reviews: '155' },
  { slug: 'munnar-alleppey-bliss', region: 'Munnar · Alleppey', title: 'Munnar Alleppey Bliss', nights: '03 Night 04 Days', image: '/img/pkg-munnar.webp', rating: '5', reviews: '145' },
  { slug: 'exploring-baku', region: 'Azerbaijan', title: 'Exploring Baku', nights: '4 Nights 5 Days', image: '/img/pkg-azerbaijan.webp', rating: '5', reviews: '18' },
  { slug: 'malaysia-package', region: 'Malaysia', title: 'Malaysia Package', nights: '03 Night 04 Days', image: '/img/pkg-malaysia.webp', rating: '5', reviews: '55' },
  { slug: 'kullu-manali', region: 'Kullu · Manali', title: 'Kullu – Manali', nights: '4N 5D', image: '/img/pkg-kullu-manali.webp', rating: '5', reviews: '35' },
  { slug: 'vietnam', region: 'Vietnam', title: 'Vietnam', nights: '4N 5D', image: '/img/pkg-vietnam.webp', rating: '5', reviews: '45' },
  { slug: 'bangkok-pattaya', region: 'Thailand', title: 'Bangkok Pattaya', nights: '3 Nights 4 Days', image: '/img/pkg-bangkok-pattaya.webp', rating: 'Very Good', reviews: '150', blurb: 'Pattaya, a vibrant beach resort town on the Gulf of Thailand, offers a mix of relaxation, nightlife and cultural experiences.' },
];

export const hotDeals: Pkg[] = [
  { slug: 'kashmir', region: 'Kashmir', title: 'Kashmir', nights: '4N 5D', image: '/img/pkg-kashmir.webp', rating: '5', reviews: '25' },
  { slug: 'golden-triangle', region: 'Delhi · Agra · Jaipur', title: 'Golden Triangle', nights: '4N 5D', image: '/img/pkg-golden-triangle.webp', rating: '5', reviews: '85' },
  { slug: 'hyderabad', region: 'Hyderabad', title: 'Hyderabad Tour Days', nights: '3 Nights 4 Days', image: '/img/pkg-hyderabad.webp', rating: '5', reviews: '65' },
  { slug: 'dubai', region: 'Dubai', title: 'Dubai', nights: '4 Nights 5 Days', image: '/img/pkg-dubai.webp', rating: '5', reviews: '45' },
];

export const trending: Pkg[] = [
  {
    slug: 'canton-fair',
    region: 'China',
    title: 'Canton Fair',
    nights: '08 Days 07 Nights',
    image: '/img/pkg-canton.webp',
    rating: '5',
    reviews: '20',
    trending: true,
    blurb: '8 Days / 7 Nights — Phase 2 & 3. Ex-Cochin | covering the Canton Fair complex, Canton Tower and the Pearl River waterfront.',
    dates: 'Travel Dates: 26th October 2025 – 2nd November 2025',
  },
  {
    slug: 'da-nang-hanoi',
    region: 'Da Nang',
    title: 'Da Nang – Hanoi',
    nights: '5 Nights 6 Days',
    image: '/img/pkg-danang.webp',
    rating: '5',
    reviews: '22',
    trending: true,
    blurb: 'Da Nang, a vibrant coastal city in central Vietnam, offers a blend of stunning beaches, rich history and modern attractions, with Hanoi\u2019s old quarter to finish.',
  },
];

export const reviews = [
  { name: 'Ashwin Ravisankar', text: 'I had an amazing experience with Live the Day Holidays, and I can confidently say they are one of the best tour organizers out there! Our Maldives trip faced a major hurdle due to unexpected flight cancellations.', img: '/img/review-ashwin.png' },
  { name: 'Annina Burgherr', text: 'Very friendly and helpful employees, catered to our needs and wishes, communication always worked well. Prices are good too! Would highly recommend if you\u2019re planning on doing a trip in Kerala. Thanks for taking care of us like your family.' },
  { name: 'Bipin TV', text: 'Our honeymoon in Bali was everything we dreamed of and more, and we owe a huge thank you to you and the Live The Day Holidays team! We were so incredibly happy and satisfied with every aspect of the trip.', img: '/img/review-bipin.png' },
  { name: 'Anjana Remesh', text: 'I had an amazing experience with Live the day holiday, on my recent family trip to Phuket! Everything was well-organized — from airport transfers to hotel bookings and daily activities. Smooth communication.', img: '/img/review-anjana.png' },
  { name: 'Lakshmipriya Asokan', text: 'We had contacted Live The Day Holidays for our trips to Vagamon and Munnar. We asked them for the best stay possible for family for a reasonable price and they provided us with the same. Their services are fast and the best.' },
  { name: 'Poornima Prasad', text: 'Awesome experience with live the day holidays. Team tried their very best to get us the best package and hotel deals amidst rising prices in the seasonal rush. Very cooperative team and polite service.', img: '/img/review-poornima.png' },
  { name: 'Neethu P', text: 'The package tour was exceptionally well-organized, covering all the must-see attractions with comfortable transportation and knowledgeable guides. Highly recommended for hassle-free travel. Our family enjoyed every moment.', img: '/img/review-neethu.png' },
  { name: 'Indu Indira', text: 'I recently organised a trip for a foreign friend with Live the Day, covering both North and South India, and the experience was fantastic. The package, which included full-time cab service and hotels, was surprisingly affordable.' },
  { name: 'John Jose', text: 'The tour was well-organized, with timely pickups and knowledgeable guides. The itinerary covered key spots without feeling rushed — and the team stayed reachable through the whole trip.' },
  { name: 'Neethu Ashokan', text: 'We had a great experience with Live the Day Holidays. We opted for a one day boat trip at Ashtamudi lake, Kollam. We decided just a day prior with so many last minute changes, but the team was totally supportive.', img: '/img/review-1.png' },
  { name: 'Adarsh Mohan', text: 'I recently did a vacation trip to Goa with Live the Day Holidays and the whole experience was really great. Everything was taken care of by the coordinator and made sure we were comfortable all the time.', img: '/img/review-2.png' },
  { name: 'Rajeswari Sr', text: 'We had an amazing experience with the Live the Day team for our Andaman trip. It was so smooth and friendly to accommodate our requirements and plan the trip by Chintu Jose & Deepa for our family.', img: '/img/review-3.png' },
];

export const about = {
  headline: 'Live The Day. Like A Dream.',
  lead: 'Crafting travel experiences',
  body: 'With 10 years of experience in the tourism sector and as a company spread across various geographic locations, we can cater to our guests with curated experiences, lowest prices, constant availability and great support across all the different locations.',
  stats: [
    { value: '10+', label: 'Years of Experience' },
    { value: '100+', label: 'Countries' },
    { value: '1500+', label: 'Products' },
    { value: '75000+', label: 'Happy Customers' },
  ],
  pillars: ['Complete packages for all your wishes', 'Over 10 years of experience', 'Expert guides for you', 'Guaranteed fun at the best price!'],
  mission:
    'Our mission is to simplify the journey — whether for work, leisure, or a perfect blend of both — with curated experiences. We understand the hurdles of our clients and optimize every trip for comfort, efficiency and discovery. We create travel solutions for people from all generations, ensuring every journey is hassle-free.',
  vision:
    'To be one of the world\u2019s most innovative and trusted travel brands, redefining the future of exploration through technology, sustainability, personal touches and seamless experiences. As we grow, we aim to set new industry standards, inspire global connections and revolutionize the way people experience the world — one extraordinary trip at a time.',
  directors: [
    {
      name: 'Dr. Jacob Mathew',
      role: 'Director',
      title: 'A world without boundaries',
      body: 'In an increasingly interconnected world, our vision is to dissolve the boundaries that separate us. We believe that travel is a powerful force for good, capable of bridging cultures, fostering understanding and creating lasting bonds. Our mission is to make the world accessible to everyone, offering journeys that are not only enjoyable but also transformative.',
    },
    {
      name: 'Dr. Chinthu Jose',
      role: 'Director',
      title: 'Exceptional experiences',
      body: 'At the heart of our vision is a commitment to excellence. We strive to provide exceptional experiences that exceed expectations — carefully chosen stays, trusted local partners and people who answer the phone when you need them.',
    },
  ],
};

export const channelPartner = {
  headline: 'Become a Partner',
  sub: 'Make your Holiday Memorable',
  body: 'Live The Day Holidays can curate your leisure and business trips based on your specific travel requirements. All across the world.',
  perks: [
    { title: 'All the products you need', body: 'From flights and stays to sights — just count on our complete products.' },
    { title: 'Experience of 10 years', body: 'Travelling with experts like us will save a lot of money and time for you.' },
    { title: 'Your Trustable Partner', body: 'We believe that our Google reviews will speak for us.' },
    { title: '24/7 Customer Support', body: 'You can bank on our support anytime. We will be available for you.' },
  ],
};

export const blogs = [
  { tag: 'Things To Do', image: '/img/blog-japan.webp', title: 'How to Register as a Tourist for Japan: Easy Visit Japan Web Guide', author: 'Jesica Koli', date: '02 December 2025', read: '3 min read', excerpt: 'The paperwork is the part nobody plans for. Here is the whole registration walkthrough, in order, with the bits people get stuck on.' },
  { tag: 'Travel', image: '/img/blog-varkala.webp', title: 'Ultimate Road Trip Ideas in 2025 for Every Adventurer', author: 'Jesica Koli', date: '02 December 2025', read: '3 min read', excerpt: 'From coastal Kerala to the Caucasus mountains — routes worth clearing a long weekend for.' },
  { tag: 'Things To Do', image: '/img/blog-streetfood.webp', title: 'Bangkok in Three Nights: Temples, Markets and Street Food', author: 'Jesica Koli', date: '02 December 2025', read: '4 min read', excerpt: 'Wat Pho at opening time, Chatuchak on Saturday, and the riverside at sunset — a first-timer\u2019s rhythm for Bangkok.' },
  { tag: 'Travel', image: '/img/dest-almaty.webp', title: 'Kazakhstan for Indians: Almaty Without the Guesswork', author: 'Jesica Koli', date: '02 December 2025', read: '4 min read', excerpt: 'Visa on arrival, the cable car to Shymbulak, and why the Green Bazaar deserves two hours minimum.' },
  { tag: 'Travel', image: '/img/dest-azerbaijan.webp', title: 'Azerbaijan: Baku\u2019s Old City and the Road to Khinaliq', author: 'Jesica Koli', date: '02 December 2025', read: '5 min read', excerpt: 'Flame Towers, shebeke glass in Sheki, and a village above the clouds.' },
  { tag: 'Things To Do', image: '/img/pkg-canton.webp', title: 'Canton Fair 2025: A Buyer\u2019s Packing and Planning List', author: 'Jesica Koli', date: '02 December 2025', read: '3 min read', excerpt: 'Phase 2 and 3 dates, the metro route, and how to walk the complex without losing a day.' },
];

export const quickLinks = ['Home', 'Destinations', 'Holiday Packages', 'Activity', 'Hotel', 'About Us', 'Contact Us'];
export const footerDestinations = ['Thailand', 'Malaysia', 'Bali', 'Vietnam', 'Philippines', 'Europe', 'Kazakhstan', 'Singapore', 'Australia', 'New Zealand'];
export const footerActivities = ['Northern Lights', 'Cruising & Sailing', 'Multi-activities', 'Cruise', 'Kayaking', 'Sports Car Driving Tours', 'Sky Diving & Bungee Jumping', 'Hiking & Trekking'];
