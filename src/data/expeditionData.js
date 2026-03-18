const commonInclusions = [
  { key: "stay", label: "Heritage Stay" },
  { key: "transit", label: "Inter-city Transit" },
  { key: "meals", label: "Curated Meals" },
  { key: "guide", label: "Expert Guide" },
];

export const expeditions = [
  {
    "id": "agumbe-rainforest-expedition",
    "category": "Rainforests",
    "title": "Agumbe Rainforest Expedition",
    "location": "Agumbe Rainforest",
    "duration": "4 Days | 3 Nights",
    "pricePerAdult": 23999,
    "rating": 4.6,
    "reviews": 48,
    "groupOnly": true,
    "groupSize": {
      "min": 8,
      "max": 16
    },
    "seatsLeft": 6,
    "nextDeparture": "2026-03-24",
    "heroImages": [
      "/assets/trips/agumbe-rainforest-expedition-1.jpg",
      "/assets/trips/agumbe-rainforest-expedition-2.jpg",
      "/assets/trips/agumbe-rainforest-expedition-3.jpg",
      "/assets/trips/agumbe-rainforest-expedition-4.jpg"
    ],
    "guide": {
      "name": "Aarav Menon",
      "title": "Local Expedition Lead",
      "avatar": "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=500&q=80"
    },
    "highlights": [
      "Rainforest canopy walks",
      "Monsoon biodiversity trails",
      "Local forest lore"
    ],
    "exclusions": [
      "Flights",
      "Personal expenses",
      "Travel insurance"
    ],
    "inclusions": [
      {
        "key": "stay",
        "label": "Heritage Stay"
      },
      {
        "key": "transit",
        "label": "Inter-city Transit"
      },
      {
        "key": "meals",
        "label": "Curated Meals"
      },
      {
        "key": "guide",
        "label": "Expert Guide"
      }
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival and Orientation",
        "summary": "Settle in with a welcome briefing and local orientation walk. Rainforest hikes with biodiversity interpretation.",
        "activities": [
          "Arrival transfer",
          "Orientation walk",
          "Welcome dinner"
        ],
        "thumbnail": "/assets/trips/agumbe-rainforest-expedition-1.jpg"
      },
      {
        "day": 2,
        "title": "Signature Trails",
        "summary": "Explore the signature landscapes and key viewpoints for the region. Rainforest hikes with biodiversity interpretation.",
        "activities": [
          "Guided trail",
          "Scenic viewpoints",
          "Local tasting"
        ],
        "thumbnail": "/assets/trips/agumbe-rainforest-expedition-2.jpg"
      },
      {
        "day": 3,
        "title": "Culture and Markets",
        "summary": "Connect with local culture through markets and community stops. Rainforest hikes with biodiversity interpretation.",
        "activities": [
          "Market walk",
          "Culture stop",
          "Evening debrief"
        ],
        "thumbnail": "/assets/trips/agumbe-rainforest-expedition-3.jpg"
      },
      {
        "day": 4,
        "title": "Closing and Departure",
        "summary": "Wrap up with a closing circle and departure transfer. Rainforest hikes with biodiversity interpretation.",
        "activities": [
          "Reflection circle",
          "Packing",
          "Departure"
        ],
        "thumbnail": "/assets/trips/agumbe-rainforest-expedition-4.jpg"
      }
    ]
  },
  {
    "id": "alleppey-houseboat-experience",
    "category": "Backwaters",
    "title": "Alleppey Houseboat Experience",
    "location": "Alleppey Houseboat",
    "duration": "3 Days | 2 Nights",
    "pricePerAdult": 18999,
    "rating": 4.7,
    "reviews": 53,
    "groupOnly": true,
    "groupSize": {
      "min": 8,
      "max": 16
    },
    "seatsLeft": 7,
    "nextDeparture": "2026-03-28",
    "heroImages": [
      "/assets/trips/alleppey-houseboat-experience-1.jpg",
      "/assets/trips/alleppey-houseboat-experience-2.jpg",
      "/assets/trips/alleppey-houseboat-experience-3.jpg",
      "/assets/trips/alleppey-houseboat-experience-4.jpg"
    ],
    "guide": {
      "name": "Priya Nair",
      "title": "Heritage and Nature Guide",
      "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80"
    },
    "highlights": [
      "Traditional houseboat stay",
      "Backwater village cruise",
      "Sunset lagoon views"
    ],
    "exclusions": [
      "Flights",
      "Personal expenses",
      "Travel insurance"
    ],
    "inclusions": [
      {
        "key": "stay",
        "label": "Heritage Stay"
      },
      {
        "key": "transit",
        "label": "Inter-city Transit"
      },
      {
        "key": "meals",
        "label": "Curated Meals"
      },
      {
        "key": "guide",
        "label": "Expert Guide"
      }
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival and Orientation",
        "summary": "Settle in with a welcome briefing and local orientation walk. Houseboat cruising, lagoon stops, and village life experiences.",
        "activities": [
          "Arrival transfer",
          "Orientation walk",
          "Welcome dinner"
        ],
        "thumbnail": "/assets/trips/alleppey-houseboat-experience-1.jpg"
      },
      {
        "day": 2,
        "title": "Signature Trails",
        "summary": "Explore the signature landscapes and key viewpoints for the region. Houseboat cruising, lagoon stops, and village life experiences.",
        "activities": [
          "Guided trail",
          "Scenic viewpoints",
          "Local tasting"
        ],
        "thumbnail": "/assets/trips/alleppey-houseboat-experience-2.jpg"
      },
      {
        "day": 3,
        "title": "Culture and Markets",
        "summary": "Connect with local culture through markets and community stops. Houseboat cruising, lagoon stops, and village life experiences.",
        "activities": [
          "Market walk",
          "Culture stop",
          "Evening debrief"
        ],
        "thumbnail": "/assets/trips/alleppey-houseboat-experience-3.jpg"
      }
    ]
  },
  {
    "id": "araku-valley-andhra-pradesh",
    "category": "Hill Stations",
    "title": "Araku Valley (Andhra Pradesh)",
    "location": "Andhra Pradesh",
    "duration": "4 Days | 3 Nights",
    "pricePerAdult": 23999,
    "rating": 4.8,
    "reviews": 58,
    "groupOnly": true,
    "groupSize": {
      "min": 8,
      "max": 16
    },
    "seatsLeft": 8,
    "nextDeparture": "2026-04-01",
      "heroImages": [
        "/assets/trips/araku-valley-andhra-pradesh-0.jpg",
        "/assets/trips/araku-valley-andhra-pradesh-1.jpg",
        "/assets/trips/araku-valley-andhra-pradesh-2.jpg",
        "/assets/trips/araku-valley-andhra-pradesh-3.webp"
      ],
    "guide": {
      "name": "Kabir Rao",
      "title": "Landscape Storyteller",
      "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80"
    },
    "highlights": [
      "Hill station viewpoints",
      "Local market trails",
      "Heritage walk-throughs"
    ],
    "exclusions": [
      "Flights",
      "Personal expenses",
      "Travel insurance"
    ],
    "inclusions": [
      {
        "key": "stay",
        "label": "Heritage Stay"
      },
      {
        "key": "transit",
        "label": "Inter-city Transit"
      },
      {
        "key": "meals",
        "label": "Curated Meals"
      },
      {
        "key": "guide",
        "label": "Expert Guide"
      }
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival and Orientation",
        "summary": "Settle in with a welcome briefing and local orientation walk. Hill station trails, viewpoints, and local heritage stops.",
        "activities": [
          "Arrival transfer",
          "Orientation walk",
          "Welcome dinner"
        ],
        "thumbnail": "/assets/trips/araku-valley-andhra-pradesh-1.jpg"
      },
      {
        "day": 2,
        "title": "Signature Trails",
        "summary": "Explore the signature landscapes and key viewpoints for the region. Hill station trails, viewpoints, and local heritage stops.",
        "activities": [
          "Guided trail",
          "Scenic viewpoints",
          "Local tasting"
        ],
        "thumbnail": "/assets/trips/araku-valley-andhra-pradesh-2.jpg"
      },
      {
        "day": 3,
        "title": "Culture and Markets",
        "summary": "Connect with local culture through markets and community stops. Hill station trails, viewpoints, and local heritage stops.",
        "activities": [
          "Market walk",
          "Culture stop",
          "Evening debrief"
        ],
        "thumbnail": "/assets/trips/araku-valley-andhra-pradesh-3.webp"
      },
      {
        "day": 4,
        "title": "Closing and Departure",
        "summary": "Wrap up with a closing circle and departure transfer. Hill station trails, viewpoints, and local heritage stops.",
        "activities": [
          "Reflection circle",
          "Packing",
          "Departure"
        ],
        "thumbnail": "/assets/trips/araku-valley-andhra-pradesh-4.webp"
      }
    ]
  },
  {
    "id": "chikmagalur-karnataka",
    "category": "Hill Stations",
    "title": "Chikmagalur (Karnataka)",
    "location": "Karnataka",
    "duration": "4 Days | 3 Nights",
    "pricePerAdult": 23999,
    "rating": 4.9,
    "reviews": 63,
    "groupOnly": true,
    "groupSize": {
      "min": 8,
      "max": 16
    },
    "seatsLeft": 9,
    "nextDeparture": "2026-04-05",
    "heroImages": [
      "/assets/trips/chikmagalur-karnataka-1.jpg",
      "/assets/trips/chikmagalur-karnataka-2.webp",
      "/assets/trips/chikmagalur-karnataka-3.jpg",
      "/assets/trips/chikmagalur-karnataka-4.jpg"
    ],
    "guide": {
      "name": "Meera Kulkarni",
      "title": "Trail Naturalist",
      "avatar": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=500&q=80"
    },
    "highlights": [
      "Hill station viewpoints",
      "Local market trails",
      "Heritage walk-throughs"
    ],
    "exclusions": [
      "Flights",
      "Personal expenses",
      "Travel insurance"
    ],
    "inclusions": [
      {
        "key": "stay",
        "label": "Heritage Stay"
      },
      {
        "key": "transit",
        "label": "Inter-city Transit"
      },
      {
        "key": "meals",
        "label": "Curated Meals"
      },
      {
        "key": "guide",
        "label": "Expert Guide"
      }
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival and Orientation",
        "summary": "Settle in with a welcome briefing and local orientation walk. Hill station trails, viewpoints, and local heritage stops.",
        "activities": [
          "Arrival transfer",
          "Orientation walk",
          "Welcome dinner"
        ],
        "thumbnail": "/assets/trips/chikmagalur-karnataka-1.jpg"
      },
      {
        "day": 2,
        "title": "Signature Trails",
        "summary": "Explore the signature landscapes and key viewpoints for the region. Hill station trails, viewpoints, and local heritage stops.",
        "activities": [
          "Guided trail",
          "Scenic viewpoints",
          "Local tasting"
        ],
        "thumbnail": "/assets/trips/chikmagalur-karnataka-2.webp"
      },
      {
        "day": 3,
        "title": "Culture and Markets",
        "summary": "Connect with local culture through markets and community stops. Hill station trails, viewpoints, and local heritage stops.",
        "activities": [
          "Market walk",
          "Culture stop",
          "Evening debrief"
        ],
        "thumbnail": "/assets/trips/chikmagalur-karnataka-3.jpg"
      },
      {
        "day": 4,
        "title": "Closing and Departure",
        "summary": "Wrap up with a closing circle and departure transfer. Hill station trails, viewpoints, and local heritage stops.",
        "activities": [
          "Reflection circle",
          "Packing",
          "Departure"
        ],
        "thumbnail": "/assets/trips/chikmagalur-karnataka-4.jpg"
      }
    ]
  },
  {
    "id": "chikmagalur-sakleshpur-road-trip",
    "category": "Road Trips",
    "title": "Chikmagalur + Sakleshpur Road Trip",
    "location": "Chikmagalur, Sakleshpur Road Trip",
    "duration": "5 Days | 4 Nights",
    "pricePerAdult": 29999,
    "rating": 4.6,
    "reviews": 68,
    "groupOnly": true,
    "groupSize": {
      "min": 8,
      "max": 18
    },
    "seatsLeft": 10,
    "nextDeparture": "2026-04-09",
    "heroImages": [
      "/assets/trips/chikmagalur-sakleshpur-road-trip-1.jpg",
      "/assets/trips/chikmagalur-sakleshpur-road-trip-2.jpg",
      "/assets/trips/chikmagalur-sakleshpur-road-trip-3.jpg",
      "/assets/trips/chikmagalur-sakleshpur-road-trip-4.jpg"
    ],
    "guide": {
      "name": "Rohan Pillai",
      "title": "Community Guide",
      "avatar": "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=500&q=80"
    },
    "highlights": [
      "Scenic ghat drives",
      "Coffee and spice estates",
      "Hilltop sunset stops"
    ],
    "exclusions": [
      "Flights",
      "Personal expenses",
      "Travel insurance"
    ],
    "inclusions": [
      {
        "key": "stay",
        "label": "Heritage Stay"
      },
      {
        "key": "transit",
        "label": "Inter-city Transit"
      },
      {
        "key": "meals",
        "label": "Curated Meals"
      },
      {
        "key": "guide",
        "label": "Expert Guide"
      }
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival and Orientation",
        "summary": "Settle in with a welcome briefing and local orientation walk. Longer scenic drives and estate visits.",
        "activities": [
          "Arrival transfer",
          "Orientation walk",
          "Welcome dinner"
        ],
        "thumbnail": "/assets/trips/chikmagalur-sakleshpur-road-trip-1.jpg"
      },
      {
        "day": 2,
        "title": "Signature Trails",
        "summary": "Explore the signature landscapes and key viewpoints for the region. Longer scenic drives and estate visits.",
        "activities": [
          "Guided trail",
          "Scenic viewpoints",
          "Local tasting"
        ],
        "thumbnail": "/assets/trips/chikmagalur-sakleshpur-road-trip-2.jpg"
      },
      {
        "day": 3,
        "title": "Culture and Markets",
        "summary": "Connect with local culture through markets and community stops. Longer scenic drives and estate visits.",
        "activities": [
          "Market walk",
          "Culture stop",
          "Evening debrief"
        ],
        "thumbnail": "/assets/trips/chikmagalur-sakleshpur-road-trip-3.jpg"
      },
      {
        "day": 4,
        "title": "Closing and Departure",
        "summary": "Wrap up with a closing circle and departure transfer. Longer scenic drives and estate visits.",
        "activities": [
          "Reflection circle",
          "Packing",
          "Departure"
        ],
        "thumbnail": "/assets/trips/chikmagalur-sakleshpur-road-trip-4.jpg"
      },
      {
        "day": 5,
        "title": "Road Trip Circuit",
        "summary": "Extended drive through scenic corridors and estate roads. Longer scenic drives and estate visits.",
        "activities": [
          "Scenic drive",
          "Estate stop",
          "Sunset viewpoint"
        ],
        "thumbnail": "/assets/trips/chikmagalur-sakleshpur-road-trip-1.jpg"
      }
    ]
  },
  {
    "id": "coonoor-ooty-circuit",
    "category": "Hill Stations",
    "title": "Coonoor + Ooty Circuit",
    "location": "Coonoor, Ooty Circuit",
    "duration": "5 Days | 4 Nights",
    "pricePerAdult": 29999,
    "rating": 4.7,
    "reviews": 73,
    "groupOnly": true,
    "groupSize": {
      "min": 8,
      "max": 16
    },
    "seatsLeft": 11,
    "nextDeparture": "2026-04-13",
    "heroImages": [
      "/assets/trips/coonoor-ooty-circuit-1.jpg",
      "/assets/trips/coonoor-ooty-circuit-2.jpg",
      "/assets/trips/coonoor-ooty-circuit-3.jpg",
      "/assets/trips/coonoor-ooty-circuit-4.jpg"
    ],
    "guide": {
      "name": "Sneha Varma",
      "title": "Eco-tour Facilitator",
      "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80"
    },
    "highlights": [
      "Hill station viewpoints",
      "Local market trails",
      "Heritage walk-throughs"
    ],
    "exclusions": [
      "Flights",
      "Personal expenses",
      "Travel insurance"
    ],
    "inclusions": [
      {
        "key": "stay",
        "label": "Heritage Stay"
      },
      {
        "key": "transit",
        "label": "Inter-city Transit"
      },
      {
        "key": "meals",
        "label": "Curated Meals"
      },
      {
        "key": "guide",
        "label": "Expert Guide"
      }
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival and Orientation",
        "summary": "Settle in with a welcome briefing and local orientation walk. Hill station trails, viewpoints, and local heritage stops.",
        "activities": [
          "Arrival transfer",
          "Orientation walk",
          "Welcome dinner"
        ],
        "thumbnail": "/assets/trips/coonoor-ooty-circuit-1.jpg"
      },
      {
        "day": 2,
        "title": "Signature Trails",
        "summary": "Explore the signature landscapes and key viewpoints for the region. Hill station trails, viewpoints, and local heritage stops.",
        "activities": [
          "Guided trail",
          "Scenic viewpoints",
          "Local tasting"
        ],
        "thumbnail": "/assets/trips/coonoor-ooty-circuit-2.jpg"
      },
      {
        "day": 3,
        "title": "Culture and Markets",
        "summary": "Connect with local culture through markets and community stops. Hill station trails, viewpoints, and local heritage stops.",
        "activities": [
          "Market walk",
          "Culture stop",
          "Evening debrief"
        ],
        "thumbnail": "/assets/trips/coonoor-ooty-circuit-3.jpg"
      },
      {
        "day": 4,
        "title": "Closing and Departure",
        "summary": "Wrap up with a closing circle and departure transfer. Hill station trails, viewpoints, and local heritage stops.",
        "activities": [
          "Reflection circle",
          "Packing",
          "Departure"
        ],
        "thumbnail": "/assets/trips/coonoor-ooty-circuit-4.jpg"
      },
      {
        "day": 5,
        "title": "Road Trip Circuit",
        "summary": "Extended drive through scenic corridors and estate roads. Hill station trails, viewpoints, and local heritage stops.",
        "activities": [
          "Scenic drive",
          "Estate stop",
          "Sunset viewpoint"
        ],
        "thumbnail": "/assets/trips/coonoor-ooty-circuit-1.jpg"
      }
    ]
  },
  {
    "id": "coorg-karnataka",
    "category": "Hill Stations",
    "title": "Coorg (Karnataka)",
    "location": "Karnataka",
    "duration": "4 Days | 3 Nights",
    "pricePerAdult": 23999,
    "rating": 4.8,
    "reviews": 78,
    "groupOnly": true,
    "groupSize": {
      "min": 8,
      "max": 16
    },
    "seatsLeft": 12,
    "nextDeparture": "2026-04-17",
    "heroImages": [
      "/assets/trips/coorg-karnataka-1.jpg",
      "/assets/trips/coorg-karnataka-2.jpg",
      "/assets/trips/coorg-karnataka-3.jpg",
      "/assets/trips/coorg-karnataka-4.jpg"
    ],
    "guide": {
      "name": "Aarav Menon",
      "title": "Local Expedition Lead",
      "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80"
    },
    "highlights": [
      "Hill station viewpoints",
      "Local market trails",
      "Heritage walk-throughs"
    ],
    "exclusions": [
      "Flights",
      "Personal expenses",
      "Travel insurance"
    ],
    "inclusions": [
      {
        "key": "stay",
        "label": "Heritage Stay"
      },
      {
        "key": "transit",
        "label": "Inter-city Transit"
      },
      {
        "key": "meals",
        "label": "Curated Meals"
      },
      {
        "key": "guide",
        "label": "Expert Guide"
      }
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival and Orientation",
        "summary": "Settle in with a welcome briefing and local orientation walk. Hill station trails, viewpoints, and local heritage stops.",
        "activities": [
          "Arrival transfer",
          "Orientation walk",
          "Welcome dinner"
        ],
        "thumbnail": "/assets/trips/coorg-karnataka-1.jpg"
      },
      {
        "day": 2,
        "title": "Signature Trails",
        "summary": "Explore the signature landscapes and key viewpoints for the region. Hill station trails, viewpoints, and local heritage stops.",
        "activities": [
          "Guided trail",
          "Scenic viewpoints",
          "Local tasting"
        ],
        "thumbnail": "/assets/trips/coorg-karnataka-2.jpg"
      },
      {
        "day": 3,
        "title": "Culture and Markets",
        "summary": "Connect with local culture through markets and community stops. Hill station trails, viewpoints, and local heritage stops.",
        "activities": [
          "Market walk",
          "Culture stop",
          "Evening debrief"
        ],
        "thumbnail": "/assets/trips/coorg-karnataka-3.jpg"
      },
      {
        "day": 4,
        "title": "Closing and Departure",
        "summary": "Wrap up with a closing circle and departure transfer. Hill station trails, viewpoints, and local heritage stops.",
        "activities": [
          "Reflection circle",
          "Packing",
          "Departure"
        ],
        "thumbnail": "/assets/trips/coorg-karnataka-4.jpg"
      }
    ]
  },
  {
    "id": "gokarna-karnataka",
    "category": "Coastal",
    "title": "Gokarna (Karnataka)",
    "location": "Karnataka",
    "duration": "4 Days | 3 Nights",
    "pricePerAdult": 23999,
    "rating": 4.9,
    "reviews": 83,
    "groupOnly": true,
    "groupSize": {
      "min": 8,
      "max": 16
    },
    "seatsLeft": 6,
    "nextDeparture": "2026-04-21",
    "heroImages": [
      "/assets/trips/gokarna-karnataka-1.jpg",
      "/assets/trips/gokarna-karnataka-2.jpg",
      "/assets/trips/gokarna-karnataka-3.jpg",
      "/assets/trips/gokarna-karnataka-4.jpg"
    ],
    "guide": {
      "name": "Priya Nair",
      "title": "Heritage and Nature Guide",
      "avatar": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=500&q=80"
    },
    "highlights": [
      "Cliffside viewpoints",
      "Beach and temple visits",
      "Coastal cuisine trails"
    ],
    "exclusions": [
      "Flights",
      "Personal expenses",
      "Travel insurance"
    ],
    "inclusions": [
      {
        "key": "stay",
        "label": "Heritage Stay"
      },
      {
        "key": "transit",
        "label": "Inter-city Transit"
      },
      {
        "key": "meals",
        "label": "Curated Meals"
      },
      {
        "key": "guide",
        "label": "Expert Guide"
      }
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival and Orientation",
        "summary": "Settle in with a welcome briefing and local orientation walk. Beach and cliff walks with coastal culture insights.",
        "activities": [
          "Arrival transfer",
          "Orientation walk",
          "Welcome dinner"
        ],
        "thumbnail": "/assets/trips/gokarna-karnataka-1.jpg"
      },
      {
        "day": 2,
        "title": "Signature Trails",
        "summary": "Explore the signature landscapes and key viewpoints for the region. Beach and cliff walks with coastal culture insights.",
        "activities": [
          "Guided trail",
          "Scenic viewpoints",
          "Local tasting"
        ],
        "thumbnail": "/assets/trips/gokarna-karnataka-2.jpg"
      },
      {
        "day": 3,
        "title": "Culture and Markets",
        "summary": "Connect with local culture through markets and community stops. Beach and cliff walks with coastal culture insights.",
        "activities": [
          "Market walk",
          "Culture stop",
          "Evening debrief"
        ],
        "thumbnail": "/assets/trips/gokarna-karnataka-3.jpg"
      },
      {
        "day": 4,
        "title": "Closing and Departure",
        "summary": "Wrap up with a closing circle and departure transfer. Beach and cliff walks with coastal culture insights.",
        "activities": [
          "Reflection circle",
          "Packing",
          "Departure"
        ],
        "thumbnail": "/assets/trips/gokarna-karnataka-4.jpg"
      }
    ]
  },
  {
    "id": "horsley-hills-mini-hill-station",
    "category": "Hill Stations",
    "title": "Horsley Hills Mini Hill Station",
    "location": "Horsley Hills",
    "duration": "3 Days | 2 Nights",
    "pricePerAdult": 18999,
    "rating": 4.6,
    "reviews": 88,
    "groupOnly": true,
    "groupSize": {
      "min": 8,
      "max": 16
    },
    "seatsLeft": 7,
    "nextDeparture": "2026-04-25",
    "heroImages": [
      "/assets/trips/horsley-hills-mini-hill-station-1.jpg",
      "/assets/trips/horsley-hills-mini-hill-station-2.webp",
      "/assets/trips/horsley-hills-mini-hill-station-3.avif",
      "/assets/trips/horsley-hills-mini-hill-station-4.jpg"
    ],
    "guide": {
      "name": "Kabir Rao",
      "title": "Landscape Storyteller",
      "avatar": "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=500&q=80"
    },
    "highlights": [
      "Hill station viewpoints",
      "Local market trails",
      "Heritage walk-throughs"
    ],
    "exclusions": [
      "Flights",
      "Personal expenses",
      "Travel insurance"
    ],
    "inclusions": [
      {
        "key": "stay",
        "label": "Heritage Stay"
      },
      {
        "key": "transit",
        "label": "Inter-city Transit"
      },
      {
        "key": "meals",
        "label": "Curated Meals"
      },
      {
        "key": "guide",
        "label": "Expert Guide"
      }
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival and Orientation",
        "summary": "Settle in with a welcome briefing and local orientation walk. Hill station trails, viewpoints, and local heritage stops.",
        "activities": [
          "Arrival transfer",
          "Orientation walk",
          "Welcome dinner"
        ],
        "thumbnail": "/assets/trips/horsley-hills-mini-hill-station-1.jpg"
      },
      {
        "day": 2,
        "title": "Signature Trails",
        "summary": "Explore the signature landscapes and key viewpoints for the region. Hill station trails, viewpoints, and local heritage stops.",
        "activities": [
          "Guided trail",
          "Scenic viewpoints",
          "Local tasting"
        ],
        "thumbnail": "/assets/trips/horsley-hills-mini-hill-station-2.webp"
      },
      {
        "day": 3,
        "title": "Culture and Markets",
        "summary": "Connect with local culture through markets and community stops. Hill station trails, viewpoints, and local heritage stops.",
        "activities": [
          "Market walk",
          "Culture stop",
          "Evening debrief"
        ],
        "thumbnail": "/assets/trips/horsley-hills-mini-hill-station-3.avif"
      }
    ]
  },
  {
    "id": "kabini-jungle-safari-trip",
    "category": "Wildlife",
    "title": "Kabini Jungle Safari Trip",
    "location": "Kabini Jungle Safari",
    "duration": "3 Days | 2 Nights",
    "pricePerAdult": 18999,
    "rating": 4.7,
    "reviews": 93,
    "groupOnly": true,
    "groupSize": {
      "min": 6,
      "max": 12
    },
    "seatsLeft": 8,
    "nextDeparture": "2026-04-29",
    "heroImages": [
      "/assets/trips/kabini-jungle-safari-trip-1.jpeg",
      "/assets/trips/kabini-jungle-safari-trip-2.jpg",
      "/assets/trips/kabini-jungle-safari-trip-3.jpeg",
      "/assets/trips/kabini-jungle-safari-trip-4.webp"
    ],
    "guide": {
      "name": "Meera Kulkarni",
      "title": "Trail Naturalist",
      "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80"
    },
    "highlights": [
      "Safari drives",
      "Forest interpretation walks",
      "Birding and lake views"
    ],
    "exclusions": [
      "Flights",
      "Personal expenses",
      "Travel insurance"
    ],
    "inclusions": [
      {
        "key": "stay",
        "label": "Heritage Stay"
      },
      {
        "key": "transit",
        "label": "Inter-city Transit"
      },
      {
        "key": "meals",
        "label": "Curated Meals"
      },
      {
        "key": "guide",
        "label": "Expert Guide"
      }
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival and Orientation",
        "summary": "Settle in with a welcome briefing and local orientation walk. Safari drives, wildlife spotting, and forest edge trails.",
        "activities": [
          "Arrival transfer",
          "Orientation walk",
          "Welcome dinner"
        ],
        "thumbnail": "/assets/trips/kabini-jungle-safari-trip-1.jpeg"
      },
      {
        "day": 2,
        "title": "Signature Trails",
        "summary": "Explore the signature landscapes and key viewpoints for the region. Safari drives, wildlife spotting, and forest edge trails.",
        "activities": [
          "Guided trail",
          "Scenic viewpoints",
          "Local tasting"
        ],
        "thumbnail": "/assets/trips/kabini-jungle-safari-trip-2.jpg"
      },
      {
        "day": 3,
        "title": "Culture and Markets",
        "summary": "Connect with local culture through markets and community stops. Safari drives, wildlife spotting, and forest edge trails.",
        "activities": [
          "Market walk",
          "Culture stop",
          "Evening debrief"
        ],
        "thumbnail": "/assets/trips/kabini-jungle-safari-trip-3.jpeg"
      }
    ]
  },
  {
    "id": "kodaikanal-tamil-nadu",
    "category": "Hill Stations",
    "title": "Kodaikanal (Tamil Nadu)",
    "location": "Tamil Nadu",
    "duration": "4 Days | 3 Nights",
    "pricePerAdult": 23999,
    "rating": 4.8,
    "reviews": 98,
    "groupOnly": true,
    "groupSize": {
      "min": 8,
      "max": 16
    },
    "seatsLeft": 9,
    "nextDeparture": "2026-05-03",
    "heroImages": [
      "/assets/trips/kodaikanal-tamil-nadu-1.jpg",
      "/assets/trips/kodaikanal-tamil-nadu-2.jpg",
      "/assets/trips/kodaikanal-tamil-nadu-3.jpg",
      "/assets/trips/kodaikanal-tamil-nadu-4.jpg"
    ],
    "guide": {
      "name": "Rohan Pillai",
      "title": "Community Guide",
      "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80"
    },
    "highlights": [
      "Hill station viewpoints",
      "Local market trails",
      "Heritage walk-throughs"
    ],
    "exclusions": [
      "Flights",
      "Personal expenses",
      "Travel insurance"
    ],
    "inclusions": [
      {
        "key": "stay",
        "label": "Heritage Stay"
      },
      {
        "key": "transit",
        "label": "Inter-city Transit"
      },
      {
        "key": "meals",
        "label": "Curated Meals"
      },
      {
        "key": "guide",
        "label": "Expert Guide"
      }
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival and Orientation",
        "summary": "Settle in with a welcome briefing and local orientation walk. Hill station trails, viewpoints, and local heritage stops.",
        "activities": [
          "Arrival transfer",
          "Orientation walk",
          "Welcome dinner"
        ],
        "thumbnail": "/assets/trips/kodaikanal-tamil-nadu-1.jpg"
      },
      {
        "day": 2,
        "title": "Signature Trails",
        "summary": "Explore the signature landscapes and key viewpoints for the region. Hill station trails, viewpoints, and local heritage stops.",
        "activities": [
          "Guided trail",
          "Scenic viewpoints",
          "Local tasting"
        ],
        "thumbnail": "/assets/trips/kodaikanal-tamil-nadu-2.jpg"
      },
      {
        "day": 3,
        "title": "Culture and Markets",
        "summary": "Connect with local culture through markets and community stops. Hill station trails, viewpoints, and local heritage stops.",
        "activities": [
          "Market walk",
          "Culture stop",
          "Evening debrief"
        ],
        "thumbnail": "/assets/trips/kodaikanal-tamil-nadu-3.jpg"
      },
      {
        "day": 4,
        "title": "Closing and Departure",
        "summary": "Wrap up with a closing circle and departure transfer. Hill station trails, viewpoints, and local heritage stops.",
        "activities": [
          "Reflection circle",
          "Packing",
          "Departure"
        ],
        "thumbnail": "/assets/trips/kodaikanal-tamil-nadu-4.jpg"
      }
    ]
  },
  {
    "id": "munnar-kerala",
    "category": "Hill Stations",
    "title": "Munnar (Kerala)",
    "location": "Kerala",
    "duration": "4 Days | 3 Nights",
    "pricePerAdult": 23999,
    "rating": 4.9,
    "reviews": 103,
    "groupOnly": true,
    "groupSize": {
      "min": 8,
      "max": 16
    },
    "seatsLeft": 10,
    "nextDeparture": "2026-05-07",
    "heroImages": [
      "/assets/trips/munnar-kerala-1.jpg",
      "/assets/trips/munnar-kerala-2.jpg",
      "/assets/trips/munnar-kerala-3.jpg",
      "/assets/trips/munnar-kerala-4.jpg"
    ],
    "guide": {
      "name": "Sneha Varma",
      "title": "Eco-tour Facilitator",
      "avatar": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=500&q=80"
    },
    "highlights": [
      "Hill station viewpoints",
      "Local market trails",
      "Heritage walk-throughs"
    ],
    "exclusions": [
      "Flights",
      "Personal expenses",
      "Travel insurance"
    ],
    "inclusions": [
      {
        "key": "stay",
        "label": "Heritage Stay"
      },
      {
        "key": "transit",
        "label": "Inter-city Transit"
      },
      {
        "key": "meals",
        "label": "Curated Meals"
      },
      {
        "key": "guide",
        "label": "Expert Guide"
      }
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival and Orientation",
        "summary": "Settle in with a welcome briefing and local orientation walk. Hill station trails, viewpoints, and local heritage stops.",
        "activities": [
          "Arrival transfer",
          "Orientation walk",
          "Welcome dinner"
        ],
        "thumbnail": "/assets/trips/munnar-kerala-1.jpg"
      },
      {
        "day": 2,
        "title": "Signature Trails",
        "summary": "Explore the signature landscapes and key viewpoints for the region. Hill station trails, viewpoints, and local heritage stops.",
        "activities": [
          "Guided trail",
          "Scenic viewpoints",
          "Local tasting"
        ],
        "thumbnail": "/assets/trips/munnar-kerala-2.jpg"
      },
      {
        "day": 3,
        "title": "Culture and Markets",
        "summary": "Connect with local culture through markets and community stops. Hill station trails, viewpoints, and local heritage stops.",
        "activities": [
          "Market walk",
          "Culture stop",
          "Evening debrief"
        ],
        "thumbnail": "/assets/trips/munnar-kerala-3.jpg"
      },
      {
        "day": 4,
        "title": "Closing and Departure",
        "summary": "Wrap up with a closing circle and departure transfer. Hill station trails, viewpoints, and local heritage stops.",
        "activities": [
          "Reflection circle",
          "Packing",
          "Departure"
        ],
        "thumbnail": "/assets/trips/munnar-kerala-4.jpg"
      }
    ]
  },
  {
    "id": "ooty-tamil-nadu",
    "category": "Hill Stations",
    "title": "Ooty (Tamil Nadu)",
    "location": "Tamil Nadu",
    "duration": "4 Days | 3 Nights",
    "pricePerAdult": 23999,
    "rating": 4.6,
    "reviews": 108,
    "groupOnly": true,
    "groupSize": {
      "min": 8,
      "max": 16
    },
    "seatsLeft": 11,
    "nextDeparture": "2026-05-11",
    "heroImages": [
      "/assets/trips/ooty-tamil-nadu-1.jpg",
      "/assets/trips/ooty-tamil-nadu-2.jpg",
      "/assets/trips/ooty-tamil-nadu-3.jpg",
      "/assets/trips/ooty-tamil-nadu-4.jpg"
    ],
    "guide": {
      "name": "Aarav Menon",
      "title": "Local Expedition Lead",
      "avatar": "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=500&q=80"
    },
    "highlights": [
      "Hill station viewpoints",
      "Local market trails",
      "Heritage walk-throughs"
    ],
    "exclusions": [
      "Flights",
      "Personal expenses",
      "Travel insurance"
    ],
    "inclusions": [
      {
        "key": "stay",
        "label": "Heritage Stay"
      },
      {
        "key": "transit",
        "label": "Inter-city Transit"
      },
      {
        "key": "meals",
        "label": "Curated Meals"
      },
      {
        "key": "guide",
        "label": "Expert Guide"
      }
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival and Orientation",
        "summary": "Settle in with a welcome briefing and local orientation walk. Hill station trails, viewpoints, and local heritage stops.",
        "activities": [
          "Arrival transfer",
          "Orientation walk",
          "Welcome dinner"
        ],
        "thumbnail": "/assets/trips/ooty-tamil-nadu-1.jpg"
      },
      {
        "day": 2,
        "title": "Signature Trails",
        "summary": "Explore the signature landscapes and key viewpoints for the region. Hill station trails, viewpoints, and local heritage stops.",
        "activities": [
          "Guided trail",
          "Scenic viewpoints",
          "Local tasting"
        ],
        "thumbnail": "/assets/trips/ooty-tamil-nadu-2.jpg"
      },
      {
        "day": 3,
        "title": "Culture and Markets",
        "summary": "Connect with local culture through markets and community stops. Hill station trails, viewpoints, and local heritage stops.",
        "activities": [
          "Market walk",
          "Culture stop",
          "Evening debrief"
        ],
        "thumbnail": "/assets/trips/ooty-tamil-nadu-3.jpg"
      },
      {
        "day": 4,
        "title": "Closing and Departure",
        "summary": "Wrap up with a closing circle and departure transfer. Hill station trails, viewpoints, and local heritage stops.",
        "activities": [
          "Reflection circle",
          "Packing",
          "Departure"
        ],
        "thumbnail": "/assets/trips/ooty-tamil-nadu-4.jpg"
      }
    ]
  },
  {
    "id": "thekkady-kerala",
    "category": "Wildlife",
    "title": "Thekkady (Kerala)",
    "location": "Kerala",
    "duration": "4 Days | 3 Nights",
    "pricePerAdult": 23999,
    "rating": 4.7,
    "reviews": 113,
    "groupOnly": true,
    "groupSize": {
      "min": 6,
      "max": 12
    },
    "seatsLeft": 12,
    "nextDeparture": "2026-05-15",
    "heroImages": [
      "/assets/trips/thekkady-kerala-1.jpg",
      "/assets/trips/thekkady-kerala-2.jpeg",
      "/assets/trips/thekkady-kerala-3.webp",
      "/assets/trips/thekkady-kerala-4.avif"
    ],
    "guide": {
      "name": "Priya Nair",
      "title": "Heritage and Nature Guide",
      "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80"
    },
    "highlights": [
      "Safari drives",
      "Forest interpretation walks",
      "Birding and lake views"
    ],
    "exclusions": [
      "Flights",
      "Personal expenses",
      "Travel insurance"
    ],
    "inclusions": [
      {
        "key": "stay",
        "label": "Heritage Stay"
      },
      {
        "key": "transit",
        "label": "Inter-city Transit"
      },
      {
        "key": "meals",
        "label": "Curated Meals"
      },
      {
        "key": "guide",
        "label": "Expert Guide"
      }
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival and Orientation",
        "summary": "Settle in with a welcome briefing and local orientation walk. Safari drives, wildlife spotting, and forest edge trails.",
        "activities": [
          "Arrival transfer",
          "Orientation walk",
          "Welcome dinner"
        ],
        "thumbnail": "/assets/trips/thekkady-kerala-1.jpg"
      },
      {
        "day": 2,
        "title": "Signature Trails",
        "summary": "Explore the signature landscapes and key viewpoints for the region. Safari drives, wildlife spotting, and forest edge trails.",
        "activities": [
          "Guided trail",
          "Scenic viewpoints",
          "Local tasting"
        ],
        "thumbnail": "/assets/trips/thekkady-kerala-2.jpeg"
      },
      {
        "day": 3,
        "title": "Culture and Markets",
        "summary": "Connect with local culture through markets and community stops. Safari drives, wildlife spotting, and forest edge trails.",
        "activities": [
          "Market walk",
          "Culture stop",
          "Evening debrief"
        ],
        "thumbnail": "/assets/trips/thekkady-kerala-3.webp"
      },
      {
        "day": 4,
        "title": "Closing and Departure",
        "summary": "Wrap up with a closing circle and departure transfer. Safari drives, wildlife spotting, and forest edge trails.",
        "activities": [
          "Reflection circle",
          "Packing",
          "Departure"
        ],
        "thumbnail": "/assets/trips/thekkady-kerala-4.avif"
      }
    ]
  },
  {
    "id": "udupi-murudeshwar-coastal-trip",
    "category": "Coastal",
    "title": "Udupi + Murudeshwar Coastal Trip",
    "location": "Udupi, Murudeshwar Coastal Trip",
    "duration": "4 Days | 3 Nights",
    "pricePerAdult": 23999,
    "rating": 4.8,
    "reviews": 118,
    "groupOnly": true,
    "groupSize": {
      "min": 8,
      "max": 16
    },
    "seatsLeft": 6,
    "nextDeparture": "2026-05-19",
    "heroImages": [
      "/assets/trips/udupi-murudeshwar-coastal-trip-1.jpg",
      "/assets/trips/udupi-murudeshwar-coastal-trip-2.jpg",
      "/assets/trips/udupi-murudeshwar-coastal-trip-3.jpg",
      "/assets/trips/udupi-murudeshwar-coastal-trip-4.jpg"
    ],
    "guide": {
      "name": "Kabir Rao",
      "title": "Landscape Storyteller",
      "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80"
    },
    "highlights": [
      "Cliffside viewpoints",
      "Beach and temple visits",
      "Coastal cuisine trails"
    ],
    "exclusions": [
      "Flights",
      "Personal expenses",
      "Travel insurance"
    ],
    "inclusions": [
      {
        "key": "stay",
        "label": "Heritage Stay"
      },
      {
        "key": "transit",
        "label": "Inter-city Transit"
      },
      {
        "key": "meals",
        "label": "Curated Meals"
      },
      {
        "key": "guide",
        "label": "Expert Guide"
      }
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival and Orientation",
        "summary": "Settle in with a welcome briefing and local orientation walk. Beach and cliff walks with coastal culture insights.",
        "activities": [
          "Arrival transfer",
          "Orientation walk",
          "Welcome dinner"
        ],
        "thumbnail": "/assets/trips/udupi-murudeshwar-coastal-trip-1.jpg"
      },
      {
        "day": 2,
        "title": "Signature Trails",
        "summary": "Explore the signature landscapes and key viewpoints for the region. Beach and cliff walks with coastal culture insights.",
        "activities": [
          "Guided trail",
          "Scenic viewpoints",
          "Local tasting"
        ],
        "thumbnail": "/assets/trips/udupi-murudeshwar-coastal-trip-2.jpg"
      },
      {
        "day": 3,
        "title": "Culture and Markets",
        "summary": "Connect with local culture through markets and community stops. Beach and cliff walks with coastal culture insights.",
        "activities": [
          "Market walk",
          "Culture stop",
          "Evening debrief"
        ],
        "thumbnail": "/assets/trips/udupi-murudeshwar-coastal-trip-3.jpg"
      },
      {
        "day": 4,
        "title": "Closing and Departure",
        "summary": "Wrap up with a closing circle and departure transfer. Beach and cliff walks with coastal culture insights.",
        "activities": [
          "Reflection circle",
          "Packing",
          "Departure"
        ],
        "thumbnail": "/assets/trips/udupi-murudeshwar-coastal-trip-4.jpg"
      }
    ]
  },
  {
    "id": "valparai-hidden-hills-expedition",
    "category": "Hill Stations",
    "title": "Valparai Hidden Hills Expedition",
    "location": "Valparai Hidden Hills",
    "duration": "4 Days | 3 Nights",
    "pricePerAdult": 23999,
    "rating": 4.9,
    "reviews": 123,
    "groupOnly": true,
    "groupSize": {
      "min": 8,
      "max": 16
    },
    "seatsLeft": 7,
    "nextDeparture": "2026-05-23",
    "heroImages": [
      "/assets/trips/valparai-hidden-hills-expedition-1.jpg",
      "/assets/trips/valparai-hidden-hills-expedition-2.jpg",
      "/assets/trips/valparai-hidden-hills-expedition-3.jpg",
      "/assets/trips/valparai-hidden-hills-expedition-4.jpg"
    ],
    "guide": {
      "name": "Meera Kulkarni",
      "title": "Trail Naturalist",
      "avatar": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=500&q=80"
    },
    "highlights": [
      "Hill station viewpoints",
      "Local market trails",
      "Heritage walk-throughs"
    ],
    "exclusions": [
      "Flights",
      "Personal expenses",
      "Travel insurance"
    ],
    "inclusions": [
      {
        "key": "stay",
        "label": "Heritage Stay"
      },
      {
        "key": "transit",
        "label": "Inter-city Transit"
      },
      {
        "key": "meals",
        "label": "Curated Meals"
      },
      {
        "key": "guide",
        "label": "Expert Guide"
      }
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival and Orientation",
        "summary": "Settle in with a welcome briefing and local orientation walk. Hill station trails, viewpoints, and local heritage stops.",
        "activities": [
          "Arrival transfer",
          "Orientation walk",
          "Welcome dinner"
        ],
        "thumbnail": "/assets/trips/valparai-hidden-hills-expedition-1.jpg"
      },
      {
        "day": 2,
        "title": "Signature Trails",
        "summary": "Explore the signature landscapes and key viewpoints for the region. Hill station trails, viewpoints, and local heritage stops.",
        "activities": [
          "Guided trail",
          "Scenic viewpoints",
          "Local tasting"
        ],
        "thumbnail": "/assets/trips/valparai-hidden-hills-expedition-2.jpg"
      },
      {
        "day": 3,
        "title": "Culture and Markets",
        "summary": "Connect with local culture through markets and community stops. Hill station trails, viewpoints, and local heritage stops.",
        "activities": [
          "Market walk",
          "Culture stop",
          "Evening debrief"
        ],
        "thumbnail": "/assets/trips/valparai-hidden-hills-expedition-3.jpg"
      },
      {
        "day": 4,
        "title": "Closing and Departure",
        "summary": "Wrap up with a closing circle and departure transfer. Hill station trails, viewpoints, and local heritage stops.",
        "activities": [
          "Reflection circle",
          "Packing",
          "Departure"
        ],
        "thumbnail": "/assets/trips/valparai-hidden-hills-expedition-4.jpg"
      }
    ]
  },
  {
    "id": "varkala-cliff-beach-retreat",
    "category": "Coastal",
    "title": "Varkala Cliff & Beach Retreat",
    "location": "Varkala Cliff & Beach",
    "duration": "3 Days | 2 Nights",
    "pricePerAdult": 18999,
    "rating": 4.6,
    "reviews": 128,
    "groupOnly": true,
    "groupSize": {
      "min": 8,
      "max": 16
    },
    "seatsLeft": 8,
    "nextDeparture": "2026-05-27",
    "heroImages": [
      "/assets/trips/varkala-cliff-beach-retreat-1.jpg",
      "/assets/trips/varkala-cliff-beach-retreat-2.jpg",
      "/assets/trips/varkala-cliff-beach-retreat-3.jpg",
      "/assets/trips/varkala-cliff-beach-retreat-4.jpg"
    ],
    "guide": {
      "name": "Rohan Pillai",
      "title": "Community Guide",
      "avatar": "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=500&q=80"
    },
    "highlights": [
      "Cliffside viewpoints",
      "Beach and temple visits",
      "Coastal cuisine trails"
    ],
    "exclusions": [
      "Flights",
      "Personal expenses",
      "Travel insurance"
    ],
    "inclusions": [
      {
        "key": "stay",
        "label": "Heritage Stay"
      },
      {
        "key": "transit",
        "label": "Inter-city Transit"
      },
      {
        "key": "meals",
        "label": "Curated Meals"
      },
      {
        "key": "guide",
        "label": "Expert Guide"
      }
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival and Orientation",
        "summary": "Settle in with a welcome briefing and local orientation walk. Beach and cliff walks with coastal culture insights.",
        "activities": [
          "Arrival transfer",
          "Orientation walk",
          "Welcome dinner"
        ],
        "thumbnail": "/assets/trips/varkala-cliff-beach-retreat-1.jpg"
      },
      {
        "day": 2,
        "title": "Signature Trails",
        "summary": "Explore the signature landscapes and key viewpoints for the region. Beach and cliff walks with coastal culture insights.",
        "activities": [
          "Guided trail",
          "Scenic viewpoints",
          "Local tasting"
        ],
        "thumbnail": "/assets/trips/varkala-cliff-beach-retreat-2.jpg"
      },
      {
        "day": 3,
        "title": "Culture and Markets",
        "summary": "Connect with local culture through markets and community stops. Beach and cliff walks with coastal culture insights.",
        "activities": [
          "Market walk",
          "Culture stop",
          "Evening debrief"
        ],
        "thumbnail": "/assets/trips/varkala-cliff-beach-retreat-3.jpg"
      }
    ]
  },
  {
    "id": "wayanad-kerala",
    "category": "Hill Stations",
    "title": "Wayanad (Kerala)",
    "location": "Kerala",
    "duration": "4 Days | 3 Nights",
    "pricePerAdult": 23999,
    "rating": 4.7,
    "reviews": 133,
    "groupOnly": true,
    "groupSize": {
      "min": 8,
      "max": 16
    },
    "seatsLeft": 9,
    "nextDeparture": "2026-05-31",
    "heroImages": [
      "/assets/trips/wayanad-kerala-1.jpg",
      "/assets/trips/wayanad-kerala-2.jpg",
      "/assets/trips/wayanad-kerala-3.jpg",
      "/assets/trips/wayanad-kerala-4.jpg"
    ],
    "guide": {
      "name": "Sneha Varma",
      "title": "Eco-tour Facilitator",
      "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80"
    },
    "highlights": [
      "Hill station viewpoints",
      "Local market trails",
      "Heritage walk-throughs"
    ],
    "exclusions": [
      "Flights",
      "Personal expenses",
      "Travel insurance"
    ],
    "inclusions": [
      {
        "key": "stay",
        "label": "Heritage Stay"
      },
      {
        "key": "transit",
        "label": "Inter-city Transit"
      },
      {
        "key": "meals",
        "label": "Curated Meals"
      },
      {
        "key": "guide",
        "label": "Expert Guide"
      }
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival and Orientation",
        "summary": "Settle in with a welcome briefing and local orientation walk. Hill station trails, viewpoints, and local heritage stops.",
        "activities": [
          "Arrival transfer",
          "Orientation walk",
          "Welcome dinner"
        ],
        "thumbnail": "/assets/trips/wayanad-kerala-1.jpg"
      },
      {
        "day": 2,
        "title": "Signature Trails",
        "summary": "Explore the signature landscapes and key viewpoints for the region. Hill station trails, viewpoints, and local heritage stops.",
        "activities": [
          "Guided trail",
          "Scenic viewpoints",
          "Local tasting"
        ],
        "thumbnail": "/assets/trips/wayanad-kerala-2.jpg"
      },
      {
        "day": 3,
        "title": "Culture and Markets",
        "summary": "Connect with local culture through markets and community stops. Hill station trails, viewpoints, and local heritage stops.",
        "activities": [
          "Market walk",
          "Culture stop",
          "Evening debrief"
        ],
        "thumbnail": "/assets/trips/wayanad-kerala-3.jpg"
      },
      {
        "day": 4,
        "title": "Closing and Departure",
        "summary": "Wrap up with a closing circle and departure transfer. Hill station trails, viewpoints, and local heritage stops.",
        "activities": [
          "Reflection circle",
          "Packing",
          "Departure"
        ],
        "thumbnail": "/assets/trips/wayanad-kerala-4.jpg"
      }
    ]
  },
  {
    "id": "yelagiri-budget-hill-escape",
    "category": "Hill Stations",
    "title": "Yelagiri Budget Hill Escape",
    "location": "Yelagiri Budget Hill",
    "duration": "3 Days | 2 Nights",
    "pricePerAdult": 18999,
    "rating": 4.8,
    "reviews": 138,
    "groupOnly": true,
    "groupSize": {
      "min": 8,
      "max": 16
    },
    "seatsLeft": 10,
    "nextDeparture": "2026-06-04",
    "heroImages": [
      "/assets/trips/yelagiri-budget-hill-escape-1.jpg",
      "/assets/trips/yelagiri-budget-hill-escape-2.jpg",
      "/assets/trips/yelagiri-budget-hill-escape-3.jpg",
      "/assets/trips/yelagiri-budget-hill-escape-4.jpg"
    ],
    "guide": {
      "name": "Aarav Menon",
      "title": "Local Expedition Lead",
      "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80"
    },
    "highlights": [
      "Hill station viewpoints",
      "Local market trails",
      "Heritage walk-throughs"
    ],
    "exclusions": [
      "Flights",
      "Personal expenses",
      "Travel insurance"
    ],
    "inclusions": [
      {
        "key": "stay",
        "label": "Heritage Stay"
      },
      {
        "key": "transit",
        "label": "Inter-city Transit"
      },
      {
        "key": "meals",
        "label": "Curated Meals"
      },
      {
        "key": "guide",
        "label": "Expert Guide"
      }
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival and Orientation",
        "summary": "Settle in with a welcome briefing and local orientation walk. Hill station trails, viewpoints, and local heritage stops.",
        "activities": [
          "Arrival transfer",
          "Orientation walk",
          "Welcome dinner"
        ],
        "thumbnail": "/assets/trips/yelagiri-budget-hill-escape-1.jpg"
      },
      {
        "day": 2,
        "title": "Signature Trails",
        "summary": "Explore the signature landscapes and key viewpoints for the region. Hill station trails, viewpoints, and local heritage stops.",
        "activities": [
          "Guided trail",
          "Scenic viewpoints",
          "Local tasting"
        ],
        "thumbnail": "/assets/trips/yelagiri-budget-hill-escape-2.jpg"
      },
      {
        "day": 3,
        "title": "Culture and Markets",
        "summary": "Connect with local culture through markets and community stops. Hill station trails, viewpoints, and local heritage stops.",
        "activities": [
          "Market walk",
          "Culture stop",
          "Evening debrief"
        ],
        "thumbnail": "/assets/trips/yelagiri-budget-hill-escape-3.jpg"
      }
    ]
  },
  {
    "id": "yercaud-tamil-nadu",
    "category": "Hill Stations",
    "title": "Yercaud (Tamil Nadu)",
    "location": "Tamil Nadu",
    "duration": "4 Days | 3 Nights",
    "pricePerAdult": 23999,
    "rating": 4.9,
    "reviews": 143,
    "groupOnly": true,
    "groupSize": {
      "min": 8,
      "max": 16
    },
    "seatsLeft": 11,
    "nextDeparture": "2026-06-08",
    "heroImages": [
      "/assets/trips/yercaud-tamil-nadu-1.jpg",
      "/assets/trips/yercaud-tamil-nadu-2.jpg",
      "/assets/trips/yercaud-tamil-nadu-3.jpeg",
      "/assets/trips/yercaud-tamil-nadu-4.jpg"
    ],
    "guide": {
      "name": "Priya Nair",
      "title": "Heritage and Nature Guide",
      "avatar": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=500&q=80"
    },
    "highlights": [
      "Hill station viewpoints",
      "Local market trails",
      "Heritage walk-throughs"
    ],
    "exclusions": [
      "Flights",
      "Personal expenses",
      "Travel insurance"
    ],
    "inclusions": [
      {
        "key": "stay",
        "label": "Heritage Stay"
      },
      {
        "key": "transit",
        "label": "Inter-city Transit"
      },
      {
        "key": "meals",
        "label": "Curated Meals"
      },
      {
        "key": "guide",
        "label": "Expert Guide"
      }
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival and Orientation",
        "summary": "Settle in with a welcome briefing and local orientation walk. Hill station trails, viewpoints, and local heritage stops.",
        "activities": [
          "Arrival transfer",
          "Orientation walk",
          "Welcome dinner"
        ],
        "thumbnail": "/assets/trips/yercaud-tamil-nadu-1.jpg"
      },
      {
        "day": 2,
        "title": "Signature Trails",
        "summary": "Explore the signature landscapes and key viewpoints for the region. Hill station trails, viewpoints, and local heritage stops.",
        "activities": [
          "Guided trail",
          "Scenic viewpoints",
          "Local tasting"
        ],
        "thumbnail": "/assets/trips/yercaud-tamil-nadu-2.jpg"
      },
      {
        "day": 3,
        "title": "Culture and Markets",
        "summary": "Connect with local culture through markets and community stops. Hill station trails, viewpoints, and local heritage stops.",
        "activities": [
          "Market walk",
          "Culture stop",
          "Evening debrief"
        ],
        "thumbnail": "/assets/trips/yercaud-tamil-nadu-3.jpeg"
      },
      {
        "day": 4,
        "title": "Closing and Departure",
        "summary": "Wrap up with a closing circle and departure transfer. Hill station trails, viewpoints, and local heritage stops.",
        "activities": [
          "Reflection circle",
          "Packing",
          "Departure"
        ],
        "thumbnail": "/assets/trips/yercaud-tamil-nadu-4.jpg"
      }
    ]
  }
];

export function getExpeditionById(id) {
  return expeditions.find((expedition) => expedition.id === id) || expeditions[0];
}
