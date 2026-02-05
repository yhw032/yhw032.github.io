import { Cpu, Database, Code, Palette, Shield, Layout, Binary, Box, Zap, Monitor, Server, GitBranch, Terminal, Globe } from 'lucide-react';

export const SKILLS = [
  {
    category: "DEVELOPMENT",
    label: "CORE_SYSTEMS",
    icon: <Cpu size={24} />,
    skills: [
      { name: "HTML", icon: <Layout size={14} /> },
      { name: "CSS", icon: <Palette size={14} /> },
      { name: "JS", icon: <Binary size={14} /> },
      { name: "TS", icon: <Shield size={14} /> },
      { name: "React", icon: <Box size={14} /> },
      { name: "React Native", icon: <Monitor size={14} /> },
      { name: "TailwindCSS", icon: <Palette size={14} /> },
      { name: "Next.js", icon: <Zap size={14} /> },
      { name: "Django", icon: <Server size={14} /> },
      { name: "Python", icon: <Binary size={14} /> }
    ]
  },
  {
    category: "INFRASTRUCTURE",
    label: "ORCHESTRATION",
    icon: <Database size={24} />,
    skills: [
      { name: "AWS", icon: <Server size={14} /> },
      { name: "Git", icon: <GitBranch size={14} /> }
    ]
  },
  {
    category: "TOOLING",
    label: "ENV_STABLE",
    icon: <Code size={24} />,
    skills: [
      { name: "VSCode", icon: <Terminal size={14} /> },
      { name: "Antigravity", icon: <Zap size={14} /> }
    ]
  },
  {
    category: "CREATIVE",
    label: "DESIGN_MEDIA",
    icon: <Palette size={24} />,
    skills: [
      { name: "Photoshop", icon: <Palette size={14} /> },
      { name: "Premiere", icon: <Monitor size={14} /> },
      { name: "Figma", icon: <Box size={14} /> }
    ]
  },
  {
    category: "MANAGEMENT",
    label: "PRODUCTIVITY",
    icon: <Shield size={24} />,
    skills: [
      { name: "MS Office", icon: <Binary size={14} /> },
      { name: "Notion", icon: <Globe size={14} /> }
    ]
  }
];
