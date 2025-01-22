# Sloth Library 
 Being a book lover myself, this was a project idea I pitched. I&apos;ve always been fascinated by the seamless logic behind how libraries manage book checkouts and returns.
        <br><br>
This project was purely about learning opportunities, and by the end of the day, we felt we had achieved our goals. Our team's <strong>communication and negotiation</strong> were on point, which made the process smooth and rewarding.

# Design Brief:
The purpose of Sloth Library was to practice seamless communication between the frontend and backend using <strong>RESTful APIs.</strong> Our MVP aimed to create an app for librarians to track book stock and monitor which books are checked out, with real-time updates to the database. 
<br><br>
Working in a team of three, we had one day to plan and build the app, which limited the features. My role as <strong>Agile Facilitator</strong> involved organizing daily standups, tracking team progress, identifying and addressing any blockers, and coordinating the next steps to maintain smooth collaboration and ensure we stayed on track.

# Tech Stack and Explaination
For the frontend, we chose <strong>React, TypeScript, HTML, and CSS</strong> for their simplicity and reliability. The backend utilized <strong>Node.js with Express.js,</strong> and the database was built with <strong>Knex.js and SQLite.</strong>
<br><br>
Using RESTful APIs, we established seamless communication between the frontend and backend to integrate and manage the data effectively.

     
# Problems and Thought processes 
One key challenge was linking the checkout form to the database. Since we were relatively new to the technologies, we initially struggled to connect the pieces. Our solution was to pass the form data as props, sending the necessary information to the parent container. The parent container then connected the data to the database upon user submission.

## Installation
1. Clone the repository:
```bash
 git clone git@github.com:Lucy-Mckenzie/Sloth-Library.git
```
2. Navigate to project directory:
```bash
cd sloth-library
```

3. Install dependencies:
```bash
 npm install
```

4. Start the deployment server:
```bash
npm run dev
```

## License
This project is licensed under the [MIT License](LICENSE).

<p align="right">(<a href="#readme-top">back to top</a>)</p>


You can find the server running on [http://localhost:3000](http://localhost:3000) and the client running on [http://localhost:5173](http://localhost:5173).

---
