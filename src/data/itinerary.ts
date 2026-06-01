export interface Activity {
  time: string;
  title: string;
  description?: string;
  location?: string;
  icon: string;
  tag?: "food" | "drinks" | "activity" | "logistics" | "chill";
}

export interface ItineraryDay {
  day: string;
  date: string;
  title: string;
  emoji: string;
  summary: string;
  color: string;
  activities: Activity[];
}

export const weatherNote =
  "The dunes are the weather-sensitive day. If Saturday looks rainy and Friday's clear, we COULD swap the city day and dunes day. We really want a clear day for the dunes if possible.";

export const itinerary: ItineraryDay[] = [
  {
    day: "Thursday",
    date: "June 25",
    title: "Arrival & Settle In",
    emoji: "🚗",
    summary: "Drive in from Cleveland, grill out, fire pit, yard games",
    color: "pine",
    activities: [
      {
        time: "Mid-morning",
        title: "Hit the Road",
        description:
          "Cleveland → Traverse City (~6.5 hrs). Grab groceries + drinks (Costco?) on the way in.",
        icon: "Car",
        tag: "logistics",
      },
      {
        time: "Late afternoon",
        title: "Arrive at the VRBO",
        description:
          "Unpack, claim beds, settle in. VRBO is ~20 min from downtown TC.",
        icon: "Home",
        tag: "logistics",
      },
      {
        time: "Evening",
        title: "Burgers on the Grill",
        description:
          "Backyard BBQ — flexible for staggered arrivals. People eat when they roll in.",
        icon: "Flame",
        tag: "food",
      },
      {
        time: "Night",
        title: "Backyard Fire",
        description: "Fire pit, drinks, catch up with the crew.",
        icon: "BrickWallFire",
        tag: "chill",
      },
    ],
  },
  {
    day: "Friday",
    date: "June 26",
    title: "Traverse City Day",
    emoji: "🍻",
    summary:
      "Waterfront, arcade bar, brewery crawl, sit-down dinner, nightlife",
    color: "amber",
    activities: [
      {
        time: "Morning",
        title: "Good Harbor Coffee & Bakery",
        description:
          "Fuel up before the day — coffee and fresh-baked pastries to get the crew moving. Easy starting spot downtown.",
        location: "111 W Front St",
        icon: "Coffee",
        tag: "food",
      },
      {
        time: "Late morning",
        title: "Waterfront Walk",
        description:
          "Head into TC (~20 min). Walk Front Street & the Grand Traverse Bay waterfront. Clinch Park beach is at the bottom of downtown.",
        icon: "Waves",
        tag: "activity",
      },
      {
        time: "Noon",
        title: "Full Send Ramen",
        description:
          "Some of the best ramen in the Midwest, allegedly. We'll let Eric be the judge of that!",
        location: "346 E Front St",
        icon: "UtensilsCrossed",
        tag: "food",
      },
      {
        time: "Noon",
        title: "The Coin Slot",
        description:
          "Old-school arcade bar — pinball, Guitar Hero, pool, Big Buck Hunter. Same building as Full Send Ramen!",
        location: "346 E Front St",
        icon: "Gamepad2",
        tag: "drinks",
      },
      {
        time: "Afternoon",
        title: "Silver Spruce Brewing",
        description:
          "Big open space, Bull & the Bear food truck on site. ~10 min walk (0.6 miles) south of Front St.",
        icon: "Beer",
        tag: "drinks",
      },
      {
        time: "Afternoon",
        title: "Right Brain Brewery (optional)",
        description:
          "Brewpub with vintage pinball, great pizza + food truck. Short rideshare (1.2 miles) south of downtown. TC Whiskey Stillhouse nearby as well.",
        location: "225 E 16th St",
        icon: "Beer",
        tag: "drinks",
      },
      {
        time: "~6:30 PM",
        title: "Red Ginger",
        description:
          "Sit-down dinner — upscale Asian fusion (sushi, ramen, pan-Asian), big cocktail list. Eric's kind of spot. Reservation for 12, early seating to leave runway for bars.",
        location: "237 E Front St",
        icon: "UtensilsCrossed",
        tag: "food",
      },
      {
        time: "After dinner",
        title: "The Parlor",
        description:
          "Craft cocktails (smoked old fashioneds), live music till 11, pizza if still hungry.",
        icon: "Music",
        tag: "drinks",
      },
      {
        time: "Late night",
        title: "Kilkenny's (optional)",
        description:
          "Underground Irish pub — dance floor, pool tables, live music, open till 2am. If we still have any enegy left!",
        icon: "PartyPopper",
        tag: "drinks",
      },
    ],
  },
  {
    day: "Saturday",
    date: "June 27",
    title: "Sleeping Bear Dunes",
    emoji: "🏖️",
    summary: "Scenic drive, dune climb, beach, casual dinner",
    color: "bark",
    activities: [
      {
        time: "9:00 AM",
        title: "Leave for the Dunes",
        description:
          "~70 min drive. Leave early to beat the crowds — lots fill by late morning. Buy park pass at the entrance.",
        icon: "Car",
        tag: "logistics",
      },
      {
        time: "~10:30 AM",
        title: "Pierce Stocking Scenic Drive",
        description:
          "7.4-mile one-way loop with overlooks. Lake Michigan Overlook (Stop 9/10) is the iconic 450-ft bluff.",
        icon: "Mountain",
        tag: "activity",
      },
      {
        time: "Late morning",
        title: "The Dune Climb",
        description:
          "The classic. Climb the first big dune for the Glen Lake view. Go barefoot — boots fill with sand.",
        icon: "TrendingUp",
        tag: "activity",
      },
      {
        time: "Midday",
        title: "Lunch in Glen Arbor",
        description: "Cute town right by the dunes. Grab food between stops.",
        icon: "UtensilsCrossed",
        tag: "food",
      },
      {
        time: "Afternoon",
        title: "Glen Haven Beach",
        description:
          "Cool off after the dunes. Clear water, swimming, free maritime museum, restrooms + parking.",
        icon: "Waves",
        tag: "activity",
      },
      {
        time: "Evening",
        title: "Casual Dinner",
        description:
          "Farm Club (farm/brewery on Leelanau Peninsula), Bubba's (TC institution, steak frites + burgers), or Smoke and Porter (BBQ). TBD.",
        icon: "UtensilsCrossed",
        tag: "food",
      },
    ],
  },
  {
    day: "Sunday",
    date: "June 28",
    title: "Drive Home",
    emoji: "👋",
    summary: "Pack up, easy breakfast, roll out",
    color: "pine",
    activities: [
      {
        time: "Morning",
        title: "Pack Up & Breakfast",
        description: "Easy breakfast at the VRBO. Clean up and load the cars.",
        icon: "Coffee",
        tag: "food",
      },
      {
        time: "Late morning",
        title: "Hit the Road",
        description: "TC → Cleveland (~6.5 hrs). Safe travels, fam.",
        icon: "Car",
        tag: "logistics",
      },
    ],
  },
];
