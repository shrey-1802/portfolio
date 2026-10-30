export interface HobbyItem {
  id: string;
  title: string;
  category: string;
  description: string;
  iconName: string;
  isConfigurable: boolean;
}

export const hobbiesData: {
  note: string;
  items: HobbyItem[];
} = {
  note: "This section is configurable with Shrey's verified personal hobbies, reading lists, or outside-the-lab interests.",
  items: [
    {
      id: "hobby-1",
      title: "Exploring Open Source Architecture",
      category: "Technical Curiosity",
      description: "Reading codebase structures of modern developer tools, exploring how open-source libraries organize state, and dissecting developer workflows.",
      iconName: "Code2",
      isConfigurable: true
    },
    {
      id: "hobby-2",
      title: "Problem Solving & Algorithmic Puzzles",
      category: "Analytical Thinking",
      description: "Engaging with logic puzzles and data structure challenges that exercise algorithmic reasoning and computational efficiency.",
      iconName: "BrainCircuit",
      isConfigurable: true
    },
    {
      id: "hobby-3",
      title: "Tech Products & Hardware Teardowns",
      category: "Engineering Curiosity",
      description: "Keeping track of hardware design evolutions, IoT innovations, and how modern consumer hardware bridges with cloud software.",
      iconName: "Cpu",
      isConfigurable: true
    },
    {
      id: "hobby-4",
      title: "[Personal Hobby / Creative Interest]",
      category: "Personal Space",
      description: "Configurable slot for personal interests (e.g., photography, sports, books, chess, music) to be customized by Shrey.",
      iconName: "Sparkles",
      isConfigurable: true
    }
  ]
};
