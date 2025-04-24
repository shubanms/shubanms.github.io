// Typed.js integration
const typed = new Typed('#typed-text', {
    strings: ["Data Scientist", "AI Engineer", "Deep Learning Specialist", "Python Developer", "Problem Solver"],
    typeSpeed: 50,
    backSpeed: 25,
    loop: true
});

// Animated text functionality
const animatedText = document.getElementById('animated-text');
const textArray = [
    'AI Engineer',
    'Data Scientist',
    'Problem Solver'
];
let textIndex = 0;

function updateAnimatedText() {
    if (animatedText) {
        animatedText.textContent = textArray[textIndex];
        textIndex = (textIndex + 1) % textArray.length;
    }
}
if (animatedText) {
    setInterval(updateAnimatedText, 3000);
    updateAnimatedText();
}

// Projects with animations
const projects = [
    { 
        title: 'Catalyst', 
        description: 'A modular platform combining FastAPI, Streamlit, Celery, and LLMs for knowledge management.',
        github: 'https://github.com/shubanms/Catalyst'
    },
    { 
        title: 'Parking Lot Occupancy', 
        description: 'Real-time Parking Slot Occupancy Detection System powered by YOLOv8 and PSAT algorithm.',
        github: 'https://github.com/shubanms/parking-lot-occupancy'
    },
    { 
        title: 'FALCON-Net', 
        description: 'A Streamlit app for analyzing robustness of Siamese and Prototypical networks against adversarial attacks.',
        github: 'https://github.com/shubanms/FALCON-Net',
        demo: 'https://falcon-net.streamlit.app/'
    },
    { 
        title: 'EVenture-Backend', 
        description: 'A FastAPI-powered project for effortless road trip planning for EV owners.',
        github: 'https://github.com/shubanms/EVenture-Backend'
    },
    { 
        title: 'Self-Driving Car', 
        description: 'A genetic learning self-driving car game that learns dynamically generated tracks.',
        github: 'https://github.com/shubanms/Self-Driving-Car'
    }
];

const projectsContainer = document.querySelector('#projects-container');
projectsContainer.innerHTML = ''; // Clear existing projects

// Create a wrapper for the two rows
const row1 = document.createElement('div');
row1.className = 'd-flex justify-content-center gap-4 mb-4 flex-row';
const row2 = document.createElement('div');
row2.className = 'd-flex justify-content-center gap-4 flex-row';

projects.forEach((project, index) => {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project-card-wrapper');
    projectDiv.setAttribute('data-aos', 'fade-up');
    projectDiv.setAttribute('data-aos-delay', (index * 100).toString());
    let linksHtml = `<a href="${project.github}" target="_blank" class="btn btn-outline-dark btn-sm mt-2 me-2"><i class="fab fa-github"></i> GitHub</a>`;
    if (project.demo) {
        linksHtml += `<a href="${project.demo}" target="_blank" class="btn btn-outline-primary btn-sm mt-2"><i class="fas fa-external-link-alt"></i> Demo</a>`;
    }
    projectDiv.innerHTML = `
        <div class="achievement-card h-100">
            <h5>${project.title}</h5>
            <p>${project.description}</p>
            <div>${linksHtml}</div>
        </div>
    `;
    if (index < 3) {
        row1.appendChild(projectDiv);
    } else {
        row2.appendChild(projectDiv);
    }
});
projectsContainer.appendChild(row1);
projectsContainer.appendChild(row2);

