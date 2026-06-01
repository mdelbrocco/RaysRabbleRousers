export interface Contact {
  name: string;
  phone?: string;
  context: string;
}

export const contacts: Contact[] = [
  { name: "Cellar & Flame Steakhouse", phone: "231-525-0555", context: "Friday dinner" },
  { name: "Red Ginger", phone: "231-944-1733", context: "Friday dinner alt" },
  { name: "Farm Club", phone: "231-252-3079", context: "Saturday dinner option" },
  { name: "Bubba's", phone: "231-995-0570", context: "Saturday dinner option" },
  { name: "The Filling Station", phone: "231-946-8168", context: "Restaurant" },
  { name: "Kilkenny's", phone: "231-941-7527", context: "Friday nightlife" },
];
