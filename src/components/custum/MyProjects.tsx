import React from "react";
import { FocusCards } from "../ui/FocusCards";

export default function ProjectsPage() {
  const cards = [
       {
        title: "PrimePick",
        description: "PrimePick is a dynamic platform featuring seamless API data handling and secure user authentication via Clerk. It combines responsive design with effortless navigation for an optimized user experience.",
        githubLink: "https://github.com/Anousha1846/PrimePick",
        liveLink: "https://prime-pick-11wo-22hlgwzgn-anousha1846s-projects.vercel.app/",
      },
        {
      title: "MORENT-Rent A Car",
      description: "MORENT is a cutting-edge car rental platform, designed with a user-friendly interface and smooth functionality, ensuring a hassle-free and efficient car booking experience for users.",
      githubLink: "https://github.com/Anousha1846/Hackathon3-GIAIC_Morent",
      liveLink: "https://hackathon3-giaic-morent.vercel.app/" ,
    },
       {
        title: "Food Blog Website",
        description: "My Food Blog website offers dynamic routing for intuitive exploration and an engaging comment section, fostering vibrant interaction and effortless discovery of culinary delights.",
        githubLink: "https://github.com/Anousha1846/Anousha-s-Food-Blog",
        liveLink: "https://anousha-s-food-blog-7cle-l8vwzw069-anousha1846s-projects.vercel.app/",
      },
 {
      title: "Portfolio",
      description: "My portfolio showcases innovative and professional projects, highlighting creative designs, responsive layouts, and seamless functionality for an exceptional user experience.",
      githubLink: "https://github.com/Anousha1846/Portfolio-2",
      liveLink: "https://project-1-p4x1nhwyy-anousha1846s-projects.vercel.app/",
    },
    
    {
      title: "DWELL-House Website",
      description: "DWELL-house is a sleek, responsive platform showcasing residential architecture projects. Built with Next.js and Tailwind CSS, it offers an intuitive layout, highlighting project details and providing a seamless, visually engaging browsing experience.",
      githubLink: "https://github.com/Anousha1846/DWEll-house-website",
      liveLink: "https://anousha1846.github.io/DWEll-house-website",
    },
    {
      title: "ElectoMart",
      description: "Electromart is a sleek eCommerce platform built with Next.js, TypeScript, and custom CSS, offering a responsive, intuitive interface with dynamic product listings, seamless navigation, and optimized shopping experience for electronics.",
      githubLink: "https://github.com/Anousha1846/ElectroMart",
      liveLink: "https://electro-mart-topaz.vercel.app/",
    },
     {
        title: "NEXCENT-Figma Template",
        description: "NEXCENT is a polished Figma template showcasing a modern and visually appealing UI design, perfect for inspiring seamless user experiences and creative project layouts."
        githubLink: "https://github.com/Anousha1846/Figma-Template",
        liveLink: "https://figma-template-cdt5y7n80-anousha1846s-projects.vercel.app/",
      },
    {
        title: "Shopping 2.0",
        description: "This eCommerce website offers a seamless shopping experience with an intuitive add-to-cart functionality. Users can easily browse products, manage their cart, and enjoy secure checkout for a hassle-free purchase process.",
        githubLink: "https://github.com/Anousha1846/Hackathon-1.2",
        liveLink: "https://anousha1846.github.io/Hackathon-1.2/",
      },

    {
        title: "Royal Rides",
        description: "Royal Rides is a simple, elegant website built using only HTML and CSS. It showcases sleek design, emphasizing user-friendly navigation, presenting services, and enhancing the experience of exploring luxurious ride options.",
        githubLink: "https://github.com/Anousha1846/RoyalRides",
        liveLink: "https://anousha1846.github.io/RoyalRides/",
      },
         {
        title: "Dynamic Editable Resume Builder",
        description: "A user-friendly resume builder offering dynamic editing and instant downloading. Easily customize fields like contact info, education, and experience to create a polished, professional resume tailored to your needs.",
        githubLink: "https://github.com/Anousha1846/Updated-Resume-Builder-5",
        liveLink: "https://updated-resume-builder-5.vercel.app/",
      },
      {
        title: "TO-DO App",
        description: "This simple TO DO app allows users to create, manage, and delete tasks effortlessly. With a clean interface, it enhances productivity by keeping track of daily activities and priorities.",
        githubLink: "https://github.com/Anousha1846/ToDo-list",
        liveLink: "https://anousha1846.github.io/ToDo-list/",
      },
       {
      title: "Simple Static Resume Builder",
      description: "Simple Static Resume Builder is a user-friendly tool that enables users to create elegant resumes effortlessly. It features customizable templates, easy input forms, and a clean layout for professional presentation.",
      githubLink: "https://github.com/Anousha1846/Simple-resume-builder-1",
      liveLink: "https://anousha1846.github.io/Simple-resume-builder-1/",
    },
      {
        title: "Netflix Home Page Clone",
        description: "Netflix Homepage Clone is a responsive website built using HTML and Tailwind CSS. It replicates the Netflix interface, featuring a sleek design, dynamic content display, and smooth navigation for an immersive experience.",
        githubLink: "https://github.com/Anousha1846/Netflix-Homepage-Clone",
        liveLink: "https://anousha1846.github.io/Netflix-Homepage-Clone/",
      },
        {
        title: "Static Marksheet",
        description: "This static marksheet project, created with JavaScript, provides a simple interface for displaying student grades. Users can view scores clearly without dynamic input, ensuring an easy and straightforward experience.",
        githubLink: "https://github.com/Anousha1846/marksheet-js",
        liveLink: "https://anousha1846.github.io/marksheet-js/",
      },
      
  ];

  return (
    <main>
    <div className="sm:p-8 p-4 sm:pb-20 bg-slate-200">
    <h1 className="p-4 py-8 pb-16 text-sky-900 font-extrabold text-center text-2xl sm:text-5xl">MY PROJECTS</h1>
     <FocusCards cards={cards} />
 </div>
 </main>
  );
}











   
  
