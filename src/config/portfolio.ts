import { 
  SiSolidity, 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiEthereum,
  SiWeb3Dotjs,
  SiGithub,
  SiLinkedin,
  SiX,
  SiFarcaster,
  SiPython,
  SiNodedotjs,
  SiGraphql,
  SiDocker,
  SiRust,
  SiGo,
  SiKubernetes,
  SiWebassembly
} from 'react-icons/si';
import { IconType } from 'react-icons';
import { FaHammer, FaAws } from 'react-icons/fa';

// Type definition for skill items
interface SkillItem {
  name: string;
  icon: IconType;
  description?: string; // Optional description for tooltips or additional info
  percentage?: number; // Optional percentage for liquid fill animation
}

interface ProjectSkill extends SkillItem {
  color?: string; // Optional custom color for the tag
}

interface Project {
  title: string;
  description: string;
  coverImage: string; // Required cover image
  skills: ProjectSkill[];
  githubUrl?: string;
  liveUrl?: string;
  gradient?: string; // Optional overlay gradient
}

interface SocialLink {
  name: string;
  url: string;
  icon: IconType;
  label: string;
}

export const portfolioConfig = {
  siteInfo: {
    title: "Web3 Developer Portfolio",
    description: "Building decentralized applications and smart contracts",
    copyright: "© 2024 Your Name. All rights reserved.",
  },
  
  skills: {
    title: "Skills",
    items: [
      {
        name: "Solidity",
        icon: SiSolidity,
        description: "Smart Contract Development",
        percentage: 90
      },
      {
        name: "React",
        icon: SiReact,
        description: "Frontend Development",
        percentage: 85
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
        description: "Full-stack Framework",
        percentage: 80
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        description: "Type-safe JavaScript",
        percentage: 75
      },
      {
        name: "Ethereum",
        icon: SiEthereum,
        description: "Blockchain Development",
        percentage: 70
      },
      {
        name: "Web3",
        icon: SiWeb3Dotjs,
        description: "Blockchain Integration",
        percentage: 65
      },
      {
        name: "Hardhat",
        icon: FaHammer,
        description: "Smart Contract Development Framework",
        percentage: 85
      },
      {
        name: "Python",
        icon: SiPython,
        description: "Backend Development & Scripts",
        percentage: 75
      },
      {
        name: "Node.js",
        icon: SiNodedotjs,
        description: "Backend Development",
        percentage: 80
      },
      {
        name: "GraphQL",
        icon: SiGraphql,
        description: "API Development",
        percentage: 70
      },
      {
        name: "Docker",
        icon: SiDocker,
        description: "Containerization",
        percentage: 65
      },
      {
        name: "AWS",
        icon: FaAws,
        description: "Cloud Infrastructure",
        percentage: 60
      },
      {
        name: "Rust",
        icon: SiRust,
        description: "Systems Programming",
        percentage: 45
      },
      {
        name: "Go",
        icon: SiGo,
        description: "Backend Development",
        percentage: 40
      },
      {
        name: "Kubernetes",
        icon: SiKubernetes,
        description: "Container Orchestration",
        percentage: 35
      },
      {
        name: "WebAssembly",
        icon: SiWebassembly,
        description: "Performance Optimization",
        percentage: 30
      }
    ] as SkillItem[]
  },
  
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
        icon: SiGithub,
        label: "Follow me on GitHub"
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/yourusername",
        icon: SiLinkedin,
        label: "Connect on LinkedIn"
      },
      {
        name: "Twitter",
        url: "https://x.com/yourusername",
        icon: SiX,
        label: "Follow me on X"
      },
      {
        name: "Farcaster",
        url: "https://warpcast.com/yourusername",
        icon: SiFarcaster, // You might need to use a custom icon for Farcaster
        label: "Follow me on Farcaster"
      }
    ] as SocialLink[]
  },
  
  projects: {
    title: "Featured Projects",
    description: "A collection of my Web3 and blockchain projects",
    items: [
      {
        title: "DeFi Protocol",
        description: "A decentralized finance protocol built with Solidity and React, enabling users to stake, swap, and earn yields on their crypto assets.",
        coverImage: "https://picsum.photos/seed/defi/800/400",
        gradient: "bg-gradient-to-b from-blue-500/50 to-purple-500/50",
        skills: [
          {
            name: "Solidity",
            icon: SiSolidity,
            description: "Smart Contract Development",
            color: "#363636"
          },
          {
            name: "React",
            icon: SiReact,
            description: "Frontend Development",
            color: "#61DAFB"
          },
          {
            name: "Web3",
            icon: SiWeb3Dotjs,
            description: "Blockchain Integration",
            color: "#F16822"
          }
        ],
        githubUrl: "https://github.com/yourusername/defi-protocol",
        liveUrl: "https://defi-protocol.com"
      },
      {
        title: "NFT Marketplace",
        description: "A fully decentralized NFT marketplace where users can mint, buy, sell, and trade digital collectibles with low gas fees.",
        coverImage: "https://picsum.photos/seed/nft/800/400",
        gradient: "bg-gradient-to-b from-pink-500/50 to-purple-500/50",
        skills: [
          {
            name: "Solidity",
            icon: SiSolidity,
            description: "Smart Contract Development",
            color: "#363636"
          },
          {
            name: "Next.js",
            icon: SiNextdotjs,
            description: "Full-stack Framework",
            color: "#000000"
          },
          {
            name: "TypeScript",
            icon: SiTypescript,
            description: "Type-safe JavaScript",
            color: "#3178C6"
          }
        ],
        githubUrl: "https://github.com/yourusername/nft-marketplace",
        liveUrl: "https://nft-marketplace-demo.com"
      },
      {
        title: "DAO Governance Platform",
        description: "A decentralized autonomous organization platform with proposal creation, voting mechanisms, and treasury management.",
        coverImage: "https://picsum.photos/seed/dao/800/400",
        gradient: "bg-gradient-to-b from-green-500/50 to-blue-500/50",
        skills: [
          {
            name: "Solidity",
            icon: SiSolidity,
            description: "Smart Contract Development",
            color: "#363636"
          },
          {
            name: "TypeScript",
            icon: SiTypescript,
            description: "Type-safe JavaScript",
            color: "#3178C6"
          },
          {
            name: "Ethereum",
            icon: SiEthereum,
            description: "Blockchain Development",
            color: "#3C3C3D"
          }
        ],
        githubUrl: "https://github.com/yourusername/dao-platform",
        liveUrl: "https://dao-platform-demo.com"
      },
      {
        title: "Cross-Chain Bridge",
        description: "A bridge solution enabling asset transfers between different blockchain networks with enhanced security features.",
        coverImage: "https://picsum.photos/seed/bridge/800/400",
        gradient: "bg-gradient-to-b from-orange-500/50 to-red-500/50",
        skills: [
          {
            name: "Solidity",
            icon: SiSolidity,
            description: "Multi-chain Smart Contracts",
            color: "#363636"
          },
          {
            name: "React",
            icon: SiReact,
            description: "Frontend Development",
            color: "#61DAFB"
          },
          {
            name: "Web3",
            icon: SiWeb3Dotjs,
            description: "Multi-chain Integration",
            color: "#F16822"
          },
          {
            name: "TypeScript",
            icon: SiTypescript,
            description: "Type-safe JavaScript",
            color: "#3178C6"
          }
        ],
        githubUrl: "https://github.com/yourusername/cross-chain-bridge",
        liveUrl: "https://bridge-protocol-demo.com"
      }
    ] as Project[]
  }
}; 