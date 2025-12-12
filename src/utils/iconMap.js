import { 
  Github, 
  Linkedin, 
  Mail, 
  Code, 
  Trophy, 
  BookOpen, 
  FileText, 
  Database, 
  Brain, 
  Music, 
  Globe,
  GraduationCap,
  School
} from 'lucide-react';

// Map icon string names to actual Lucide icon components
const iconMap = {
  Github,
  Linkedin,
  Mail,
  Code,
  Trophy,
  BookOpen,
  FileText,
  Database,
  Brain,
  Music,
  Globe,
  GraduationCap,
  School
};

/**
 * Get the icon component from a string name
 * @param {string} iconName - The name of the icon (e.g., "Github", "FileText")
 * @returns {React.ComponentType} - The Lucide icon component
 */
export const getIcon = (iconName) => {
  return iconMap[iconName] || FileText;
};

export default iconMap;
