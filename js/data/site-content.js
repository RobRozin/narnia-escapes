export const navItems = [
  { id: "home", label: "Home", href: "#home" },
  { id: "retreats", label: "Retreats", href: "#retreats" },
  { id: "sauna", label: "Sauna", href: "#sauna" },
  { id: "events", label: "Events", href: "#events" },
  { id: "about", label: "About", href: "#about" },
];

export const highlights = [
  {
    id: "retreats",
    href: "#retreats",
    imgSrc: "./images/highlights-retreats.jpeg",
    imgAlt: "Guided retreats at the cabin",
    title: "Guided Retreats",
    text: "Breathwork - Sound bath - Sauna & cold plunge - Hikes - Homemade meals",
  },
  {
    id: "sauna",
    href: "#sauna",
    imgSrc: "./images/highlights-sauna.jpeg",
    imgAlt: "Sauna experience with cold plunge",
    title: "Sauna Experience",
    text: "Wood-fired sauna - Cold plunge - Chill room - Herbal tea - Pondside relaxation",
  },
  {
    id: "events",
    href: "#events",
    imgSrc: "./images/highlights-events.jpg",
    imgAlt: "Private event with nature views",
    title: "Private Events",
    text: "Workshops, celebrations, or team resets - Custom session flow - Optional sound bathing & breathwork",
  },
];

export const retreatExperience = [
  "Wim Hof Method: breathwork, cold exposure, mindfulness",
  "Daily sauna ritual with cold plunge",
  "Guided sound baths & vibration therapy",
  "Qi Gong, hikes, stretching & interoceptive practices",
  "Community connection & evening wind-down",
  "Select dates: guest instructors (ecstatic dance, yoga, Thai massage)",
];

export const retreatLodging = [
  "Shared loft with 8 single beds",
  "3 full bathrooms with showers",
  "Full kitchen & Wi-Fi",
  "Wood stove heating",
];

export const retreatMeals = [
  "Grain/avocado bowls",
  "Hearty soups",
  "Pilaf (lamb/beef/chicken)",
  "Vegetable stew",
  '"Secret" fish dish',
  "Fire-cooked meals in a kazan (select nights)",
  "Vegetarian on request",
];

export const saunaIncluded = ["Aromatherapy", "Tea service", "Mineral water"];

export const saunaAddOns = [
  { label: "Platza (Venik) Massage", price: "$40" },
  { label: "Breathwork + Sound Baths", price: "$40" },
  { label: "Ice Bath", price: "$40", note: "(summer only)" },
  { label: "Soup + Salad", price: "$20" },
];

export const eventHighlightsLeft = [
  "Add the Narnia vibe to any workshop or private event",
  "Accommodations available with homemade meals",
];

export const eventHighlightsRight = [
  "Optional experiences: breathwork, cold exposure & sauna",
  "Need more room or private suites? Local Airbnb partners available",
];

export const contactMethods = [
  {
    id: "instagram",
    label: "Send on Instagram",
    brandColor: "#E1306C",
    brandText: "#FFFFFF",
    iconPath:
      "M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 4a5 5 0 100 10 5 5 0 000-10zm5-.8a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z",
  },
  {
    id: "messenger",
    label: "Send on Messenger",
    brandColor: "#0084FF",
    brandText: "#FFFFFF",
    iconPath:
      "M12 2C6.5 2 2 6 2 11.5c0 2.9 1.4 5.5 3.7 7.2V22l3.3-1.8c.9.2 1.8.3 2.8.3 5.5 0 10-4.5 10-10S17.5 2 12 2zm.1 13.7l-2.9-3.1-5.1 3.1 5.6-6.1 2.9 3.1 5.1-3.1-5.6 6.1z",
  },
  {
    id: "telegram",
    label: "Send on Telegram",
    brandColor: "#2AABEE",
    brandText: "#FFFFFF",
    iconPath:
      "M21.5 3.3l-19 7.3c-1.3.5-1.3 1.3-.2 1.6l4.9 1.5 11.5-7.7c.6-.4 1.2-.2.7.3l-9.3 8.8-.3 4c.5 0 .7-.2 1-.5l2.4-2.3 5 3.6c.9.5 1.6.2 1.8-.8l3.3-15.3c.3-1.5-.6-2.1-1.8-1.5z",
  },
  {
    id: "email",
    label: "Send Email",
    brandColor: "#706E49",
    brandText: "#FFFFFF",
    iconPath:
      "M2 6a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6zm2 0l8 5 8-5H4zm0 2.2v9.8h16V8.2l-8 5-8-5z",
  },
];

export const footerLinks = [
  {
    id: "instagram",
    label: "Instagram",
    href: "https://instagram.com/narniaescapes",
  },
  {
    id: "facebook",
    label: "Facebook",
    href: "https://facebook.com/narniaescapes",
  },
];

export const contactTemplates = {
  retreat:
    "Hello! I'm interested in joining one of your upcoming retreats. Could you share more details about locations, pricing, and available dates?",
  sauna:
    "Hi! I'd like to learn more about your sauna sessions. Could you share the schedule, pricing, and whether private bookings are available?",
  event:
    "Hello! I'm interested in hosting a private event. Could you tell me more about available venues, packages, and capacity limits?",
};

export const defaultContactMessage =
  "Hi! I'm interested in experiencing Narnia Escapes. Could you share details on your sessions and availability?";
