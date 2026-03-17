const commonInclusions = [
  { key: "stay", label: "Heritage Stay" },
  { key: "transit", label: "Inter-city Transit" },
  { key: "meals", label: "Curated Meals" },
  { key: "guide", label: "Expert Guide" },
];

export const expeditions = [
  {
    id: "rajput-legacy-trail",
    category: "Forts",
    title: "Rajput Legacy Expedition",
    location: "Jaipur, Amber, Kumbhalgarh",
    duration: "5 Days | 4 Nights",
    pricePerAdult: 28999,
    rating: 4.9,
    reviews: 126,
    groupOnly: true,
    groupSize: { min: 8, max: 16 },
    seatsLeft: 6,
    nextDeparture: "2026-03-12",
    heroImages: [
      "https://images.unsplash.com/photo-1621264999492-73b14998f1fb?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1576053139778-7e32f2ae3cfd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1585137334479-a5f8f83c4a4b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616594039964-8f7777d7ff44?auto=format&fit=crop&w=1200&q=80",
    ],
    guide: {
      name: "Dr. Ananya Rathore",
      title: "Expert Historian | Rajputana Military Culture",
      avatar:
        "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=500&q=80",
    },
    highlights: [
      "Amber strategic tunnels",
      "Kumbhalgarh wall fortification",
      "Royal kitchen immersion",
    ],
    exclusions: ["Flights", "Personal shopping", "Camera permits"],
    inclusions: commonInclusions,
    itinerary: [
      {
        day: 1,
        title: "Arrival and Walled City Orientation",
        summary:
          "Sunset walk through old Jaipur gates, ceremonial squares, and market planning of the Pink City.",
        activities: ["Airport transfer", "Old city walk", "Royal thali dinner"],
        thumbnail:
          "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80",
      },
      {
        day: 2,
        title: "Amber Fort Strategic Routes",
        summary:
          "Study defensive geometry, hidden passages, and hilltop surveillance points with your historian.",
        activities: ["Fort deep dive", "Bastion viewpoint", "Light and sound show"],
        thumbnail:
          "https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=800&q=80",
      },
      {
        day: 3,
        title: "Kumbhalgarh Battlefield Analysis",
        summary:
          "Interpret medieval warfare logistics around one of the longest fort walls in the world.",
        activities: ["Wall trail", "Battle workshop", "Campfire oral history"],
        thumbnail:
          "https://images.unsplash.com/photo-1628436518364-f57c35ec2c22?auto=format&fit=crop&w=800&q=80",
      },
      {
        day: 4,
        title: "Culinary Trail Through Royal Kitchens",
        summary:
          "Hands-on culinary storytelling: drought-era recipes, spice routes, and palace feasting culture.",
        activities: ["Street breakfast", "Kitchen session", "Spice market walk"],
        thumbnail:
          "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80",
      },
      {
        day: 5,
        title: "Temple Architecture and Departure",
        summary:
          "Morning architectural reading of temple motifs, closing reflection circle, and departure transfers.",
        activities: ["Temple trail", "Closing session", "Transfer to airport"],
        thumbnail:
          "https://images.unsplash.com/photo-1524499982521-1ffd58dd89ea?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    id: "kashi-temple-river-circuit",
    category: "Temples",
    title: "Kashi Temple and River Circuit",
    location: "Varanasi, Sarnath",
    duration: "4 Days | 3 Nights",
    pricePerAdult: 21999,
    rating: 4.8,
    reviews: 94,
    groupOnly: true,
    groupSize: { min: 10, max: 18 },
    seatsLeft: 9,
    nextDeparture: "2026-03-20",
    heroImages: [
      "https://images.unsplash.com/photo-1561361058-c24cecae35ca?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1520848315518-b991dd16a0d1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1577083552431-6e5fd75fc6f8?auto=format&fit=crop&w=1200&q=80",
    ],
    guide: {
      name: "Prof. Meera Shastri",
      title: "Temple Historian | Sacred Urbanism",
      avatar:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=500&q=80",
    },
    highlights: ["Kashi corridor history", "Sarnath Buddhist layer", "Ghat ritual decoding"],
    exclusions: ["Flights", "VIP darshan fees", "Travel insurance"],
    inclusions: commonInclusions,
    itinerary: [
      {
        day: 1,
        title: "Arrival and Ghat Orientation",
        summary: "An introduction to riverfront morphology, old alleys, and ritual sequencing along the ghats.",
        activities: ["Arrival transfer", "Ghat walk", "Evening aarti"],
        thumbnail:
          "https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&w=800&q=80",
      },
      {
        day: 2,
        title: "Temple Core and Corridor History",
        summary:
          "Interpret religious architecture, reconstruction cycles, and patron dynasties with your expert guide.",
        activities: ["Temple briefing", "Corridor study", "Text and inscription session"],
        thumbnail:
          "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=800&q=80",
      },
      {
        day: 3,
        title: "Sarnath Historical Layer",
        summary: "Trace Buddhist and Hindu architectural overlap through curated museum and site interpretation.",
        activities: ["Sarnath visit", "Museum walkthrough", "Scholarly discussion"],
        thumbnail:
          "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=800&q=80",
      },
      {
        day: 4,
        title: "Sunrise Boat and Departure",
        summary: "Sunrise river reading, final Q and A session, and departure transfer.",
        activities: ["Boat ride", "Reflection circle", "Departure"],
        thumbnail:
          "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    id: "deccan-battlefront-expedition",
    category: "Battlefields",
    title: "Deccan Battlefront Expedition",
    location: "Bidar, Gulbarga, Daulatabad",
    duration: "6 Days | 5 Nights",
    pricePerAdult: 33999,
    rating: 4.9,
    reviews: 81,
    groupOnly: true,
    groupSize: { min: 8, max: 14 },
    seatsLeft: 5,
    nextDeparture: "2026-04-02",
    heroImages: [
      "https://images.unsplash.com/photo-1633321088352-95f575f5fd5f?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1619795167816-6b5bdb9fee9c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1623514236024-5b870d2cb157?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1621419246565-6ca68edb9429?auto=format&fit=crop&w=1200&q=80",
    ],
    guide: {
      name: "Col. Arjun Dev (Retd.)",
      title: "Military Historian | Deccan Campaigns",
      avatar:
        "https://images.unsplash.com/photo-1566753323558-f4e0952af115?auto=format&fit=crop&w=500&q=80",
    },
    highlights: ["Fortified plateau systems", "Cannon line reconstructions", "Campaign map room"],
    exclusions: ["Flights", "Personal permits", "Adventure add-ons"],
    inclusions: commonInclusions,
    itinerary: [
      {
        day: 1,
        title: "Arrival and Campaign Briefing",
        summary:
          "Historical context session on Deccan power blocks and shifting military alliances.",
        activities: ["Arrival", "Campaign maps", "Local cuisine dinner"],
        thumbnail:
          "https://images.unsplash.com/photo-1564694202779-bc908c327862?auto=format&fit=crop&w=800&q=80",
      },
      {
        day: 2,
        title: "Bidar Fort Systems",
        summary: "Explore moats, gateways, and artillery layouts with tactical battlefield interpretation.",
        activities: ["Fort circuit", "Bastion analysis", "Archival reading"],
        thumbnail:
          "https://images.unsplash.com/photo-1623514236024-5b870d2cb157?auto=format&fit=crop&w=800&q=80",
      },
      {
        day: 3,
        title: "Gulbarga Defensive Urbanism",
        summary: "Study fortified city design, mosque complexes, and command corridors.",
        activities: ["City walk", "Structural survey", "Q and A"],
        thumbnail:
          "https://images.unsplash.com/photo-1633321088352-95f575f5fd5f?auto=format&fit=crop&w=800&q=80",
      },
      {
        day: 4,
        title: "Daulatabad Tactical Climb",
        summary: "Analyze one of India most strategic hill forts and layered trap defenses.",
        activities: ["Fort ascent", "Defense lecture", "Sunset review"],
        thumbnail:
          "https://images.unsplash.com/photo-1619795167816-6b5bdb9fee9c?auto=format&fit=crop&w=800&q=80",
      },
      {
        day: 5,
        title: "Living Military Foodways",
        summary: "Taste wartime and courtly adaptations in Deccan culinary traditions.",
        activities: ["Food trail", "Kitchen demo", "Discussion"],
        thumbnail:
          "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80",
      },
      {
        day: 6,
        title: "Archive Session and Departure",
        summary: "Final synthesis workshop and departure transfer.",
        activities: ["Archive room", "Closing session", "Departure"],
        thumbnail:
          "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    id: "mughal-culinary-heritage-route",
    category: "Culinary",
    title: "Mughal Culinary Heritage Route",
    location: "Delhi, Agra",
    duration: "3 Days | 2 Nights",
    pricePerAdult: 17999,
    rating: 4.7,
    reviews: 143,
    groupOnly: true,
    groupSize: { min: 12, max: 22 },
    seatsLeft: 13,
    nextDeparture: "2026-03-28",
    heroImages: [
      "https://images.unsplash.com/photo-1574041007781-8f78716f31af?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1596797038530-2c107aa8e1fa?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=1200&q=80",
    ],
    guide: {
      name: "Chef Rahil Khan",
      title: "Food Historian | Imperial Kitchens",
      avatar:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=500&q=80",
    },
    highlights: ["Old Delhi tasting walk", "Imperial recipe workshop", "Agra court cuisine"],
    exclusions: ["Flights", "Alcohol", "Shopping expenses"],
    inclusions: commonInclusions,
    itinerary: [
      {
        day: 1,
        title: "Old Delhi Flavor Cartography",
        summary: "Street-to-court food narratives through selected markets and haveli kitchens.",
        activities: ["Chandni Chowk walk", "Spice session", "Dinner tasting"],
        thumbnail:
          "https://images.unsplash.com/photo-1574041007781-8f78716f31af?auto=format&fit=crop&w=800&q=80",
      },
      {
        day: 2,
        title: "Imperial Technique Workshop",
        summary: "Hands-on class on dum cooking, gravies, and festive meal architecture.",
        activities: ["Cooking class", "Ingredient lab", "Chef roundtable"],
        thumbnail:
          "https://images.unsplash.com/photo-1596797038530-2c107aa8e1fa?auto=format&fit=crop&w=800&q=80",
      },
      {
        day: 3,
        title: "Agra Court Cuisine and Departure",
        summary: "Curated farewell lunch and departure transfer.",
        activities: ["Fort food context", "Farewell lunch", "Departure"],
        thumbnail:
          "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    id: "hampi-vijayanagara-ruins-expedition",
    category: "Forts",
    title: "Hampi Vijayanagara Ruins Expedition",
    location: "Hampi, Anegundi",
    duration: "4 Days | 3 Nights",
    pricePerAdult: 25999,
    rating: 4.9,
    reviews: 112,
    groupOnly: true,
    groupSize: { min: 8, max: 15 },
    seatsLeft: 7,
    nextDeparture: "2026-04-10",
    heroImages: [
      "https://images.unsplash.com/photo-1641792754228-24954915a43c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1641792748724-b36f2e9b1ed7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1568043210943-0e8cf5a2b9e8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1637257106518-c70517d8f98f?auto=format&fit=crop&w=1200&q=80",
    ],
    guide: {
      name: "Dr. Raghavendra Kulkarni",
      title: "Archaeologist | Vijayanagara Studies",
      avatar:
        "https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&w=500&q=80",
    },
    highlights: ["Royal enclosure mapping", "Boulder fortifications", "Virupaksha precinct interpretation"],
    exclusions: ["Flights", "Camera fees", "Personal expenses"],
    inclusions: commonInclusions,
    itinerary: [
      {
        day: 1,
        title: "Arrival and Ruins Orientation",
        summary: "Introduction to the capital layout, river axis, and dynastic chronology.",
        activities: ["Arrival transfer", "Sunset at Matanga Hill", "Welcome dinner"],
        thumbnail:
          "https://images.unsplash.com/photo-1641792754228-24954915a43c?auto=format&fit=crop&w=800&q=80",
      },
      {
        day: 2,
        title: "Royal Enclosure Deep Dive",
        summary: "Explore audience halls, stepwells, and palace foundations with context on court life.",
        activities: ["Royal enclosure", "Lotus Mahal zone", "Archive discussion"],
        thumbnail:
          "https://images.unsplash.com/photo-1641792748724-b36f2e9b1ed7?auto=format&fit=crop&w=800&q=80",
      },
      {
        day: 3,
        title: "Anegundi and Battlefield Corridors",
        summary: "Read topography and defense pathways across the river settlements.",
        activities: ["Coracle crossing", "Anegundi walk", "Evening folk performance"],
        thumbnail:
          "https://images.unsplash.com/photo-1637257106518-c70517d8f98f?auto=format&fit=crop&w=800&q=80",
      },
      {
        day: 4,
        title: "Temple Morphology and Departure",
        summary: "Comparative study of temple sculptural programs followed by departure.",
        activities: ["Virupaksha study", "Reflection session", "Departure"],
        thumbnail:
          "https://images.unsplash.com/photo-1568043210943-0e8cf5a2b9e8?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    id: "maratha-sea-forts-circuit",
    category: "Forts",
    title: "Maratha Sea Forts Circuit",
    location: "Alibaug, Murud, Sindhudurg",
    duration: "5 Days | 4 Nights",
    pricePerAdult: 30999,
    rating: 4.8,
    reviews: 73,
    groupOnly: true,
    groupSize: { min: 10, max: 18 },
    seatsLeft: 8,
    nextDeparture: "2026-04-15",
    heroImages: [
      "https://images.unsplash.com/photo-1570264284416-8f6d5f8f7ff6?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1622519396902-2f6868f6f039?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1598959659211-5ee91f82c4ad?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?auto=format&fit=crop&w=1200&q=80",
    ],
    guide: {
      name: "Capt. Nilesh Bhosale",
      title: "Maritime Historian | Coastal Warfare",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
    },
    highlights: ["Island fort logistics", "Naval defense narratives", "Coastal cannon bastions"],
    exclusions: ["Flights", "Private boat upgrades", "Personal shopping"],
    inclusions: commonInclusions,
    itinerary: [
      {
        day: 1,
        title: "Arrival and Coastal Briefing",
        summary: "Context session on Maratha naval strategy and Konkan fort chains.",
        activities: ["Arrival", "Briefing", "Konkan dinner"],
        thumbnail:
          "https://images.unsplash.com/photo-1570264284416-8f6d5f8f7ff6?auto=format&fit=crop&w=800&q=80",
      },
      {
        day: 2,
        title: "Korlai and Revdanda Systems",
        summary: "Study Portuguese and Maratha adaptations in shore defense architecture.",
        activities: ["Fort walk", "Lighthouse ridge", "Map session"],
        thumbnail:
          "https://images.unsplash.com/photo-1622519396902-2f6868f6f039?auto=format&fit=crop&w=800&q=80",
      },
      {
        day: 3,
        title: "Murud Janjira Perspectives",
        summary: "Interpret offshore fort design and siege history from multiple viewpoints.",
        activities: ["Boat approach", "Rampart study", "Evening talk"],
        thumbnail:
          "https://images.unsplash.com/photo-1598959659211-5ee91f82c4ad?auto=format&fit=crop&w=800&q=80",
      },
      {
        day: 4,
        title: "Sindhudurg Military Grid",
        summary: "Detailed reading of harbor entrances, barracks, and command positions.",
        activities: ["Site survey", "Historic records", "Local cuisine trail"],
        thumbnail:
          "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?auto=format&fit=crop&w=800&q=80",
      },
      {
        day: 5,
        title: "Synthesis Workshop and Departure",
        summary: "Close-out session on maritime polity and departure transfer.",
        activities: ["Workshop", "Q and A", "Departure"],
        thumbnail:
          "https://images.unsplash.com/photo-1622519396902-2f6868f6f039?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    id: "chola-temple-bronze-route",
    category: "Temples",
    title: "Chola Temple and Bronze Route",
    location: "Thanjavur, Gangaikonda Cholapuram, Kumbakonam",
    duration: "5 Days | 4 Nights",
    pricePerAdult: 32999,
    rating: 4.9,
    reviews: 88,
    groupOnly: true,
    groupSize: { min: 10, max: 16 },
    seatsLeft: 10,
    nextDeparture: "2026-05-02",
    heroImages: [
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1551224354-64872d4d3e90?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1580053444261-17c4c91f9b58?auto=format&fit=crop&w=1200&q=80",
    ],
    guide: {
      name: "Dr. Lalitha Iyer",
      title: "Temple Art Historian | Chola Period",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80",
    },
    highlights: ["Brihadisvara structural logic", "Bronze casting lineage", "Sacred geometry workshops"],
    exclusions: ["Flights", "Temple special entry", "Personal purchases"],
    inclusions: commonInclusions,
    itinerary: [
      {
        day: 1,
        title: "Arrival in Thanjavur",
        summary: "Orientation to Chola imperial culture and architectural grammar.",
        activities: ["Arrival", "City orientation", "Scholarly briefing"],
        thumbnail:
          "https://images.unsplash.com/photo-1551224354-64872d4d3e90?auto=format&fit=crop&w=800&q=80",
      },
      {
        day: 2,
        title: "Brihadisvara Monument Study",
        summary: "Analyze vertical massing, inscriptions, and ritual movement pathways.",
        activities: ["Temple walkthrough", "Inscription reading", "Courtyard discussion"],
        thumbnail:
          "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80",
      },
      {
        day: 3,
        title: "Bronze Craft and Iconography",
        summary: "Hands-on exposure to lost-wax process and iconographic standards.",
        activities: ["Workshop", "Museum visit", "Panel talk"],
        thumbnail:
          "https://images.unsplash.com/photo-1580053444261-17c4c91f9b58?auto=format&fit=crop&w=800&q=80",
      },
      {
        day: 4,
        title: "Kumbakonam Temple Cluster",
        summary: "Compare temple patronage patterns across the region.",
        activities: ["Temple circuit", "Comparative lecture", "Local dinner"],
        thumbnail:
          "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80",
      },
      {
        day: 5,
        title: "Closing Seminar and Departure",
        summary: "Final seminar and transfer.",
        activities: ["Seminar", "Feedback", "Departure"],
        thumbnail:
          "https://images.unsplash.com/photo-1551224354-64872d4d3e90?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    id: "ahom-frontier-battle-route",
    category: "Battlefields",
    title: "Ahom Frontier Battle Route",
    location: "Sivasagar, Jorhat, Saraighat",
    duration: "5 Days | 4 Nights",
    pricePerAdult: 29999,
    rating: 4.8,
    reviews: 67,
    groupOnly: true,
    groupSize: { min: 8, max: 14 },
    seatsLeft: 6,
    nextDeparture: "2026-05-10",
    heroImages: [
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1526481280695-3c460e6c9807?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80",
    ],
    guide: {
      name: "Dr. Pradip Bora",
      title: "Military Historian | Ahom Era",
      avatar:
        "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?auto=format&fit=crop&w=500&q=80",
    },
    highlights: ["Saraighat campaign reading", "Ahom water defense", "Royal chronicles review"],
    exclusions: ["Flights", "River activity upgrades", "Personal costs"],
    inclusions: commonInclusions,
    itinerary: [
      {
        day: 1,
        title: "Arrival and Kingdom Context",
        summary: "Context lecture on Ahom statecraft and military systems.",
        activities: ["Arrival", "Context talk", "Regional dinner"],
        thumbnail:
          "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80",
      },
      {
        day: 2,
        title: "Sivasagar Military-Administrative Core",
        summary: "Explore tanks, palaces, and strategic architecture.",
        activities: ["Site walk", "Documentation", "Group review"],
        thumbnail:
          "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=800&q=80",
      },
      {
        day: 3,
        title: "Jorhat and Chronicle Session",
        summary: "Read campaign records and oral narratives with local experts.",
        activities: ["Archive visit", "Panel discussion", "Food trail"],
        thumbnail:
          "https://images.unsplash.com/photo-1526481280695-3c460e6c9807?auto=format&fit=crop&w=800&q=80",
      },
      {
        day: 4,
        title: "Saraighat Battlefield Interpretation",
        summary: "Terrain and river strategy analysis on key confrontation points.",
        activities: ["Battle map brief", "Riverbank walk", "Evening debrief"],
        thumbnail:
          "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80",
      },
      {
        day: 5,
        title: "Synthesis and Departure",
        summary: "Closing synthesis with departure transfer.",
        activities: ["Synthesis", "Feedback", "Departure"],
        thumbnail:
          "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    id: "awadh-royal-culinary-trail",
    category: "Culinary",
    title: "Awadh Royal Culinary Trail",
    location: "Lucknow, Faizabad",
    duration: "4 Days | 3 Nights",
    pricePerAdult: 20999,
    rating: 4.8,
    reviews: 132,
    groupOnly: true,
    groupSize: { min: 12, max: 24 },
    seatsLeft: 14,
    nextDeparture: "2026-04-22",
    heroImages: [
      "https://images.unsplash.com/photo-1619740455993-9e612b1af08f?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=80",
    ],
    guide: {
      name: "Chef Aaliya Naqvi",
      title: "Culinary Historian | Awadhi Tradition",
      avatar:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=500&q=80",
    },
    highlights: ["Tunday to dastarkhwan", "Nawabi kitchen techniques", "Spice lineage decoding"],
    exclusions: ["Flights", "Personal shopping", "Private tastings"],
    inclusions: commonInclusions,
    itinerary: [
      {
        day: 1,
        title: "Arrival and Nawabi Food Context",
        summary: "Intro to Awadhi court cuisine and urban food geographies.",
        activities: ["Arrival", "Food lecture", "Market tasting"],
        thumbnail:
          "https://images.unsplash.com/photo-1619740455993-9e612b1af08f?auto=format&fit=crop&w=800&q=80",
      },
      {
        day: 2,
        title: "Technique Lab and Street Lineage",
        summary: "Hands-on workshop plus historical street food lineage mapping.",
        activities: ["Cooking lab", "Street trail", "Q and A"],
        thumbnail:
          "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80",
      },
      {
        day: 3,
        title: "Faizabad Flavor Archive",
        summary: "Regional variants and migration of royal food traditions.",
        activities: ["Road transfer", "Archive visit", "Dinner tasting"],
        thumbnail:
          "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
      },
      {
        day: 4,
        title: "Closing Lunch and Departure",
        summary: "Final menu curation session and departure.",
        activities: ["Closing lunch", "Certificates", "Departure"],
        thumbnail:
          "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    id: "mewar-siege-and-palace-trail",
    category: "Battlefields",
    title: "Mewar Siege and Palace Trail",
    location: "Chittorgarh, Udaipur",
    duration: "4 Days | 3 Nights",
    pricePerAdult: 26999,
    rating: 4.9,
    reviews: 90,
    groupOnly: true,
    groupSize: { min: 8, max: 16 },
    seatsLeft: 4,
    nextDeparture: "2026-03-30",
    heroImages: [
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1622808642875-0aa545482dfb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1624783910413-bf22acb8d347?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1622480916113-fd6cc59ea73d?auto=format&fit=crop&w=1200&q=80",
    ],
    guide: {
      name: "Major Veer Singh",
      title: "Siege Warfare Specialist | Mewar History",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80",
    },
    highlights: ["Chittorgarh siege studies", "Palace politics sessions", "Mewar resistance narratives"],
    exclusions: ["Flights", "Personal shopping", "Camera permits"],
    inclusions: commonInclusions,
    itinerary: [
      {
        day: 1,
        title: "Arrival and Mewar Context",
        summary: "Political and military context briefing for Mewar resistance history.",
        activities: ["Arrival", "Briefing", "Welcome dinner"],
        thumbnail:
          "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80",
      },
      {
        day: 2,
        title: "Chittorgarh Siege Topography",
        summary: "On-ground reading of gates, towers, and siege entry corridors.",
        activities: ["Fort circuit", "Tactical map review", "Evening reflection"],
        thumbnail:
          "https://images.unsplash.com/photo-1622808642875-0aa545482dfb?auto=format&fit=crop&w=800&q=80",
      },
      {
        day: 3,
        title: "Udaipur Court and Palace Layer",
        summary: "Interpret courtly strategy, administration, and architectural symbolism.",
        activities: ["Palace visit", "Archive reading", "Cultural dinner"],
        thumbnail:
          "https://images.unsplash.com/photo-1624783910413-bf22acb8d347?auto=format&fit=crop&w=800&q=80",
      },
      {
        day: 4,
        title: "Final Seminar and Departure",
        summary: "Closing seminar and departure transfer.",
        activities: ["Seminar", "Q and A", "Departure"],
        thumbnail:
          "https://images.unsplash.com/photo-1622480916113-fd6cc59ea73d?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
];

export function getExpeditionById(id) {
  return expeditions.find((expedition) => expedition.id === id) || expeditions[0];
}
