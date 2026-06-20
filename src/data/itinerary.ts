export interface Activity {
  time: string;
  title: string;
  description?: string;
  location?: string;
  url?: string;
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
  mapUrl?: string;
  activities: Activity[];
}

export const weatherNote =
  "The dunes are somewhat weather-sensitive. If Friday looks rainy and Saturday's clear, we COULD swap the dunes and city days. We really want a clear day for the dunes if possible!";

export const itinerary: ItineraryDay[] = [
  {
    day: "Thursday",
    date: "June 25",
    title: "Arrival & Settle In",
    emoji: "🚗",
    summary: "Drive in from Cleveland, grill out, yard games, fire pit",
    color: "pine",
    mapUrl: "https://maps.app.goo.gl/yJLWaCDgwz25yy9RA",
    activities: [
      {
        time: "Mid-morning",
        title: "Hit the Road",
        description: "Cleveland → Traverse City (~6.5 hrs). Grab groceries + drinks (Costco?) on the way in.",
        icon: "Car",
        tag: "logistics",
      },
      {
        time: "Late afternoon / early evening",
        title: "Arrive at the VRBO",
        description: "Unpack, claim beds, settle in. VRBO is ~20 min from downtown TC.",
        url: "https://www.google.com/maps/place/4272+Scharmen+Rd,+Traverse+City,+MI+49696/@44.6419284,-85.4927421,536m/data=!3m2!1e3!4b1!4m6!3m5!1s0x881fc9a57394eea1:0xf6aa3e63d8054ae6!8m2!3d44.6419246!4d-85.4901672!16s%2Fg%2F11nh68jhl_?entry=ttu&g_ep=EgoyMDI2MDYxNi4wIKXMDSoASAFQAw%3D%3D",
        icon: "Home",
        tag: "logistics",
      },
      {
        time: "Evening",
        title: "Burgers on the Grill",
        description: "Backyard BBQ — flexible for staggered arrivals. People eat when they roll in.",
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
    title: "Sleeping Bear Dunes",
    emoji: "🏖️",
    summary: "Empire Bluffs, scenic drive, dune climb, lunch, maritime village, casual dinner",
    color: "bark",
    mapUrl: "https://maps.app.goo.gl/cH5t817p2aUhHHPJA",
    activities: [
      {
        time: "~8:00 AM",
        title: "Leave for the Dunes",
        description: "About an hour drive from VRBO to Dunes. Let's get an early start! And remember sunscreen. 😎",
        icon: "Car",
        tag: "logistics",
      },
      {
        time: "~8:30 AM",
        title: "Gallagher's Farm Market & Bakery",
        description: "Donut stop ~3.5 mi west of town on M-72 — right on the dunes route. Grab a few fresh-made donuts for the drive!",
        location: "7237 E Traverse Hwy (M-72)",
        url: "https://www.google.com/maps/place/GALLAGHER'S+FARM+MARKET+AND+BAKERY/@44.7756694,-85.7464483,4275m/data=!3m1!1e3!4m10!1m2!2m1!1sGallagher's+Farm+Market,+Traverse+City+MI!3m6!1s0x881e2e23e50da6fd:0x79cb1adfc0ca41d8!8m2!3d44.7756694!4d-85.7103994!15sCilHYWxsYWdoZXIncyBGYXJtIE1hcmtldCwgVHJhdmVyc2UgQ2l0eSBNSVoqIihnYWxsYWdoZXIncyBmYXJtIG1hcmtldCB0cmF2ZXJzZSBjaXR5IG1pkgEOZmFybWVyc19tYXJrZXSaAURDaTlEUVVsUlFVTnZaRU5vZEhsalJqbHZUMnM0TkZrd2RHaE1WbXh6V2pGV00xUXliRXhoYW1nMVkyNWFVRlJGUlJBQuABAPoBBAgAEEg!16s%2Fg%2F1tlmnyk5?entry=ttu&g_ep=EgoyMDI2MDYwMy4xIKXMDSoASAFQAw%3D%3D",
        icon: "Donut",
        tag: "food",
      },
      {
        time: "~9:10 AM",
        title: "Park Pass — Hart Visitor Center",
        description: "Quick stop in Empire to grab the vehicle park pass before we hit the trails.",
        url: "https://www.google.com/maps/place/Philip+A.+Hart+Visitor+Center/@44.8068112,-86.0725878,2136m/data=!3m1!1e3!4m6!3m5!1s0x881e1af9c6058f8f:0xf4e22c9117e103ea!8m2!3d44.8116328!4d-86.0561903!16s%2Fg%2F11_qpqqkk?entry=ttu&g_ep=EgoyMDI2MDYxNi4wIKXMDSoASAFQAw%3D%3D",
        icon: "Ticket",
        tag: "logistics",
      },
      {
        time: "~9:20 AM",
        title: "Empire Bluffs",
        description:
          "Start here on fresh legs — a 1.5-mi round-trip forest-to-bluff hike to arguably the best Lake Michigan view in the park. Trailhead is right at Empire, our south gateway.",
        url: "https://www.google.com/maps/search/?api=1&query=Empire+Bluff+Trail%2C+Empire+MI",
        icon: "Mountain",
        tag: "activity",
      },
      {
        time: "~11:00 AM",
        title: "Pierce Stocking Scenic Drive",
        description:
          "7.4-mi one-way loop with 12 numbered pull-offs — stop wherever we want. Worth getting out for:\n#1 Covered Bridge — quick photo\n#2 Glen Lake Overlook — the turquoise Glen Lake view\n#3 Dune Overlook — ramped, paved deck right by the parking; panoramic dunes, Glen Lake + Manitou Islands with no climbing\n#9 Lake Michigan Overlook — the iconic 450-ft bluff platform, a short but steep walk through loose sand\n#10 Sleeping Bear Dune Overlook — right after #9",
        url: "https://www.google.com/maps/search/?api=1&query=Pierce+Stocking+Scenic+Drive%2C+Sleeping+Bear+Dunes",
        icon: "Mountain",
        tag: "activity",
      },
      {
        time: "~12:30 PM",
        title: "The Dune Climb",
        description: "The classic. Climb the first big dune for the Glen Lake view. We are NOT planning to do the full 3.5 mile hike 😂.",
        url: "https://www.google.com/maps/search/?api=1&query=Dune+Climb%2C+Sleeping+Bear+Dunes",
        icon: "TrendingUp",
        tag: "activity",
      },
      {
        time: "~1:15 PM",
        title: "Lunch — Art's Tavern",
        description:
          "Glen Arbor institution since 1934 — burgers, tots, full bar, big-group friendly. The classic post-dune-climb move, right in town. (Cash or check only! No reservations, so a 12-top may wait at peak — aim early.) Optional add-on: Cherry Republic is a block away — cherry everything (jams, salsa, fudge, free wine + cider tastings) for a quick browse.",
        location: "6487 Western Ave, Glen Arbor",
        url: "https://www.google.com/maps/search/?api=1&query=Art%27s+Tavern%2C+Glen+Arbor+MI",
        icon: "UtensilsCrossed",
        tag: "food",
      },
      {
        time: "~2:45 PM",
        title: "Glen Haven Village",
        description:
          "Historic lakeshore village with great island views — the Cannery boathouse museum (free), plus a swimmable beach if anyone wants to cool off. Optional add-on: drive ~1.5 mi west to Sleeping Bear Point for the 1901 Coast Guard Station Maritime Museum — the replica captain's wheel makes a great group photo.",
        url: "https://www.google.com/maps/search/?api=1&query=Glen+Haven+Village%2C+Glen+Arbor+MI",
        icon: "Waves",
        tag: "activity",
      },
      {
        time: "~5:00 PM",
        title: "Farm Club",
        description:
          "Dinner on the way home — farm/brewery/restaurant on the Leelanau side, ~7 mi from downtown TC (we route back via Lake Leelanau, so it's right on the way). Wood-fired food, house beer + wine, relaxed barn vibe. No reservations and the kitchen closes at 8 — with 12 of us let's aim for ~5. Worth a call to ask how they seat big groups: 231-252-3079.",
        location: "10051 S Lake Leelanau Dr",
        url: "https://www.google.com/maps/search/?api=1&query=Farm+Club%2C+10051+S+Lake+Leelanau+Dr%2C+Traverse+City+MI",
        icon: "UtensilsCrossed",
        tag: "food",
      },
    ],
  },
  {
    day: "Saturday",
    date: "June 27",
    title: "Traverse City Day",
    emoji: "🍻",
    summary: "Waterfront, arcade bar, ramen, breweries, sit-down dinner, nightlife",
    color: "amber",
    mapUrl: "https://maps.app.goo.gl/MEykTXzy7Eqk8gEK7",
    activities: [
      {
        time: "Morning",
        title: "Good Harbor Coffee & Bakery",
        description: "Fuel up before the day — coffee and fresh-baked pastries to get us moving. Easy starting spot downtown.",
        location: "111 W Front St",
        url: "https://www.google.com/maps/search/?api=1&query=Good+Harbor+Coffee+%26+Bakery%2C+111+W+Front+St%2C+Traverse+City+MI",
        icon: "Coffee",
        tag: "food",
      },
      {
        time: "Late morning",
        title: "Waterfront Walk",
        description: "Head into TC (~20 min). Walk Front Street & the Grand Traverse Bay waterfront. Clinch Park beach is at the bottom of downtown.",
        url: "https://www.google.com/maps/search/?api=1&query=Clinch+Park%2C+Traverse+City+MI",
        icon: "Waves",
        tag: "activity",
      },
      {
        time: "Noon",
        title: "Full Send Ramen",
        description: "Some of the best ramen in the Midwest, allegedly. We'll let Eric be the judge of that!",
        location: "346 E Front St",
        url: "https://www.google.com/maps/search/?api=1&query=Full+Send+Ramen%2C+346+E+Front+St%2C+Traverse+City+MI",
        icon: "UtensilsCrossed",
        tag: "food",
      },
      {
        time: "Noon",
        title: "The Coin Slot",
        description: "Old-school arcade bar — pinball, Guitar Hero, pool, etc. Same building as Full Send Ramen!",
        location: "346 E Front St",
        url: "https://www.google.com/maps/search/?api=1&query=The+Coin+Slot%2C+346+E+Front+St%2C+Traverse+City+MI",
        icon: "Gamepad2",
        tag: "drinks",
      },
      {
        time: "Afternoon",
        title: "Silver Spruce Brewing (pick one)",
        description:
          "Brewery option — we'll likely do just one of Silver Spruce or Right Brain. Big open space, Bull & the Bear food truck on site. ~10 min walk (0.6 miles) south of Front St.",
        location: "439 E Eighth St",
        url: "https://www.google.com/maps/search/?api=1&query=Silver+Spruce+Brewing%2C+Traverse+City+MI",
        icon: "Beer",
        tag: "drinks",
      },
      {
        time: "Afternoon",
        title: "Right Brain Brewery (pick one)",
        description:
          "Brewery option — we'll likely do just one of Silver Spruce or Right Brain. Brewpub with vintage pinball, great pizza + food truck. Short hop (1.2 miles) south of downtown; TC Whiskey Stillhouse nearby as well.",
        location: "225 E 16th St",
        url: "https://www.google.com/maps/search/?api=1&query=Right+Brain+Brewery%2C+225+E+16th+St%2C+Traverse+City+MI",
        icon: "Beer",
        tag: "drinks",
      },
      {
        time: "~6 PM",
        title: "Firefly",
        description:
          "Sit-down dinner. A little bit of everything: sushi, sandwiches, entrees, and drinks right on the Boardman River downtown. Confirmed they can seat 12 — call day-of to check the wait. We can pass the time at the Parlor (across the street) or Rare Bird or Brady's (a couple minutes walk).",
        location: "310 S Cass St",
        url: "https://www.google.com/maps/search/?api=1&query=Firefly%2C+310+S+Cass+St%2C+Traverse+City+MI",
        icon: "UtensilsCrossed",
        tag: "food",
      },
      {
        time: "Evening",
        title: "The Parlor",
        description: "Craft cocktails (smoked old fashioneds), live music till 11, pizza if still hungry.",
        location: "205 Lake Ave",
        url: "https://www.google.com/maps/search/?api=1&query=The+Parlor%2C+Traverse+City+MI",
        icon: "Music",
        tag: "drinks",
      },
      {
        time: "Late night",
        title: "Kilkenny's (optional)",
        description: "Underground Irish pub — dance floor, pool tables, live music, open till 2am. If we still have any energy left!",
        location: "400 ½ W Front St",
        url: "https://www.google.com/maps/search/?api=1&query=Kilkenny%27s+Irish+Pub%2C+Traverse+City+MI",
        icon: "PartyPopper",
        tag: "drinks",
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
    mapUrl: "https://maps.app.goo.gl/tAMBo6FSzcJknsJXA",
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
