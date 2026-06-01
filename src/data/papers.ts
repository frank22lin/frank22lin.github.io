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
    title: "Bluffing and Strategic Reticence in Prediction Markets",
    authors: "Franklin Liu",
    venue: "Class paper",
    type: "Class Paper",
    year: 2026,
    summary:
      "Final project for TTIC 31260: Algorithmic Game Theory, taught by Prof. Avrim Blum at Toyota Technological Institute at Chicago, examining incentive compatibility in prediction markets through the Logarithmic Market Scoring Rule (LMSR) and Dynamic Parimutuel Market mechanisms. Based on Chen, Y., Reeves, D. M., Pennock, D. M., Hanson, R. D., Fortnow, L., & Gonen, R. (2010).",
    tags: ["Algorithmic Game Theory", "Prediction Markets"],
    links: [{ label: "PDF", href: "/files/algorithmic-game-theory.pdf" }]
  },
  {
    title: "Modelling Limit Order Books via Conditional Diffusion Model",
    authors: "Franklin Liu",
    venue: "Undergraduate thesis",
    type: "Thesis",
    year: 2024,
    summary:
      "Undergraduate thesis at TU Berlin, advised by Prof. Peter Friz and Prof. Dr. Klaus-Robert Müller. Reviews the mathematical framework for modelling order books and proposes a conditional diffusion model for generating realistic limit order book states. Evaluates the model on BTC/USDT order book data and studies its ability to reproduce known microstructure stylized facts.",
    tags: ["Diffusion Models", "Stochastic Processes", "Market Microstructure"],
    links: [
      { label: "PDF", href: "/files/thesis-franklin-liu.pdf" },
      { label: "Slides", href: "/files/thesis-presentation.pdf" }
    ]
  },
  {
    title: "From Singularities to Asymptotic Bounds",
    authors: "Franklin Liu",
    venue: "Class paper",
    type: "Class Paper",
    year: 2023,
    summary:
      "Final project for Math 246A: Complex Analysis, taught by Prof. Terence Tao at UCLA, examining how asymptotic bounds on combinatorial sequences can be derived by treating generating functions as complex functions and analysing their singularities.",
    tags: ["Complex Analysis", "Analytic Combinatorics"],
    links: [{ label: "PDF", href: "/files/singularity-analysis-in-combinatorics.pdf" }]
  },
  {
    title: "Path Signatures with Financial Applications",
    authors: "Franklin Liu",
    venue: "Seminar presentation",
    type: "Seminar Presentation",
    year: 2024,
    summary:
      "Talk in a seminar led by Prof. Peter Friz at TU Berlin, exploring applications of path signatures to financial time series. Covers the signature transform as a feature map for sequential data and its use in limit order book modelling and mid-price prediction, including a log-signature neural network approach.",
    tags: ["Path Signatures", "Data Science"],
    links: [{ label: "Slides", href: "/files/signatures-and-data-science.pdf" }]
  },
  {
    title: "Finding Domino Tilings with Maximal Monotonic Paths using Wagner's Method",
    authors: "Franklin Liu",
    venue: "Seminar presentation",
    type: "Seminar Presentation",
    year: 2022,
    summary:
      "Using Wagner's deep cross-entropy method to generate counterexamples for domino tiling problems.",
    tags: ["Combinatorics", "Cross-Entropy Methods"],
    links: [{ label: "Slides", href: "/files/domino-tilings.pdf" }]
  },
];
