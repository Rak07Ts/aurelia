import { Stay, Destination, Experience, EditorialArticle } from '../types/dsf';

export const BRAND_INFO = {
  name: "AURELIA",
  tagline: "Places Worth Remembering",
  short_description: "A contemporary hospitality brand creating distinctive stays shaped by place, architecture, nature, culture, and wellbeing.",
  mission: "To create meaningful stays that connect people with places, culture, nature, and themselves.",
  values: [
    { title: "Respect for Place", desc: "Honoring architectural heritage, topography, indigenous materials, and cultural roots." },
    { title: "Tactile Restraint", desc: "Subtle luxury defined by natural stone, aged timber, warm linen, and silent spatial beauty." },
    { title: "Restorative Solitude", desc: "Spaces engineered for mental clarity, unhurried rituals, and deep rejuvenation." },
    { title: "Living Craft", desc: "Curated experiences hosted by master artisans, foragers, architects, and culinary poets." }
  ],
  stats: [
    { value: "14", label: "Global Sanctuaries" },
    { value: "99.4%", label: "Guest Solitude Rating" },
    { value: "100%", label: "Renewable & Organic Sourcing" },
    { value: "32", label: "Master Artisan Collaborations" }
  ]
};

export const DESTINATIONS: Destination[] = [
  {
    id: "dest-kyoto",
    slug: "kyoto-highlands",
    name: "Kyoto Highlands",
    country: "Japan",
    region: "Kansai",
    tagline: "Cedar forests, moss gardens, and meditative architectural sanctuaries.",
    description: "Nestled in the misty northern ridges of Kyoto, where centuries of Zen craftsmanship harmonize with silent cedar groves, thermal mountain springs, and contemplative tea pavilions.",
    story: {
      title: "Where Shadows Breathe and Cedar Sings",
      paragraphs: [
        "In the elevated valleys just beyond Kyoto's historic perimeter, silence takes on a physical texture. Here, the air smells of wet Hinoki wood, cold river stones, and burning mountain incense.",
        "AURELIA Kyoto Highlands was conceived as a non-intrusive dialogue with the surrounding forest. Ancient Japanese timber framing meets minimalist floor-to-ceiling glass, allowing the forest's changing light to become the interior decor."
      ],
      quote: "True luxury is the space to notice the slow falling of a maple leaf.",
      quote_author: "Kenjiro Sano, Resident Architect"
    },
    // High-res editorial architecture & misty mountain nature
    hero: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1528164344705-475426879c0d?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1200&auto=format&fit=crop"
    ],
    highlights: ["Natural Sukiya-style Onsen", "Wild Cedar Forest Pavilions", "Centuries-Old Tea Terroirs", "Private Mountain Monasteries"],
    seasonality: "Year-Round (Spectacular Spring Blossom & Autumn Maple Foliage)",
    climate: "Alpine Temperate / Mountain Forest",
    culture_note: "Centered on the Zen philosophy of Ma (negative space) and wabi-sabi.",
    map_coordinates: { lat: 35.0116, lng: 135.7681, zoom: 12 },
    stay_ids: ["stay-kyoto-onsen", "stay-arashiyama-sanctuary"],
    experience_ids: ["exp-tea-mastery", "exp-forest-zen-walk"],
    article_ids: ["art-the-craft-of-silence", "art-architecture-of-shadows"]
  },
  {
    id: "dest-tuscany",
    slug: "val-dorcia",
    name: "Val d'Orcia",
    country: "Italy",
    region: "Tuscany",
    tagline: "Rolling clay hills, travertine thermal waters, and timeless renaissance serenity.",
    description: "UNESCO-protected landscape of undulating golden hills, ancient olive terraces, travertine thermal baths, and stone bastides bathed in warm Mediterranean afternoon light.",
    story: {
      title: "Sculpted by Light, Stone, and Centuries",
      paragraphs: [
        "Val d'Orcia is not merely a landscape; it is a living Renaissance painting where human agriculture and natural topography have achieved perfect equilibrium.",
        "Here, AURELIA preserves medieval stone architecture with unadorned travertine, reclaimed oak beams, and contemporary glass interventions that honor the stillness of the valley."
      ],
      quote: "The landscape here does not shout. It settles into the pulse of your daily breath.",
      quote_author: "Elena Moretti, Master Vigneron"
    },
    hero: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?q=80&w=1200&auto=format&fit=crop"
    ],
    highlights: ["Natural Travertine Springs", "Historic Sangiovese Vineyards", "Artisan Olive Oil Presses", "Private Cooking Ateliers"],
    seasonality: "April through November (Harvest Season in Autumn)",
    climate: "Mediterranean Sub-Alpine",
    culture_note: "Grounded in agrarian craftsmanship, slow cooking, and Renaissance spatial balance.",
    map_coordinates: { lat: 43.0562, lng: 11.6042, zoom: 12 },
    stay_ids: ["stay-val-dorcia-estate", "stay-chianti-terrace"],
    experience_ids: ["exp-biodynamic-wine"],
    article_ids: ["art-materials-of-memory"]
  },
  {
    id: "dest-norway",
    slug: "norwegian-fjords",
    name: "Sunnmøre Fjords",
    country: "Norway",
    region: "Western Fjords",
    tagline: "Glacial waters, raw granite monoliths, and sublime Nordic quietude.",
    description: "A dramatic maritime sanctuary surrounded by thousand-meter waterfalls, black mirror waters, snow-capped peaks, and minimalist pine architecture perched on glacial granite.",
    story: {
      title: "The Elemental Edge of the World",
      paragraphs: [
        "In Sunnmøre, the scale of geological time dwarfs modern noise. The fjord waters are so still they reflect the jagged peaks like dark obsidian.",
        "Our cliffside pavilions blend charred spruce exterior siding with blonde ash interiors, massive wood stoves, and deep soaking tubs overlooking the Arctic twilight."
      ],
      quote: "When the fjord settles at dusk, silence becomes an audible presence.",
      quote_author: "Astrid Lindholm, Fjord Naturalist"
    },
    hero: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1200&auto=format&fit=crop"
    ],
    highlights: ["Private Fjord Kayak Launches", "Arctic Wood-Fired Saunas", "Wild Foraging Trails", "Glacier Panorama Decks"],
    seasonality: "Year-Round (Midnight Sun in Summer / Aurora Borealis in Winter)",
    climate: "Nordic Maritime Sub-Arctic",
    culture_note: "Embodying Friluftsliv (outdoor open-air living) and Nordic shelter craftsmanship.",
    map_coordinates: { lat: 62.1983, lng: 6.9892, zoom: 11 },
    stay_ids: ["stay-fjord-cliffside"],
    experience_ids: ["exp-arctic-sauna-ritual"],
    article_ids: ["art-the-craft-of-silence"]
  },
  {
    id: "dest-namibia",
    slug: "sossusvlei-sanctuary",
    name: "Namib Desert",
    country: "Namibia",
    region: "Hardap Region",
    tagline: "Crimson sand dunes, ancient clay pans, and profound celestial stillness.",
    description: "The world's oldest living desert, where terracotta dunes rise against indigo night skies, offering unmatched astronomical clarity, earthen architectural shelters, and restorative isolation.",
    story: {
      title: "The Architecture of Endless Horizon",
      paragraphs: [
        "Five million years of wind and iron-rich dust have sculpted Sossusvlei into an abstract earth sculpture.",
        "Constructed with rammed-earth walls that retain daytime coolness and radiate warmth during crisp desert nights, this sanctuary exists entirely off-grid without sacrificing sensory luxury."
      ],
      quote: "The desert strips away the superfluous until only pure perception remains.",
      quote_author: "Kobe Van Wyk, Astronomer & Host"
    },
    hero: "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=1200&auto=format&fit=crop"
    ],
    highlights: ["Dark Sky Astronomical Observatories", "Rammed-Earth Eco-Suites", "Private Dawn Balloon Expeditions", "Ancient Petroglyph Walks"],
    seasonality: "May through October (Cool desert winter days & crystal nights)",
    climate: "Hyper-Arid Continental",
    culture_note: "Designed with indigenous vernacular earth-building techniques and dark-sky preservation.",
    map_coordinates: { lat: -24.7271, lng: 15.3400, zoom: 11 },
    stay_ids: ["stay-namib-dunes"],
    experience_ids: ["exp-desert-stargazing"],
    article_ids: ["art-materials-of-memory"]
  },
  {
    id: "dest-greece",
    slug: "cyclades-serenity",
    name: "Cycladic Terraces",
    country: "Greece",
    region: "South Aegean",
    tagline: "Limewashed cubic stone, azure horizons, and Aegean wind-sculpted silence.",
    description: "Perched above untamed cliff edges away from tourist pathways, where hand-plastered white stone meets wild thyme, olive trees, and the deep cobalt of the Aegean Sea.",
    story: {
      title: "Sculpting the Mediterranean Wind",
      paragraphs: [
        "Far from commercial island ports, the southern Cycladic ridges preserve an ancient rhythm governed by wind, saltwater, and wild fig trees.",
        "AURELIA Cyclades embraces the organic sculptural lines of vernacular Aegean stonecraft, featuring shaded pergolas made of local chestnut, linen drapery, and private sea-facing infinity plunge pools."
      ],
      quote: "Stone, sun, sea. When these three align, the soul immediately unwinds.",
      quote_author: "Nikos Kazantzakis"
    },
    hero: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200&auto=format&fit=crop"
    ],
    highlights: ["Limestone Plunge Pools", "Cliffside Organic Herb Gardens", "Private Sailboat Anchorages", "Sunset Amphitheater"],
    seasonality: "May through October",
    climate: "Mediterranean Island Arid",
    culture_note: "Echoing the pure sculptural geometry of ancient Cycladic idols.",
    map_coordinates: { lat: 36.9744, lng: 25.1055, zoom: 12 },
    stay_ids: ["stay-cycladic-cliff"],
    experience_ids: [],
    article_ids: ["art-architecture-of-shadows"]
  },
  {
    id: "dest-morocco",
    slug: "atlas-foothills",
    name: "High Atlas Valley",
    country: "Morocco",
    region: "Marrakech-Safi",
    tagline: "Ancient clay kasbahs, terraced walnut groves, and snow-dusted Atlas peaks.",
    description: "A sanctuary in the Ourika valley, where centuries of Amazigh hospitality, raw tadelakt plaster, hand-knotted wool textiles, and fragrant citrus courtyards create an immersive sensory refuge.",
    story: {
      title: "The Earthen Heart of the Mountains",
      paragraphs: [
        "Hidden high above the bustling plains of Marrakech, the Atlas valleys retain their ancient terraced agriculture and stone-and-adobe hamlets.",
        "AURELIA High Atlas breathes life into an authentic 18th-century kasbah, featuring heated clay hammams, wood-burning fireplaces, and rooftop terraces overlooking snow-capped mountain crests."
      ],
      quote: "Hospitality in the mountains is not a luxury; it is a sacred human bond.",
      quote_author: "Malika Benali, Master Weaver"
    },
    hero: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1200&auto=format&fit=crop"
    ],
    highlights: ["Traditional Wood-Fired Hammam", "Terraced Organic Citrus Orchard", "Artisan Wool Weaving Studio", "Mountain Guide Explorations"],
    seasonality: "September through May",
    climate: "High Mountain Continental / Mediterranean",
    culture_note: "Rooted in authentic Amazigh community craft and restorative herbal medicine.",
    map_coordinates: { lat: 31.2589, lng: -7.7725, zoom: 12 },
    stay_ids: ["stay-atlas-kasbah"],
    experience_ids: ["exp-tadelakt-clay"],
    article_ids: ["art-materials-of-memory"]
  }
];

