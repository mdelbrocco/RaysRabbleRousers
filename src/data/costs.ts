export interface CostItem {
  item: string;
  perPerson: string;
  notes?: string;
}

export const costs: CostItem[] = [
  {
    item: "VRBO (3 nights)",
    perPerson: "~$294",
    notes: "$3,230 total / 11 (Eric's covered)",
  },
  {
    item: "Gas (Cleveland → TC round trip)",
    perPerson: "~$50–70",
    notes: "~$150–200/car, split by car",
  },
  {
    item: "Sleeping Bear Dunes Pass",
    perPerson: "~$8",
    notes: "$25/vehicle, split by car",
  },
  {
    item: "Groceries & Beer",
    perPerson: "~$25–35",
    notes: "Thursday grill-out, 3 breakfasts, some house beer (BYO welcome)",
  },
  {
    item: "Friday Lunch (Full Send Ramen)",
    perPerson: "~$15–20",
    notes: "Individual tabs",
  },
  {
    item: "Friday Dinner (Red Ginger)",
    perPerson: "~$45–75",
    notes: "Upscale Asian fusion — entrées ~$30–45",
  },
  {
    item: "Friday Bars",
    perPerson: "Varies",
    notes: "Individual tabs",
  },
  {
    item: "Saturday Dinner",
    perPerson: "~$20–35",
    notes: "Casual — TBD restaurant",
  },
  {
    item: "Parking (downtown)",
    perPerson: "~$5–10",
    notes: "Split by car — free after 6 PM",
  },
];

export const costSummary =
  "Estimated total per person: ~$450–600+ (depending on how much you spend at the bars). Eric doesn't pay — we've got him covered.";
