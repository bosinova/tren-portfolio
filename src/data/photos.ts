const BASE = "https://portfolio-images.tren-walker.workers.dev";

export interface Photo {
  id: number;
  src: string;
  title: string;
  location: string;
  collection: string;
  aspect: string;
}

export const photos: Photo[] = [
  // ── INFRARED ──────────────────────────────
  { id: 8,  src: `${BASE}/DSCF9679.JPG`,         title: "Weeping",         location: "Pacific Northwest", collection: "Infrared",       aspect: "portrait"  },
  { id: 3,  src: `${BASE}/DSCF0046.jpg`,         title: "Creek",           location: "Hoh Rain Forest",   collection: "Infrared",       aspect: "portrait"  },
  { id: 4,  src: `${BASE}/DSCF0074.jpg`,         title: "Cathedral Forest",location: "Hoh Rain Forest",   collection: "Infrared",       aspect: "landscape" },
  { id: 6,  src: `${BASE}/DSCF9848(1).JPG`,      title: "Driftwood",       location: "Pacific Northwest", collection: "Infrared",       aspect: "landscape" },
  { id: 13, src: `${BASE}/DSCF9065.jpg`,         title: "Ridgeline",       location: "Pacific Northwest", collection: "Infrared",       aspect: "landscape" },
  { id: 15, src: `${BASE}/DSCF9942.jpg`,         title: "Reverie",         location: "Pacific Northwest", collection: "Infrared",       aspect: "portrait"  },
  { id: 85, src: `${BASE}/infrared-tree-neoclassical-building.jpg`,                title: "Ghost",          location: "Tacoma, WA",              collection: "Infrared",       aspect: "portrait"  },
  { id: 86, src: `${BASE}/infrared-forest-path-fence.jpg`, title: "Into the Wood", location: "Bothell, WA", collection: "Infrared", aspect: "portrait" },

  // ── COLOR INFRARED ────────────────────────
  { id: 11, src: `${BASE}/DSCF9986(1).JPG`,      title: "Olympic",         location: "Olympic Peninsula", collection: "Color Infrared", aspect: "landscape" },
  { id: 12, src: `${BASE}/DSCF9043.jpg`,         title: "Gap",             location: "Olympic Peninsula", collection: "Color Infrared", aspect: "portrait"  },
  { id: 9,  src: `${BASE}/DSCF9246(1).jpg`,      title: "Luminance",       location: "Pacific Northwest", collection: "Color Infrared", aspect: "portrait"  },
  { id: 5,  src: `${BASE}/DSCF9353(1).jpg`,      title: "The Path",        location: "Pacific Northwest", collection: "Color Infrared", aspect: "portrait"  },
  { id: 83, src: `${BASE}/tacoma-museum-of-glass-infrared.jpg`,                    title: "Old and New",    location: "Tacoma, WA",              collection: "Color Infrared", aspect: "landscape" },
  { id: 84,  src: `${BASE}/tacoma-museum-stairs-infrared.jpg`,                     title: "The Climb",      location: "Tacoma, WA",        collection: "Color Infrared", aspect: "landscape" },

  // ── AFTER DARK ────────────────────────────
  { id: 14, src: `${BASE}/DSCF9239(1).jpg`,      title: "Light Trails",    location: "Bellevue, WA",      collection: "After Dark",     aspect: "landscape" },
  { id: 10, src: `${BASE}/DSCF9215(1).jpg`,      title: "Violet",          location: "Pacific Northwest", collection: "After Dark",     aspect: "portrait"  },
  { id: 17, src: `${BASE}/DSCF9212(1).jpg`,      title: "Bloom",           location: "Pacific Northwest", collection: "After Dark",     aspect: "portrait"  },
  { id: 87, src: `${BASE}/park-night-uplighting-benches-bw.jpg`,                   title: "Vigil",          location: "Tacoma, WA",              collection: "After Dark",     aspect: "landscape" },
  { id: 88, src: `${BASE}/seattle-broad-street-blue-hour.jpg`,                     title: "Broad",          location: "Seattle, WA",             collection: "After Dark",     aspect: "landscape" },
  { id: 89, src: `${BASE}/seattle-international-fountain-space-needle-dusk.jpg`,   title: "Reach",          location: "Seattle, WA",             collection: "After Dark",     aspect: "portrait"  },
  { id: 90,  src: `${BASE}/seattle-stadium-arches-sunset.jpg`,                     title: "Twin Arcs",      location: "Seattle, WA",       collection: "After Dark",     aspect: "landscape" },

  // ── ARCHITECTURE ──────────────────────────
  { id: 18, src: `${BASE}/DSCF9918(1).JPG`,      title: "Victorian",       location: "Port Townsend, WA", collection: "Architecture",   aspect: "portrait"  },
  { id: 23, src: `${BASE}/APC_1926(1).JPG`,      title: "Pipework",        location: "Seattle, WA",       collection: "Architecture",   aspect: "landscape" },
  { id: 31, src: `${BASE}/IMG_1546.JPG`,          title: "Public Market",   location: "Seattle, WA",       collection: "Architecture",   aspect: "landscape" },
  { id: 32, src: `${BASE}/DSCF1516.JPG`,          title: "Red Door",        location: "Pacific Northwest", collection: "Architecture",   aspect: "landscape" },
  { id: 78, src: `${BASE}/architecture-steel-sphere-silhouette.jpg`,               title: "Exoskeleton",    location: "Tokyo, Japan",            collection: "Architecture",   aspect: "portrait"  },
  { id: 79, src: `${BASE}/tokyo-forum-interior-atrium.jpg`,                        title: "Nave",           location: "Tokyo, Japan",            collection: "Architecture",   aspect: "portrait"  },
  { id: 80, src: `${BASE}/corrugated-tunnel-spiral-light.jpg`,                     title: "The End",        location: "Tacoma, WA",              collection: "Architecture",   aspect: "landscape" },
  { id: 81, src: `${BASE}/old-city-hall-blue-monochrome.jpg`,                      title: "Civic",          location: "Tacoma, WA",              collection: "Architecture",   aspect: "landscape" },
  { id: 82,  src: `${BASE}/port-townsend-victorian-building-bw.jpg`,               title: "Gilded",         location: "Port Townsend, WA", collection: "Architecture",   aspect: "portrait"  },

  // ── PORTRAITS ─────────────────────────────
  { id: 22, src: `${BASE}/IMG_2571_jpg(1).JPG`,  title: "Autumn",          location: "Pacific Northwest", collection: "Portraits",      aspect: "portrait"  },
  { id: 28, src: `${BASE}/APC_0101(1).JPG`,      title: "Café",            location: "Cuenca, Ecuador",   collection: "Portraits",      aspect: "portrait"  },
  { id: 29, src: `${BASE}/DSC09353(1).JPG`,      title: "Dusk",            location: "Pacific Northwest", collection: "Portraits",      aspect: "landscape" },
  { id: 30, src: `${BASE}/DSC09357(1).JPG`,      title: "Horizon",         location: "Pacific Northwest", collection: "Portraits",      aspect: "landscape" },

  // ── FILM ──────────────────────────────────
  { id: 25, src: `${BASE}/IMG_3226.JPG`,         title: "Tulips",          location: "Pacific Northwest", collection: "Film",           aspect: "landscape" },
  { id: 26, src: `${BASE}/img008.png`,           title: "Tail Fin",        location: "Pacific Northwest", collection: "Film",           aspect: "portrait"  },
  { id: 27, src: `${BASE}/img006.png`,           title: "Chrome",          location: "Pacific Northwest", collection: "Film",           aspect: "landscape" },
  { id: 91,  src: `${BASE}/film-rhododendron-backlit-bw.jpg`,                      title: "Bloom",          location: "Bothell, WA",       collection: "Film",           aspect: "portrait"  },

  // ── PERU ──────────────────────────────────
  { id: 40, src: `${BASE}/cusco-festival-dancer-ribbons.jpg`,       title: "Ribbons",          location: "Cusco, Peru",          collection: "Peru", aspect: "portrait"  },
  { id: 41, src: `${BASE}/dancer-embroidered-butterfly-vest.jpg`,   title: "Before the Dance", location: "Cusco, Peru",          collection: "Peru", aspect: "portrait"  },
  { id: 42, src: `${BASE}/military-cadets-uniform-inspection.jpg`,  title: "Ready",            location: "Cusco, Peru",          collection: "Peru", aspect: "landscape" },
  { id: 43, src: `${BASE}/ollantaytambo-quechua-elder.jpg`,         title: "Still",            location: "Ollantaytambo, Peru",  collection: "Peru", aspect: "portrait"  },
  { id: 44, src: `${BASE}/ollantaytambo-street-scene.jpg`,          title: "Plaza",            location: "Ollantaytambo, Peru",  collection: "Peru", aspect: "landscape" },
  { id: 45, src: `${BASE}/DSC_0944.jpg`,                            title: "Emergence",        location: "Machu Picchu, Peru",   collection: "Peru", aspect: "landscape" },
  { id: 61, src: `${BASE}/inca-doorway-water-channel.jpg`,          title: "Threshold",        location: "Ollantaytambo, Peru",  collection: "Peru", aspect: "portrait"  },
  { id: 46, src: `${BASE}/inca-wall-andes-sunbeams.jpg`,            title: "The Other View",   location: "Machu Picchu, Peru",   collection: "Peru", aspect: "landscape" },
  { id: 47, src: `${BASE}/intihuatana-stone-mountain.jpg`,          title: "Hitching Post",    location: "Machu Picchu, Peru",   collection: "Peru", aspect: "landscape" },
  { id: 48, src: `${BASE}/llama-back-of-head.jpg`,                  title: "Elsewhere",        location: "Machu Picchu, Peru",   collection: "Peru", aspect: "portrait"  },
  { id: 49, src: `${BASE}/llama-portrait-blue-bokeh.jpg`,           title: "Double Take",      location: "Machu Picchu, Peru",   collection: "Peru", aspect: "portrait"  },
  { id: 50, src: `${BASE}/llama-stone-ledge-mist.jpg`,              title: "Resident",         location: "Machu Picchu, Peru",   collection: "Peru", aspect: "landscape" },
  { id: 54, src: `${BASE}/llama-mist-profile.jpg`,                  title: "Profile",          location: "Machu Picchu, Peru",   collection: "Peru", aspect: "portrait"  },
  { id: 62, src: `${BASE}/llama-ruins-photobomb.jpg`,               title: "Unimpressed",      location: "Machu Picchu, Peru",   collection: "Peru", aspect: "portrait"  },
  { id: 55, src: `${BASE}/machu-picchu-morning-mist-overview.jpg`,  title: "Morning",          location: "Machu Picchu, Peru",   collection: "Peru", aspect: "landscape" },
  { id: 56, src: `${BASE}/machu-picchu-overview-clearing-mist.jpg`, title: "Clearing",         location: "Machu Picchu, Peru",   collection: "Peru", aspect: "landscape" },
  { id: 57, src: `${BASE}/machu-picchu-ruins-wildflowers.jpg`,      title: "Discovery",        location: "Machu Picchu, Peru",   collection: "Peru", aspect: "landscape" },
  { id: 63, src: `${BASE}/machu-picchu-wildflower-reveal.jpg`,      title: "Reveal",           location: "Machu Picchu, Peru",   collection: "Peru", aspect: "landscape" },
  { id: 58, src: `${BASE}/machu-picchu-silhouette-mist.jpg`,        title: "Above the World",  location: "Machu Picchu, Peru",   collection: "Peru", aspect: "landscape" },
  { id: 64, src: `${BASE}/machu-picchu-guardhouse-mounds.jpg`,      title: "Sentinels",        location: "Machu Picchu, Peru",   collection: "Peru", aspect: "landscape" },
  { id: 59, src: `${BASE}/machu-picchu-terraces-lone-tree.jpg`,     title: "Solitary",         location: "Machu Picchu, Peru",   collection: "Peru", aspect: "landscape" },
  { id: 65, src: `${BASE}/machu-picchu-thatched-huts-dusk.jpg`,     title: "Blue Hour",        location: "Machu Picchu, Peru",   collection: "Peru", aspect: "landscape" },
  { id: 66, src: `${BASE}/machu-picchu-inca-path-blue-hour.jpg`,    title: "The Path",         location: "Machu Picchu, Peru",   collection: "Peru", aspect: "portrait"  },
  { id: 67, src: `${BASE}/machu-picchu-figure-discovery.jpg`,       title: "Found",            location: "Machu Picchu, Peru",   collection: "Peru", aspect: "portrait"  },
  { id: 68, src: `${BASE}/huayna-picchu-summit-fog.jpg`,            title: "Summit",           location: "Machu Picchu, Peru",   collection: "Peru", aspect: "landscape" },
  { id: 69, src: `${BASE}/huayna-picchu-clouds.jpg`,                title: "Above All",        location: "Machu Picchu, Peru",   collection: "Peru", aspect: "landscape" },
  { id: 70, src: `${BASE}/machu-picchu-stone-and-rock.jpg`,         title: "Foundation",       location: "Machu Picchu, Peru",   collection: "Peru", aspect: "portrait"  },

  // ── ECUADOR ───────────────────────────────
  { id: 92, src: `${BASE}/IMG_2086.jpg`,          title: "Benediction",  location: "Quito, Ecuador", collection: "Ecuador", aspect: "portrait"  },
  { id: 51, src: `${BASE}/DSCF9399.JPG`,          title: "El Panecillo", location: "Quito, Ecuador", collection: "Ecuador", aspect: "landscape" },
  { id: 52, src: `${BASE}/DSCF9388.JPG`,          title: "Ascent",       location: "Quito, Ecuador", collection: "Ecuador", aspect: "portrait"  },
  { id: 53, src: `${BASE}/DSCF9430.JPG`,          title: "Cathedral",    location: "Quito, Ecuador", collection: "Ecuador", aspect: "portrait"  },
  { id: 60, src: `${BASE}/ecuador-llama.jpg`,      title: "On the Line",  location: "Mitad del Mundo, Ecuador", collection: "Ecuador", aspect: "portrait"  },
  { id: 71, src: `${BASE}/virgen-panecillo-quito-bw.jpg`,                          title: "Crowned",        location: "Quito, Ecuador",          collection: "Ecuador",        aspect: "portrait"  },
  { id: 72, src: `${BASE}/ecuador-precolumbian-idol-infrared.jpg`,                 title: "Ancient",        location: "Quito, Ecuador",          collection: "Ecuador",        aspect: "portrait"  },
  { id: 73, src: `${BASE}/quito-infrared-cityscape-volcano.jpg`,                   title: "Panorama",       location: "Quito, Ecuador",          collection: "Ecuador",        aspect: "landscape" },
  { id: 74, src: `${BASE}/ecuador-cathedral-bronze-doors-figure.jpg`,              title: "Threshold",      location: "Quito, Ecuador",          collection: "Ecuador",        aspect: "portrait"  },
  { id: 75, src: `${BASE}/ecuador-spiral-staircase-wood.jpg`,                      title: "Descend",        location: "Quito, Ecuador",          collection: "Ecuador",        aspect: "portrait"  },
  { id: 76, src: `${BASE}/pululahua-crater-valley-infrared-portrait.jpg`,          title: "The Crater",     location: "Pululahua, Ecuador",      collection: "Ecuador",        aspect: "portrait"  },
  { id: 77, src: `${BASE}/pululahua-crater-valley-infrared-landscape.jpg`, title: "Below the Rim", location: "Pululahua, Ecuador", collection: "Ecuador", aspect: "landscape" },
];

