import React from "react";
import ProjectCard from "@/components/ProjectCard";

function Projects() { 
  // Données des projets du développeur
  const projectsData = [
    {
      id: 1,
      name: "Cyber Security Card Game",
      title: "Un duel numérique où vous menez des attaques tout en protégeant votre serveur.",
      handle: "cyber-security-game",
      status: "Live",
      description: "Jeu de cartes de sécurité informatique développé avec Next.js, TypeScript et Tailwind CSS",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      githubUrl: "https://lnkd.in/e5wSrpku",
      liveUrl: "https://lnkd.in/efghhmht"
    },
    {
      id: 2,
      name: "Push Tiles",
      title: "Jeu de puzzle multijoueur en temps réel avec des mécaniques innovantes de push et d'échange de tuiles.",
      handle: "push-tiles-game",
      status: "Completed",
      description: "Jeu de stratégie multijoueur 3D avec WebSocket et React Three Fiber",
      technologies: ["Next.js 15", "React 19", "Three.js", "WebSocket", "Tailwind CSS"],
      githubUrl: "https://github.com/username/push-tiles-game",
      liveUrl: "http://localhost:3000"
    },
    {
      id: 3,
      name: "Club CPU Resource Manager",
      title: "Application de gestion des ressources matérielles pour simplifier l'inventaire du Club CPU.",
      handle: "cpu-resource-manager",
      status: "Completed",
      description: "Système CRUD pour la gestion des composants électroniques et allocation aux membres",
      technologies: ["C++", "Qt Creator"],
      githubUrl: "https://github.com/username/cpu-resource-manager",
      liveUrl: null
    },
    {
      id: 4,
      name: "PFE Manager",
      title: "Application de gestion complète des Projets de Fin d'Études pour établissements universitaires.",
      handle: "pfe-manager",
      status: "Live",
      description: "Gestion des étudiants, enseignants, projets et soutenances avec interface Java Swing",
      technologies: ["Java", "Swing", "JDBC"],
      githubUrl: "https://github.com/username/pfe-manager",
      liveUrl: null
    },
    {
      id: 5,
      name: "Styli",
      title: "Convertisseur HTML/CSS ⇄ TailwindCSS avec IA pour faciliter les migrations de style.",
      handle: "styli-converter",
      status: "Live",
      description: "Application web avec éditeurs Monaco et conversion intelligente via Google GenAI",
      technologies: ["Next.js", "Monaco Editor", "Google GenAI", "Tailwind CSS"],
      githubUrl: "https://github.com/username/styli-converter",
      liveUrl: "http://localhost:3000"
    },
    {
      id: 6,
      name: "COVID-19 Death Control App",
      title: "Application desktop pour surveiller les cas COVID-19 et identifier les personnes à haut risque.",
      handle: "covid-control-app",
      status: "Completed",
      description: "Gestion des données médicales avec interface PyQt5 pour le suivi des cas COVID-19",
      technologies: ["Python 3", "PyQt5"],
      githubUrl: "https://github.com/username/covid-control-app",
      liveUrl: null
    },
    {
      id: 7,
      name: "SAFETY AI",
      title: "Solution IA pour la sécurité au travail avec détection PPE et notifications intelligentes.",
      handle: "safety-ai-platform",
      status: "Live",
      description: "Plateforme de sécurité workplace avec détection temps réel et analytics dashboard",
      technologies: ["Next.js", "Tailwind CSS", "Gemini 2.0 Flash API", "Computer Vision"],
      githubUrl: "https://github.com/username/safety-ai",
      liveUrl: "https://safetyai.vercel.app"
    }
  ];

  const handleProjectContact = (project) => {
    if (project.liveUrl) {
      window.open(project.liveUrl, '_blank');
    } else if (project.githubUrl) {
      window.open(project.githubUrl, '_blank');
    }
  };

  return (
    <div
      id="Projects"
      className=" grid lg:grid-cols-1  w-full h-full relative p-5"
    >
    
      
      <div className="w-full h-full p-4 sm:p-6 lg:p-8">
      

        <div className="grid items-stretch grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {projectsData.map((project) => (
            <div key={project.id} className="w-full">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
