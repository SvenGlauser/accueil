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
    name: "Accueil",
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
    name: "Application interne",
    description: `
        <p>Développement d'une API pour le backend d'une application permettant le remplissage d'un formulaire</p>
        <p>Utilisation des technologies suivantes :</p>
        <ul>
          <li>Framework Java Spring</li>
          <li>Base de données PostgreSQL</li>
          <li>Liquibase pour créer la DB avec Spring</li>
          <li>Base de donnée virtualisée avec Docker</li>
        </ul>
        <p>Développement du front avec une connection au Backend</p>
        <p>Utilisation des technologies suivantes :</p>
        <ul>
          <li>Angular</li>
          <li>Keycloak</li>
        </ul>
      `,
    img: "assets/github/form.png",
    imgAlt: "Icône formulaire",
    technologie: [
      "Spring Boot",
      "Spring Security",
      "Spring JPA",
      "Liquibase",
      "PostgreSQL",
      "Angular",
      "Keycloak"
    ],
    url: ""
  }
]
