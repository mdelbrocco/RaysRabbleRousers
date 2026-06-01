export interface Attendee {
  name: string;
  phone?: string;
  email?: string;
  role?: string;
}

export const attendees: Attendee[] = [
  { name: "Eric Ray", phone: "440-465-9582", email: "shadowsprite.eric@gmail.com", role: "The Groom" },
  { name: "Paul Greene", phone: "216-215-7143", email: "Paul.B.Greene@gmail.com", role: "Attendee" },
  { name: "Joe Fogarty", phone: "440-667-0518", email: "jfogarty1124@gmail.com", role: "Attendee" },
  { name: "Matt DelBrocco", phone: "440-724-7837", email: "mattdelbrocco@gmail.com", role: "Attendee" },
  { name: "Hirsch Pujara", phone: "304-610-7895", email: "pujarahirsh@gmail.com", role: "Attendee" },
  { name: "Keung Wong", phone: "216-798-2648", email: "pikakeung@gmail.com", role: "Attendee" },
  { name: "Igor Mierzvinski", phone: "440-829-1781", email: "mierzvinski@gmail.com", role: "Attendee" },
  { name: "Dan Petkovsek", phone: "216-906-3549", email: "daniel.petkovsek@gmail.com", role: "Attendee" },
  { name: "Steve Petkovsek", phone: "216-538-3967", email: "stevepetkovsek@gmail.com", role: "Attendee" },
  { name: "Sean Beattie", phone: "216-407-3963", email: "sean.beattie@proton.me", role: "Attendee" },
  { name: "Dom Grifo", phone: "440-679-1478", email: "Dominic.m.grifo@gmail.com", role: "Attendee" },
  { name: "Sophie Greene", phone: "440-527-3715", email: "sophia.greene451@gmail.com", role: "Attendee" },
];