// Research Papers interactive panel (horizontal row version)
const papers = [
    {
        title: 'FALCONNet: A Multi-Defense Approach for Securing Few-Shot Learning Against Adversarial Attacks',
        desc: 'This paper compares few-shot learning models—Siamese, Prototypical Networks, and our proposed FalconNet—on the Omniglot dataset. We assess their robustness against adversarial attacks (PGD, FGSM) and test defense strategies like adversarial training and defensive distillation. FalconNet, with these defenses, outperforms the other models in accuracy and stability under attack.',
        pdf: 'assets/FALCONNet.pdf'
    },
    {
        title: 'Real-Time Parking Lot Occupancy Monitoring using YOLOv8 with Parking Slot Alignment Transformation Algorithm',
        desc: 'We present a real-time campus parking occupancy system using a single CCTV camera and YOLOv8 for detection. Our custom Parking Slot Alignment Transformation (PSAT) algorithm maps detections to parking slots, achieving up to 87.9% accuracy. The system is efficient, scalable, and maintains high accuracy even at near-full capacity.',
        pdf: 'assets/Real_Time_Parking_Lot_Occupancy_Monitoring_using_YOLOv8_with_Parking_Slot_Alignment_Transformation_Algorithm.pdf'
    },
    {
        title: 'Comparative Analysis of Gait Characteristics in Different BMI Categories Using IMU Sensors',
        desc: 'This study classifies individuals as underweight, normal, or overweight using BMI and IMU sensor data during stair walking. Three clustering algorithms were tested; agglomerative clustering performed best. Results show weight alone can sometimes classify more accurately than BMI, and knee/foot movement correlates with weight.',
        pdf: 'assets/Comparative_Analysis_of_Gait_Characteristics_in_Different_BMI_Categories_Using_IMU_Sensors.pdf'
    },
    {
        title: 'Cyber Physical Social Systems for the Blind:  A New Way to Connect',
        desc: 'We introduce a Cyber-Physical-Social System (CPSS) for visually impaired users in smart cities, integrating sensors, adaptive infrastructure, and a social platform. The system connects blind users with sighted volunteers, improving navigation and reducing incidents by 30%. User satisfaction and independence also increase, promoting inclusivity in urban environments.',
        pdf: 'assets/Cyber_Physical_Social_Systems_for_the_Blind_A_New_Way_to_Connect.pdf'
    }
];

// Render horizontal paper cards
const paperRow = document.getElementById('paper-row');
const paperAbstract = document.getElementById('paper-abstract');
const paperPdf = document.getElementById('paper-pdf');

if (paperRow && paperAbstract && paperPdf) {
    paperRow.innerHTML = '';
    papers.forEach((paper, idx) => {
        const card = document.createElement('div');
        card.className = 'paper-card';
        card.setAttribute('data-paper', idx);
        card.innerHTML = `<div class="paper-card-inner">${paper.title}</div>`;
        if (idx === 0) card.classList.add('active');
        card.addEventListener('click', function () {
            // Remove active from all
            paperRow.querySelectorAll('.paper-card').forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            // Update abstract/info
            paperAbstract.innerHTML = `<h4>${paper.title}</h4><p class='paper-abstract-text'>${paper.desc}</p>`;
            // Update PDF embed
            paperPdf.innerHTML = `<iframe src='${paper.pdf}' width='100%' height='600px' style='border:none;'></iframe>`;
            // Auto-scroll to abstract section with header offset
            const header = document.querySelector('header');
            const headerHeight = header ? header.offsetHeight + 100 : 0; // 24px extra for spacing
            const elementPosition = paperAbstract.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - headerHeight;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
        paperRow.appendChild(card);
    });
}

// Initialize AOS with custom settings
AOS.init({
    duration: 800,
    once: true,
    offset: 100,
    easing: 'ease-in-out'
});

// Smooth scroll for navigation links
const header = document.querySelector('header');
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = header ? header.offsetHeight + 24 : 0; // 24px extra for spacing
            const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - headerHeight;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Dark mode toggle - only on button
const darkModeToggle = document.getElementById('dark-mode-toggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

function setDarkMode(enabled) {
    if (enabled) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'true');
        if (darkModeToggle) darkModeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'false');
        if (darkModeToggle) darkModeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
}

if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
        setDarkMode(!document.body.classList.contains('dark-mode'));
    });
}

window.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem('darkMode');
    if (saved === null) {
        setDarkMode(prefersDark);
    } else {
        setDarkMode(saved === 'true');
    }
});
