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
      "Swimsuit",
      "Sunscreen (SPF 30+)",
      "Sunglasses",
      "Hat or ball cap (sun)",
      "Water bottle",
      "Electrolytes / Liquid IV packets",
      "Phone charger / portable battery",
      "ID & cash",
    ],
  },
  {
    category: "Clothing",
    icon: "Shirt",
    items: ["Hiking shoes or sneakers (for the dunes)", "Sandals / flip flops", "Layers for evenings", "Nice-ish outfit for Saturday dinner"],
  },
  {
    category: "Beach & Outdoors",
    icon: "Sun",
    items: ["Towel", "Beach blanket", "Bug spray", "Day pack / small backpack for the dunes"],
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
  { item: "Playing cards" },
  { item: "Bluetooth speaker", who: "Dan" },
  { item: "Cooler(s)", who: "Hirsh, Eric" },
  { item: "Koozies" },
  { item: "EZ Pass (car 1)", who: "Dan" },
  { item: "EZ Pass (car 2)", who: "Igor" },
  { item: "EZ Pass (car 3)" },
  { item: "America the Beautiful Pass (car 1)" },
  { item: "America the Beautiful Pass (car 2)" },
  { item: "America the Beautiful Pass (car 3)" },
];
