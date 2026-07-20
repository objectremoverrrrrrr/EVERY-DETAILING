export interface Service {
  id: string;
  slug: string;
  name: string;
  price: number;
  isStartingPrice: boolean;
  shortDescription: string;
  fullDescription?: string;
  included: string[];
  type: "single" | "package";
}

export interface BatchPackage {
  id: string;
  tier: number;
  name: string;
  vehicles: string;
  pricePerVehicle: number;
  travelFee: string;
  travelFeeNote: string;
  highlight?: boolean;
  description: string;
  included: string[];
  perks: string[];
}

export const currencySymbol = "₱";

export const batchPackages: BatchPackage[] = [
  {
    id: "small-batch",
    tier: 1,
    name: "Small Batch",
    vehicles: "3 Vehicles",
    pricePerVehicle: 2600,
    travelFee: "₱1,500 flat",
    travelFeeNote: "for outer cities",
    highlight: false,
    description:
      "Built for small businesses, private groups, or offices with a handful of vehicles. We arrive on-site and detail all three in a single scheduled session — no repeated trips, no hassle.",
    included: [
      "Exterior hand wash",
      "Tire & wheel clean",
      "Window clean (in & out)",
      "Interior vacuum",
      "Dashboard & door panel wipe",
      "Air freshener",
    ],
    perks: [
      "Single on-site session",
      "Flexible scheduling",
      "Dedicated technician per vehicle",
    ],
  },
  {
    id: "fleet-batch",
    tier: 2,
    name: "Fleet Batch",
    vehicles: "4–5 Vehicles",
    pricePerVehicle: 2400,
    travelFee: "50% OFF (₱750)",
    travelFeeNote: "for outer cities",
    highlight: false,
    description:
      "Designed for growing car rentals, office pools, and small dealerships. A deeper clean than Tier 1 at a lower per-vehicle rate, with travel costs cut in half for outer-city locations.",
    included: [
      "Everything in Tier 1",
      "Deep seat wipe & fabric care",
      "Engine bay exterior wipe-down",
      "Cup holder & console deep clean",
      "Streak-free glass polish",
      "Tire dressing",
    ],
    perks: [
      "Priority scheduling slot",
      "50% off outer-city travel fee",
      "Two-technician team for faster turnaround",
    ],
  },
  {
    id: "ultimatum",
    tier: 3,
    name: "Ultimatum",
    vehicles: "6+ Vehicles",
    pricePerVehicle: 2200,
    travelFee: "COMPLETELY WAIVED",
    travelFeeNote: "no travel charge",
    highlight: true,
    description:
      "Our flagship fleet program for large dealerships, rental companies, and corporate fleets. The lowest per-vehicle rate, zero travel fees, and a full detail treatment — we leave every vehicle showroom-ready.",
    included: [
      "Full Complete Detail per vehicle",
      "Seat shampooing & carpet extraction",
      "Leather conditioning",
      "Clay bar decontamination",
      "Wax & paint protection",
      "Interior odor treatment",
      "Headlight restoration",
      "Final inspection & touch-up",
    ],
    perks: [
      "Zero travel fee — anywhere",
      "Dedicated account contact",
      "Multi-day scheduling available",
      "Post-service condition report per vehicle",
    ],
  },
];

