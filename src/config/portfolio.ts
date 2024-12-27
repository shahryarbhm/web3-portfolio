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

interface WorkExperience {
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string;
  activities: string[];
  techniques: string;
  companyLogo?: string;
}

// Add POAP related interfaces
interface POAPConfig {
  enabled: boolean;
  title: string;
  description: string;
  ensAddress: string;
}

export const portfolioConfig = {
  siteInfo: {
    title: "0xShazam - Blockchain Developer",
    description: "Aspiring blockchain developer passionate about building scalable and efficient decentralized solutions.",
    copyright: "© 2024 0xShazam. All rights reserved.",
  },

  hero: {
    title: "0xShazam",
    subtitle: "Blockchain Developer",
    description: `Aspiring blockchain developer passionate about building scalable and efficient decentralized
    solutions. With a strong foundation in low-level programming languages and hands-on
    experience in frameworks like NestJS, Django, and ExpressJS, I specialize in developing robust back-end
    infrastructures and ensuring seamless API integrations.`,
    location: "Klagenfurt, Austria 9020",
    email: "0xshazam@tutamail.com",
    phone: "(+43) 667 616 97 258"
  },

  skills: {
    title: "Skills",
    items: [
      {
        name: "TypeScript",
        icon: SiTypescript,
        description: "Backend Development",
        percentage: 90
      },
      {
        name: "Node.js",
        icon: SiNodedotjs,
        description: "Server-side Development",
        percentage: 90
      },
      {
        name: "Solidity",
        icon: SiSolidity,
        description: "Smart Contract Development",
        percentage: 85
      },
      {
        name: "Docker",
        icon: SiDocker,
        description: "Containerization",
        percentage: 85
      },
      {
        name: "GraphQL",
        icon: SiGraphql,
        description: "API Development",
        percentage: 80
      },
      {
        name: "Kubernetes",
        icon: SiKubernetes,
        description: "Container Orchestration",
        percentage: 75
      },
      {
        name: "Rust",
        icon: SiRust,
        description: "Systems Programming",
        percentage: 70
      },
      {
        name: "Go",
        icon: SiGo,
        description: "Backend Development",
        percentage: 70
      },
      {
        name: "Python",
        icon: SiPython,
        description: "Scripting & ML",
        percentage: 85
      },
      {
        name: "Web3.js",
        icon: SiWeb3Dotjs,
        description: "Blockchain Integration",
        percentage: 85
      },
      {
        name: "React",
        icon: SiReact,
        description: "Frontend Development",
        percentage: 80
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
        description: "Full-stack Framework",
        percentage: 80
      },
      {
        name: "WebAssembly",
        icon: SiWebassembly,
        description: "Low-level Web",
        percentage: 75
      }
    ] as SkillItem[]
  },

  workExperience: {
    items: [
      {
        title: "Back-End Developer",
        company: "Delinternet",
        location: "Remote",
        duration: "2023 - 2024",
        description: "Developed TypeScript SDKs and back-end services using Node.js and Express.js for seamless API integrations.",
        activities: [
          "Developed TypeScript SDKs and back-end services using Node.js and Express.js",
          "Built scalable web applications and integrated SQL databases",
          "Implemented comprehensive testing strategies, achieving 95% test coverage"
        ],
        techniques: "TypeScript, Node.js, Express.js, MySQL, PostgreSQL"
      },
      {
        title: "IoT and Computer Vision Engineer",
        company: "Offrang",
        location: "Remote",
        duration: "2022 - 2023",
        description: "Configured and managed IoT devices using OpenHAB and KNX, enhancing smart home automation.",
        activities: [
          "Configured and managed IoT devices",
          "Dockerized applications for Linux devices",
          "Conducted Computer Vision research"
        ],
        techniques: "OpenHAB, KNX, Docker, CNN, RCNN, LSTM"
      },
      {
        title: "Full Stack Developer",
        company: "Emigral",
        location: "Remote",
        duration: "2020 - 2022",
        description: "Developed and maintained robust web applications using NestJS, MongoDB, and React Native.",
        activities: [
          "Developed web applications using NestJS and MongoDB",
          "Designed intuitive interfaces with Figma",
          "Built reliable queuing system with Redis"
        ],
        techniques: "NestJS, MongoDB, React Native, Redis, Figma"
      }
    ] as WorkExperience[]
  },

  projects: {
    title: "Featured Projects",
    description: "Selected Projects (Bounties > 10,000 USDC)",
    items: [
      {
        title: "WenPay - ETHBangkok 2024",
        description: "Winner of Blockscout prize. NFC-enabled wallet focused on seamless stablecoin transactions, leveraging Web3Auth Kotlin SDK for wallet abstraction and ENS for free address resolution. Integrated Kinto for KYC-compliant transactions.",
        coverImage: "/projects/wenpay.png",
        skills: [
          { name: "Web3Auth", icon: SiEthereum },
          { name: "ENS", icon: SiEthereum },
          { name: "Solidity", icon: SiSolidity }
        ],
        githubUrl: "https://github.com/yourusername/wenpay"
      },
      {
        title: "Blockademy - ETHSofia 2024",
        description: "Winner of iExec Prize. A decentralized education platform built with Next.js enabling secure, blockchain-based course content sharing and tamper-proof certifications.",
        coverImage: "/projects/blockademy.png",
        skills: [
          { name: "Next.js", icon: SiNextdotjs },
          { name: "iExec", icon: SiEthereum },
          { name: "Web3", icon: SiWeb3Dotjs }
        ],
        githubUrl: "https://github.com/yourusername/blockademy"
      },
      {
        title: "Yes, ZKing - ETHRome 2024",
        description: "Winner of Aztec, ENS, and Crossmint bounties. Anonymous review system using Zero-Knowledge Proofs for privacy-preserving identity verification and secure messaging.",
        coverImage: "/projects/zking.png",
        skills: [
          { name: "ZK-Proofs", icon: SiEthereum },
          { name: "iExec", icon: SiEthereum },
          { name: "Web3Mail", icon: SiWeb3Dotjs }
        ],
        githubUrl: "https://github.com/yourusername/zking"
      },
      {
        title: "Platano o Plomo - ETH Brussels 2024",
        description: "Winner of Two Side Track Prizes. Utilized Web3Auth for user onboarding and deployed smart contracts on Arbitrum Sepolia, using Chainlink VRF for randomization.",
        coverImage: "/projects/platano.png",
        skills: [
          { name: "Web3Auth", icon: SiEthereum },
          { name: "Chainlink", icon: SiEthereum },
          { name: "React", icon: SiReact }
        ],
        githubUrl: "https://github.com/yourusername/platano"
      },
      {
        title: "TelegramHub - ETHOnline 2024",
        description: "Winner of Sign Protocol, Avail Best Core Tooling, and Build with Avail Prizes. Developed secure, blockchain-based data handling with Avail and Polkadot.js.",
        coverImage: "/projects/telegramhub.png",
        skills: [
          { name: "Polkadot", icon: SiEthereum },
          { name: "Lit Protocol", icon: SiEthereum },
          { name: "Avail", icon: SiWeb3Dotjs }
        ],
        githubUrl: "https://github.com/yourusername/telegramhub"
      }
    ] as Project[]
  },

  contact: {
    title: "Get in Touch",
    description: "Have a question or want to work together?",
    email: "0xshazam@tutamail.com",
    socials: [
      {
        name: "GitHub",
        url: "https://github.com/shahryarbhm",
        icon: SiGithub,
        label: "Follow me on GitHub"
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/shahryarbhm",
        icon: SiLinkedin,
        label: "Connect on LinkedIn"
      },
      {
        name: "Twitter",
        url: "https://x.com/0xshazam",
        icon: SiX,
        label: "Follow me on X"
      }
    ] as SocialLink[]
  },

  education: {
    items: [
      {
        institution: "University Of Klagenfurt, Austria",
        degree: "M.Sc. in Informatics",
        duration: "2024 - 2026"
      },
      {
        institution: "University Of Shiraz, Iran",
        degree: "B.Sc. in Computer Engineering",
        duration: "2024 - 2026"
      }
    ]
  },

  certifications: {
    items: [
      "EVM Bootcamp 2024 by Encode",
      "Advanced Foundry By Cyfrin",
      "Solidity Smart Contract Development by Cyfrin",
      "Fundamentals of Computer Networks and Cybersecurity"
    ]
  },

  poap: {
    enabled: true,
    title: "My POAPs",
    description: "Collection of proof of attendance tokens",
    ensAddress: process.env.NEXT_PUBLIC_ENS_ADDRESS || '0xshazam.eth'
  } as POAPConfig
}; 