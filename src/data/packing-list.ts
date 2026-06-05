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
  { item: "Yard games (cornhole, can jam)" },
  { item: "Board games / Cards" },
  { item: "Bluetooth speaker" },
  { item: "Cooler(s)" },
  { item: "Koozies" },
  { item: "Camera" },
  { item: "EZ Pass (per car)" },
  { item: "America the Beautiful Pass (per car)" },
];
