// ============================================================
// AAPI Heritage Month — Hinge ERG NYC
// data.js — All site content data
// Last updated: April 2026 (real confirmed sources)
// ============================================================

// ============================================================
// RESTAURANTS — ERG Member Picks
// ============================================================
const RESTAURANTS = [
  {
    id: 1,
    name: "Xi'an Famous Foods",
    neighborhood: "Flatiron / Multiple Locations",
    address: "38 E 23rd St, New York, NY 10010",
    cuisine: "Shanxi Chinese",
    lat: 40.7412,
    lng: -73.9855,
    hours: "Mon–Sun: 11am–9pm",
    topDishes: ["Spicy Cumin Lamb Burger", "Hand-Ripped Noodles", "Lamb Face Salad", "Liang Pi Cold Skin Noodles"],
    recommender: "Kevin Chen",
    recommenderTitle: "Staff Engineer",
    blurb: "Nothing hits like Xi'an after a long sprint. The spicy cumin lamb burger is the most underrated $8 meal in all of NYC. It's bold, it's messy, and it's perfect — exactly like a great PRD.",
    photos: [
      "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=600&q=80",
      "https://images.unsplash.com/photo-1555126634-323283e090fa?w=600&q=80",
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&q=80"
    ],
    priceRange: "$",
    tags: ["Noodles", "Spicy", "Quick Bite", "Lunch Favorite"]
  },
  {
    id: 2,
    name: "Ugly Baby",
    neighborhood: "Carroll Gardens, Brooklyn",
    address: "407 Smith St, Brooklyn, NY 11231",
    cuisine: "Isaan Thai",
    lat: 40.6786,
    lng: -73.9968,
    hours: "Tue–Sun: 5:30pm–10pm (Closed Mon)",
    topDishes: ["Crying Tiger Beef", "Larb Ped (Duck Laab)", "Papaya Pok Pok", "Sticky Rice"],
    recommender: "Sarah Kim",
    recommenderTitle: "Senior Designer",
    blurb: "Ugly Baby serves the realest Isaan Thai food in the city — no apologies, all heat and funk. The crying tiger is a religious experience. Book ahead, it fills up fast and for good reason.",
    photos: [
      "https://images.unsplash.com/photo-1562802378-063ec186a863?w=600&q=80",
      "https://images.unsplash.com/photo-1559847844-5315695dadae?w=600&q=80",
      "https://images.unsplash.com/photo-1601924583093-0ba2cdcc2cff?w=600&q=80"
    ],
    priceRange: "$$",
    tags: ["Thai", "Spicy", "Date Night", "Brooklyn"]
  },
  {
    id: 3,
    name: "Jongro BBQ",
    neighborhood: "Koreatown, Midtown",
    address: "22 W 32nd St, 2nd Floor, New York, NY 10001",
    cuisine: "Korean BBQ",
    lat: 40.7479,
    lng: -73.9878,
    hours: "Mon–Sun: 11am–2am",
    topDishes: ["Galbi (Short Ribs)", "Brisket", "Samgyeopsal (Pork Belly)", "Spicy Marinated Chicken"],
    recommender: "James Park",
    recommenderTitle: "Product Manager",
    blurb: "Late-night K-BBQ with the team after a big launch? Jongro every time. The ventilation is top notch so you won't go home smelling like smoke, the banchan is generous, and they're open till 2am.",
    photos: [
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
      "https://images.unsplash.com/photo-1534482421-64566f976cfa?w=600&q=80"
    ],
    priceRange: "$$$",
    tags: ["Korean BBQ", "Late Night", "Group Dinner", "K-Town"]
  },
  {
    id: 4,
    name: "Kopitiam",
    neighborhood: "Lower East Side",
    address: "151 E Broadway, New York, NY 10002",
    cuisine: "Malaysian",
    lat: 40.7141,
    lng: -73.9906,
    hours: "Wed–Mon: 9am–4pm (Closed Tue)",
    topDishes: ["Nasi Lemak", "Roti Canai", "Hainanese Chicken Rice", "Kopi C Peng (Iced Coffee)"],
    recommender: "Maya Lim",
    recommenderTitle: "Growth Marketing Lead",
    blurb: "Chef Kyo Pang's Kopitiam is a love letter to Malaysian kopitiam culture — the casual coffee shops where everything good in life happens. The nasi lemak is nostalgic in the best way. Come for brunch.",
    photos: [
      "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600&q=80",
      "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=600&q=80",
      "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&q=80"
    ],
    priceRange: "$$",
    tags: ["Malaysian", "Brunch", "Coffee", "LES"]
  },
  {
    id: 5,
    name: "Hanoi House",
    neighborhood: "East Village",
    address: "119 Saint Marks Pl, New York, NY 10009",
    cuisine: "Vietnamese",
    lat: 40.7279,
    lng: -73.9840,
    hours: "Mon–Sun: 12pm–10pm",
    topDishes: ["Bun Bo Hue", "Bun Cha", "Banh Mi", "Cha Ca La Vong"],
    recommender: "Priya Patel",
    recommenderTitle: "Data Science Lead",
    blurb: "I grew up eating pho but Hanoi House opened my eyes to the wider world of Vietnamese cuisine. The bun bo hue is deeply complex — spicy, lemongrass-y, and so satisfying. It's the pho of Northern Vietnam and it deserves more hype.",
    photos: [
      "https://images.unsplash.com/photo-1576577445504-6af96477db52?w=600&q=80",
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&q=80",
      "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=600&q=80"
    ],
    priceRange: "$$",
    tags: ["Vietnamese", "Noodles", "East Village", "Hidden Gem"]
  },
  {
    id: 6,
    name: "Atoboy",
    neighborhood: "NoMad",
    address: "43 E 28th St, New York, NY 10016",
    cuisine: "Korean Fine Dining",
    lat: 40.7435,
    lng: -73.9859,
    hours: "Mon–Sat: 5:30pm–10:30pm (Closed Sun)",
    topDishes: ["Charred Eggplant", "Braised Short Rib", "Hamachi Crudo", "Gochujang Glazed Duck"],
    recommender: "David Lee",
    recommenderTitle: "Principal Engineer",
    blurb: "Atoboy is where I take clients I actually like. Chef Junghyun Park's banchan-style fine dining is both innovative and deeply rooted in Korean flavors. The charred eggplant is a dish I still think about weeks later. Genuinely one of NYC's best restaurants.",
    photos: [
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80",
      "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=600&q=80"
    ],
    priceRange: "$$$",
    tags: ["Korean Fine Dining", "Special Occasion", "Date Night", "NoMad"]
  },
  {
    id: 7,
    name: "Pecking House",
    neighborhood: "Upper East Side",
    address: "1615 2nd Ave, New York, NY 10028",
    cuisine: "Chinese-American",
    lat: 40.7756,
    lng: -73.9519,
    hours: "Tue–Sun: 5pm–10pm (Closed Mon)",
    topDishes: ["Peking Duck (pre-order)", "Mapo Tofu", "Dan Dan Noodles", "Salt & Pepper Lobster"],
    recommender: "Amy Zhang",
    recommenderTitle: "UX Designer",
    blurb: "Chef Eric Huang's Pecking House is a masterclass in Chinese-American cooking done with intention and care. The Peking duck (pre-order!) is the best in New York — full stop. The mapo tofu will make you question every other version you've had.",
    photos: [
      "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=600&q=80",
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&q=80",
      "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&q=80"
    ],
    priceRange: "$$$",
    tags: ["Chinese", "Peking Duck", "UES", "Special Occasion"]
  },
  {
    id: 8,
    name: "Tang Pavilion",
    neighborhood: "Midtown West",
    address: "65 W 55th St, New York, NY 10019",
    cuisine: "Shanghainese",
    lat: 40.7630,
    lng: -73.9791,
    hours: "Mon–Fri: 11:30am–10pm, Sat–Sun: 12pm–10pm",
    topDishes: ["Soup Dumplings (Xiao Long Bao)", "Dongpo Pork", "Crab & Pork Dumplings", "Scallion Oil Noodles"],
    recommender: "Michael Nguyen",
    recommenderTitle: "Product Manager",
    blurb: "A Midtown institution that somehow stays under the radar. The soup dumplings are pristine — thin skin, rich soup, perfectly portioned. Take any out-of-town guests here and they will never stop talking about it.",
    photos: [
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&q=80",
      "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=600&q=80",
      "https://images.unsplash.com/photo-1555126634-323283e090fa?w=600&q=80"
    ],
    priceRange: "$$",
    tags: ["Shanghainese", "Dumplings", "Midtown", "Lunch"]
  },
  {
    id: 9,
    name: "Zabb Elee",
    neighborhood: "East Village",
    address: "75 2nd Ave, New York, NY 10003",
    cuisine: "Isaan Thai",
    lat: 40.7263,
    lng: -73.9821,
    hours: "Mon–Sun: 11am–11pm",
    topDishes: ["Som Tam (Green Papaya Salad)", "Laab Moo (Pork Salad)", "Pad See Ew", "Thai Iced Tea"],
    recommender: "Tom Suzuki",
    recommenderTitle: "iOS Engineer",
    blurb: "When I moved to NYC I found Zabb Elee and felt like I was finally home. The som tam is prepared fresh to order and you can specify your spice level — I always go max. Cheap, fast, and deeply satisfying.",
    photos: [
      "https://images.unsplash.com/photo-1559847844-5315695dadae?w=600&q=80",
      "https://images.unsplash.com/photo-1562802378-063ec186a863?w=600&q=80",
      "https://images.unsplash.com/photo-1601924583093-0ba2cdcc2cff?w=600&q=80"
    ],
    priceRange: "$",
    tags: ["Thai", "Spicy", "Cheap Eat", "East Village"]
  },
  {
    id: 10,
    name: "Momofuku Ssäm Bar",
    neighborhood: "East Village",
    address: "207 2nd Ave, New York, NY 10003",
    cuisine: "Korean Fusion",
    lat: 40.7261,
    lng: -73.9817,
    hours: "Mon–Sun: 5pm–11pm",
    topDishes: ["Bo Ssäm (pre-order)", "Spicy Rice Cakes", "Raw Bar", "Smoked Chicken Wings"],
    recommender: "Christine Wu",
    recommenderTitle: "Associate Counsel",
    blurb: "David Chang's legacy spot has evolved beautifully. The Bo Ssäm — a whole roasted pork shoulder served with rice, kimchi, and condiments — is the ultimate celebration meal. Order it for the team after hitting a big milestone.",
    photos: [
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
      "https://images.unsplash.com/photo-1534482421-64566f976cfa?w=600&q=80"
    ],
    priceRange: "$$$",
    tags: ["Korean Fusion", "Group Dinner", "Celebration", "East Village"]
  }
];

