export type Paper = {
  title: string;
  authors: string;
  venue: string;
  type: "Class Paper" | "Seminar Presentation" | "Thesis";
  year: number;
  summary: string;
  tags: string[];
  links: {
    label: string;
    href: string;
  }[];
};

export const papers: Paper[] = [
  {
    title: "Singularity Analysis in Combinatorics",
    authors: "Franklin Liu",
    venue: "Class paper",
    type: "Class Paper",
    year: 2026,
    summary:
      "An expository class paper on singularity analysis and its use in extracting asymptotic information from generating functions.",
    tags: ["Combinatorics", "Asymptotics", "Generating Functions"],
    links: [{ label: "PDF", href: "/files/singularity-analysis-in-combinatorics.pdf" }]
  },
  {
    title: "Algorithmic Game Theory",
    authors: "Franklin Liu",
    venue: "Class paper",
    type: "Class Paper",
    year: 2026,
    summary:
      "A class paper exploring core ideas in algorithmic game theory, where computation, incentives, and strategic behavior meet.",
    tags: ["Game Theory", "Algorithms", "Theory"],
    links: [{ label: "PDF", href: "/files/algorithmic-game-theory.pdf" }]
  },
  {
    title: "Signatures and Data Science",
    authors: "Franklin Liu",
    venue: "Seminar presentation",
    type: "Seminar Presentation",
    year: 2026,
    summary:
      "A seminar presentation on path signatures and their role as structured features for data science problems.",
    tags: ["Data Science", "Signatures", "Seminar"],
    links: [{ label: "Slides", href: "/files/signatures-and-data-science.pdf" }]
  },
  {
    title: "Thesis Presentation",
    authors: "Franklin Liu",
    venue: "Seminar presentation",
    type: "Seminar Presentation",
    year: 2026,
    summary:
      "A presentation version of my thesis work, organized for a seminar audience.",
    tags: ["Thesis", "Presentation", "Seminar"],
    links: [{ label: "Slides", href: "/files/thesis-presentation.pdf" }]
  },
  {
    title: "Thesis",
    authors: "Franklin Liu",
    venue: "Undergraduate thesis",
    type: "Thesis",
    year: 2025,
    summary:
      "My thesis, collected as the full written artifact.",
    tags: ["Thesis", "Research"],
    links: [{ label: "PDF", href: "/files/thesis-franklin-liu.pdf" }]
  }
];
