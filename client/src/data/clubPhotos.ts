export type ClubPhoto = {
  id: string;
  avif: string;
  webp: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
};

export type HeroPhotoSet = {
  id: string;
  photos: readonly [ClubPhoto, ClubPhoto, ClubPhoto];
};

function photo(
  id: string,
  width: number,
  height: number,
  alt: string,
  caption?: string
): ClubPhoto {
  return {
    id,
    avif: `/images/association/${id}.avif`,
    webp: `/images/association/${id}.webp`,
    alt,
    caption,
    width,
    height,
  };
}

export const boardGroupPhoto = photo(
  "dpgsa-board-2025-2026",
  1067,
  712,
  "A group photo in front of a Data Privacy and Governance Society of Kenya backdrop.",
  "A wider data privacy community group photo from the supplied archive."
);

export const meetingPhotos = [
  photo(
    "dpgsa-meeting-01",
    1440,
    1908,
    "DPGSA participants seated together during an auditorium meeting.",
    "An Association meeting in an auditorium."
  ),
  photo(
    "dpgsa-meeting-02",
    1440,
    1920,
    "Two Association participants pictured at a DPGSA meeting.",
    "An Association gathering."
  ),
] satisfies ClubPhoto[];

export const juaTermsPhotos = [
  photo(
    "juaterms-collaboration-01",
    1333,
    888,
    "Association members and JuaTerms collaborators standing for a group photo.",
    "A group moment from the JuaTerms collaboration."
  ),
  photo(
    "juaterms-collaboration-02",
    1333,
    888,
    "A participant speaks at the JuaTerms collaboration event.",
    "A speaker at the JuaTerms collaboration."
  ),
  photo(
    "juaterms-collaboration-03",
    1333,
    888,
    "A JuaTerms collaboration group photo with Association participants.",
    "Association participants at JuaTerms."
  ),
  photo(
    "juaterms-collaboration-04",
    1333,
    888,
    "Participants pose together at a JuaTerms event.",
    "A group photo at JuaTerms."
  ),
] satisfies ClubPhoto[];

export const essayCompetitionPhotos = [
  photo(
    "essay-competition-01",
    1440,
    1140,
    "A moment from the DPGSA essay-writing competition."
  ),
  photo(
    "essay-competition-02",
    1440,
    1138,
    "A presentation moment from a DPGSA essay-writing competition."
  ),
  photo(
    "essay-competition-03",
    1440,
    1140,
    "Student participants at a DPGSA essay-writing competition."
  ),
  photo(
    "essay-competition-04",
    1440,
    1140,
    "Award recipients at the DPGSA essay-writing competition."
  ),
  photo(
    "essay-competition-05",
    1440,
    1139,
    "A moment from the DPGSA essay-writing competition."
  ),
  photo(
    "essay-competition-06",
    592,
    467,
    "A moment from the DPGSA essay-writing competition."
  ),
  photo(
    "essay-competition-07",
    1440,
    1139,
    "Participants at the DPGSA essay-writing competition."
  ),
  photo(
    "essay-competition-08",
    1440,
    1139,
    "A presentation at the DPGSA essay-writing competition."
  ),
] satisfies ClubPhoto[];

export const homeHeroSlides: HeroPhotoSet[] = [
  {
    id: "auditorium-and-awards",
    photos: [
      meetingPhotos[0],
      essayCompetitionPhotos[1],
      essayCompetitionPhotos[3],
    ],
  },
  {
    id: "meeting-and-presentations",
    photos: [
      meetingPhotos[1],
      essayCompetitionPhotos[2],
      essayCompetitionPhotos[4],
    ],
  },
  {
    id: "auditorium-and-recognition",
    photos: [
      meetingPhotos[0],
      essayCompetitionPhotos[0],
      essayCompetitionPhotos[7],
    ],
  },
];
