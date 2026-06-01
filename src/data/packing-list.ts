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
      "Water bottle",
      "Phone charger / portable battery",
      "ID & cash",
    ],
  },
  {
    category: "Clothing",
    icon: "Shirt",
    items: [
      "Hiking shoes or sneakers (for the dunes)",
      "Sandals / flip flops",
      "Layers for evenings",
      "Nice-ish outfit for Friday dinner",
    ],
  },
  {
    category: "Beach & Outdoors",
    icon: "Sun",
    items: [
      "Towel",
      "Beach blanket",
      "Bug spray",
      "Day pack / small backpack for the dunes",
    ],
  },
  {
    category: "Optional / Fun",
    icon: "PartyPopper",
    items: [
      "Yard games (cornhole, can jam, etc.)",
      "Bluetooth speaker",
      "Cards / poker set",
      "Camera",
    ],
  },
];