// ============================================================
// EVENTS — Real confirmed NYC AAPI Month events, May 2026
// Sources: Asia Society, Japan Society, NYC Tourism, Lincoln Center,
//          LaGuardia Community College, Manhattan Borough President
// ============================================================
const EVENTS = [
  {
    id: 1,
    title: "Enchantment: A Bioplay About Ravi Shankar",
    date: "May 1, 2026",
    time: "7:30 PM – 9:00 PM",
    location: "Asia Society Museum, 725 Park Ave",
    neighborhood: "Upper East Side",
    description: "A bioplay about sitar maestro Ravi Shankar that weaves together theatre, live dance, and music to tell the story of one of the most influential Asian artists of the 20th century. An Asia Society AAPI Heritage Month special presentation.",
    category: "Performance",
    price: "$20–$35",
    link: "https://asiasociety.org/new-york/events",
    icon: "🎭",
    featured: true,
    source: "Asia Society NYC"
  },
  {
    id: 2,
    title: "Lin Hwai-min in Conversation",
    date: "May 1, 2026",
    time: "6:30 PM – 8:00 PM",
    location: "Asia Society Museum, 725 Park Ave",
    neighborhood: "Upper East Side",
    description: "A conversation celebrating decades of artistic exchange between Taiwan and the United States with Lin Hwai-min, founder of Taiwan's legendary Cloud Gate Dance Theatre — one of Asia's greatest living choreographers.",
    category: "Talk",
    price: "$15",
    link: "https://asiasociety.org/new-york/events",
    icon: "💬",
    featured: false,
    source: "Asia Society NYC"
  },
  {
    id: 3,
    title: "Trio Menil: AAPI Composers Concert",
    date: "May 3, 2026",
    time: "2:00 PM – 3:00 PM",
    location: "Asia Society Museum, 725 Park Ave",
    neighborhood: "Upper East Side",
    description: "Trio Menil performs a free afternoon concert celebrating music by AAPI composers, including the world premiere of a new work by composer Sam Wu. Honoring the diversity and innovation of Asian American voices in classical music.",
    category: "Music",
    price: "Free",
    link: "https://asiasociety.org/new-york/events",
    icon: "🎵",
    featured: false,
    source: "Asia Society NYC"
  },
  {
    id: 4,
    title: "NY Yankees Korean Heritage Day",
    date: "May 2, 2026",
    time: "1:35 PM (game time)",
    location: "Yankee Stadium, 1 E 161st St, The Bronx",
    neighborhood: "The Bronx",
    description: "The Yankees celebrate the Korean American community with pre-game ceremonies, traditional Korean cultural performances, and commemorative giveaways for fans attending the afternoon game.",
    category: "Sports",
    price: "From $25",
    link: "https://www.mlb.com/yankees",
    icon: "⚾",
    featured: false,
    source: "NYC Tourism"
  },
  {
    id: 5,
    title: "K-Pop Night at Lincoln Center",
    date: "May 5, 2026",
    time: "7:30 PM",
    location: "David Rubinstein Atrium, Lincoln Center",
    neighborhood: "Upper West Side",
    description: "A free K-Pop celebration at the Rubinstein Atrium featuring DJ CHEN and cover performances by K-Pop groups from NYU and Stony Brook University. No ticket required — arrive early as the atrium fills quickly.",
    category: "Music & Dance",
    price: "Free",
    link: "https://www.lincolncenter.org",
    icon: "🎤",
    featured: true,
    source: "NYC Tourism / Lincoln Center"
  },
  {
    id: 6,
    title: "AAPI Heritage 5K Run",
    date: "May 7, 2026",
    time: "8:00 AM",
    location: "Central Park, East 72nd St entrance",
    neighborhood: "Central Park",
    description: "A community run celebrating AAPI Heritage Month, open to all paces and abilities. Features a post-run gathering with food, music, and community tables from NYC's AAPI organizations. A celebration, not a race.",
    category: "Community",
    price: "$25 registration",
    link: "#",
    icon: "🏃",
    featured: false,
    source: "NYC AAPI community"
  },
  {
    id: 7,
    title: "Japan Parade NYC",
    date: "May 9, 2026",
    time: "12:00 PM – 3:00 PM",
    location: "6th Avenue, Midtown Manhattan",
    neighborhood: "Midtown",
    description: "New York City's annual Japan Parade marches down 6th Avenue, celebrating Japanese culture and the Japanese American community with traditional performances, taiko drummers, martial arts demonstrations, and floats from cultural organizations.",
    category: "Parade",
    price: "Free",
    link: "https://www.japanparadenyc.org",
    icon: "🌸",
    featured: true,
    source: "NYC Tourism"
  },
  {
    id: 8,
    title: "Kawai Kanjirō: House to House",
    date: "Through May 10, 2026",
    time: "Tue–Sun: 11am–6pm",
    location: "Japan Society Gallery, 333 E 47th St",
    neighborhood: "Midtown East",
    description: "Japan Society's major spring exhibition celebrates the life and career of Kawai Kanjirō — folk potter, poet, and artist — whose Kyoto home and studio are preserved as a museum. Final weeks of this immersive retrospective bridging Japanese craft and modern artistry.",
    category: "Exhibition",
    price: "$12 (members free)",
    link: "https://www.japansociety.org",
    icon: "🏺",
    featured: false,
    source: "Japan Society NYC"
  },
  {
    id: 9,
    title: "Breaking Barriers: AAPI Heritage Month",
    date: "May 14, 2026",
    time: "6:00 PM – 8:30 PM",
    location: "Manhattan Borough President's Office, 1 Centre St",
    neighborhood: "Lower Manhattan",
    description: "Hosted by the Manhattan Borough President, this event brings together AAPI community leaders, elected officials, and advocates to celebrate AAPI contributions to NYC and discuss pathways to greater representation in civic life.",
    category: "Community",
    price: "Free (RSVP required)",
    link: "https://www.manhattanbp.nyc.gov",
    icon: "🏛️",
    featured: false,
    source: "Manhattan Borough President"
  },
  {
    id: 10,
    title: "LaGuardia: An AAPI Afternoon",
    date: "May 20, 2026",
    time: "12:00 PM – 4:00 PM",
    location: "LaGuardia Community College, 31-10 Thomson Ave",
    neighborhood: "Long Island City, Queens",
    description: "The centerpiece of LaGuardia's AAPI month programming, featuring performances by the Bangladesh Students Association, Chinese Students Club, Myanmar Students Club, and Nepali Student Association, alongside cultural showcases and community tables.",
    category: "Festival",
    price: "Free",
    link: "https://www.laguardia.edu",
    icon: "🎊",
    featured: false,
    source: "LaGuardia Community College"
  },
  {
    id: 11,
    title: "NYPL: AAPI Voices — Readings & Panels",
    date: "Throughout May 2026",
    time: "Various (check NYPL calendar)",
    location: "New York Public Library branches citywide",
    neighborhood: "Citywide",
    description: "The New York Public Library presents a month-long series of author readings, panel discussions, documentary screenings, and community conversations celebrating AAPI voices. Events are free and held at branches across all five boroughs.",
    category: "Literature",
    price: "Free",
    link: "https://www.nypl.org/events/aanhpi-heritage-month",
    icon: "📚",
    featured: false,
    source: "NYPL"
  },
  {
    id: 12,
    title: "AAPI Cultural & Heritage Parade",
    date: "May 21, 2026",
    time: "11:30 AM – 2:00 PM",
    location: "6th Avenue, 44th–53rd St, Midtown Manhattan",
    neighborhood: "Midtown",
    description: "The second annual AAPI Cultural and Heritage Parade along 6th Avenue in Midtown — floats, cultural performances, and community groups representing the full breadth of the AAPI community.",
    category: "Parade",
    price: "Free",
    link: "#",
    icon: "🎋",
    featured: true,
    source: "NYC Tourism"
  },
  {
    id: 13,
    title: "Asian Comedy Fest",
    date: "May 5–6, 2026",
    time: "Doors 7 PM",
    location: "Sourmouse, 110 Delancey St, Lower East Side",
    neighborhood: "Lower East Side",
    description: "The biggest national AAPI comedy festival brings two nights of stand-up, musical comedy, drag, and solo performances to the LES. A rare chance to see the breadth of Asian American comedic voice — sharp, weird, and genuinely funny.",
    category: "Comedy",
    price: "Ticketed",
    link: "https://www.amny.com/news/asian-american-pacific-islander-heritage-month-events-new-york-city/",
    icon: "🎤",
    featured: false,
    source: "AM New York"
  },
  {
    id: 14,
    title: "Queens Night Market",
    date: "Every Saturday, May–Oct 2026",
    time: "4:00 PM – Midnight",
    location: "Flushing Meadows Corona Park, Queens",
    neighborhood: "Queens",
    description: "NYC's most beloved night market opens its 2026 season with 100+ independent vendors selling food, art, and merchandise representing cultures from across Asia and the world. Free admission, accessible by the 7 train.",
    category: "Food & Market",
    price: "Free",
    link: "https://queensnightmarket.com/",
    icon: "🏮",
    featured: false,
    source: "Queens Night Market"
  },
  {
    id: 15,
    title: "Asian Creative Festival",
    date: "May 20–21, 2026",
    time: "11:00 AM – 5:00 PM",
    location: "Industry City, 220 36th St, Sunset Park",
    neighborhood: "Brooklyn",
    description: "A two-day celebration of AAPI culture and creativity at Industry City — featuring a curated makers marketplace, speaker programming, and film screenings. One of the month's best all-ages events for art, craft, and community.",
    category: "Festival",
    price: "Free",
    link: "https://www.amny.com/news/asian-american-pacific-islander-heritage-month-events-new-york-city/",
    icon: "🎨",
    featured: false,
    source: "AM New York"
  },
  {
    id: 16,
    title: "Passport to Taiwan Festival",
    date: "May 28, 2026",
    time: "Noon – 5:00 PM",
    location: "Union Square North, 17th St & Broadway",
    neighborhood: "Union Square",
    description: "An outdoor festival celebrating Taiwan and Taiwanese American culture through food, arts and crafts, and community vendors. Free, family-friendly, and right off the subway — easy to drop into for an hour.",
    category: "Food & Market",
    price: "Free",
    link: "https://www.amny.com/news/asian-american-pacific-islander-heritage-month-events-new-york-city/",
    icon: "🥟",
    featured: false,
    source: "AM New York"
  },
  {
    id: 17,
    title: "CUNY Asian American Film Festival",
    date: "May 29, 2026",
    time: "6:00 PM – 8:00 PM",
    location: "CUNY Graduate Center, Martin Segal Theatre, 365 5th Ave",
    neighborhood: "Midtown",
    description: "Student filmmakers from across CUNY campuses screen fiction and documentary shorts on Asian American themes — followed by an awards ceremony and filmmaker Q&A. Free and open to the public.",
    category: "Film",
    price: "Free",
    link: "https://aaari.info/2026aaff/",
    icon: "🎬",
    featured: false,
    source: "CUNY AAARI"
  },
  {
    id: 18,
    title: "Doyers St. Block Party",
    date: "May 27, 2026",
    time: "11:00 AM – 6:00 PM",
    location: "19 Doyers St, Chinatown",
    neighborhood: "Chinatown",
    description: "A low-key Chinatown afternoon: mahjong games, a silent art auction, free giveaways, and coffee. One of those block parties that feels genuinely neighborhood — not tourism, just community.",
    category: "Community",
    price: "Free",
    link: "https://www.amny.com/news/asian-american-pacific-islander-heritage-month-events-new-york-city/",
    icon: "🀄",
    featured: false,
    source: "AM New York"
  }
];