export const services: Service[] = [
  {
    id: "exterior-wash",
    slug: "exterior-wash",
    name: "Exterior Hand Wash",
    price: 2000,
    isStartingPrice: true,
    shortDescription: "Full exterior hand wash, tire and wheel cleaning, window cleaning, streak-free finish",
    fullDescription: "A careful, thorough hand wash that removes dirt and grime without introducing swirls to your paint. We clean the wheels, dress the tires, and ensure all exterior glass is perfectly clear.",
    included: ["Exterior hand wash", "Tire & wheel clean", "Window clean (exterior)", "Streak-free finish"],
    type: "single"
  },
  {
    id: "interior-vacuum",
    slug: "interior-vacuum",
    name: "Interior Vacuum & Wipe",
    price: 900,
    isStartingPrice: true,
    shortDescription: "Full interior vacuum, dashboard wipe, door panels, cup holders, window interior clean",
    fullDescription: "A solid interior refresh. We vacuum the carpets and seats, wipe down all hard surfaces including the dashboard and door panels, and clean the inside of your windows.",
    included: ["Full interior vacuum", "Dashboard wipe", "Door panels", "Cup holders", "Window interior clean"],
    type: "single"
  },
  {
    id: "interior-detail",
    slug: "interior-detail",
    name: "Interior Detail",
    price: 2000,
    isStartingPrice: true,
    shortDescription: "Deep interior clean, seat shampooing, carpet extraction, leather conditioning, odor treatment",
    fullDescription: "We deep clean every inch of your interior. Carpets are extracted, leather is safely cleaned and conditioned, and plastics are restored to their factory matte finish.",
    included: ["Deep interior clean", "Seat shampooing", "Carpet extraction", "Leather conditioning", "Odor treatment"],
    type: "single"
  },
  {
    id: "engine-bay",
    slug: "engine-bay",
    name: "Engine Bay Clean",
    price: 2100,
    isStartingPrice: true,
    shortDescription: "Safe degreasing, rinse, dry, and dress of all engine bay surfaces",
    fullDescription: "We safely degrease and clean your engine bay, removing years of built-up grime, and finish by dressing all plastics and hoses for a like-new appearance.",
    included: ["Safe degreasing", "Rinse & dry", "Plastic dressing", "Hose protection"],
    type: "single"
  },
  {
    id: "wax-protection",
    slug: "wax-protection",
    name: "Wax & Paint Protection",
    price: 2100,
    isStartingPrice: true,
    shortDescription: "Hand wax application, paint sealant, UV protection, streak-free buff",
    fullDescription: "Add a layer of high-quality protection to your paint. We apply a premium hand wax and sealant to protect against UV rays and environmental contaminants.",
    included: ["Hand wax application", "Paint sealant", "UV protection", "Streak-free buff"],
    type: "single"
  },
  {
    id: "basic-detail",
    slug: "basic-detail",
    name: "Basic Detail",
    price: 3000,
    isStartingPrice: false,
    shortDescription: "Exterior hand wash + interior vacuum & wipe. A solid refresh for vehicles that just need a clean up.",
    fullDescription: "The perfect maintenance detail. We handle the exterior wash safely, and give the interior a thorough vacuum and wipe down.",
    included: ["Exterior hand wash", "Tire & wheel clean", "Window clean (in & out)", "Interior vacuum", "Dashboard wipe", "Door panel wipe"],
    type: "package"
  },
  {
    id: "premium-detail",
    slug: "premium-detail",
    name: "Premium Detail",
    price: 3100,
    isStartingPrice: false,
    shortDescription: "Our most popular package. A thorough clean inside and out.",
    fullDescription: "Our most requested service. We take the Basic Detail and add deep interior cleaning, engine bay detailing, and a protective wax layer to the exterior.",
    included: ["Everything in Basic", "Seat shampooing", "Carpet extraction", "Engine bay clean", "Wax & paint protection", "Air freshener"],
    type: "package"
  },
  {
    id: "complete-detail",
    slug: "complete-detail",
    name: "Complete Detail",
    price: 3500,
    isStartingPrice: false,
    shortDescription: "The full treatment. We leave no surface untouched.",
    fullDescription: "The ultimate reset for your vehicle. We go over every inch, including clay bar decontamination, paint sealant, and deep leather conditioning.",
    included: ["Everything in Premium", "Leather conditioning", "Clay bar decontamination", "Paint sealant", "Interior odor treatment", "Headlight restoration", "Final inspection & touch-up"],
    type: "package"
  }
];
