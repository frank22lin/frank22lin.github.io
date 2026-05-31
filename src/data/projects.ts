export type Project = {
  title: string;
  description: string;
  role: string;
  stack: string[];
  status: "Active" | "Archived" | "Concept";
  links: {
    label: string;
    href: string;
  }[];
};

export const projects: Project[] = [
  {
    title: "Selected Project",
    description:
      "A concise description of what the project does, why it matters, and what you contributed.",
    role: "Research, design, and implementation",
    stack: ["Astro", "TypeScript", "Python"],
    status: "Active",
    links: [
      { label: "GitHub", href: "#" },
      { label: "Demo", href: "#" }
    ]
  },
  {
    title: "Tool or Experiment",
    description:
      "A smaller build, prototype, or analysis project can live here without needing a full case study.",
    role: "Solo project",
    stack: ["Python", "Data"],
    status: "Archived",
    links: [{ label: "Notes", href: "#" }]
  }
];