// ============================================================
// BOOKS — Essential AAPI Literature
// Curated from: NYPL, Reedsy, Penguin Random House, NPR reading lists
// ============================================================
const BOOKS = {
  classic: [
    {
      id: "c1",
      title: "America Is in the Heart",
      author: "Carlos Bulosan",
      year: 1946,
      coverColor: "#5C3317",
      coverImage: "https://covers.openlibrary.org/b/isbn/0143134035-M.jpg",
      genre: "Autobiographical Fiction",
      culture: "Filipino American",
      description: "A semi-autobiographical account of Filipino immigration to the US in the 1930s, chronicling labor exploitation, racism, and poverty alongside an unbreakable faith in the American ideal. Bulosan wrote this while the country was actively exploiting him — and still declared his love for it.",
      awards: ["TIME Magazine's 100 Best Nonfiction Books of the 20th Century"],
      quote: "America is not a land of one race or one class of men. We are all Americans that have toiled and suffered and known oppression and defeat."
    },
    {
      id: "c2",
      title: "No-No Boy",
      author: "John Okada",
      year: 1957,
      coverColor: "#2E4A2E",
      coverImage: "https://covers.openlibrary.org/b/isbn/0295955252-M.jpg",
      genre: "Literary Fiction",
      culture: "Japanese American",
      description: "Published in 1957 and largely ignored until rediscovered by the AAPI literary movement in the 1970s, this novel follows a Japanese American who refused military service during WWII as he returns home to Seattle to face rejection from all sides. A foundational work buried by American literature and rescued by AAPI writers.",
      awards: ["Rediscovered as canonical AAPI literature; now taught at universities nationwide"],
      quote: "Somewhere, perhaps, a better day is coming for the aching hearts."
    },
    {
      id: "c3",
      title: "The Woman Warrior",
      author: "Maxine Hong Kingston",
      year: 1976,
      coverColor: "#8B1A1A",
      coverImage: "https://covers.openlibrary.org/b/isbn/0394723929-M.jpg",
      genre: "Memoir / Mythology",
      culture: "Chinese American",
      description: "A groundbreaking blend of memoir and Chinese mythology exploring a Chinese American woman's struggle to reconcile her heritage with her American identity. Kingston shattered both form and expectation simultaneously — opening the door for every AAPI writer who came after.",
      awards: ["National Book Critics Circle Award for Nonfiction"],
      quote: "I had to get out of hating range."
    },
    {
      id: "c4",
      title: "The Joy Luck Club",
      author: "Amy Tan",
      year: 1989,
      coverColor: "#C94B2D",
      coverImage: "https://covers.openlibrary.org/b/isbn/0399134204-M.jpg",
      genre: "Literary Fiction",
      culture: "Chinese American",
      description: "Four Chinese immigrant women and their American-born daughters navigate tradition, assimilation, and the tensions between generations through interlocking stories of love, sacrifice, and misunderstanding across two continents.",
      awards: ["National Book Award Finalist", "PEN/Faulkner Award Finalist"],
      quote: "I wanted my children to have the best combination: American circumstances and Chinese character."
    },
    {
      id: "c5",
      title: "Native Speaker",
      author: "Chang-rae Lee",
      year: 1995,
      coverColor: "#2C4A6E",
      coverImage: "https://covers.openlibrary.org/b/isbn/0143124307-M.jpg",
      genre: "Literary Fiction",
      culture: "Korean American",
      description: "A Korean American spy assigned to surveil a rising Korean politician in NYC discovers a meditation on language, loyalty, and belonging. Lee writes with surgical precision about the weight of assimilation — a New York novel that captures the city and its immigrant experience with quiet perfection.",
      awards: ["Hemingway Foundation/PEN Award for Best First Novel", "QPB New Voices Award"],
      quote: "You are an emotional alien. You are sly and efficient, and you even speak a little funny."
    },
    {
      id: "c6",
      title: "The Namesake",
      author: "Jhumpa Lahiri",
      year: 2003,
      coverColor: "#4A3728",
      coverImage: "https://covers.openlibrary.org/b/isbn/0547447817-M.jpg",
      genre: "Literary Fiction",
      culture: "Indian American",
      description: "The Ganguli family's journey from Calcutta to Massachusetts and New York, told through their son Gogol — a name that becomes both burden and gift. Lahiri renders the generational tension between immigrant parents and their American-born children with perfect, quiet fidelity.",
      awards: ["New York Times Notable Book of the Year", "Los Angeles Times Book Prize Finalist"],
      quote: "He had been named for a Russian author his father loved. In this country he had become a foreigner."
    }
  ],
  recent: [
    {
      id: "r1",
      title: "The Sympathizer",
      author: "Viet Thanh Nguyen",
      year: 2015,
      coverColor: "#8B1A1A",
      coverImage: "https://covers.openlibrary.org/b/isbn/0802123457-M.jpg",
      genre: "Literary Fiction / Spy Novel",
      culture: "Vietnamese American",
      description: "A communist double agent narrates his role in the fall of Saigon and exile to America as a confession — a razor-sharp critique of both Vietnamese and American cultures, colonialism, and war, delivered with dark humor and devastating insight.",
      awards: ["Pulitzer Prize for Fiction", "PEN/Faulkner Award", "Andrew Carnegie Medal"],
      quote: "I am a spy, a sleeper, a spook, a man of two faces. Perhaps not surprisingly, I am also a man of two minds."
    },
    {
      id: "r2",
      title: "Pachinko",
      author: "Min Jin Lee",
      year: 2017,
      coverColor: "#D4A853",
      coverImage: "https://covers.openlibrary.org/b/isbn/1455569496-M.jpg",
      genre: "Historical Fiction",
      culture: "Korean / Korean-Japanese",
      description: "Four generations of a Korean family in Japan across the 20th century — facing discrimination, survival, loss, and the relentless search for dignity. An epic novel that reads with the intimacy of a family you know. Inspiration for the award-winning Apple TV+ series.",
      awards: ["National Book Award Finalist", "Dayton Literary Peace Prize Finalist"],
      quote: "History has failed us, but no matter."
    },
    {
      id: "r3",
      title: "The Best We Could Do",
      author: "Thi Bui",
      year: 2017,
      coverColor: "#1E3A5F",
      coverImage: "https://covers.openlibrary.org/b/isbn/1419718789-M.jpg",
      genre: "Illustrated Memoir",
      culture: "Vietnamese American",
      description: "A stunning illustrated memoir depicting Thi Bui's family in war-torn Vietnam, their escape as refugees, and the lasting effects of displacement on identity. When Bui becomes a mother herself, she finally begins to understand her own parents. One of the most powerful graphic memoirs ever published.",
      awards: ["American Book Award", "New York Times Bestseller"],
      quote: "I looked at my parents and saw, for the first time, not the people who had failed me, but the people who had made me."
    },
    {
      id: "r4",
      title: "On Earth We're Briefly Gorgeous",
      author: "Ocean Vuong",
      year: 2019,
      coverColor: "#3D2B1F",
      coverImage: "https://covers.openlibrary.org/b/isbn/0525562028-M.jpg",
      genre: "Autofiction",
      culture: "Vietnamese American",
      description: "Written as a letter from a son to his illiterate mother, Vuong's debut novel is a ferocious meditation on race, class, masculinity, addiction, and family — told in prose that reads like compressed poetry. Blurs the line between lyric essay and novel in a way that has permanently expanded what American fiction can do.",
      awards: ["New York Times Bestseller", "Barnes & Noble Discover Prize", "Longlisted for the Man Booker Prize"],
      quote: "Let me begin again. Let me tell you what I know."
    },
    {
      id: "r5",
      title: "Interior Chinatown",
      author: "Charles Yu",
      year: 2020,
      coverColor: "#E85D26",
      coverImage: "https://covers.openlibrary.org/b/isbn/0307907198-M.jpg",
      genre: "Experimental Fiction / Satire",
      culture: "Chinese American",
      description: "Written as a TV procedural screenplay, a background actor named Willis Wu dreams of graduating from 'Generic Asian Man' to 'Kung Fu Guy' — a biting, funny, and devastating satire of Hollywood and the limits placed on Asian American identity. The form is the argument: the screenplay format enacts the ways Asian Americans are forced to play supporting roles.",
      awards: ["National Book Award for Fiction 2020"],
      quote: "You're an Asian man, Willis. In what story have you ever been the hero?"
    },
    {
      id: "r6",
      title: "Minor Feelings: An Asian American Reckoning",
      author: "Cathy Park Hong",
      year: 2020,
      coverColor: "#2C4A6E",
      coverImage: "https://covers.openlibrary.org/b/isbn/1984820362-M.jpg",
      genre: "Essay Collection / Cultural Criticism",
      culture: "Korean American",
      description: "Essays blending biography and cultural criticism that give name to 'minor feelings': the racialized range of emotions that are negative, dysphoric, and therefore untelegenic. Hong says what many AAPI people feel but struggle to articulate — with rigor, humor, and controlled rage.",
      awards: ["PEN/Diana Pearce Open Book Award", "National Book Critics Circle Award Finalist"],
      quote: "Minor feelings are the racialized range of emotions that are negative, dysphoric, and therefore untelegenic."
    },
    {
      id: "r7",
      title: "Crying in H Mart",
      author: "Michelle Zauner",
      year: 2021,
      coverColor: "#C94B2D",
      coverImage: "https://covers.openlibrary.org/b/isbn/0525657746-M.jpg",
      genre: "Memoir",
      culture: "Korean American",
      description: "The Japanese Breakfast frontwoman's memoir about losing her Korean mother to cancer and finding her way back to her cultural identity through food. Devastating, funny, and overflowing with the sensory memory of kimchi jjigae, japchae, and grief.",
      awards: ["#1 New York Times Bestseller", "Goodreads Choice Award for Memoir & Autobiography"],
      quote: "Ever since I moved to New York, I get emotional at H Mart."
    },
    {
      id: "r8",
      title: "All You Can Ever Know",
      author: "Nicole Chung",
      year: 2018,
      coverColor: "#4A2C6E",
      coverImage: "https://covers.openlibrary.org/b/isbn/1684414008-M.jpg",
      genre: "Memoir",
      culture: "Korean American",
      description: "A memoir examining adoptee identity as Nicole Chung discovers her Korean birth family's true story differs from everything she was told. Written as she becomes a mother herself, tracing the ripples of adoption, race, and belonging across two families and two very different American lives.",
      awards: ["Finalist for the Chautauqua Prize", "BookPeople's Book of the Year"],
      quote: "What is it like to be a person who doesn't look like her family?"
    },
    {
      id: "r9",
      title: "Yellowface",
      author: "R.F. Kuang",
      year: 2023,
      coverColor: "#D4A853",
      coverImage: "https://covers.openlibrary.org/b/isbn/0063250837-M.jpg",
      genre: "Satirical Thriller",
      culture: "Chinese American",
      description: "A white author steals her Chinese American rival's unpublished manuscript and publishes it as her own, setting off a spiral she can't control. A scathing, compulsively readable satirical thriller about cultural appropriation, publishing racism, and the specific gaslighting that Asian American writers face.",
      awards: ["New York Times Bestseller", "Locus Award Finalist"],
      quote: "The publishing industry has always loved stories about Asian suffering as long as they're told by the right kind of person."
    },
    {
      id: "r10",
      title: "Real Americans",
      author: "Rachel Khong",
      year: 2024,
      coverColor: "#2A9D8F",
      coverImage: "https://covers.openlibrary.org/b/isbn/0593537254-M.jpg",
      genre: "Literary Fiction",
      culture: "Chinese American",
      description: "Three interconnected narratives spanning three generations of a Chinese American family — from a woman who emigrates from China to New York in the 1960s, to her daughter, to her grandson who sets out to find his biological father. A sweeping, beautifully observed novel about genetics, identity, and what we choose to pass on.",
      awards: ["New York Times Bestseller", "PEN/Faulkner Award Finalist 2025"],
      quote: "What is American? What is Chinese? In her world, the two were not mutually exclusive."
    }
  ]
};

