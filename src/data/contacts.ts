export interface Contact {
  name: string;
  phone?: string;
  context: string;
}

export const contacts: Contact[] = [
  {
    name: "Art's Tavern",
    phone: "231-334-3754",
    context: "Friday lunch (Glen Arbor)",
  },
  {
    name: "Farm Club",
    phone: "231-252-3079",
    context: "Friday dinner — no reservations, go early",
  },
  {
    name: "Firefly",
    phone: "231-932-1310",
    context: "Saturday dinner — call day-of for wait",
  },
  {
    name: "The Parlor (walk-in OK)",
    phone: "231-753-3131",
    context: "Saturday nightlife",
  },
  { name: "Kilkenny's", phone: "231-941-7527", context: "Saturday nightlife" },
];