export const STAYS: Stay[] = [
  {
    id: "stay-kyoto-onsen",
    slug: "hinoki-sanctuary-onsen",
    name: "Hinoki Sanctuary & Onsen",
    short_description: "A restorative cedar retreat with private volcanic hot spring pavilions nestled in ancient Kyoto forest.",
    description: "Crafted entirely from sustainably harvested Japanese Hinoki cypress and black river stone, Hinoki Sanctuary is an architectural masterwork dedicated to deep physical and mental restoration. Features private indoor and open-air hot spring baths fed directly by volcanic mountain waters, minimalist Tatami living chambers, handcrafted paper Shoji screens, and private moss garden vistas.",
    architectural_concept: "Designed by Pritzker-laureate alumni following the Sukiya-zukuri tradition, seamlessly blending ancient post-and-beam timber engineering with floor-to-ceiling thermal glass walls that bring the cedar canopy into every living space.",
    location: {
      country: "Japan",
      region: "Kansai",
      city: "Kyoto Highlands",
      coordinates: { latitude: 35.0682, longitude: 135.7924 },
      climate: "Misty Mountain",
      bestSeason: "Autumn & Spring"
    },
    commercial: {
      price: 1450,
      currency: "USD",
      price_unit: "night"
    },
    availability: {
      status: "available",
      availableDates: ["2026-09-01", "2026-09-02", "2026-09-03", "2026-09-04", "2026-09-10", "2026-09-11"]
    },
    features: {
      guests: 4,
      bedrooms: 2,
      bathrooms: 2,
      area_sqm: 240,
      amenities: [
        "Private Volcanic Mineral Onsen (Indoor & Open-Air)",
        "Traditional Sukiya Tea Ceremony Pavilion",
        "Handcrafted Hinoki Wood Soaking Tub",
        "Dedicated Private Kaiseki Chef & Sommelier",
        "Heated Granite Floors & Minimalist Fireplace",
        "Private Moss Garden with Meditation Boulders",
        "Bang & Olufsen Acoustic Sound Architecture",
        "Organic Linen Kimonos & Cedar Spa Amenities",
        "High-Speed Fiber Connectivity & Dedicated Study",
        "EV Chauffeur Mountain Transfer"
      ],
      highlight_amenities: ["Private Volcanic Onsen", "Dedicated Kaiseki Chef", "Private Moss Garden"]
    },
    assets: {
      cover: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=1200&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1528164344705-475426879c0d?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1200&auto=format&fit=crop"
      ]
    },
    destination_id: "dest-kyoto",
    curation_notes: "Voted World's Best Restorative Sanctuary 2025. Unmatched serenity and botanical purity.",
    rating: 4.98,
    reviews_count: 42
  },
  {
    id: "stay-val-dorcia-estate",
    slug: "residenza-di-pietra",
    name: "Residenza di Pietra",
    short_description: "A 16th-century stone bastide transformed with raw travertine and panoramic views across Val d'Orcia.",
    description: "Standing atop a gentle crest lined with hundred-year cypress trees, Residenza di Pietra merges historical Tuscan stonework with restrained modernist interiors. Soaring beamed ceilings, unpolished travertine fireplaces, custom brass fixtures, and an infinity pool carved into local bedrock overlooking golden grain fields.",
    architectural_concept: "Meticulous restoration by Studio Architettura Toscana, preserving the original lime mortar walls while introducing recessed shadow lines, hidden radiant cooling, and continuous oak plank floors.",
    location: {
      country: "Italy",
      region: "Tuscany",
      city: "Pienza",
      coordinates: { latitude: 43.0768, longitude: 11.6789 },
      climate: "Sunny Mediterranean",
      bestSeason: "May to October"
    },
    commercial: {
      price: 1850,
      currency: "USD",
      price_unit: "night"
    },
    availability: {
      status: "available",
      availableDates: ["2026-09-05", "2026-09-06", "2026-09-07", "2026-09-08"]
    },
    features: {
      guests: 6,
      bedrooms: 3,
      bathrooms: 3,
      area_sqm: 360,
      amenities: [
        "Bedrock-Carved Heated Travertine Infinity Pool",
        "Private Biodynamic Vineyard & Wine Cellar",
        "Wood-Fired Pizza & Bread Oven in Stone Courtyard",
        "Complimentary Alfa Romeo Classic Spider for Local Tours",
        "Daily Farm-to-Table Tuscan Breakfast by Estate Cook",
        "Shaded Pergola Dining for 12 with Valley Views",
        "Open-Air Travertine Soaking Tubs",
        "Professional Chef Kitchen with La Cornue Range"
      ],
      highlight_amenities: ["Travertine Infinity Pool", "Private Wine Cellar", "Classic Alfa Romeo"]
    },
    assets: {
      cover: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1200&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop"
      ]
    },
    destination_id: "dest-tuscany",
    curation_notes: "Features our most extensive private reserve of rare Brunello di Montalcino vintages.",
    rating: 4.96,
    reviews_count: 38
  },
  {
    id: "stay-fjord-cliffside",
    slug: "norwegian-fjord-pavilion",
    name: "Sunnmøre Fjord Pavilion",
    short_description: "A cantilevered charred-timber shelter floating above deep glacial waters with private Arctic sauna.",
    description: "Perched dramatically on sheer granite rock over Sunnmøre fjord, this architectural sanctuary provides uninterrupted immersion into Arctic wilderness. Featuring charred Shou Sugi Ban exterior cladding, double-glazed panoramic glass facade, wood-burning stove, and a private path descending to a floating wood-fired sauna.",
    architectural_concept: "Designed to minimize ecological footprint using pin-foundation steel stilts anchored into granite, leaving the surrounding lichen and birch untouched.",
    location: {
      country: "Norway",
      region: "Western Fjords",
      city: "Stranda",
      coordinates: { latitude: 62.2154, longitude: 6.9452 },
      climate: "Crisp Sub-Arctic",
      bestSeason: "Year-Round"
    },
    commercial: {
      price: 1200,
      currency: "USD",
      price_unit: "night"
    },
    availability: {
      status: "limited",
      availableDates: ["2026-09-15", "2026-09-16", "2026-09-17"]
    },
    features: {
      guests: 2,
      bedrooms: 1,
      bathrooms: 1,
      area_sqm: 140,
      amenities: [
        "Floating Wood-Fired Pine Sauna with Fjord Plunge Ladder",
        "Panoramic Fjord-Facing King Bed with Wool Linens",
        "Stuv Suspended Cast Iron Wood Stove",
        "Private Cedar Hot Tub on Cantilevered Deck",
        "Two Handcrafted Sea Kayaks with Expedition Gear",
        "Custom Nordic Vinyl Listening Station & Curated Collection",
        "Heated Slate Bathroom Floors with Rain Shower"
      ],
      highlight_amenities: ["Floating Fjord Sauna", "Panoramic Cantilever Deck", "Wood-Fired Stove"]
    },
    assets: {
      cover: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop"
      ]
    },
    destination_id: "dest-norway",
    curation_notes: "A sanctuary of profound acoustic silence. No roads, access via electric boat.",
    rating: 4.99,
    reviews_count: 51
  },
  {
    id: "stay-namib-dunes",
    slug: "namib-desert-observatory",
    name: "Sossusvlei Earth Lodge",
    short_description: "An off-grid rammed-earth sanctuary with private star-bed pavilion beneath International Dark Sky reserves.",
    description: "Constructed with earth extracted directly from the surrounding desert basin, Sossusvlei Earth Lodge disappears into the terracotta landscape. Features retractable skylights for sleeping beneath the celestial cosmos, private plunge pools shaded by ironwood canopies, and research-grade telescopes.",
    architectural_concept: "Passive thermal mass engineering keeping interior temperatures naturally regulated between 20°C and 22°C without artificial air conditioning.",
    location: {
      country: "Namibia",
      region: "Hardap",
      city: "Sossusvlei",
      coordinates: { latitude: -24.7431, longitude: 15.3621 },
      climate: "Arid Desert",
      bestSeason: "May to October"
    },
    commercial: {
      price: 1650,
      currency: "USD",
      price_unit: "night"
    },
    availability: {
      status: "available",
      availableDates: ["2026-09-08", "2026-09-09", "2026-09-10", "2026-09-11"]
    },
    features: {
      guests: 4,
      bedrooms: 2,
      bathrooms: 2,
      area_sqm: 280,
      amenities: [
        "Rooftop Stargazing Bed with Motorized Retractable Canopy",
        "Shaded Desert Spring Plunge Pool",
        "Schmidt-Cassegrain 14-inch Astrophotography Telescope",
        "Private Electric 4x4 Safari Vehicle with Guide",
        "Solar-Powered Thermal Control & Water Desalination",
        "Dusk Wine & Astronomy Lounge with Fire Pit",
        "Raw Linen Furnishings & Hand-Carved Mopane Wood Details"
      ],
      highlight_amenities: ["Rooftop Star-Bed", "Private Electric 4x4", "Astrophotography Telescope"]
    },
    assets: {
      cover: "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?q=80&w=1200&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1200&auto=format&fit=crop"
      ]
    },
    destination_id: "dest-namibia",
    curation_notes: "Zero light pollution rating (Bortle Class 1). Unparalleled deep-space viewing.",
    rating: 4.97,
    reviews_count: 29
  },
  {
    id: "stay-cycladic-cliff",
    slug: "cycladic-terrace-villa",
    name: "Aura Cycladic Villa",
    short_description: "A sculptural limewashed cliff villa with infinity saltwater pool overlooking the Aegean horizon.",
    description: "Carved organically into the coastal rock of the Southern Cyclades, Aura Villa embodies sculptural Aegean minimalism. Fluid white plastered corridors, hand-poured microcement floors, open-air stone courtyards, and an expansive infinity pool that blurs into the sapphire sea.",
    architectural_concept: "Inspired by the organic contours of traditional island cave dwellings, optimizing natural sea breeze ventilation and framing dramatic sunset perspectives.",
    location: {
      country: "Greece",
      region: "Cyclades",
      city: "Folegandros Coast",
      coordinates: { latitude: 36.6214, longitude: 24.9124 },
      climate: "Aegean Mediterranean",
      bestSeason: "May to October"
    },
    commercial: {
      price: 1350,
      currency: "USD",
      price_unit: "night"
    },
    availability: {
      status: "available",
      availableDates: ["2026-09-02", "2026-09-03", "2026-09-04", "2026-09-05"]
    },
    features: {
      guests: 4,
      bedrooms: 2,
      bathrooms: 2,
      area_sqm: 210,
      amenities: [
        "Private Aegean-Facing Saltwater Infinity Pool",
        "Handcrafted Microcement Outdoor Dining Pavilion",
        "Private Direct Sea Access Path & Swimming Platform",
        "Organic Herb & Fig Garden with Daily Harvest",
        "Built-in Plaster Daybeds with Custom Sunbrella Linens",
        "Dusk Cocktail & Meze Service on Sunset Terrace"
      ],
      highlight_amenities: ["Saltwater Infinity Pool", "Direct Sea Access", "Organic Herb Garden"]
    },
    assets: {
      cover: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1200&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop"
      ]
    },
    destination_id: "dest-greece",
    curation_notes: "Private mooring available for yachts up to 45 meters.",
    rating: 4.95,
    reviews_count: 34
  },
  {
    id: "stay-atlas-kasbah",
    slug: "kasbah-de-la-vallee",
    name: "Kasbah de la Vallée",
    short_description: "An authentic 18th-century earthen kasbah restored with tadelakt plaster, private hammam, and Atlas views.",
    description: "Surrounded by ancient walnut groves and irrigated mountain terraces, this restored earthen stronghold combines raw Amazigh heritage with sophisticated modern luxury. Warm terracotta tiles, hand-carved cedar doors, flickering firepits, and an authentic wood-heated marble hammam.",
    architectural_concept: "Restored in collaboration with master Moroccan craftsmen (Maâlems) using authentic clay, straw, olive oil soap, and pigment-rich egg-yolk tadelakt.",
    location: {
      country: "Morocco",
      region: "Marrakech-Safi",
      city: "Ourika Valley",
      coordinates: { latitude: 31.2842, longitude: -7.7812 },
      climate: "Mountain Warm",
      bestSeason: "September to May"
    },
    commercial: {
      price: 980,
      currency: "USD",
      price_unit: "night"
    },
    availability: {
      status: "available",
      availableDates: ["2026-09-01", "2026-09-02", "2026-09-03", "2026-09-04"]
    },
    features: {
      guests: 6,
      bedrooms: 3,
      bathrooms: 3,
      area_sqm: 320,
      amenities: [
        "Private Marble Wood-Fired Hammam & Eucalyptus Steam Room",
        "Heated Courtyard Pool with Hand-Cut Zellige Tiles",
        "Rooftop Stargazing Lounge with Mountain Panorama",
        "Traditional Clay Fireplace in Each Suite",
        "Private Berber Gastronomy Workshop with Resident Cook",
        "Hand-Knotted Organic Wool Berber Carpets Throughout"
      ],
      highlight_amenities: ["Private Marble Hammam", "Heated Zellige Pool", "Rooftop Stargazing Lounge"]
    },
    assets: {
      cover: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?q=80&w=1200&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1200&auto=format&fit=crop"
      ]
    },
    destination_id: "dest-morocco",
    curation_notes: "A sanctuary of rich sensory textures, spiced tea rituals, and acoustic calm.",
    rating: 4.94,
    reviews_count: 27
  },
  {
    id: "stay-arashiyama-sanctuary",
    slug: "arashiyama-bamboo-retreat",
    name: "Arashiyama Bamboo Retreat",
    short_description: "A private riverside pavilion enveloped by towering bamboo groves and historic stone gardens.",
    description: "Located along the serene upper reaches of the Oi River, Arashiyama Bamboo Retreat offers an intimate sanctuary where the wind through bamboo creates a continuous natural symphony. Features private open-air cedar onsen baths, master-crafted Shoji screens, and antique lacquered furnishings.",
    architectural_concept: "Designed to frame natural water and bamboo movements through horizontal aperture windows, creating shifting artistic compositions throughout the day.",
    location: {
      country: "Japan",
      region: "Kansai",
      city: "Kyoto Arashiyama",
      coordinates: { latitude: 35.0165, longitude: 135.6712 },
      climate: "Temperate",
      bestSeason: "Year-Round"
    },
    commercial: {
      price: 1300,
      currency: "USD",
      price_unit: "night"
    },
    availability: {
      status: "available",
      availableDates: ["2026-09-07", "2026-09-08", "2026-09-09"]
    },
    features: {
      guests: 3,
      bedrooms: 1,
      bathrooms: 1,
      area_sqm: 160,
      amenities: [
        "Open-Air Cedar Onsen Overlooking River Valley",
        "Private Bamboo Garden Path with Night Lanterns",
        "Daily Traditional Tea Ritual with Master Urasenke",
        "Antique Wooden Boat for Private Sunrise River Drifts",
        "Underfloor Radiant Heating & Cedar Aromatherapy"
      ],
      highlight_amenities: ["Open-Air River Onsen", "Private Sunrise Boat", "Master Tea Ritual"]
    },
    assets: {
      cover: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=1200&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=1200&auto=format&fit=crop"
      ]
    },
    destination_id: "dest-kyoto",
    curation_notes: "Direct private river launch access for sunrise meditations.",
    rating: 4.97,
    reviews_count: 31
  },
  {
    id: "stay-chianti-terrace",
    slug: "chianti-olive-sanctuary",
    name: "Sanctuary of the Olive Grove",
    short_description: "An elevated terracotta estate surrounded by certified organic olive groves and centuries-old oaks.",
    description: "Overlooking the golden hills between Siena and Florence, this quiet stone sanctuary combines rural simplicity with Michelin-calibre culinary facilities, heated natural pool, and curated art collection.",
    architectural_concept: "Seamless integration of traditional Tuscan terracotta tiling and rough-hewn stone with floor-to-ceiling iron-framed glass arches.",
    location: {
      country: "Italy",
      region: "Tuscany",
      city: "Castellina in Chianti",
      coordinates: { latitude: 43.4721, longitude: 11.2854 },
      climate: "Mediterranean",
      bestSeason: "April to November"
    },
    commercial: {
      price: 1550,
      currency: "USD",
      price_unit: "night"
    },
    availability: {
      status: "available",
      availableDates: ["2026-09-12", "2026-09-13", "2026-09-14"]
    },
    features: {
      guests: 4,
      bedrooms: 2,
      bathrooms: 2,
      area_sqm: 230,
      amenities: [
        "Private 15m Heated Swimming Pool in Olive Grove",
        "Cold-Press Olive Oil Tasting Room & Private Mill Access",
        "Outdoor Cinema Screen under Summer Stars",
        "Bespoke Italian Kitchen with Private Estate Sommelier"
      ],
      highlight_amenities: ["15m Heated Pool", "Private Olive Mill Access", "Outdoor Cinema"]
    },
    assets: {
      cover: "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?q=80&w=1200&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1200&auto=format&fit=crop"
      ]
    },
    destination_id: "dest-tuscany",
    curation_notes: "Produces our signature estate extra virgin olive oil.",
    rating: 4.93,
    reviews_count: 22
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "exp-tea-mastery",
    slug: "the-way-of-tea-mastery",
    name: "The Way of Tea & Mindful Architecture",
    tagline: "An intimate 4-hour immersion into centuries-old Chanoyu ritual inside a private 17th-century mountain teahouse.",
    description: "Guided by a 14th-generation tea master, discover the profound relationship between Japanese tea aesthetics, Zen spatial philosophy, and architectural minimalism. Includes preparation of rare single-estate Uji matcha and seasonal wagashi confections.",
    long_description: "Step across ancient moss stepping stones into a protected tea pavilion built in 1640. You will learn the silent choreography of boiling mountain spring water, whisking ceremonial-grade matcha, and appreciating the wabi-sabi imperfections of handmade Raku tea bowls.",
    category: "Cultural Rituals",
    duration: "4 Hours",
    group_size: "Max 4 Guests",
    price: 380,
    currency: "USD",
    hero: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1514733670139-4d87a1941d55?q=80&w=1200&auto=format&fit=crop"
    ],
    host: {
      name: "Master Soun Sen",
      role: "14th-Gen Tea Master, Urasenke School",
      bio: "Practicing Chanoyu for over 45 years, Master Sen specializes in the spiritual geometry of tea architecture and meditative presence.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
    },
    itinerary: [
      { time: "09:00", title: "Moss Path Purifying Walk", description: "Mindful walking meditation through private highland cedar paths to the hidden tea pavilion." },
      { time: "10:00", title: "The Spatial Philosophy of Ma", description: "Discourse on light, shadow, and architectural minimalism in traditional teahouse construction." },
      { time: "11:00", title: "Ceremonial Matcha Preparation", description: "Hands-on whisking of vintage Uji matcha using 200-year-old iron kettles and rare Raku bowls." },
      { time: "12:30", title: "Contemplative Reflection", description: "Silent tea and handcrafted seasonal wagashi confections." }
    ],
    destination_id: "dest-kyoto",
    related_stay_ids: ["stay-kyoto-onsen", "stay-arashiyama-sanctuary"]
  },
  {
    id: "exp-biodynamic-wine",
    slug: "val-dorcia-terroir-odyssey",
    name: "Tuscan Terroir & Biodynamic Wine Odyssey",
    tagline: "A private journey through ancient volcanic vineyards, subterranean cellars, and a 6-course vineyard lunch.",
    description: "Explore the ancient clay soils of Montalcino and Montepulciano with our head agronomist. Learn the celestial calendar of biodynamic viticulture and taste rare library vintages directly from 5,000-liter Slavonian oak casks.",
    long_description: "Walk the terraced slopes where Sangiovese vines dig deep into limestone. Experience barrel tastings accompanied by aged Pecorino di Pienza, followed by an unhurried multi-course outdoor feast in the heart of the vineyard.",
    category: "Gastronomy & Wine",
    duration: "Full Day (6 Hours)",
    group_size: "Max 6 Guests",
    price: 490,
    currency: "USD",
    hero: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1200&auto=format&fit=crop",
    host: {
      name: "Dr. Matteo Ricci",
      role: "Biodynamic Viticulturist & Sommelier",
      bio: "Dedicated to reviving indigenous Tuscan clones and natural vinification techniques for over two decades.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
    },
    itinerary: [
      { time: "10:30", title: "Vineyard Walk & Soil Philosophy", description: "Exploring clay strata, wild cover crops, and regenerative viticulture." },
      { time: "12:00", title: "Underground Cask Tastings", description: "Direct barrel sampling of unreleased Brunello riserva vintages." },
      { time: "13:30", title: "Al Fresco Vineyard Luncheon", description: "6-course seasonal Tuscan menu prepared over open olive wood fires." }
    ],
    destination_id: "dest-tuscany",
    related_stay_ids: ["stay-val-dorcia-estate", "stay-chianti-terrace"]
  },
  {
    id: "exp-arctic-sauna-ritual",
    slug: "nordic-thermal-revival",
    name: "Sunnmøre Arctic Thermal Ritual & Fjord Plunge",
    tagline: "A guided 3-hour Nordic contrast therapy ritual combining wild birch whisking, essential pine oils, and glacial plunges.",
    description: "Guided by a certified Nordic sauna master, experience the profound restorative benefits of extreme heat followed by invigorating glacial fjord immersion, culminating in herbal herbal infusions by the fire.",
    long_description: "Feel your circulation awaken as the heat of the wood stove radiates through local pine and river stones. Step directly from 90°C warmth into the crisp 8°C glacial fjord, breathing in the purest maritime mountain air.",
    category: "Wellness & Thermal",
    duration: "3 Hours",
    group_size: "Private",
    price: 320,
    currency: "USD",
    hero: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
    host: {
      name: "Solveig Møller",
      role: "Nordic Sauna Master & Physiologist",
      bio: "Expert in Scandinavian thermal contrast therapy and traditional herbal steam infusion rituals.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
    },
    destination_id: "dest-norway",
    related_stay_ids: ["stay-fjord-cliffside"]
  },
  {
    id: "exp-desert-stargazing",
    slug: "deep-space-desert-astronomy",
    name: "Namib Celestial Deep-Space Exploration",
    tagline: "Nighttime astronomical exploration under the Southern Hemisphere's clearest Bortle-1 dark sky reserve.",
    description: "Guided by a resident astrophysicist, discover the Magellanic Clouds, Saturn's rings, and distant nebulae using our 14-inch Schmidt-Cassegrain telescope while reclined on heated desert daybeds with spiced rooibos elixirs.",
    category: "Nature & Solitude",
    duration: "3.5 Hours",
    group_size: "Max 4 Guests",
    price: 290,
    currency: "USD",
    hero: "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?q=80&w=1200&auto=format&fit=crop",
    host: {
      name: "Prof. Johan Steyn",
      role: "Observational Astronomer",
      bio: "Former observatory director leading dark-sky conservation across Southern Africa.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
    },
    destination_id: "dest-namibia",
    related_stay_ids: ["stay-namib-dunes"]
  },
  {
    id: "exp-tadelakt-clay",
    slug: "moroccan-tadelakt-masterclass",
    name: "Atlas Master Tadelakt & Earthen Craft",
    tagline: "Learn the thousand-year-old art of waterproof limestone plaster from a master artisan in the Ourika valley.",
    description: "Work with raw High Atlas limestone, natural earth pigments, river stones, and black olive soap to create your own sculptural polished vessel using techniques unchanged since the 11th century.",
    category: "Craft & Architecture",
    duration: "4 Hours",
    group_size: "Max 4 Guests",
    price: 260,
    currency: "USD",
    hero: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1200&auto=format&fit=crop",
    host: {
      name: "Maâlem Hassan Amrani",
      role: "Master Plasterer & Historic Restorer",
      bio: "Has restored royal riads and historic kasbahs throughout Marrakech and the High Atlas for 35 years.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
    },
    destination_id: "dest-morocco",
    related_stay_ids: ["stay-atlas-kasbah"]
  },
  {
    id: "exp-forest-zen-walk",
    slug: "shinrin-yoku-forest-immersion",
    name: "Ancient Cedar Shinrin-Yoku & Sound Bath",
    tagline: "A silent sensory immersion into ancient Japanese cedar forest with botanical essential oil distillation.",
    description: "Breathe in pure phytoncides as our forest therapist guides you through silent walking meditation, stream meditation, and an acoustic cedar gong sound bath beneath towering 400-year-old trees.",
    category: "Wellness & Thermal",
    duration: "3 Hours",
    group_size: "Max 6 Guests",
    price: 240,
    currency: "USD",
    hero: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200&auto=format&fit=crop",
    destination_id: "dest-kyoto",
    related_stay_ids: ["stay-kyoto-onsen", "stay-arashiyama-sanctuary"]
  }
];

