export type GalleryPhoto = {
  src: string;
  alt: string;
  caption: string;
  category: "Stay" | "Tour";
};

export const guestPhotos: GalleryPhoto[] = [
  {"src": "/images/guest-moments/family-welcome.jpeg", "alt": "Guests and the host family standing together in the living room", "caption": "A warm family welcome", "category": "Stay"},
  {"src": "/images/guest-moments/children-playing.jpeg", "alt": "Children playing together inside the homestay", "caption": "New friends at home", "category": "Stay"},
  {"src": "/images/guest-moments/veranda-breakfast.jpeg", "alt": "Guests sharing breakfast at the veranda dining table", "caption": "Breakfast on the veranda", "category": "Stay"},
  {"src": "/images/guest-moments/garden-breakfast.jpeg", "alt": "A family enjoying breakfast beside the garden", "caption": "Mornings by the garden", "category": "Stay"},
  {"src": "/images/guest-moments/veranda-group-selfie.jpeg", "alt": "Hosts and guests taking a group selfie on the veranda", "caption": "Smiles on the veranda", "category": "Stay"},
  {"src": "/images/guest-moments/family-and-guests.jpeg", "alt": "Guests taking a selfie with children outside the family home", "caption": "Shared village memories", "category": "Stay"},
  {"src": "/images/guest-moments/village-evening-walk.jpeg", "alt": "Adults and children walking along a red-earth village road at dusk", "caption": "An evening village walk", "category": "Tour"},
  {"src": "/images/guest-moments/safari-jeep-gathering.jpeg", "alt": "Guests and their guide beside safari jeeps under a large tree", "caption": "Ready for a day out", "category": "Tour"},
  {"src": "/images/guest-moments/guesthouse-garden-selfie.jpeg", "alt": "Guests and the host family taking a selfie outside the guesthouse", "caption": "Together in the garden", "category": "Stay"},
  {"src": "/images/guest-moments/shared-table.jpeg", "alt": "A group of guests sharing a meal on the covered veranda", "caption": "Around the family table", "category": "Stay"},
  {"src": "/images/guest-moments/garden-farewell.jpeg", "alt": "Guests posing with their host outside the veranda", "caption": "Memories to take home", "category": "Stay"},
  {"src": "/images/guest-moments/hilltop-view.jpeg", "alt": "A guide and two guests at a hilltop viewpoint above a white Buddha statue", "caption": "Views worth sharing", "category": "Tour"},
  {"src": "/images/guest-moments/veranda-family-portrait.jpeg", "alt": "Hosts and visiting guests standing together on the veranda with a dog nearby", "caption": "Good company at Green Village", "category": "Stay"},
  {"src": "/images/guest-moments/safari-jeep-ride.jpeg", "alt": "Guests and their guide seated in an open safari jeep", "caption": "Setting off together", "category": "Tour"},
  {"src": "/images/guest-moments/homestay-selfie.jpeg", "alt": "Guests and hosts taking a selfie outside the brick-fronted homestay", "caption": "A personal welcome", "category": "Stay"},
];

export const stayPhotos: GalleryPhoto[] = [
  { src: "/images/family-guest-welcome.webp", alt: "Gunarathna and his family welcoming guests at Green Village", caption: "Guests become family", category: "Stay" },
  { src: "/images/stay/40e420b66f1aaf5f.avif", alt: "Green Village guesthouse beneath tropical trees", caption: "Welcome to Green Village", category: "Stay" },
  { src: "/images/stay/07f62aac7dcc57fb.avif", alt: "Guest room with two neatly prepared beds", caption: "Room for a restful stay", category: "Stay" },
  { src: "/images/stay/8c421cecd935a55c.avif", alt: "Green Village guest room with dressing table and window", caption: "Simple village comfort", category: "Stay" },
  { src: "/images/stay/bb7847e07c47b513.avif", alt: "Chairs on the private guesthouse veranda", caption: "A quiet veranda", category: "Stay" },
  { src: "/images/stay/7145002ed9686a48.avif", alt: "Peaceful river bordered by tropical greenery near Green Village", caption: "Nature close by", category: "Stay" },
  ...guestPhotos.filter((photo) => photo.category === "Stay"),
];

