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
      "Layers for evenings on the water",
      "Nice-ish outfit for Friday dinner",
      "Hat / baseball cap",
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
      "Yard games (cornhole, spikeball, etc.)",
      "Bluetooth speaker",
      "Fishing gear",
      "Cards / poker set",
      "Camera",
    ],
  },
];