export const EDITORIAL_ARTICLES: EditorialArticle[] = [
  {
    id: "art-the-craft-of-silence",
    slug: "the-craft-of-silence",
    title: "The Architecture of Silence: Why Empty Space is the Ultimate Luxury",
    subtitle: "In a hyper-connected world, true hospitality is the art of removing the superfluous so that presence can emerge.",
    excerpt: "Modern life inundates the senses with constant digital noise. When an architectural space creates genuine acoustic and visual quiet, our nervous system undergoes a profound physiological restoration.",
    category: "Architecture",
    author: {
      name: "Clara Vance",
      role: "Architecture Critic & Essayist",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
    },
    published_at: "August 18, 2026",
    read_time: "7 min read",
    cover: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1400&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1528164344705-475426879c0d?q=80&w=1200&auto=format&fit=crop"
    ],
    content: [
      {
        type: "paragraph",
        text: "There is an ancient Japanese architectural concept known as Ma (間)—often translated as negative space, but more accurately described as the conscious pause between notes that allows the melody to exist. In contemporary hospitality, this pause has become our rarest and most precious commodity."
      },
      {
        type: "quote",
        text: "We do not build walls to separate ourselves from nature, but to create a deliberate frame through which nature's quietude can be felt with full intensity.",
        author: "Tadao Ando, Architectural Philosophy"
      },
      {
        type: "paragraph",
        text: "When you enter a room designed with true material restraint—where the floor is unpolished natural stone, the timber is hand-planed Hinoki or charred spruce, and the walls are lime plaster rather than synthetic paint—your sensory baseline shifts almost immediately. Heart rate decelerates. The eye stops frantically scanning for commercial signals and settles into the subtle rhythm of natural light moving across a textured surface."
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
        caption: "Sunnmøre Fjord Pavilion: A study in architectural restraint and uninterrupted horizon."
      },
      {
        type: "paragraph",
        text: "At AURELIA, our spaces are intentionally curated to avoid decorative clutter. Luxury is not expressed through gold accents, synthetic marble, or aggressive service staff hovering at every corner. Rather, it is the quiet luxury of arriving somewhere that asks nothing of you—where the geometry of the room, the quality of the air, and the scent of wild cedar give you permission to simply breathe."
      }
    ],
    destination_id: "dest-kyoto",
    related_stay_ids: ["stay-kyoto-onsen", "stay-fjord-cliffside"],
    related_article_ids: ["art-architecture-of-shadows", "art-materials-of-memory"]
  },
  {
    id: "art-architecture-of-shadows",
    slug: "in-praise-of-shadows-and-stone",
    title: "In Praise of Shadows: Designing for Warmth and Natural Light",
    subtitle: "How historical Mediterranean and Japanese building techniques create sanctuaries that breathe with the sun.",
    excerpt: "Before the advent of fluorescent glare and sealed glass boxes, architecture understood how to temper heat and invite shadow as an active spatial element.",
    category: "Slow Living",
    author: {
      name: "Marcello Vanni",
      role: "Architectural Historian",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
    },
    published_at: "August 12, 2026",
    read_time: "6 min read",
    cover: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1400&auto=format&fit=crop",
    content: [
      {
        type: "paragraph",
        text: "In his seminal 1933 essay 'In Praise of Shadows', Jun'ichirō Tanizaki argued that the beauty of a room does not reside in uniform illumination, but in the delicate graduation of shadows cast by eaves, paper screens, and deep timber alcoves."
      },
      {
        type: "paragraph",
        text: "In the Mediterranean, thick stone walls and narrow arched apertures perform a similar psychological and thermal miracle. In the middle of an August afternoon in Tuscany or the Cyclades, stepping into a travertine bastide provides immediate sensory cooling without the sterile hiss of mechanical air conditioning."
      },
      {
        type: "quote",
        text: "Light creates space; shadow gives it soul.",
        author: "Marcello Vanni"
      },
      {
        type: "paragraph",
        text: "Our architects use natural side-lighting, deep wooden overhangs, and tactile wall surfaces that catch the changing angle of the sun, creating an organic clock that gently re-attunes visitors to circadian rhythms."
      }
    ],
    destination_id: "dest-tuscany",
    related_stay_ids: ["stay-val-dorcia-estate", "stay-cycladic-cliff"],
    related_article_ids: ["art-the-craft-of-silence"]
  },
  {
    id: "art-materials-of-memory",
    slug: "materials-that-remember",
    title: "Materials of Memory: Why We Build with Stone, Linen, Clay, and Aged Timber",
    subtitle: "Synthetic materials erase time. Natural materials record the touch of hands, the passage of weather, and the dignity of age.",
    excerpt: "Travertine that absorbs sunlight during the day and releases warmth at night; linen that grows softer with every washing; raw clay that purifies the air. The tactile substances that define the AURELIA experience.",
    category: "Artisans",
    author: {
      name: "Elena Rostova",
      role: "Material Culture Researcher",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
    },
    published_at: "August 04, 2026",
    read_time: "5 min read",
    cover: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?q=80&w=1400&auto=format&fit=crop",
    content: [
      {
        type: "paragraph",
        text: "There is a profound difference between a surface that depreciates with age and one that gains patina. Plastic, laminate, and polished chrome degrade the moment they are scratched. But raw limestone, unlacquered bronze, rough-hewn oak, and hand-loomed linen welcome the traces of human use."
      },
      {
        type: "paragraph",
        text: "When you touch a banister carved from local cedar or wash in a basin hollowed from a single block of Tuscan travertine, your body intuitively understands that this object has a history that predates you and will outlast you. It anchors us in deep time."
      }
    ],
    destination_id: "dest-morocco",
    related_stay_ids: ["stay-atlas-kasbah", "stay-namib-dunes"],
    related_article_ids: ["art-the-craft-of-silence"]
  }
];
