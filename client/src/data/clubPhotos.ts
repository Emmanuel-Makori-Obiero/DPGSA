export type ClubPhoto = {
  id: string;
  avif: string;
  webp: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
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
  "Association members standing together for a group photo.",
  "An Association group photo."
);

export const meetingPhotos = [
  photo(
    "dpgsa-meeting-01",
    1440,
    1908,
    "Students seated together at a DPGSA meeting.",
    "At a DPGSA meeting."
  ),
  photo(
    "dpgsa-meeting-02",
    1440,
    1920,
    "Association members gathered during a meeting.",
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
    "A moment from the Association's essay-writing competition."
  ),
  photo(
    "essay-competition-02",
    1440,
    1138,
    "A moment from the Association's essay-writing competition."
  ),
  photo(
    "essay-competition-03",
    1440,
    1140,
    "A moment from the Association's essay-writing competition."
  ),
  photo(
    "essay-competition-04",
    1440,
    1140,
    "A moment from the Association's essay-writing competition."
  ),
  photo(
    "essay-competition-05",
    1440,
    1139,
    "A moment from the Association's essay-writing competition."
  ),
  photo(
    "essay-competition-06",
    592,
    467,
    "A moment from the Association's essay-writing competition."
  ),
  photo(
    "essay-competition-07",
    1440,
    1139,
    "A moment from the Association's essay-writing competition."
  ),
  photo(
    "essay-competition-08",
    1440,
    1139,
    "A moment from the Association's essay-writing competition."
  ),
] satisfies ClubPhoto[];

export const homeHeroPhotos = [
  {
    ...juaTermsPhotos[0],
    alt: "Association members and JuaTerms collaborators gathered for a group photo.",
  },
  {
    ...juaTermsPhotos[1],
    alt: "A participant speaks during a JuaTerms collaboration event.",
  },
  {
    ...essayCompetitionPhotos[1],
    alt: "Participants share a moment at the Association's essay-writing competition.",
  },
] satisfies ClubPhoto[];
