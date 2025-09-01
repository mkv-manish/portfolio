import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  
  {
    id: "E-commerce",
    title: "E-commerce Website",
    description:
      "An E-commerce Website built with Next.js, featuring fast performance, dynamic routing, and a seamless shopping experience.",
    icon: "/skills/nextjs.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/mkv-manish/ecommerce-exclusive",
    url: "https://github.com/mkv-manish/ecommerce-exclusive/blob/main/README.md",
    tags: ["next.js", "tailwindcss", "redux-toolkit", "typescript"],
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    description:
      "This repository contains the source code for a portfolio website built using Next.js and Sass.",
    icon: "/skills/nextjs.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/mkv-manish/portfolio",
    url: "https://devmanish.info",
    tags: ["Next.js", "Sass", "Web Development"],
  },
  {
    id: "MERN Auth Panel",
    title: "Secure API-Driven Panel",
    description:
      "A MERN stack application with user authentication, API integration, and dynamic table creation.",
    icon: "/skills/nextjs.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/mkv-manish/btc-employee",
    url: "https://github.com/mkv-manish/btc-employee/tree/main",
    tags: ["react.js", "mongodb", "node.js", "express.js"],
  },
  {
    id: "Todo-List",
    title: "Todo-List App",
    description:
      "A ToDo-List is a simple app for managing tasks, allowing users to add, edit, delete, and mark tasks as completed. It helps organize and track tasks efficiently.",
    icon: "/skills/react.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/mkv-manish/Todo-List",
    url: "https://github.com/mkv-manish/Todo-List/blob/main/README.md",
    tags: ["react.js", "javascript", "html", "css"],
  },
  {
    id: "bookStore",
    title: "bookStore Website",
    description:
      "The BookStore App is a MERN stack project for managing books, featuring options to add, update, delete, and view books with a responsive interface.",
    icon: "/skills/react.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/mkv-manish/bookStore-App",
    tags: ["react.js", "javascript", "mongodb", "node.js"],
  },
  {
  id: "bookFinder",
  title: "Book Finder App",
  description:
    "The Book Finder App is a React, TypeScript and Tailwind project that allows users to search books by title using the Open Library API, with pagination, responsive UI, and error handling.",
  icon: "/skills/react.svg",
  repoType: RepoType.Public,
  projectType: ProjectType.Personal,
  githubUrl: "https://github.com/mkv-manish/book-finder",
  url: "https://book-finder-dusky.vercel.app",
  tags: ["react.js", "typescript", "tailwindcss","openlibrary-api"],
}
];
export default projects;
