export interface PackingCategory {
  category: string;
  icon: string;
  items: string[];
}

export const packingList: PackingCategory[] = [
  {
    category: "Essentials",
    icon: "Backpack",
    items: [
      "Water bottle",
      "Electrolytes / Liquid IV packets",
      "Phone charger",
      "Glasses/contact lenses (if applicable!)",
      "Toiletries (e.g. toothbrush, deodorant)",
      "Shower stuff (e.g. Shampoo/conditioner)",
      "ID & cash",
    ],
  },
  {
    category: "Clothing",
    icon: "Shirt",
    items: [
      "Swimsuit",
      "Hiking shoes or sneakers (for dunes day)",
      "Nice-ish outfit for Saturday dinner",
      "light jacket for evenings",
      "Sandals / flip flops (optional)",
    ],
  },
  {
    category: "Beach & Outdoors",
    icon: "Sun",
    items: ["Sunscreen", "Bug spray", "Sunglasses", "Hat", "Day pack / small backpack for the dunes", "Beach Towel (esp. if swimming)"],
  },
];

export interface SharedGearItem {
  item: string;
  who?: string;
}

// Group gear — only need one of each. `who` left blank = up for grabs.
export const sharedGear: SharedGearItem[] = [
  { item: "Yard games - Can Jam / Ultimate disc", who: "Matt" },
  { item: "Board games", who: "Probably Igor" },
  { item: "Bluetooth speaker", who: "Dan" },
  { item: "Cooler(s)", who: "Hirsh, Eric" },
  { item: "Nintendo Switch", who: "Eric, Dan" },
  { item: "Boba!", who: "Keung" },
  { item: "EZ Pass (car 1)", who: "Dan" },
  { item: "EZ Pass (car 2)", who: "Igor" },
];
