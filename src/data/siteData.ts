export interface Product {
  id: string;
  name: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  specs: Record<string, string>;
  benefits: string[];
  useCases: string[];
  variants: string[];
  image: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "zipper-sliders",
    name: "Precision Zipper Sliders",
    category: "Sliders",
    shortDescription: "High-quality zinc alloy and brass sliders with various lock mechanisms.",
    fullDescription: "Our zipper sliders are engineered for smooth operation and durability. Available in auto-lock, non-lock, and reversible types, with finishes ranging from shiny gold to matte black. Each slider undergoes rigorous pull-strength testing.",
    specs: {
      "Material": "Zinc Alloy / Brass",
      "Lock Type": "Auto-lock, Non-lock, Pin-lock",
      "Finishes": "Shiny Gold, Nickel, Gunmetal, Antique Brass",
      "Sizes": "#3, #5, #8, #10"
    },
    benefits: [
      "Smooth gliding operation",
      "Corrosion-resistant finishes",
      "High lateral strength",
      "Custom logo engraving available"
    ],
    useCases: [
      "Garment zippers",
      "Luggage & Bag zippers",
      "Outdoor gear"
    ],
    variants: [
      "Standard Puller",
      "Decorative Puller",
      "Reversible Slider",
      "Invisible Slider"
    ],
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "zipper-tape",
    name: "High-Tenacity Zipper Tape",
    category: "Tape",
    shortDescription: "Industrial-grade polyester tape optimized for zipper chain assembly.",
    fullDescription: "Our zipper tapes are woven or knitted using high-tenacity polyester yarn to ensure minimal shrinkage and maximum edge stability. Designed to withstand high-speed sewing and industrial laundering.",
    specs: {
      "Material": "100% High-Tenacity Polyester",
      "Width": "12mm - 42mm",
      "Weave": "Twill, Plain, Herringbone",
      "Shrinkage": "< 1.5% at 180°C"
    },
    benefits: [
      "Excellent dimensional stability",
      "Consistent dye affinity",
      "Abrasion resistant",
      "No edge fraying"
    ],
    useCases: [
      "Coil zipper assembly",
      "Metal zipper assembly",
      "Plastic molded zipper assembly"
    ],
    variants: [
      "Standard Woven",
      "Knitted (Soft)",
      "Waterproof Coated",
      "Recycled Polyester"
    ],
    image: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "pin-box-components",
    name: "Zipper Pin & Box Sets",
    category: "Components",
    shortDescription: "Precision-engineered pin and box sets for open-end zippers.",
    fullDescription: "Essential components for creating high-quality open-end zippers. Our pin and box sets are designed for perfect alignment and secure locking, ensuring the zipper functions reliably every time.",
    specs: {
      "Material": "Zinc Alloy / Brass / Aluminum",
      "Compatibility": "#3, #5, #8, #10 Zippers",
      "Attachment": "Ultrasonic or Mechanical",
      "Coating": "Nickel-free, Lead-free"
    },
    benefits: [
      "Perfect alignment",
      "Secure locking mechanism",
      "Easy insertion",
      "Durable construction"
    ],
    useCases: [
      "Jackets & Outerwear",
      "Detachable bags",
      "Sleeping bags"
    ],
    variants: [
      "Standard Pin/Box",
      "Square Box",
      "Double-sided Pin",
      "Top Stops"
    ],
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "nylon-coil-raw",
    name: "Nylon Coil Monofilament",
    category: "Coil",
    shortDescription: "Raw monofilament for high-speed zipper coil forming.",
    fullDescription: "Pure nylon monofilament specifically extruded for the production of zipper coils. It offers the ideal balance of flexibility for forming and rigidity for tooth strength.",
    specs: {
      "Diameter": "0.48mm - 1.05mm",
      "Material": "Polyamide 6 / 66",
      "Melting Point": "220°C - 255°C",
      "Tolerance": "± 0.01mm"
    },
    benefits: [
      "Uniform diameter",
      "High recovery properties",
      "Smooth surface finish",
      "Optimized for high-speed machines"
    ],
    useCases: [
      "Coil zipper manufacturing",
      "Invisible zipper production",
      "Spiral chain forming"
    ],
    variants: [
      "Transparent",
      "Dope-Dyed Black",
      "Fluorescent"
    ],
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=800"
  }
];

export const INDUSTRIES = [
  {
    id: "apparel",
    name: "Apparel & Fashion",
    description: "From high-street fashion to everyday wear, we provide materials that balance aesthetics with durability.",
    materials: ["Zipper Tape", "Nylon Coil", "Zipper Sliders"],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "luggage",
    name: "Luggage & Bags",
    description: "Heavy-duty materials designed to withstand the rigors of travel and high-stress applications.",
    materials: ["Zipper Tape", "Nylon Coil", "Zipper Sliders"],
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "outdoor",
    name: "Outdoor & Sporting Goods",
    description: "Weather-resistant and high-performance materials for tents, backpacks, and gear.",
    materials: ["Zipper Tape", "Nylon Coil", "Pin & Box Sets"],
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80&w=800"
  }
];
