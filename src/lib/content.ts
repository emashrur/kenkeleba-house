export const org = {
  name: "Kenkeleba House",
  tagline: "Kenkeleba House and the Wilmer Jennings Gallery",
  phone: "212-674-3939",
  phoneHref: "+12126743939",
  email: "kenkeleba@msn.com",
  hours: "Wednesday to Saturday, 11am to 6pm",
  locations: [
    {
      name: "Kenkeleba House",
      address: "214 East 2nd Street",
      cityStateZip: "New York, NY 10009",
    },
    {
      name: "Wilmer Jennings Gallery at Kenkeleba",
      address: "219 East 2nd Street",
      cityStateZip: "New York, NY 10009",
    },
  ],
  blurb:
    "Kenkeleba House is a tax-exempt non-profit art gallery dedicated to celebrating and presenting the visual aesthetic and cultural legacy of African American artists and other artists of color historically overlooked by the art world establishment and cultural mainstream. Kenkeleba has been at the forefront of positive change in New York City's East Village for more than 50 years.",
};

export const about = {
  mission:
    "Kenkeleba House is an alternative art space, which includes Kenkeleba Gallery and the Wilmer Jennings Gallery. Its mission is to present, preserve, interpret and encourage the development of art by African Americans and the broader African Diaspora, as well as other artists overlooked by the cultural mainstream — Latino, Asian, Native American, and mature artists who have not received proper recognition.",
  vision:
    "Central to the mission is the preservation of the visual aesthetic and cultural legacy of African Americans and of African people worldwide. Kenkeleba fulfills its mission by exhibiting, documenting, and collecting art and artifacts, and by disseminating information to increase appreciation of African culture from a global perspective. Kenkeleba provides opportunities, supports the pursuit of excellence, encourages experimental work, and improves the quality of urban life through the arts.",
  history:
    "Kenkeleba House was founded in 1974 by Joe Overstreet, Corrine Jennings, and Samuel C. Floyd to support African American culture. Kenkeleba began its work on the Bowery near Delancey in New York City with experimental projects to assist African American, Caribbean, and African artists in developing and documenting their work. Early projects included exhibitions and experiments with poetry, music, and visual arts, along with workshops in dance, theater, children's programs, and African markets. The name Kenkeleba is derived from the Seh-Haw plant grown in West Africa, known for its spiritual, nutritional, and healing properties.",
  press: {
    quote: "a staunch holdover from the 1980s scene",
    source: "Grace Glueck, The New York Times, April 13, 2018",
    context:
      "has shown the work of more than 7,000 exhibitors, including Edward Mitchell Bannister, a 19th-century Black Canadian landscape painter, and Rose Piper, one of the first Black female painters to be given a solo show in New York.",
  },
  images: {
    historic: {
      src: "/images/about/building-historic.jpg",
      alt: "Black-and-white archival photo of the Kenkeleba House building on East 2nd Street, showing its weathered brick facade before renovation.",
    },
    current: {
      src: "/images/about/building-current.jpg",
      alt: "Color photograph of the renovated Kenkeleba House building today, a multi-story brick building with fire escapes on East 2nd Street.",
    },
  },
};

export type Exhibition = {
  slug: string;
  title: string;
  dateRange: string;
  status: "current" | "past";
  location?: string;
  curators?: string;
  artists?: string[];
  details?: string[];
  image: { src: string; alt: string };
};

export const currentExhibition: Exhibition = {
  slug: "turntable-visions-of-the-jazzmen",
  title: "Turntable: Visions of the Jazzmen",
  dateRange: "October 3 – December 5, 2026",
  status: "current",
  location: "Wilmer Jennings Gallery at Kenkeleba, 219 East 2nd Street at Avenue B, New York, NY 10009",
  curators: "Dick Griffin and Debra Vanderburg Spencer",
  artists: [
    "Marion Brown",
    "Will Calhoun",
    "Gerald Cannon",
    "Dick Griffin",
    "Oliver Lake",
    "Carmen Lundy",
    "Roscoe Mitchell",
    "Sun Ra",
    "Sonelius Smith",
  ],
  details: [
    "Opening Reception: Saturday, October 3, 3–6pm",
    "Artist Talk: Saturday, November 7, 3–5pm",
    "Supported in part by the Mosaic Fund and the Jazz Foundation of America.",
  ],
  image: {
    src: "/images/exhibitions/turntable.jpg",
    alt: "Exhibition card for Turntable: Visions of the Jazzmen, featuring a mixed-media collage of a jazz figure in a patterned robe against a radiating yellow background.",
  },
};

