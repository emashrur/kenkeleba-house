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

export type TimelineImage = { src: string; alt: string; caption?: string };

export type TimelineEvent = {
  slug: string;
  category: "Exhibition" | "Music" | "Community" | "Literary";
  title: string;
  dateRange: string;
  subtitle?: string;
  description?: string;
  images: TimelineImage[];
};

export const timelineEvents: TimelineEvent[] = [
  {
    slug: "figures-light-and-abstraction",
    category: "Exhibition",
    title: "Figures Light and Abstraction",
    dateRange: "July 17 – August 29, 2024",
    subtitle: "Ashley Cole, Kevin Cole, James A. Brown, Cynthia Hawkins, and Debra Priestly",
    description:
      "Curated by Lamerol Gatewood and Michael Marshall at the Wilmer Jennings Gallery, this exhibition brought together artists working across painting, collage, and mixed media to explore freedom and identity through figure, light, and abstraction.",
    images: [
      { src: "/images/timeline/figures-light/poster.jpg", alt: "Exhibition postcard for Figures Light and Abstraction, featuring Cole, Bellows, 2023, mixed media on canvas." },
      { src: "/images/timeline/figures-light/install-1.jpg", alt: "Gallery installation view of a large patchwork mixed-media wall piece at Figures Light and Abstraction." },
      { src: "/images/timeline/figures-light/install-2.jpg", alt: "Installation view showing a colorful wall-mounted assemblage sculpture beside framed works." },
      { src: "/images/timeline/figures-light/install-3.jpg", alt: "Two draped fabric and mixed-media artworks installed on a gallery wall." },
      { src: "/images/timeline/figures-light/pink-green.jpg", alt: "A large abstract painting in pink and green tones hanging in the gallery." },
    ],
  },
  {
    slug: "michael-kelly-williams-crossings",
    category: "Exhibition",
    title: "Michael Kelly Williams: Crossings",
    dateRange: "September 18 – November 2, 2024",
    subtitle: "Curated by Debra Vanderburg Spencer",
    description:
      "A five-decade survey of sculpture, prints, and works on paper by Detroit-born, New York-based artist Michael Kelly Williams, whose two- and three-dimensional work draws on music and Jazz improvisation. The run included a discussion with Williams and writer Herb Boyd.",
    images: [
      { src: "/images/timeline/mkw/assemblage.jpg", alt: "Colorful wall-mounted assemblage sculpture by Michael Kelly Williams." },
      { src: "/images/timeline/mkw/framed-work.jpg", alt: "Framed mixed-media collage in warm red and orange tones by Michael Kelly Williams." },
      { src: "/images/timeline/mkw/intervale-study.jpg", alt: "Intervale Study, a monoprint with pastel by Michael Kelly Williams in blue and teal tones." },
      { src: "/images/timeline/mkw/install.jpg", alt: "Gallery wall with three framed works on paper and a visitor viewing the show." },
      { src: "/images/timeline/mkw/sculpture-fiddle.jpg", alt: "A found-object sculpture shaped like a violin or fiddle, mounted on the gallery wall." },
      { src: "/images/timeline/mkw/sculpture-basket.jpg", alt: "A woven basket-form sculpture displayed on a pedestal." },
      { src: "/images/timeline/mkw/sculpture-flower.jpg", alt: "A small sculptural work resembling an orange flower, mounted on the wall." },
      { src: "/images/timeline/mkw/event-chat.jpg", alt: "Three visitors in conversation at the Crossings opening reception." },
      { src: "/images/timeline/mkw/event-portrait.jpg", alt: "Two women posing together at the Crossings opening reception." },
    ],
  },
  {
    slug: "musicians-at-kenkeleba",
    category: "Music",
    title: "Musicians at Kenkeleba",
    dateRange: "2024 – 2025",
    subtitle: "Music Programs at Kenkeleba House",
    description:
      "Live music has long been part of Kenkeleba's programming, with performances woven into exhibition openings throughout the year — including a trio of Pheeroan AkLaff on drums, Will Cameron on bass, and Jun Miyake on saxophone, and Grammy-nominated Alberto Alba.",
    images: [
      { src: "/images/timeline/musicians/trio.jpg", alt: "Pheeroan AkLaff on drums and Jun Miyake on saxophone performing in the gallery, with Will Cameron on bass." },
    ],
  },
  {
    slug: "mysteries-of-connections",
    category: "Exhibition",
    title: "Mysteries of Connections and the Cultural Patterns",
    dateRange: "December 11, 2024 – February 1, 2025",
    subtitle: "Zheng Xue and Hiromitsu Kuroo, curated by Kimmy Li",
    description:
      "Beijing-born Zheng Xue and Yokohama-born Hiromitsu Kuroo presented paintings and folded and flattened works on paper exploring cross-cultural dialogue between Asian artistic traditions and the mysterious interconnectedness of systems.",
    images: [
      { src: "/images/timeline/mysteries/artist-portrait.jpg", alt: "Artist Zheng Xue in red with a guest in front of a large colorful painting." },
      { src: "/images/timeline/mysteries/piano-performance.jpg", alt: "A pianist performing in the gallery in front of a teal and black painting." },
      { src: "/images/timeline/mysteries/framed-works.jpg", alt: "Two framed works on paper in pink and orange tones by Hiromitsu Kuroo and Zheng Xue." },
      { src: "/images/timeline/mysteries/fiber-work.jpg", alt: "A framed sculptural fiber work in yellow thread by Hiromitsu Kuroo." },
    ],
  },
  {
    slug: "poetry-reading-tar-baby",
    category: "Literary",
    title: "Poetry Reading: Tar Baby Magazine Launch",
    dateRange: "Early 2025",
    description:
      "Kenkeleba hosted the launch of Tar Baby Magazine, featuring cover subject Felipe Luciano, with pianist Mamiko Watanabe and live jazz drawing a full house for the reading.",
    images: [
      { src: "/images/timeline/poetry/tarbaby-cover.jpg", alt: "A guest holding a copy of Tar Baby Magazine featuring Felipe Luciano on the cover." },
      { src: "/images/timeline/poetry/luciano-speaking.jpg", alt: "Felipe Luciano speaking at the podium during the Tar Baby Magazine launch." },
      { src: "/images/timeline/musicians/watanabe.jpg", alt: "Pianist Mamiko Watanabe performing at the Tar Baby Magazine launch." },
      { src: "/images/timeline/poetry/band.jpg", alt: "A jazz trio performing with upright bass and saxophone at the Tar Baby Magazine launch." },
      { src: "/images/timeline/poetry/band-wide.jpg", alt: "A jazz band performing for a full room at the Tar Baby Magazine launch." },
      { src: "/images/timeline/poetry/guests.jpg", alt: "Two guests posing together, one holding a copy of Tar Baby Magazine." },
    ],
  },
  {
    slug: "analogies-signs-and-symbols",
    category: "Exhibition",
    title: "Analogies, Signs and Symbols",
    dateRange: "February 19 – March 29, 2025",
    subtitle:
      "Charles Alston, Edward Mitchell Bannister, John Biggers, Elizabeth Catlett, David Hammons, Norman Lewis, Joe Overstreet, Rose Piper, Henry O. Tanner, and others",
    description:
      "A historical group exhibition exploring the experience of Black History in America across nearly 150 years of printmaking, painting, and pastel, from the era of slavery and abolition to the Great Migration and beyond.",
    images: [
      { src: "/images/timeline/analogies/ruins-landscape.jpg", alt: "Yolene Legrand, Ruins of the Old Slave Hospital, 2005 — a color photograph of ruins beneath large trees." },
      { src: "/images/timeline/analogies/woodcut.jpg", alt: "A framed black-and-white woodcut print depicting a group of figures." },
      { src: "/images/timeline/analogies/abstract-red.jpg", alt: "A large abstract painting in red and blue tones." },
      { src: "/images/timeline/analogies/red-hexagon.jpg", alt: "A red print featuring portraits arranged in a hexagonal pattern." },
      { src: "/images/timeline/analogies/jars.jpg", alt: "A photographic artwork depicting mason jars each containing a historical portrait." },
      { src: "/images/timeline/analogies/flag.jpg", alt: "A framed American flag rendered in the red, black, and green of the Pan-African flag." },
    ],
  },
  {
    slug: "childrens-art-show-2025",
    category: "Community",
    title: "Children's Art Show: The Earth School Mystery Art Show",
    dateRange: "April 4, 2025",
    subtitle: "Featuring artwork from students, teachers, and local artists",
    description:
      "The Wilmer Jennings Gallery opened its doors to young artists from the Earth School for an evening exhibition of student work, drawing families from across the East Village.",
    images: [
      { src: "/images/timeline/childrens-show/poster.jpg", alt: "Poster for The Earth School Mystery Art Show, April 4, at the Wilmer Jennings Gallery at Kenkeleba." },
      { src: "/images/timeline/childrens-show/crowd.jpg", alt: "Families and children walking through the gallery viewing student artwork." },
      { src: "/images/timeline/childrens-show/outdoor.jpg", alt: "A crowd of families gathered outside the gallery for the Earth School Mystery Art Show." },
    ],
  },
  {
    slug: "blues-and-mean-reds-sound-of-light",
    category: "Exhibition",
    title: "The Blues and the Mean Reds & Sound of Light",
    dateRange: "April 26 – June 28, 2025",
    subtitle: "Frank Stewart and Petra Richterová",
    description:
      "Two exhibitions of photography paired in dialogue, exploring Jazz culture and the broader landscape of music. Frank Stewart's decades of photography document legendary musicians across the Black Diaspora, alongside Petra Richterová's images of Afro-Cuban and Caribbean performance and ritual.",
    images: [
      { src: "/images/timeline/blues/featured-works.jpg", alt: "Two black-and-white photographs side by side: Frank Stewart's Boy and Two Girls, Harlem, 1974, and a work by Petra Richterová." },
      { src: "/images/timeline/blues/marsalis-piano.jpg", alt: "Wynton Marsalis playing piano at the opening reception." },
      { src: "/images/timeline/blues/install-viewing.jpg", alt: "A visitor viewing framed photographs on the gallery wall." },
      { src: "/images/timeline/blues/reception-crowd.jpg", alt: "Guests gathered at the opening reception for The Blues and the Mean Reds." },
      { src: "/images/timeline/blues/guest-portrait.jpg", alt: "Two guests posing together at the opening reception, one holding a book." },
    ],
  },
];

export const sculptureGardenImage = {
  src: "/images/collection/sculpture/garden-general.jpg",
  alt: "General view of the Kenkeleba House sculpture garden, with several large outdoor sculptures among trees and a fence.",
};
