import {Repository} from "../interface/repository";

export const PROJETS: Repository[] = [
  {
    name: "Todo list Backend",
    description: `
        <p>Développement d'une API pour le backend d'une application permettant de gérer des tâches → todo list</p>
        <p>Utilisation des technologies suivantes :</p>
        <ul>
          <li>Framework Java Spring</li>
          <li>Base de données PostgreSQL</li>
          <li>Liquibase pour créer la DB avec Spring</li>
          <li>Base de donnée virtualisée avec Docker</li>
        </ul>
      `,
    img: "assets/github/todo.png",
    imgAlt: "Icône todo list",
    technologie: [
      "Spring Boot",
      "Spring Security",
      "Spring JPA",
      "Liquibase",
      "PostgreSQL"
    ],
    url: "https://github.com/SvenGlauser/todo"
  },
  {
    name: "Site web de présentation",
    description: `
        <p>Développement de mon site de présentation</p>
        <p>Utilisation des technologies suivantes :</p>
        <ul>
          <li>Angular</li>
        </ul>
      `,
    img: "assets/github/home.png",
    imgAlt: "Icône home",
    technologie: [
      "Angular"
    ],
    url: "https://github.com/SvenGlauser/accueil"
  },
  {
    name: "The Movies Informations",
    description: `
        <p>Développement d'un site web connecté à l'API de The Movie Database qui récupère les infos des acteurs, des films et des séries et les affiche à l'utilisateur</p>
        <p>Utilisation des technologies suivantes :</p>
        <ul>
          <li>Angular</li>
        </ul>
    `,
    img: "https://glausve.divtec.me/movies/favicon.ico",
    imgAlt: "Icône films",
    technologie: ["Angular"],
    url: "https://github.com/SvenGlauser/movies-angular"
  },
  {
    name: "Horloge digitale",
    description: `
        <p>Horloge digitale</p>
        <p>Utilisation des technologies suivantes :</p>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>
    `,
    img: "https://github.com/favicon.ico",
    imgAlt: "Icône films",
    technologie: ["HTML", "CSS", "JavaScript"],
    url: "https://github.com/SvenGlauser/clock"
  }
]