export const COLLECTIONS = ["All", "Infrared", "Color Infrared", "After Dark", "Architecture", "Portraits", "Film", "Peru", "Ecuador"];

export const TRAVEL_SECTIONS: { label: string; collection: string; meta: string }[] = [
  { label: "Peru",    collection: "Peru",    meta: "Cusco · Ollantaytambo · Machu Picchu" },
  { label: "Ecuador", collection: "Ecuador", meta: "Quito" },
];

// ── MOOD QUIZ TAGGING ──────────────────────
// Default mood tags applied to every photo in a collection.
// See mood-quiz-framework.md for the question flow these tags are matched against.
export const COLLECTION_MOODS: Record<string, string[]> = {
  "Infrared":       ["dreamy", "quiet", "otherworldly"],
  "Color Infrared": ["dreamy", "warm", "otherworldly"],
  "After Dark":     ["nocturnal", "bold", "structural"],
  "Architecture":   ["stark", "bold", "structural"],
  "Portraits":      ["reflective", "warm", "human"],
  "Film":           ["nostalgic", "quiet", "human"],
  "Peru":           ["faraway", "bold", "journey"],
  "Ecuador":        ["faraway", "dreamy", "journey"],
};

// Per-photo overrides: extra tags layered on top of the collection defaults,
// for specific images that should surface more often regardless of collection.
export const MOOD_OVERRIDES: Record<number, string[]> = {
  71: ["bold"],   // "Crowned" — Virgen de El Panecillo, Quito
  48: ["warm"],   // "Elsewhere" — llama, Machu Picchu
  49: ["warm"],   // "Double Take" — llama, Machu Picchu
  50: ["warm"],   // "Resident" — llama, Machu Picchu
  54: ["warm"],   // "Profile" — llama, Machu Picchu
  62: ["warm"],   // "Unimpressed" — llama, Machu Picchu
  60: ["warm"],   // "On the Line" — llama, Mitad del Mundo, Ecuador
};

export function getPhotoMoods(photo: Photo): string[] {
  const base = COLLECTION_MOODS[photo.collection] || [];
  const extra = MOOD_OVERRIDES[photo.id] || [];
  return Array.from(new Set([...base, ...extra]));
}
