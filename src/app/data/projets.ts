import {Repository} from "../interface/repository";

export const PROJETS: Repository[] = [
  {
    name: "Todo list Backend",
    description: `
        <p>Développement d'une API pour le backend d'une application permettant de gérer des tâches → todo list</p>
        <p>Utilisation des technologies suivantes</p>
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
    ]
  }
]