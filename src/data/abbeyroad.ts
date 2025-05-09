const BASE_URL = "https://charts.elliotreed.net/documents"

interface VideoProps {
  id: string
  title: string
}

interface SongPropsData {
  position: number
  elliot: string
  steve: string
  alex: string
  title: string
  link: string
  videos: VideoProps[]
}

interface SetProps {
  set: number
  title: string
  songs: SongPropsData[]
}

export const show: SetProps[] = [
  {
    set: 1,
    title: "Abbey Road",
    songs: [
      {
        position: 1,
        elliot: "Electric Guitar (Lead)",
        steve: "Electric Guitar (Rhythm)",
        alex: "Electric Guitar (Lead, lower) (optional)",
        title: "Come Together",
        link: `${BASE_URL}/beatles-come-together.pdf`,
        videos: [{ id: "mmefieSOfaQ", title: "Isolated Tracks" }],
      },
      {
        position: 2,
        elliot: "Lead Guitar",
        steve: "Rhythm Guitar",
        alex: "",
        title: "Something",
        link: `${BASE_URL}/beatles-something.pdf`,
        videos: [{ id: "qOiPEVz5lXQ", title: "Isolated Guitar Track" }],
      },
      {
        position: 3,
        elliot: "Guitar (up stems)",
        steve: "Guitar (down stems)",
        alex: "",
        title: "Maxwell's Silver Hammer",
        link: `${BASE_URL}/beatles-maxwells-silver-hammer.pdf`,
        videos: [],
      },
      {
        position: 4,
        elliot: "Guitar",
        steve: "",
        alex: "",
        title: "Oh! Darling",
        link: `${BASE_URL}/beatles-oh-darling.pdf`,
        videos: [{ id: "QgXuEWMsh-g", title: "Isolated Tracks" }],
      },
      {
        position: 5,
        elliot: "Lead Guitar",
        steve: "Rhythm Guitar?",
        alex: "",
        title: "Octopus's Garden",
        link: `${BASE_URL}/beatles-octopus-garden.pdf`,
        videos: [
          { id: "WbmPP5gRbx0", title: "Isolated Lead" },
          { id: "EcFgalwaX34", title: "Isolated Rhythm" },
        ],
      },
      {
        position: 6,
        elliot: "Guitar I",
        steve: "Guitar II",
        alex: "Guitar I double on last system (optional)",
        title: "I Want You (She's So Heavy)",
        link: `${BASE_URL}/beatles-i-want-you.pdf`,
        videos: [{ id: "IHH4unCICKs", title: "Isolated Organ/Overdubs" }],
      },
      {
        position: 7,
        elliot: "Guitar",
        steve: "",
        alex: "",
        title: "Here Comes the Sun",
        link: `${BASE_URL}/beatles-here-comes-the-sun.pdf`,
        videos: [
          { id: "usMLf62YzBg", title: "Isolated Tracks" },
          { id: "CyyiHm6sHbQ", title: "Lesson" },
        ],
      },
      {
        position: 8,
        elliot: "Guitar",
        steve: "",
        alex: "",
        title: "Because",
        link: `${BASE_URL}/beatles-because.pdf`,
        videos: [{ id: "Hsr73uW12Lg", title: "Isolated Tracks" }],
      },
      {
        position: 9,
        elliot: "Guitar I, Guitar II",
        steve: "NA, Guitar I",
        alex: "",
        title: "You Never Give Me Your Money",
        link: `${BASE_URL}/beatles-you-never-give-me-your-money.pdf`,
        videos: [{ id: "6HR6vHUuMGk", title: "Full Instrumental" }],
      },
      {
        position: 10,
        elliot: "A Guitar II, B- Guitar I",
        steve: "A Guitar I, B- Guitar II",
        alex: "",
        title: "Sun King",
        link: `${BASE_URL}/beatles-sun-king.pdf`,
        videos: [{ id: "QaCwdrVriKU", title: "Instrumental Cover" }],
      },
      {
        position: 11,
        elliot: "Electric Guitar",
        steve: "",
        alex: "",
        title: "Mean Mr. Mustard",
        link: `${BASE_URL}/beatles-mean-mr-mustard.pdf`,
        videos: [],
      },
      {
        position: 12,
        elliot: "Electric Guitar (Guitar I)",
        steve: "Acoustice Guitar (Guitar II)",
        alex: "",
        title: "Polythene Pam",
        link: `${BASE_URL}/beatles-polythene-pam.pdf`,
        videos: [],
      },
      {
        position: 13,
        elliot: "Electric Guitar",
        steve: "",
        alex: "",
        title: "She Came in Through the Bathroom Window",
        link: `${BASE_URL}/beatles-she-came-in-through-the-bathroom-window.pdf`,
        videos: [],
      },
      {
        position: 14,
        elliot: "",
        steve: "",
        alex: "",
        title: "Golden Slumbers",
        link: `${BASE_URL}/beatles-golden-slumbers.pdf`,
        videos: [],
      },
      {
        position: 15,
        elliot: "Electric Guitar",
        steve: "",
        alex: "",
        title: "Carry That Weight",
        link: `${BASE_URL}/beatles-carry-that-weight.pdf`,
        videos: [],
      },
      {
        position: 16,
        elliot: "George's Solo, Gtr 1",
        steve: "John's Solo, Gtr 2",
        alex: "Paul's Solo, Gtr 2",
        title: "The End",
        link: `${BASE_URL}/beatles-the-end.pdf`,
        videos: [{ id: "w8YwV4v1aQE", title: "Deconstructing Medley" }],
      },
      {
        position: 17,
        elliot: "",
        steve: "",
        alex: "Acoustic Guitar",
        title: "Her Majesty",
        link: `${BASE_URL}/beatles-her-majesty.pdf`,
        videos: [{ id: "4N4hpNcUK98", title: "Tutorial" }],
      },
    ],
  },
  {
    set: 2,
    title: "Beatles After The Beatles",
    songs: [
      {
        position: 1,
        elliot: "Lead Guitar",
        steve: "",
        alex: "Rhythm Guitar",
        title: "Jet",
        link: ``,
        videos: [
          { id: "hLxKZt2hz8E", title: "Isolated Lead Guitar" },
          { id: "pPp1mY7GF5E", title: "Isolated Rhythm Guitar" },
        ],
      },
      {
        position: 2,
        elliot: "Acoustic Guitar",
        steve: "",
        alex: "Electric Guitar (Optional)",
        title: "Instant Karma!",
        link: ``,
        videos: [{ id: "O_tw_gz9wQc", title: "Live" }],
      },
      {
        position: 3,
        elliot: "Electric Guitar",
        steve: "Acoustic Guitar",
        alex: "",
        title: "It Don't Come Easy",
        link: ``,
        videos: [
          { id: "ogx9ZuncAIA", title: "No Vocals" },
          { id: "qXuSe3ZaUao", title: "Electric Guitar" },
        ],
      },
      {
        position: 4,
        elliot: "Guitar",
        steve: "",
        alex: "",
        title: "Woman",
        link: ``,
        videos: [{ id: "JgOLRV_62Do", title: "Guitar Lesson" }],
      },
      {
        position: 5,
        elliot: "Slide Guitar (upper)",
        steve: "Acoustic Guitar",
        alex: "Slide Guitar (lower)",
        title: "My Sweet Lord",
        link: ``,
        videos: [
          { id: "UmSoE5lwr64", title: "Isolated Instruments" },
          { id: "gLtyJ0RGGj8", title: "Guitar Parts" },
        ],
      },
      {
        position: 6,
        elliot: "",
        steve: "",
        alex: "",
        title: "Silly Love Songs",
        link: ``,
        videos: [{ id: "7nLm0TB5DJY", title: "" }],
      },
      {
        position: 7,
        elliot: "Lead Electric Guitar",
        steve: "Acoustic Guitar",
        alex: "Electric Guitar (George Part)",
        title: "Got My Mind Set On You",
        link: ``,
        videos: [],
      },
      {
        position: 8,
        elliot: "Electric Guitar",
        steve: "",
        alex: "",
        title: "Maybe I'm Amazed",
        link: ``,
        videos: [
          { id: "WeeNPLh2_qQ", title: "Vocal" },
          { id: "D3OxzjQQVI8", title: "Guitar Cover" },
        ],
      },
      {
        position: 9,
        elliot: "Slide Guitar (upper)",
        steve: "Acoustic Guitar",
        alex: "Slide Guitar (lower)",
        title: "Give Me Love",
        link: ``,
        videos: [{ id: "CWZW8Y30Jew", title: "Acoustic Guitar Tutorial" }],
      },
      {
        position: 10,
        elliot: "Electric Guitar",
        steve: "Acoustic Guitar/Electric Guitar",
        alex: "",
        title: "Whatever Gets You Thru The Night",
        link: ``,
        videos: [{ id: "hq2m6abtcdY", title: "Guitar Tutorial" }],
      },
      {
        position: 11,
        elliot: "Lead Electric Guitar",
        steve: "Acoustic Guitar",
        alex: "Electric Guitar",
        title: "Band On The Run",
        link: ``,
        videos: [{ id: "FbBZmEsKMHE", title: "Backing Track" }],
      },
      {
        position: 12,
        elliot: "",
        steve: "",
        alex: "",
        title: "Imagine",
        link: ``,
        videos: [],
      },
      {
        position: 13,
        elliot: "Lead Electric Guitar",
        steve: "Acoustic Guitar (optional)",
        alex: "Electric Guitar (lower octave) (optional)",
        title: "Live And Let Die",
        link: ``,
        videos: [
          { id: "QRJBMa8l4Gw", title: "Guitar Cover" },
          { id: "BEBP7LgBROI", title: "Live" },
        ],
      },
    ],
  },
]
