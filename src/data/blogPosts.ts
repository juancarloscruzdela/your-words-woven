export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  image?: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "react-best-practices-2024",
    title: "React Best Practices for 2024",
    excerpt: "Discover the latest React patterns and best practices that every developer should know in 2024. From hooks to performance optimization.",
    content: `# React Best Practices for 2024

React continues to evolve, and staying up-to-date with best practices is crucial for building maintainable applications.

## 1. Use TypeScript

TypeScript has become the standard for React applications. It provides better developer experience, catches errors early, and makes refactoring safer.

## 2. Embrace Server Components

With React 18 and frameworks like Next.js 13+, Server Components are changing how we think about React applications.

## 3. Optimize Performance

Use React.memo, useMemo, and useCallback wisely. Don't over-optimize, but be mindful of unnecessary re-renders.

## Conclusion

These practices will help you build better React applications in 2024 and beyond.`,
    author: "Sarah Johnson",
    date: "Dec 15, 2024",
    category: "React",
    readTime: "5 min read",
    tags: ["React", "TypeScript", "Performance", "Best Practices"]
  },
  {
    id: "typescript-tips-tricks",
    title: "Advanced TypeScript Tips and Tricks",
    excerpt: "Level up your TypeScript skills with these advanced tips and tricks that will make your code more type-safe and maintainable.",
    content: `# Advanced TypeScript Tips and Tricks

TypeScript is more than just adding types to JavaScript. Here are some advanced techniques.

## 1. Utility Types

Learn about Partial, Pick, Omit, and other utility types that can make your code more expressive.

## 2. Conditional Types

Use conditional types to create flexible and reusable type definitions.

## 3. Template Literal Types

Template literal types allow you to create very specific string types.

These techniques will help you write better TypeScript code.`,
    author: "Mike Chen",
    date: "Dec 12, 2024",
    category: "TypeScript",
    readTime: "7 min read",
    tags: ["TypeScript", "Advanced", "Types", "Programming"]
  },
  {
    id: "web-design-trends-2024",
    title: "Web Design Trends That Will Dominate 2024",
    excerpt: "From minimalism to bold gradients, explore the design trends that are shaping the web in 2024 and how to implement them effectively.",
    content: `# Web Design Trends That Will Dominate 2024

The web design landscape is constantly evolving. Here are the trends to watch in 2024.

## 1. Minimalism 2.0

Clean designs with purposeful use of white space and subtle animations.

## 2. Bold Typography

Large, expressive fonts that make a statement.

## 3. Interactive Elements

Micro-interactions that delight users and improve engagement.

Stay ahead of the curve with these design trends.`,
    author: "Emma Rodriguez",
    date: "Dec 10, 2024",
    category: "Design",
    readTime: "6 min read",
    tags: ["Design", "Trends", "UI/UX", "2024"]
  },
  {
    id: "ai-in-web-development",
    title: "How AI is Revolutionizing Web Development",
    excerpt: "Explore how artificial intelligence is changing the way we build websites and applications, from code generation to automated testing.",
    content: `# How AI is Revolutionizing Web Development

Artificial Intelligence is transforming every aspect of web development.

## 1. Code Generation

AI tools like GitHub Copilot are helping developers write code faster.

## 2. Automated Testing

AI can generate test cases and find bugs automatically.

## 3. Design Assistance

AI tools can help with layout, color schemes, and user experience.

The future of web development is here, and it's powered by AI.`,
    author: "David Park",
    date: "Dec 8, 2024",
    category: "AI & ML",
    readTime: "8 min read",
    tags: ["AI", "Machine Learning", "Development", "Future"]
  },
  {
    id: "career-advice-developers",
    title: "Career Advice for Junior Developers",
    excerpt: "Essential tips and strategies for junior developers looking to advance their careers and become senior engineers.",
    content: `# Career Advice for Junior Developers

Starting your career as a developer can be overwhelming. Here's how to succeed.

## 1. Focus on Fundamentals

Master the basics before jumping to the latest frameworks.

## 2. Build Projects

Nothing beats hands-on experience. Build real projects and showcase them.

## 3. Network and Contribute

Join communities, contribute to open source, and help others.

Your career is a marathon, not a sprint.`,
    author: "Alex Thompson",
    date: "Dec 5, 2024",
    category: "Career",
    readTime: "4 min read",
    tags: ["Career", "Advice", "Junior", "Development"]
  },
  {
    id: "modern-css-techniques",
    title: "Modern CSS Techniques Every Developer Should Know",
    excerpt: "Master the latest CSS features like Grid, Flexbox, Container Queries, and CSS Custom Properties to build amazing layouts.",
    content: `# Modern CSS Techniques Every Developer Should Know

CSS has evolved tremendously. Here are the modern techniques you should master.

## 1. CSS Grid

The most powerful layout system in CSS for creating complex layouts.

## 2. Container Queries

Style elements based on their container size, not the viewport.

## 3. CSS Custom Properties

Use CSS variables to create maintainable and themeable designs.

These techniques will transform how you write CSS.`,
    author: "Lisa Wang",
    date: "Dec 3, 2024",
    category: "Web Development",
    readTime: "6 min read",
    tags: ["CSS", "Layout", "Modern", "Techniques"]
  }
];