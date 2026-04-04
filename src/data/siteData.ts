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
    id: "polyester-yarn",
    name: "High-Tenacity Polyester Yarn",
    category: "Polyester Yarn",
    shortDescription: "Industrial-grade yarn optimized for zipper tape weaving and durability.",
    fullDescription: "Our high-tenacity polyester yarn is specifically engineered for the zipper industry. It offers superior tensile strength, minimal shrinkage, and excellent dye affinity, ensuring your zipper tapes are both strong and aesthetically consistent.",
    specs: {
      "Denier Range": "150D - 600D",
      "Tenacity": "> 7.5 g/d",
      "Shrinkage": "< 2% at 180°C",
      "Elongation": "15% - 20%",
      "Twist": "S/Z Twist available"
    },
    benefits: [
      "Exceptional tensile strength",
      "Consistent dye absorption",
      "Heat stabilized for low shrinkage",
      "Abrasion resistant"
    ],
    useCases: [
      "Zipper tape weaving",
      "Reinforcement threads",
      "Industrial textiles"
    ],
    variants: [
      "Raw White",
      "Dope Dyed (Black/Colors)",
      "Semi-Dull",
      "Bright"
    ],
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "nylon-monofilament",
    name: "Nylon Coil Monofilament",
    category: "Nylon Coil",
    shortDescription: "Precision-extruded monofilament for high-speed coil forming.",
    fullDescription: "Designed for seamless integration with high-speed coil forming machines, our nylon monofilament provides the perfect balance of flexibility and rigidity. It ensures consistent tooth shape and smooth slider operation.",
    specs: {
      "Diameter": "0.40mm - 1.20mm",
      "Material": "Polyamide 6 / 66",
      "Melting Point": "220°C - 255°C",
      "Tolerance": "± 0.01mm"
    },
    benefits: [
      "High dimensional stability",
      "Smooth surface finish",
      "Excellent recovery properties",
      "Uniform diameter"
    ],
    useCases: [
      "Nylon coil zippers (#3, #5, #8, #10)",
      "Invisible zippers",
      "Spiral zippers"
    ],
    variants: [
      "Transparent",
      "Opaque Colors",
      "Fluorescent"
    ],
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "zipper-tape",
    name: "Woven & Knitted Zipper Tape",
    category: "Zipper Tape",
    shortDescription: "Premium base tapes for metal, plastic, and nylon zippers.",
    fullDescription: "Our zipper tapes are manufactured using advanced looms to ensure straightness and edge stability. Available in various widths and weaves to suit different zipper types and application requirements.",
    specs: {
      "Width": "10mm - 40mm",
      "Material": "100% Polyester",
      "Weave Type": "Twill, Plain, Herringbone",
      "Color Fastness": "Grade 4+"
    },
    benefits: [
      "No edge fraying",
      "Excellent lateral strength",
      "Standardized widths",
      "Soft touch options"
    ],
    useCases: [
      "Garment zippers",
      "Bag & Luggage zippers",
      "Home textiles"
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
    id: "metal-components",
    name: "Precision Metal Teeth & Sliders",
    category: "Metal Components",
    shortDescription: "High-quality brass, aluminum, and zinc components.",
    fullDescription: "We provide the essential metal elements for high-end zippers. From precision-cut teeth to smooth-operating sliders, our metal components are finished to resist corrosion and maintain their luster.",
    specs: {
      "Materials": "Brass, Aluminum, Zinc Alloy",
      "Finishes": "Shiny Gold, Antique Brass, Gunmetal, Nickel",
      "Slider Types": "Auto-lock, Non-lock, Reversible"
    },
    benefits: [
      "Corrosion resistant",
      "Smooth slider movement",
      "High pull strength",
      "Luxury aesthetic"
    ],
    useCases: [
      "Leather jackets",
      "Luxury handbags",
      "Denim wear"
    ],
    variants: [
      "Y-Teeth",
      "Standard Teeth",
      "Custom Logo Sliders"
    ],
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80&w=800"
  }
];

export const INDUSTRIES = [
  {
    id: "apparel",
    name: "Apparel & Fashion",
    description: "From high-street fashion to everyday wear, we provide materials that balance aesthetics with durability.",
    materials: ["Polyester Yarn", "Nylon Coil", "Metal Components"],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "luggage",
    name: "Luggage & Bags",
    description: "Heavy-duty materials designed to withstand the rigors of travel and high-stress applications.",
    materials: ["Heavy-duty Tape", "Large Gauge Coils", "Zinc Sliders"],
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "outdoor",
    name: "Outdoor & Sporting Goods",
    description: "Weather-resistant and high-performance materials for tents, backpacks, and gear.",
    materials: ["Waterproof Tape", "UV Resistant Yarn", "Plastic Elements"],
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80&w=800"
  }
];
