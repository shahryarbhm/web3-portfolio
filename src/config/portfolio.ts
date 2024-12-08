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
  SiFarcaster
} from 'react-icons/si';
import { IconType } from 'react-icons';

// Type definition for skill items
interface SkillItem {
  name: string;
  icon: IconType;
  description?: string; // Optional description for tooltips or additional info
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
        description: "Smart Contract Development"
      },
      {
        name: "React",
        icon: SiReact,
        description: "Frontend Development"
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
        description: "Full-stack Framework"
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        description: "Type-safe JavaScript"
      },
      {
        name: "Ethereum",
        icon: SiEthereum,
        description: "Blockchain Development"
      },
      {
        name: "Web3",
        icon: SiWeb3Dotjs,
        description: "Blockchain Integration"
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