export const tourPhotos: GalleryPhoto[] = [
  { src: "/images/experiences/521903808b0729ec.avif", alt: "White stupa framed by trees in Anuradhapura", caption: "The sacred city", category: "Tour" },
  { src: "/images/experiences/2251ed5e151374c6.avif", alt: "Colourful Buddhist shrine inside a rock temple", caption: "Rock temple stories", category: "Tour" },
  { src: "/images/experiences/2a24645fc4517e58.avif", alt: "Reclining Buddha within a painted temple", caption: "Living traditions", category: "Tour" },
  { src: "/images/experiences/3b640855d67132aa.avif", alt: "Ancient stone ruins among large boulders", caption: "Layers of history", category: "Tour" },
  { src: "/images/experiences/3c3996c6422ab0a2.avif", alt: "White Anuradhapura stupa beneath dramatic clouds", caption: "Sacred scale", category: "Tour" },
  { src: "/images/experiences/4337ac1bfeba3f5c.avif", alt: "Gunarathna walking beneath a monumental rock shelter", caption: "Hidden places", category: "Tour" },
  { src: "/images/experiences/4c1e9a4592c7d9da.avif", alt: "Green rice fields and coconut palms near Anuradhapura", caption: "Village horizons", category: "Tour" },
  { src: "/images/experiences/542507e3110466d3.avif", alt: "Gunarathna smiling on a bridge during an Anuradhapura tour", caption: "Your local guide", category: "Tour" },
  { src: "/images/experiences/779b1bf74211ee25.avif", alt: "Guests walking a lakeside path under a blue sky", caption: "Unhurried journeys", category: "Tour" },
  { src: "/images/experiences/7870e5d3be1d0ffd.avif", alt: "Gunarathna inside an ancient rock shelter", caption: "Beyond the guidebook", category: "Tour" },
  { src: "/images/experiences/7b18bb523d9c7f77.avif", alt: "Historic rock temple entrance in Anuradhapura", caption: "Ancient architecture", category: "Tour" },
  { src: "/images/experiences/8af286a73cc352ac.avif", alt: "Wide green view across the Anuradhapura landscape", caption: "Views across the region", category: "Tour" },
  { src: "/images/experiences/8cf3bd2923735408.avif", alt: "Close view of a white stupa in Anuradhapura", caption: "Monumental details", category: "Tour" },
  { src: "/images/experiences/93e9532789b5936c.avif", alt: "Ancient reservoir surrounded by palm trees", caption: "Reservoir calm", category: "Tour" },
  { src: "/images/experiences/acfd100d-f09f-4a0b-940b-d5becf9620f0.jpeg", alt: "Tropical view across an ancient reservoir", caption: "Water and wide skies", category: "Tour" },
  { src: "/images/experiences/b66e007fa25da37d.avif", alt: "Guests walking beneath a broad tree beside a reservoir", caption: "Walk at a local pace", category: "Tour" },
  { src: "/images/experiences/c24bb9222f3c1274.avif", alt: "White stupa rising above the sacred city", caption: "Anuradhapura icon", category: "Tour" },
  { src: "/images/experiences/c4253e6c91dfc117.avif", alt: "Gunarathna with a family of guests during a tour", caption: "Journeys shared", category: "Tour" },
  { src: "/images/experiences/c5be9ffe13d7fc46.avif", alt: "Guest taking a selfie with Gunarathna", caption: "Personal memories", category: "Tour" },
  { src: "/images/experiences/c93fb8fa1d4a4666.avif", alt: "Curved white wall of an Anuradhapura stupa", caption: "Sacred geometry", category: "Tour" },
  { src: "/images/experiences/ca32102d215e558a.avif", alt: "Historic rock site beneath a cloud-filled sky", caption: "Stone and sky", category: "Tour" },
  { src: "/images/experiences/cfd16fe57f0fad6f.avif", alt: "Temple gateway beneath old trees", caption: "A living sacred place", category: "Tour" },
  { src: "/images/experiences/d49149facce49eeb.avif", alt: "Ornate entrance to an Anuradhapura temple", caption: "Temple approach", category: "Tour" },
  { src: "/images/experiences/e1ae053df0b784c7.avif", alt: "Gunarathna with visiting guests beneath a large tree", caption: "Good company", category: "Tour" },
  { src: "/images/experiences/ec6e79821fe8f396.avif", alt: "Ancient spreading tree beside a rural path", caption: "Quiet paths", category: "Tour" },
  { src: "/images/experiences/fff9075b433136ea.avif", alt: "Sunlight filtering through the branches of an old tree", caption: "Shade along the way", category: "Tour" },
  ...guestPhotos.filter((photo) => photo.category === "Tour"),
];

export const galleryPhotos = [
  stayPhotos[0],
  tourPhotos[0],
  stayPhotos[5],
  tourPhotos[7],
  stayPhotos[1],
  tourPhotos[8],
  tourPhotos[1],
  stayPhotos[4],
  ...tourPhotos.slice(2, 7),
  stayPhotos[2],
  stayPhotos[3],
  ...tourPhotos.slice(9, 26),
  ...guestPhotos,
];
