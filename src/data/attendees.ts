export interface Attendee {
  name: string;
  phone?: string;
  email?: string;
  role?: string;
}

export const attendees: Attendee[] = [
  { name: "Eric Ray", role: "The Groom" },
  { name: "Paul Greene", role: "Attendee" },
  { name: "Joe Fogarty", role: "Attendee" },
  { name: "Matt DelBrocco", role: "Attendee" },
  { name: "Hirsch Pujara", role: "Attendee" },
  { name: "Keung Wong", role: "Attendee" },
  { name: "Igor Mierzvinski", role: "Attendee" },
  { name: "Dan Petkovsek", role: "Attendee" },
  { name: "Steve Petkovsek", role: "Attendee" },
  { name: "Sean Beattie", role: "Attendee" },
  { name: "Dom Grifo", role: "Attendee" },
  { name: "Sophie Greene", role: "Attendee" },
];
