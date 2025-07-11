# Mentor Match — Project Architecture

<img align="right" src="https://media.giphy.com/media/du3J3cXyzhj75IOgvA/giphy.gif" width="100"/>

[![GitHub last commit](https://img.shields.io/github/last-commit/Alexandrbig1/mentor-match)](https://github.com/Alexandrbig1/mentor-match/commits/main)
[![GitHub license](https://img.shields.io/github/license/Alexandrbig1/mentor-match)](https://github.com/Alexandrbig1/mentor-match/blob/main/LICENSE)
[![JavaScript](https://img.shields.io/badge/JavaScript-Latest-EAD319.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Axios](https://img.shields.io/badge/Axios-1.6.4-5300D8.svg)](https://github.com/axios/axios)
[![Vite](https://img.shields.io/badge/Vite-5.0.8-6868F2)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18.2.0-51CAEF.svg)](https://reactjs.org/)
[![Styled Components](https://img.shields.io/badge/Styled_Components-6.1.6-D664C0.svg)](https://styled-components.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.1.1-00ADD8.svg)](https://www.framer.com/motion/)
[![React Icons](https://img.shields.io/badge/React_Icons-5.0.1-E10051.svg)](https://react-icons.github.io/react-icons/)
[![Node.js Version](https://img.shields.io/badge/Node.js-v18.18.0-2B8B27)](https://nodejs.org/)
[![Express.js Version](https://img.shields.io/badge/Express.js-v4.18.2-000000)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-v6.3.0-3B9539)](https://www.mongodb.com/)
[![Mongoose Version](https://img.shields.io/badge/Mongoose-v8.0.3-6B0002)](https://mongoosejs.com/)
[![JWT](https://img.shields.io/badge/JSON%20Web%20Token-v9.0.2-000000)](https://jwt.io/)
[![Express Rate Limit](https://img.shields.io/badge/Express%20Rate%20Limit-7.4.1-000000)](https://github.com/nfriedly/express-rate-limit)
[![Git](https://img.shields.io/badge/Git-2.35.1-F05032.svg)](https://git-scm.com/)

> **A Fullstack Web Application for connecting developers and mentors in Chicago area**

---

## Architecture Diagram

![Mentor Match Architecture](./docs/images/architecture.png)

---

## Tech Stack

| Layer         | Technology                                            |
| ------------- | ----------------------------------------------------- |
| Frontend      | React.js (Vite + TypeScript)                          |
| Backend (API) | Node.js + Express.js                                  |
| Database      | MongoDB (with Mongoose ODM)                           |
| Deployment    | (future ready: AWS / Docker / Elastic Beanstalk etc.) |

---

## Project Structure

```bash
mentor-match/          # GitHub mono-repo
│
├── frontend/          # React + Vite frontend
│   ├── public/        # Static assets
│   ├── src/           # Main source code
│   │   ├── components/
│   │   ├── context/
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── theme/
│   │   ├── utils/
│   │   └── main.tsx
│   ├── .env.example
│   ├── index.html
│   ├── package.json
│   ├── tsconfig.json
│   └── vite.config.ts
│
├── backend/           # Node.js backend API
│   ├── src/
│   │   ├── controllers/    # Business logic
│   │   │   ├── mentors.controller.js
│   │   │   └── technologies.controller.js
│   │   ├── decorators/     # Wrapper utilities
│   │   │   └── ctrlWrapper.js
│   │   ├── helpers/        # Error Handling
│   │   │   └── HttpError.js
│   │   ├── models/         # Mongoose models
│   │   │   └── mentor.model.js
│   │   ├── routes/         # API routes
│   │   │   ├── mentors.routes.js
│   │   │   └── technologies.routes.js
│   │   └── seed/           # Optional: initial DB seeding data
│   │       ├── db/mentorsData.json
│   │       └── seedMentors.js
│   ├── .env.example
│   ├── package.json
│   ├── app.js             # Main express app
│   └── server.js          # Entry point
```

---

### API Endpoints Example

| Route                   | Description                      |
| ----------------------- | -------------------------------- |
| GET /mentors            | Fetch all mentors                |
| GET /mentors?name=John  | Search mentor by name            |
| GET /mentors?tech=React | Filter mentors by technology     |
| GET /technologies       | Get available technology filters |

---

### Database Seeding

- Located at: `backend/src/seed/`
- Contains sample mentor data used to populate MongoDB for testing/development.

---

### Future Scalability (Microservice Ready)

Even though current version is monolithic (mono-repo), project is designed to support future microservices separation, such as:

| Service              | Responsibility                             |
| -------------------- | ------------------------------------------ |
| Auth Service         | User Registration, Login, Token Management |
| Mentor Service       | Mentor CRUD, Search, Filtering             |
| Technology Service   | Managing list of technologies              |
| Notification Service | Email, SMS, alerts (future)                |
| Frontend Service     | React UI                                   |

---

### Deployment

- Designed for Docker containerization.
- Cloud-ready for AWS Elastic Beanstalk or ECS deployment.
- Environment variables handled via `.env` files.

---

### Security (future plans)

- Implement JWT authentication.
- Role-based access (Admin, Mentor, User).
- Input validation & sanitization.

---

### Testing

- Unit tests for backend (planned)
- Integration tests (planned)
- Frontend component tests with React Testing Library (planned)

---

## Issues

If you encounter any issues or have suggestions, please
[open an issue](https://github.com/Alexandrbig1/mentor-match/issues).

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Feedback

I welcome feedback and suggestions to improve the application's functionality and user experience.

---

## Languages and Tools

<div align="center">
<a href="https://en.wikipedia.org/wiki/HTML5" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg" alt="HTML5" height="50" /></a>
<a href="https://www.w3schools.com/css/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg" alt="CSS3" height="50" /></a>
<a href="https://www.javascript.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg" alt="JavaScript" height="50" /></a>
<a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/></a>
rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg" width="36" height="36" alt="NodeJS" /></a>
<a href="https://www.mongodb.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/mongodb-original-wordmark.svg" alt="MongoDB" height="50" /></a>
<a href="https://expressjs.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg" width="36" height="36" alt="Express" /></a>
<a href="https://styled-components.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/styled-components.png" alt="Styled Components" height="50" /></a>
<a href="https://framer.com" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/framer-colored.svg" width="36" height="36" alt="Framer" /></a>
<a href="https://vitejs.dev/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vite-colored.svg" width="36" height="36" alt="Vite" /></a>
<a href="https://git-scm.com/" target="_blank" rel="noreferrer">
<img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/></a>
<a href="https://postman.com" target="_blank" rel="noreferrer"><img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40"/></a>
</div>

---

## Connect with me

<div align="center">
<a href="https://linkedin.com/in/alex-smagin29" target="_blank">
<img src=https://img.shields.io/badge/linkedin-%231E77B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white alt=linkedin style="margin-bottom: 5px;" />
</a>
<a href="https://www.youtube.com/@AlexSmaginDev" target="_blank">
<img src="https://img.shields.io/badge/youtube-%23FF0000.svg?&style=for-the-badge&logo=youtube&logoColor=white" alt="YouTube" style="margin-bottom: 5px;" />
</a>
<a href="https://discord.gg/t6MGsCqdFX" target="_blank">
<img src="https://img.shields.io/badge/discord-%237289DA.svg?&style=for-the-badge&logo=discord&logoColor=white" alt="Discord" style="margin-bottom: 5px;" />
</a>
<a href="https://stackoverflow.com/users/22484161/alex-smagin" target="_blank">
<img src=https://img.shields.io/badge/stackoverflow-%23F28032.svg?&style=for-the-badge&logo=stackoverflow&logoColor=white alt=stackoverflow style="margin-bottom: 5px;" />
</a>
<a href="https://dribbble.com/Alexandrbig1" target="_blank">
<img src=https://img.shields.io/badge/dribbble-%23E45285.svg?&style=for-the-badge&logo=dribbble&logoColor=white alt=dribbble style="margin-bottom: 5px;" />
</a>
<a href="https://www.behance.net/a1126" target="_blank">
<img src=https://img.shields.io/badge/behance-%23191919.svg?&style=for-the-badge&logo=behance&logoColor=white alt=behance style="margin-bottom: 5px;" />
</a>
<a href="https://www.upwork.com/freelancers/~0117da9f9f588056d2" target="_blank">
<img src="https://img.shields.io/badge/upwork-%230077B5.svg?&style=for-the-badge&logo=upwork&logoColor=white&color=%23167B02" alt="Upwork" style="margin-bottom: 5px;" />
</a>
</div>