export const pastExhibitions: Exhibition[] = [
  {
    slug: "reimagining-landscape",
    title: "Reimagining Landscape",
    dateRange: "2026",
    status: "past",
    image: {
      src: "/images/exhibitions/reimagining-landscape.jpg",
      alt: "Exhibition announcement for Reimagining Landscape, an abstract landscape artwork in gold and deep green tones.",
    },
  },
  {
    slug: "algernon-miller-time-being",
    title: "Algernon Miller: Time Being",
    dateRange: "November 13, 2019 – January 2020",
    status: "past",
    details: ["Featured work: Artfortune, 2019. Paper, 37 x 42 in."],
    image: {
      src: "/images/exhibitions/algernon-miller.jpg",
      alt: "Artwork titled Artfortune by Algernon Miller, a mixed-media paper piece from the exhibition Time Being.",
    },
  },
  {
    slug: "passion-and-perseverance-in-haitian-art",
    title: "Passion & Perseverance in Haitian Art",
    dateRange: "September 11 – October 26, 2019",
    status: "past",
    artists: ["Emmanuel Merisier", "Michele Voltaire Marcelin", "Jean Dominique Volcy"],
    image: {
      src: "/images/exhibitions/haitian-art.jpg",
      alt: "Untitled 1999 acrylic on canvas painting by Emmanuel Merisier, featured in Passion & Perseverance in Haitian Art.",
    },
  },
  {
    slug: "global-metaphysics-of-abstraction-ii",
    title: "Global Metaphysics of Abstraction II",
    dateRange: "April 17 – May 25, 2019",
    status: "past",
    artists: [
      "Sheila Crider",
      "Tanda Francis",
      "Aziza Claudia Gibson-Hunter",
      "Musa Hixson",
      "Michael Marshall",
      "Joe Overstreet",
      "Ronald Walton",
    ],
    image: {
      src: "/images/exhibitions/global-metaphysics.jpg",
      alt: "Abstract artwork from the group exhibition Global Metaphysics of Abstraction II.",
    },
  },
  {
    slug: "tina-maria-dunkley-sanctuary",
    title: "Tina Maria Dunkley: Sanctuary for the Internal Enemy — An Ancestral Odyssey",
    dateRange: "January 16 – March 16, 2019",
    status: "past",
    details: ["Featured work: Memory Jug Series #7, 2016. Polyester plate lithograph, cyanotype, 28 x 20 in."],
    image: {
      src: "/images/exhibitions/tina-dunkley.jpg",
      alt: "Memory Jug Series #7 by Tina Maria Dunkley, a lithograph and cyanotype work from Sanctuary for the Internal Enemy.",
    },
  },
  {
    slug: "reflections-of-monk",
    title: "Reflections of Monk: Inspired Images of Music & Moods",
    dateRange: "2018",
    status: "past",
    image: {
      src: "/images/exhibitions/reflections-of-monk.jpg",
      alt: "Exhibition announcement image for Reflections of Monk, an exhibition of artwork inspired by Thelonious Monk.",
    },
  },
];

export type CollectionItem = {
  artist: string;
  title: string;
  medium?: string;
  image: { src: string; alt: string };
};

export const prints: CollectionItem[] = [
  {
    artist: "Dox Thrash",
    title: "Untitled",
    image: { src: "/images/collection/prints/dox-thrash.jpg", alt: "Print by Dox Thrash, part of the Kenkeleba House print collection." },
  },
  {
    artist: "Eldzier Cortor",
    title: "Untitled",
    image: { src: "/images/collection/prints/eldzier-cortor.jpg", alt: "Print by Eldzier Cortor, part of the Kenkeleba House print collection." },
  },
  {
    artist: "Al Loving",
    title: "Red Queen",
    image: { src: "/images/collection/prints/al-loving.jpg", alt: "Red Queen by Al Loving, part of the Kenkeleba House print collection." },
  },
  {
    artist: "James Lesesene Wells",
    title: "The Bridge",
    image: { src: "/images/collection/prints/james-wells.jpg", alt: "The Bridge by James Lesesene Wells, part of the Kenkeleba House print collection." },
  },
];

export const sculptures: CollectionItem[] = [
  {
    artist: "Artis Lane",
    title: "Amistad",
    medium: "Bronze with black patina, 1998",
    image: { src: "/images/collection/sculpture/amistad.jpg", alt: "Amistad by Artis Lane, a bronze sculpture with black patina, 1998." },
  },
  {
    artist: "Uzikee",
    title: "Bobo, The Flying Man",
    medium: "Steel and stained glass, 1992",
    image: { src: "/images/collection/sculpture/bobo-flying-man.jpg", alt: "Bobo, The Flying Man by Uzikee, a steel sculpture with tinted blue glass, 1992." },
  },
  {
    artist: "George Smith",
    title: "In Search of Sorghum",
    medium: "Painted steel, 1990",
    image: { src: "/images/collection/sculpture/sorghum.jpg", alt: "In Search of Sorghum by George Smith, a painted steel sculpture, 1990." },
  },
];

export const sculptureGardenImage = {
  src: "/images/collection/sculpture/garden-general.jpg",
  alt: "General view of the Kenkeleba House sculpture garden, with several large outdoor sculptures among trees and a fence.",
};