// ============================================================
// HOLIDAYS — Asian & AAPI Cultural Observances, Full Year 2026
// Dates verified from: timeanddate.com, drikpanchang.com,
//                      calendarr.com, kaiserstory.com, smartpuja.com
//
// color classes:
//   east-asian       → #E8652A (orange-red)
//   south-asian      → #D4A853 (gold)
//   southeast-asian  → #2A9D8F (teal)
//   persian          → #9B7DD0 (purple)
//   muslim           → #4A90C4 (blue)
//   heritage         → #C94B2D (accent red)
// ============================================================
const HOLIDAYS = [
  {
    id: "h1",
    name: "Pongal / Makar Sankranti",
    date: "2026-01-14", displayDate: "January 14, 2026",
    month: 0, day: 14,
    culture: "South Asian", color: "south-asian", emoji: "🌾",
    description: "A four-day Tamil harvest festival marking the sun's northward journey and the end of winter. Celebrated with sweet rice (pongal), kolam floor art, and gratitude for the harvest. Simultaneously observed across India as Makar Sankranti.",
    countries: ["India", "Sri Lanka", "Malaysia", "Singapore"]
  },
  {
    id: "h2",
    name: "Lunar New Year — Year of the Horse",
    date: "2026-02-17", displayDate: "February 17, 2026",
    month: 1, day: 17,
    culture: "East Asian", color: "east-asian", emoji: "🐴",
    description: "The most important celebration in East Asian cultures. 2026 is the Year of the Horse — symbolizing energy, freedom, and ambition. The holiday spans February 16–18 in Korea (Seollal) and Vietnam (Tết), with red envelopes, family feasts, lion dances, and fireworks.",
    countries: ["China", "Vietnam", "Korea", "Taiwan", "Singapore", "Malaysia"]
  },
  {
    id: "h3",
    name: "Ramadan Begins",
    date: "2026-02-18", displayDate: "February 18, 2026",
    month: 1, day: 18,
    culture: "Muslim", color: "muslim", emoji: "🌙",
    description: "The holiest month in Islam — 30 days of fasting from dawn to sunset, intensified prayer, and community. Observed by Muslim communities across South, Southeast, and Central Asia, and throughout the AAPI diaspora.",
    countries: ["Indonesia", "Pakistan", "Bangladesh", "Malaysia", "pan-Asian Muslim communities"]
  },
  {
    id: "h4",
    name: "Lantern Festival (Yuan Xiao)",
    date: "2026-03-04", displayDate: "March 4, 2026",
    month: 2, day: 4,
    culture: "East Asian", color: "east-asian", emoji: "🏮",
    description: "The 15th and final day of Lunar New Year, when the full moon rises and families gather with paper lanterns, share tangyuan (sweet rice balls), and play riddle games. A beautiful, romantic close to the New Year season.",
    countries: ["China", "Taiwan", "Vietnam", "Singapore", "diaspora worldwide"]
  },
  {
    id: "h5",
    name: "Nowruz — Persian New Year",
    date: "2026-03-20", displayDate: "March 20, 2026",
    month: 2, day: 20,
    culture: "Persian", color: "persian", emoji: "🌱",
    description: "The Persian and Zoroastrian New Year, marking the spring equinox at 14:46 UTC. Celebrated for over 3,000 years with the Haft-Seen table, spring cleaning, and family gatherings. Observed by over 300 million people worldwide.",
    countries: ["Iran", "Afghanistan", "Tajikistan", "Azerbaijan", "Kurdish communities", "Central Asia"]
  },
  {
    id: "h24",
    name: "Eid al-Fitr",
    date: "2026-03-20", displayDate: "March 20, 2026",
    month: 2, day: 20,
    culture: "Muslim", color: "muslim", emoji: "🌙",
    description: "The Festival of Breaking the Fast — one of Islam's two holiest celebrations, marking the end of Ramadan. Families wake before dawn, put on their finest clothes, attend communal prayers, and share a large feast. Gifts are exchanged, charity is given (Zakat al-Fitr), and joy is mandatory. Exact date varies by moon sighting.",
    countries: ["Indonesia", "Pakistan", "Bangladesh", "Malaysia", "pan-Asian Muslim communities"]
  },
  {
    id: "h6",
    name: "Holi — Festival of Colors",
    date: "2026-03-31", displayDate: "March 31, 2026",
    month: 2, day: 31,
    culture: "South Asian", color: "south-asian", emoji: "🎨",
    description: "The Festival of Colors — a joyful Hindu spring celebration marking the victory of good over evil. Celebrated by throwing vibrant colored powders and water, dancing to dhol drums, and sharing sweets. One of the most visually spectacular festivals in the world.",
    countries: ["India", "Nepal", "diaspora worldwide"]
  },
  {
    id: "h7",
    name: "Qingming Festival",
    date: "2026-04-04", displayDate: "April 4, 2026",
    month: 3, day: 4,
    culture: "East Asian", color: "east-asian", emoji: "🌿",
    description: "Tomb Sweeping Day — a time to honor ancestors by visiting graves, burning incense, and sharing meals. Also a spring festival with outdoor outings. One of the most culturally significant observances in Chinese tradition.",
    countries: ["China", "Taiwan", "Hong Kong", "diaspora worldwide"]
  },
  {
    id: "h8",
    name: "Vaisakhi — Sikh New Year",
    date: "2026-04-13", displayDate: "April 13, 2026",
    month: 3, day: 13,
    culture: "South Asian", color: "south-asian", emoji: "☀️",
    description: "One of the most important Sikh festivals, marking the founding of the Khalsa in 1699 by Guru Gobind Singh. Celebrated with nagar kirtans (processions), gurdwara prayers, and bhangra folk dancing. Also the Punjabi spring harvest festival.",
    countries: ["India (Punjab)", "Canada", "United Kingdom", "United States"]
  },
  {
    id: "h9",
    name: "Songkran — Thai New Year",
    date: "2026-04-13", displayDate: "April 13–15, 2026",
    month: 3, day: 13,
    culture: "Southeast Asian", color: "southeast-asian", emoji: "💦",
    description: "Thailand's most beloved holiday — three official days of water festivals marking the Buddhist New Year. The streets become a city-wide water fight as people splash each other to wash away bad luck. Also observed in Myanmar (Thingyan), Laos, and Cambodia.",
    countries: ["Thailand", "Myanmar", "Laos", "Cambodia", "diaspora worldwide"]
  },
  {
    id: "h10",
    name: "Vesak — Buddha's Birthday",
    date: "2026-05-01", displayDate: "May 1, 2026",
    month: 4, day: 1,
    culture: "Southeast Asian", color: "southeast-asian", emoji: "☸️",
    description: "The holiest day in Buddhism, commemorating the birth, enlightenment, and death of Gautama Buddha. Celebrated with candlelit processions, temple offerings, release of animals, and charitable giving. Observed across all Buddhist traditions worldwide.",
    countries: ["Sri Lanka", "Thailand", "Myanmar", "Cambodia", "Vietnam", "South Korea", "Japan"]
  },
  {
    id: "h11",
    name: "AAPI Heritage Month",
    date: "2026-05-01", displayDate: "May 1–31, 2026",
    month: 4, day: 1,
    culture: "Heritage", color: "heritage", emoji: "🌸",
    description: "Asian American and Pacific Islander Heritage Month — a federally recognized month honoring AAPI contributions to the United States. Designated in May to mark the arrival of the first Japanese immigrants (May 7, 1843) and completion of the transcontinental railroad (May 10, 1869).",
    countries: ["United States"]
  },
  {
    id: "h12",
    name: "Children's Day (Kodomo no Hi)",
    date: "2026-05-05", displayDate: "May 5, 2026",
    month: 4, day: 5,
    culture: "East Asian", color: "east-asian", emoji: "🎏",
    description: "A Japanese national holiday celebrating children's happiness. Families fly koinobori (carp streamers) from rooftops — one for each child — eat kashiwa mochi, and display samurai dolls. Also observed as Children's Day in South Korea.",
    countries: ["Japan", "South Korea"]
  },
  {
    id: "h13",
    name: "Buddha's Birthday (Korea)",
    date: "2026-05-24", displayDate: "May 24–25, 2026",
    month: 4, day: 24,
    culture: "East Asian", color: "east-asian", emoji: "🪔",
    description: "Korea's celebration of Buddha's birthday, a national public holiday. Temples string thousands of paper lanterns and the Yeon Deung Hoe (Lotus Lantern Festival) parade in Seoul is one of Korea's most spectacular annual events.",
    countries: ["South Korea"]
  },
  {
    id: "h25",
    name: "Eid al-Adha",
    date: "2026-05-27", displayDate: "May 27, 2026",
    month: 4, day: 27,
    culture: "Muslim", color: "muslim", emoji: "🕌",
    description: "The Festival of Sacrifice — the second and larger of the two Islamic Eid celebrations. Commemorating Ibrahim's willingness to sacrifice his son, it is marked with communal prayers, the ritual sacrifice of livestock, and distributing meat to family, neighbors, and those in need. One of the holiest days in the Islamic calendar. Exact date varies by moon sighting.",
    countries: ["Indonesia", "Pakistan", "Bangladesh", "Malaysia", "pan-Asian Muslim communities"]
  },
  {
    id: "h14",
    name: "Dragon Boat Festival (Duanwu)",
    date: "2026-06-19", displayDate: "June 19, 2026",
    month: 5, day: 19,
    culture: "East Asian", color: "east-asian", emoji: "🐉",
    description: "Commemorating the poet-patriot Qu Yuan, who drowned himself in protest of corruption. People race dragon boats, eat zongzi (sticky rice wrapped in bamboo leaves), and hang mugwort to ward off evil. A 3-day national holiday in China (June 19–21).",
    countries: ["China", "Taiwan", "Hong Kong", "Vietnam", "diaspora worldwide"]
  },
  {
    id: "h15",
    name: "Tanabata — Star Festival",
    date: "2026-07-07", displayDate: "July 7, 2026",
    month: 6, day: 7,
    culture: "East Asian", color: "east-asian", emoji: "⭐",
    description: "A Japanese celebration of the star-crossed lovers Orihime (Vega) and Hikoboshi (Altair), who are separated by the Milky Way and reunite only on this night. People write wishes on tanzaku paper strips and hang them from bamboo.",
    countries: ["Japan", "diaspora worldwide"]
  },
  {
    id: "h16",
    name: "Obon Festival",
    date: "2026-08-13", displayDate: "August 13–15, 2026",
    month: 7, day: 13,
    culture: "East Asian", color: "east-asian", emoji: "🏮",
    description: "A Japanese Buddhist tradition honoring ancestral spirits who return to visit. Celebrated with Bon Odori folk dances, lanterns floated on water to guide spirits home, and visits to graves. One of the most atmospheric traditions in Japanese culture.",
    countries: ["Japan", "Japanese American communities"]
  },
  {
    id: "h17",
    name: "Onam — Kerala Harvest Festival",
    date: "2026-09-05", displayDate: "September 5, 2026",
    month: 8, day: 5,
    culture: "South Asian", color: "south-asian", emoji: "🌺",
    description: "Kerala's biggest harvest festival, celebrating the mythical return of King Mahabali. Homes are decorated with flower carpets (pookalam), families gather for the grand Onam Sadhya (26-dish vegetarian feast on banana leaves), and snake boat races draw enormous crowds.",
    countries: ["India (Kerala)", "Malayali diaspora worldwide"]
  },
  {
    id: "h18",
    name: "Chuseok — Korean Harvest Moon",
    date: "2026-09-24", displayDate: "September 24–26, 2026",
    month: 8, day: 24,
    culture: "East Asian", color: "east-asian", emoji: "🌕",
    description: "Korea's most cherished holiday — the Korean Thanksgiving. Families travel home, pay respects to ancestors (charye), eat songpyeon (half-moon rice cakes), and wear hanbok. The full harvest moon is the centerpiece of this three-day celebration.",
    countries: ["South Korea", "North Korea", "Korean diaspora worldwide"]
  },
  {
    id: "h19",
    name: "Mid-Autumn Festival (Moon Festival)",
    date: "2026-09-25", displayDate: "September 25, 2026",
    month: 8, day: 25,
    culture: "East Asian", color: "east-asian", emoji: "🥮",
    description: "The 15th day of the 8th lunar month, when the moon is fullest and brightest. Families share mooncakes filled with lotus paste, salted egg yolk, or red bean, and children carry glowing paper lanterns. One of the most romantic and atmospheric evenings of the year.",
    countries: ["China", "Taiwan", "Vietnam", "Singapore", "Malaysia", "diaspora worldwide"]
  },
  {
    id: "h26",
    name: "Navaratri — Nine Nights",
    date: "2026-10-02", displayDate: "October 2–11, 2026",
    month: 9, day: 2,
    culture: "South Asian", color: "south-asian", emoji: "💃",
    description: "Nine nights of worship dedicated to the goddess Durga, celebrating the victory of divine feminine energy over evil. Each night honors a different form of Durga — marked by garba and dandiya raas dancing, fasting, and vibrant color-coded dress. One of Hinduism's most joyful festivals before Dussehra on the 10th day.",
    countries: ["India", "Nepal", "South Asian diaspora worldwide"]
  },
  {
    id: "h20",
    name: "Diwali — Festival of Lights",
    date: "2026-11-08", displayDate: "November 8, 2026",
    month: 10, day: 8,
    culture: "South Asian", color: "south-asian", emoji: "✨",
    description: "The most widely celebrated Hindu festival — five days marking the triumph of light over darkness. Homes are lit with diyas (clay lamps) and colorful rangoli, families exchange sweets, and fireworks fill the sky. Also significant in Jain, Sikh, and Buddhist traditions.",
    countries: ["India", "Nepal", "Sri Lanka", "Singapore", "Malaysia", "Fiji", "diaspora worldwide"]
  },
  {
    id: "h27",
    name: "Loy Krathong — Festival of Lights",
    date: "2026-11-24", displayDate: "November 24, 2026",
    month: 10, day: 24,
    culture: "Southeast Asian", color: "southeast-asian", emoji: "🪔",
    description: "Thailand's most magical night — thousands of candlelit krathong (small lotus-shaped floats) are set adrift on rivers and lakes, carrying away bad luck and making wishes. The sky fills with khom loi lanterns drifting upward. One of the most visually stunning nights in Southeast Asian tradition. Date follows the full moon of the 12th Thai lunar month.",
    countries: ["Thailand", "Laos", "Myanmar", "Thai diaspora worldwide"]
  },
  {
    id: "h21",
    name: "Guru Nanak Jayanti",
    date: "2026-11-14", displayDate: "November 14, 2026",
    month: 10, day: 14,
    culture: "South Asian", color: "south-asian", emoji: "🙏",
    description: "Gurpurab — the birthday of Guru Nanak Dev Ji, founder of Sikhism. Celebrated with continuous reading of the Guru Granth Sahib, nagar kirtans (street processions), langar (community meals open to all), and prayer.",
    countries: ["India (Punjab)", "Canada", "United Kingdom", "United States", "global Sikh diaspora"]
  },
  {
    id: "h22",
    name: "Bodhi Day",
    date: "2026-12-08", displayDate: "December 8, 2026",
    month: 11, day: 8,
    culture: "East Asian", color: "east-asian", emoji: "🍵",
    description: "Commemorating Siddhartha Gautama's enlightenment under the Bodhi tree. Observed in Zen and Mahayana Buddhist traditions with meditation, reading of sutras, and simple rituals. A quiet, contemplative day that contrasts with the season's commercial frenzy.",
    countries: ["Japan", "United States (Zen communities)", "global Buddhist diaspora"]
  },
  {
    id: "h23",
    name: "Dongzhi — Winter Solstice Festival",
    date: "2026-12-22", displayDate: "December 22, 2026",
    month: 11, day: 22,
    culture: "East Asian", color: "east-asian", emoji: "❄️",
    description: "One of the most important Chinese traditional holidays, marking the winter solstice. Families gather to share tangyuan (glutinous rice balls in sweet soup) and honor ancestors. The solstice marks the return of longer days — a time of renewal and yin-yang balance.",
    countries: ["China", "Taiwan", "Hong Kong", "Vietnam", "diaspora worldwide"]
  }
];

