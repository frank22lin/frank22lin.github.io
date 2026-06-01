export type Project = {
  title: string;
  description: string;
  role: string;
  stack: string[];
  tags: string[];
  status: string;
  links: {
    label: string;
    href: string;
  }[];
};

export const projects: Project[] = [
  {
    title: "Polymarket Backtester",
    description:
      "A data and backtesting toolkit for researching prediction-market strategies on Polymarket.",
    role: "Python, data engineering, backtesting",
    stack: ["Python", "Data Engineering", "Backtesting"],
    tags: ["Trading"],
    status: "2026",
    links: [{ label: "GitHub", href: "https://github.com/frank22lin/polymarket_data" }]
  },
  {
    title: "Agentic Research System for Optimal Execution",
    description:
      "An agentic research system for iterating on trading experiments and studying optimal execution, in collaboration with Event Horizon Labs.",
    role: "Python, research automation, market simulation",
    stack: ["Python", "Agents", "Market Simulation"],
    tags: ["Optimal Execution", "Agentic Research"],
    status: "2026",
    links: [{ label: "GitHub", href: "https://github.com/tonyhieu/agentic-trading-system" }]
  }
];
