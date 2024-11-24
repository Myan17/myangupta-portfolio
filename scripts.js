// Scroll to section function
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// About Me content
const aboutMeContent = `
    <p>
        Hi, I'm Myan Gupta, a passionate Computer Science and Finance student at the University of Minnesota. 
        With a strong foundation in algorithms, data structures, and software development, I thrive on solving complex problems through clean, efficient code. My experience spans a variety of technical projects, including developing cloud-based APIs, building scalable applications, and implementing game logic, which have sharpened my skills in Python, Java, and C++.
    </p>
    <p>
        I’m particularly interested in creating software solutions that not only meet functional requirements but also provide scalable, user-friendly experiences. For example, in my Appointment Scheduling API project, I reduced API response times by 40% and improved global accessibility for users across multiple time zones, while maintaining a strong focus on performance and reliability. Similarly, my work on a custom Minesweeper game and a simplified chess game demonstrates my ability to create efficient, well-structured applications with optimal user experiences.
    </p>
    <p>
        As a Teaching Assistant and Programming Tutor, I’ve developed a deep understanding of algorithmic optimization and have helped students improve their coding proficiency by over 25%. I believe in continuous learning and am always looking for opportunities to grow, whether it's mastering new technologies like AWS and Azure or tackling real-world engineering challenges.
    </p>
    <p>
        I'm currently seeking an internship role where I can contribute my technical skills, collaborate with like-minded engineers, and continue learning in a dynamic, fast-paced environment.
    </p>
`;

// Education content
const educationContent = `
    <div>
        <h3>University of Minnesota, Twin Cities</h3>
        <p><strong>Bachelor of Science:</strong> Computer Science and Finance</p>
        <p><strong>GPA:</strong> 3.8 / 4.0</p>
        <p><strong>Relevant Coursework:</strong> Algorithms and Data Structures, Advanced Programming Principles, Machine Architecture, 
        Discrete Mathematics, and Database Management Systems.</p>
        <p>Graduation: May 2026</p>
    </div>
`;

// Projects data with modal content
// Data for projects
const projects = [
    {
        title: "Appointment Scheduling API",
        description: `
            <ul>
                <li>Developed and deployed a scalable appointment scheduling API using FastAPI, reducing development time for similar projects by 30%.</li>
                <li>Designed modular CRUD operations for user and meeting management, improving code reusability and reducing bug incidence by 20%.</li>
                <li>Implemented Pydantic models for robust schema validation, ensuring 100% compliance with API input/output specifications.</li>
                <li>Optimized database queries for user and participant data retrieval, reducing API response times by 40%.</li>
                <li>Integrated RESTful endpoints with clear documentation, improving API usability for client teams and reducing onboarding time by 50%.</li>
                <li>Engineered automated redirects to API documentation, increasing accessibility and reducing manual setup effort by 10 hours monthly.</li>
            </ul>
        `,
        link: "#"
    },
    {
        title: "Chess Master: Simplified Chess Game",
        description: `
            <ul>
                <li>Developed a simplified chess game in Java using 2D arrays, designing chess piece classes and implementing movement rules, ensuring 99% accuracy in test cases.</li>
                <li>Secured over 95% code coverage with JUnit tests, identifying and resolving 50+ potential bugs, delivering a fully functional prototype within 4 weeks.</li>
            </ul>
        `,
        link: "#"
    },
    {
        title: "Fractal Machine: Fractal Drawing Application",
        description: `
            <ul>
                <li>Constructed an application to generate fractal patterns using Java, integrating shape classes (Circle, Rectangle, Triangle) and a recursive drawing algorithm.</li>
                <li>Supported recursion depths up to 10 levels and rendered complex fractal patterns with adjustable recursion depth and color variations.</li>
                <li>Achieved frame rates of 30 FPS for real-time rendering.</li>
            </ul>
        `,
        link: "#"
    }
];

// Function to load content dynamically
function loadAboutMe() {
    document.getElementById('about-content').innerHTML = aboutMeContent;
}

function loadEducation() {
    document.getElementById('education-content').innerHTML = educationContent;
}

// Render projects with tooltips and modal integration
function renderProjects() {
    const container = document.getElementById('project-container');
    projects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
        projectCard.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <button class="details-button" onclick="showModal(${index})">View Details</button>
        `;
        container.appendChild(projectCard);
    });
}

// Show modal for project details
function showModal(index) {
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');
    modalContent.innerHTML = `
        <h2>${projects[index].title}</h2>
        ${projects[index].details}
        <button class="close-button" onclick="closeModal()">Close</button>
    `;
    modal.style.display = 'block';
}

// Close modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Light/Dark Mode Toggle
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    const themeButton = document.getElementById('theme-toggle');
    if (body.classList.contains('dark-mode')) {
        themeButton.textContent = 'Switch to Light Mode';
    } else {
        themeButton.textContent = 'Switch to Dark Mode';
    }
}

// Skills data
const skills = [
    {
        category: "Programming Languages",
        items: ["Python", "Java", "C++", "JavaScript", "SQL", "HTML/CSS"]
    },
    {
        category: "Frameworks & Libraries",
        items: ["FastAPI", "Spring", "React", "Node.js", "Bootstrap"]
    },
    {
        category: "Tools & Platforms",
        items: ["AWS", "Azure", "Docker", "Kubernetes", "Git"]
    },
    {
        category: "Database Systems",
        items: ["MySQL", "MongoDB", "PostgreSQL", "Redis", "DynamoDB"]
    }
];

// Function to load Skills section
function loadSkills() {
    const skillsContainer = document.getElementById('skills-content');
    skills.forEach(skillCategory => {
        const skillCard = document.createElement('div');
        skillCard.classList.add('skill-card');
        skillCard.innerHTML = `
            <h3>${skillCategory.category}</h3>
            <ul>
                ${skillCategory.items.map(item => `<li>${item}</li>`).join('')}
            </ul>
        `;
        skillsContainer.appendChild(skillCard);
    });
}

// Form submit handler
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for your message!');
});



// Initialize content
document.addEventListener('DOMContentLoaded', () => {
    loadAboutMe();
    loadEducation();
    renderProjects();
    loadSkills();
});
