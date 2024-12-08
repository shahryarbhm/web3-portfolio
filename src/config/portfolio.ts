export const portfolioConfig = {
  siteInfo: {
    title: "Web3 Developer Portfolio",
    description: "Building decentralized applications and smart contracts",
    copyright: "© 2024 Your Name. All rights reserved.",
  },
  
  skills: [
    'Solidity',
    'React',
    'Next.js',
    'TypeScript',
    'Smart Contracts',
    'DeFi'
  ],
  
  featuredProjects: [
    {
      title: "Project Name",
      description: "Brief project description goes here",
      link: "/projects",
      linkText: "Learn more →"
    },
    // Add more projects as needed
  ],
  
  contact: {
    title: "Get in Touch",
    description: "Have a question or want to work together? Send me a message!",
    email: "your.email@example.com",
    socials: [
      {
        name: "GitHub",
        url: "https://github.com/yourusername",
        icon: "github" // We can implement icons later
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/yourusername",
        icon: "linkedin"
      }
    ]
  },
  
  projects: {
    title: "My Projects",
    description: "A collection of my Web3 and blockchain projects",
    items: [
      {
        title: "DeFi Protocol",
        description: "A decentralized finance protocol built with Solidity and React",
        technologies: ["Solidity", "React", "Web3.js"],
        githubUrl: "https://github.com/yourusername/project-name",
        liveUrl: "https://project-url.com",
        image: "/projects/defi-protocol.png" // Add your image path
      },
      {
        title: "NFT Marketplace",
        description: "An NFT marketplace for digital artists",
        technologies: ["Next.js", "Ethereum", "IPFS"],
        githubUrl: "https://github.com/yourusername/nft-marketplace",
        liveUrl: "https://nft-marketplace-url.com",
        image: "/projects/nft-marketplace.png"
      }
      // Add more projects as needed
    ]
  }
}; 