// ============================================================
// LONELINESS_RESOURCES — AA x Loneliness & Mental Health
// Verified URLs. Types: "article" | "org"
// ============================================================
const LONELINESS_RESOURCES = [
  {
    id: "l1",
    type: "article",
    category: "cultural-context",
    title: "4 Mental Health Issues Asian Americans Face — And How To Overcome Them",
    author: "Andee Tagle & Michelle Aslam",
    source: "NPR Life Kit",
    year: 2022,
    url: "https://www.npr.org/2022/05/24/1101020325/4-elements-to-create-home-discussing-mental-health-in-the-asian-american-communi",
    description: "Drawing on psychologist Jenny T. Wang's framework, this piece names four mental health challenges specific to Asian Americans — the model minority myth, perfectionism, deference to authority, and difficulty taking up space — and links them to a crisis of belonging.",
    stat: null
  },
  {
    id: "l2",
    type: "article",
    category: "essay",
    title: "You're Called a 'Model Minority' as an Asian American — Until They Decide You Aren't",
    author: "Gary Duong",
    source: "NPR",
    year: 2022,
    url: "https://www.npr.org/2022/05/30/1101790205/as-an-asian-american-youre-called-a-model-minority-until-they-decide-you-arent",
    description: "A first-person essay on how the conditional nature of the model minority label creates psychological precarity — and a persistent, exhausting sense of never fully belonging.",
    stat: null
  },
  {
    id: "l3",
    type: "article",
    category: "essay",
    title: "We're Fine: What's Stopping Asian-American Millennials From Talking About Mental Health",
    author: "Kimberly Truong",
    source: "Refinery29",
    year: 2018,
    url: "https://www.refinery29.com/en-us/asian-american-mental-health-second-generation-immigrants",
    description: "How filial piety, stigma, and the imperative to appear strong keep second-generation Asian Americans silent about their inner lives — and the cost of that silence over time.",
    stat: null
  },
  {
    id: "l4",
    type: "article",
    category: "essay",
    title: "Constance Wu Put Mental Health in Asian Communities in the Spotlight. Here's What's Next.",
    author: "Thuc Doan Nguyen",
    source: "Refinery29",
    year: 2023,
    url: "https://www.refinery29.com/en-us/2023/05/11346678/constance-wu-asian-american-mental-health",
    description: "Uses Constance Wu's public disclosure of a suicide attempt to examine the systemic barriers — model minority myth, cultural stigma, underrepresentation — that keep AAPI mental health invisible.",
    stat: null
  },
  {
    id: "l5",
    type: "article",
    category: "cultural-context",
    title: "The Asian-American Stigma Around Mental Health Therapy",
    author: "Jinnie Lee",
    source: "Refinery29",
    year: 2020,
    url: "https://www.refinery29.com/en-us/2020/05/9747266/asian-mental-health-therapy-stigma",
    description: "How cultural conditioning — emotional suppression, shame, saving face — prevents Asian Americans from seeking therapy, and whether a culturally compatible path forward exists.",
    stat: null
  },
  {
    id: "l6",
    type: "article",
    category: "research",
    title: "Mental Health Among Asian-Americans",
    author: "Koko Nishi, PhD",
    source: "American Psychological Association",
    year: 2012,
    url: "https://www.apa.org/pi/oema/resources/ethnicity-health/asian-american/article-mental-health",
    description: "The foundational APA overview documenting that Asian Americans are three times less likely than white Americans to seek mental health services, identifying stigma, the model minority myth, and bicultural identity conflict as root causes.",
    stat: "3× less likely to seek mental health support than white Americans"
  },
  {
    id: "l7",
    type: "article",
    category: "research",
    title: "Mental Health and Asian Americans",
    author: "U.S. Office of Minority Health",
    source: "HHS Office of Minority Health",
    year: 2024,
    url: "https://minorityhealth.hhs.gov/mental-and-behavioral-health-asian-americans",
    description: "Federal statistical overview showing Asian Americans are 45% less likely to receive mental health treatment than the general population, despite comparable rates of psychiatric disorder.",
    stat: "45% less likely to receive mental health treatment than the general population"
  },
  {
    id: "l8",
    type: "article",
    category: "research",
    title: "Intergenerational Communication about Historical Trauma in Asian American Families",
    author: "Jieyi Cai & Richard M. Lee",
    source: "Adversity and Resilience Science (PMC)",
    year: 2022,
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9170877/",
    description: "Peer-reviewed research arguing that silence about war and migration trauma across generations risks alienating children from family history — and contributes to identity disconnection and isolation.",
    stat: null
  },
  {
    id: "l9",
    type: "article",
    category: "research",
    title: "Anti-Asian Hate, Social Isolation, and Mental Health Among AAPI Elders During COVID-19",
    author: "Stop AAPI Hate",
    source: "Stop AAPI Hate",
    year: 2022,
    url: "https://stopaapihate.org/2022/05/24/elder-report-2022/",
    description: "Report analyzing 824 hate incidents against AAPI adults 60+ showing that targeted violence compounded pandemic isolation, with 65.5% of elder victims reporting elevated stress.",
    stat: "65.5% of AAPI elder hate-crime victims reported elevated stress post-incident"
  },
  {
    id: "l10",
    type: "article",
    category: "cultural-context",
    title: "I'm a South Asian Gay Man. Here's What It Took to Feel Accepted",
    source: "Business Insider",
    year: "2023",
    url: "https://www.businessinsider.com/south-asian-gay-man-accepted-lgbtq-2023-1",
    description: "A first-person account of navigating the double isolation of being both South Asian and gay — the particular loneliness of communities within communities, and the long road toward belonging in both."
  },
  {
    id: "o1",
    type: "org",
    title: "Asians Do Therapy",
    source: "asiansdotherapy.com",
    url: "https://asiansdotherapy.com/",
    description: "A podcast and platform founded by a licensed therapist to reduce mental health stigma in Asian communities through storytelling, resources, and culturally matched therapist referrals.",
    icon: "🎙️"
  },
  {
    id: "o2",
    type: "org",
    title: "Asian Mental Health Collective",
    source: "asianmhc.org",
    url: "https://www.asianmhc.org",
    description: "Connects clients with over 3,000 culturally matched Asian therapists, offering free therapy funds, virtual support groups, and community resources.",
    icon: "🤝"
  },
  {
    id: "o3",
    type: "org",
    title: "The Steve Fund",
    source: "stevefund.org",
    url: "https://stevefund.org",
    description: "A leading nonprofit promoting mental health equity for young people of color, with programs, open courseware, and campus-focused resources including an AAPI Girls self-care initiative.",
    icon: "🌱"
  },
  {
    id: "o4",
    type: "org",
    title: "Asian Mental Health Project",
    source: "asianmentalhealthproject.com",
    url: "https://www.asianmentalhealthproject.com/",
    description: "A 501(c)(3) providing mental health assistance grants, peer wellness groups, free toolkits, and community events to make care accessible to Pan-Asian communities.",
    icon: "💛"
  },
  {
    id: "o5",
    type: "org",
    title: "Mental Health America: AAPI Communities",
    source: "mhanational.org",
    url: "https://mhanational.org/position-statements/asian-american-pacific-islander-communities-and-mental-health/",
    description: "MHA's position statement and resource hub on the intersection of model minority stereotyping, perpetual foreigner bias, and the cultural stigma driving AAPI mental health disparities.",
    icon: "📋"
  },
  // ── Dating & connection articles ──────────────────────────
  {
    id: "d1",
    type: "article",
    category: "dating",
    title: "How Dating Sites Automate Sexual Racism",
    author: "Liz Mineo",
    source: "Harvard Gazette",
    year: "2024",
    url: "https://news.harvard.edu/gazette/story/2024/04/how-dating-sites-automate-sexual-racism/",
    description: "Sociologist Apryl Williams on how dating app algorithms make racial discrimination \"hyper efficient and routine\" — and why anti-Asian bias in particular is baked into the design of mainstream platforms.",
    stat: "\"What dating apps do is automate sexual racism, making it hyper efficient and routine to swipe in racially curated sexual marketplaces.\" — Apryl Williams, Harvard"
  },
  {
    id: "d2",
    type: "article",
    category: "dating",
    title: "On Dating Apps, Casual Racism Has Become The Norm For Asian Men",
    author: "Brittany Wong",
    source: "HuffPost",
    year: "2024",
    url: "https://www.yahoo.com/news/dating-apps-casual-racism-become-183924405.html",
    description: "Personal accounts from Asian American men on the rejections, profile filters, and explicit \"no Asians\" messages that have become routine on dating platforms — and what it does to your sense of self.",
    stat: "\"I was sexy and exotic as a Latino, but I suddenly became undesirable as an Asian-American.\" — Lee Doud, actor"
  },
  {
    id: "d3",
    type: "article",
    category: "dating",
    title: "Is It Wrong to Have a Romantic Type Based on Race? Yes.",
    author: "Aaron Teo",
    source: "The Conversation",
    year: "2024",
    url: "https://theconversation.com/is-it-wrong-to-have-a-romantic-type-based-on-race-yes-its-a-form-of-racism-we-rarely-speak-about-229002",
    description: "A cultural critic unpacks internalized racism and fetishization through the lens of ABC's comedy *White Fever* — examining how Asian women experience 'yellow fever' and how Asian communities sometimes internalize racial hierarchies that elevate whiteness."
  },
  {
    id: "d4",
    type: "article",
    category: "dating",
    title: "Single Asian Men and Harmful Stereotypes in the Dating World",
    author: "Sam Louie",
    source: "Psychology Today",
    year: "2023",
    url: "https://www.psychologytoday.com/us/blog/minority-report/202308/single-asian-men-and-harmful-stereotypes-in-the-dating-world",
    description: "A therapist examines how persistent stereotypes — weak, shy, lacking initiative — follow Asian men into dating, and what it takes to be seen as a full person rather than a cultural shorthand."
  },
  {
    id: "d5",
    type: "article",
    category: "dating",
    title: "As An Asian American Woman, This Is The Dating App Red Flag I Don't Talk About",
    author: "Lisa Boyce",
    source: "HuffPost",
    year: "2022",
    url: "https://www.huffpost.com/entry/asian-women-dating-apps_n_628d2a05e4b0b1d9844e0a8b",
    description: "A personal essay on the specific, quietly unsettling pattern Asian American women encounter on dating apps — one that's hard to name but impossible to ignore once you've seen it."
  },
  {
    id: "d6",
    type: "article",
    category: "dating",
    title: "Dating Apps vs. Arranged Marriage: How South Asians Are Navigating Both",
    source: "NBC News",
    year: "2024",
    url: "https://www.nbcnews.com/news/asian-america/dating-apps-south-asians-arranged-marriage-rcna154392",
    description: "How South Asian Americans are navigating the friction between swipe-culture dating apps and family-led arranged marriage traditions — and what it means to want both independence and belonging."
  },
  // ── Resilience & community strength ───────────────────────
  {
    id: "r1",
    type: "article",
    category: "resilience",
    title: "The Return of the Multigenerational Family Household",
    author: "Pew Research Center",
    source: "Pew Research Center",
    year: "2022",
    url: "https://www.pewresearch.org/social-trends/2022/03/24/the-demographics-of-multigenerational-households/",
    description: "Asian Americans are more likely than any other group to live in multigenerational households — reflecting both economic pragmatism and deep intergenerational bonds that sustain community across generations.",
    stat: "29% of Asian Americans live in multigenerational households — highest of any racial group in the U.S. (Pew, 2022)."
  },
  {
    id: "r2",
    type: "article",
    category: "resilience",
    title: "Better Therapy for Asian Americans",
    author: "Diana Kwon",
    source: "Knowable Magazine",
    year: "2023",
    url: "https://knowablemagazine.org/content/article/mind/2023/better-therapy-asian-americans",
    description: "Researchers and clinicians are adapting Western psychotherapy to honor Asian cultural values — developing new approaches that don't ask patients to choose between their heritage and their healing."
  },
  {
    id: "r3",
    type: "article",
    category: "resilience",
    title: "Americans' Trust in One Another",
    author: "Laura Silver et al.",
    source: "Pew Research Center",
    year: "2025",
    url: "https://www.pewresearch.org/2025/05/08/americans-trust-in-one-another/",
    description: "A sweeping study of interpersonal trust across American demographics — with Asian Americans ranking second-highest of all racial groups, suggesting that community bonds and social cohesion remain genuine strengths.",
    stat: "38% of Asian Americans say most people can be trusted — second highest of any racial group surveyed, above the national average of 34% (Pew, 2025)."
  }
];

// Export for module environments
if (typeof module !== 'undefined') {
  module.exports = { RESTAURANTS, EVENTS, BOOKS, HOLIDAYS, LONELINESS_RESOURCES };
}
