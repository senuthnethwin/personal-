const cursorGlow = document.querySelector('.cursor-glow');
document.addEventListener('mousemove', (e) => {
    if (cursorGlow) {
        cursorGlow.style.left = e.clientX + 'px';
        cursorGlow.style.top = e.clientY + 'px';
    }
});

const loaderText = document.getElementById('loaderText');
const loadingLines = [
    'Initializing Senuth Portfolio...',
    'Loading Cyber Security Profile...',
    'Building Animated Interface...',
    'Adding services, projects and CV...',
    'Access Granted.'
];
let loadingIndex = 0;
const loadingTimer = setInterval(() => {
    loadingIndex++;
    if (loaderText && loadingIndex < loadingLines.length) loaderText.textContent = loadingLines[loadingIndex];
}, 650);

window.addEventListener('load', () => {
    setTimeout(() => {
        clearInterval(loadingTimer);
        document.getElementById('loader')?.classList.add('hide');
    }, 2600);
});

const revealElements = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('show');
    });
}, { threshold: 0.15 });
revealElements.forEach(el => observer.observe(el));

const aiPopup = document.getElementById('aiPopup');
const closeAi = document.getElementById('closeAi');
const aiLauncher = document.getElementById('aiLauncher');
const aiMessage = document.getElementById('aiMessage');
const aiInput = document.getElementById('aiInput');
const askAi = document.getElementById('askAi');
const startVoice = document.getElementById('startVoice');

function setAiMessage(text, sectionId = null) {
    if (!aiMessage) return;
    aiMessage.textContent = '';
    let i = 0;
    const typer = setInterval(() => {
        aiMessage.textContent += text.charAt(i);
        i++;
        if (i >= text.length) clearInterval(typer);
    }, 14);
    if (sectionId) {
        setTimeout(() => document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' }), 550);
    }
}

const aiAnswers = {
    skills: {
        section: 'skills',
        text: 'Senuth is learning Java, Spring Boot, networking, cybersecurity, web UI animations, OOP, and DSA. I will take you to the skills section now.'
    },
    projects: {
        section: 'projects',
        text: 'Senuth has projects in Spring Boot, networking, and this animated personal website. Click View Details on any project card for more information.'
    },
    services: {
        section: 'services',
        text: 'Senuth can help with web development, Spring Boot projects, cyber security basics, network design, UI design, and academic project support.'
    },
    about: {
        section: 'about',
        text: 'Senuth is a Cyber Security student at SLIIT. His goal is to become a professional Security Architect.'
    },
    education: {
        section: 'education',
        text: 'Senuth studied at D.S. Senanayake College and is following a Cyber Security degree path at SLIIT University.'
    },
    certificates: {
        section: 'certificates',
        text: 'The certificates section shows Senuth’s learning areas: cybersecurity, Java, Spring Boot, networking, and web development.'
    },
    cv: {
        section: 'home',
        text: 'You can download Senuth’s CV using the Download CV button in the hero section.'
    },
    github: {
        section: 'github',
        text: 'Senuth’s GitHub cards are shown in the GitHub Projects section. They highlight code and learning work.'
    },
    contact: {
        section: 'contact',
        text: 'You can contact Senuth by email, Instagram, LinkedIn, or the contact form. I will open the contact section for you.'
    }
};

function answerQuestion(value) {
    const text = value.toLowerCase().trim();
    let key = 'about';
    if (text.includes('service') || text.includes('help')) key = 'services';
    else if (text.includes('skill') || text.includes('java') || text.includes('spring') || text.includes('cyber')) key = 'skills';
    else if (text.includes('project') || text.includes('work') || text.includes('bakery')) key = 'projects';
    else if (text.includes('contact') || text.includes('email') || text.includes('instagram') || text.includes('linkedin')) key = 'contact';
    else if (text.includes('education') || text.includes('sliit') || text.includes('school')) key = 'education';
    else if (text.includes('certificate')) key = 'certificates';
    else if (text.includes('cv') || text.includes('resume')) key = 'cv';
    else if (text.includes('github') || text.includes('code')) key = 'github';
    else if (text.includes('about') || text.includes('who')) key = 'about';
    const answer = aiAnswers[key];
    setAiMessage(answer.text, answer.section);
}

closeAi?.addEventListener('click', () => {
    aiPopup?.classList.add('hide');
    if (aiLauncher) aiLauncher.style.display = 'flex';
});
aiLauncher?.addEventListener('click', () => {
    aiPopup?.classList.remove('hide');
    aiLauncher.style.display = 'none';
    setAiMessage('Senuth AI Guide is online. Ask me about skills, services, projects, education, CV, certificates, or contact details.');
});

document.querySelectorAll('.ai-quick-actions button').forEach(button => {
    button.addEventListener('click', () => answerQuestion(button.dataset.answer || 'about'));
});
askAi?.addEventListener('click', () => answerQuestion(aiInput?.value || 'about'));
aiInput?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') answerQuestion(aiInput.value);
});

startVoice?.addEventListener('click', () => {
    const voiceText = 'Hello visitor. I am Senuth AI Guide. I can show you Senuth’s skills, services, projects, education, certificates, CV and contact details.';
    setAiMessage(voiceText);
    if ('speechSynthesis' in window) {
        speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(voiceText);
        utterance.rate = 0.95;
        utterance.pitch = 1;
        speechSynthesis.speak(utterance);
    }
});

const themeToggle = document.getElementById('themeToggle');
themeToggle?.addEventListener('click', () => {
    document.body.classList.toggle('light');
    themeToggle.textContent = document.body.classList.contains('light') ? '☀ Light' : '☾ Dark';
});

const projectData = {
    bakery: {
        tag: 'Spring Boot Project',
        title: 'Bakery Order & Custom Cake Booking Platform',
        description: 'A Java web system for bakery orders and custom cake bookings. It includes admin/customer interfaces, payment management, offer management, product handling, and practical web flow ideas.',
        tech: 'Java, Spring Boot, Thymeleaf, HTML, CSS, JavaScript',
        role: 'Payment Management and Offer Management',
        status: 'Academic / Team Project',
        link: 'https://github.com/senuthnethwin'
    },
    network: {
        tag: 'Networking Project',
        title: 'Office Network Design',
        description: 'A practical network design plan with floor-wise network layout, switches, access points, patch panels, rack planning, and structured cabling ideas.',
        tech: 'Cisco Packet Tracer, LAN Design, Switching, Routing',
        role: 'Network Planning and Documentation',
        status: 'Learning Project',
        link: 'https://github.com/senuthnethwin'
    },
    portfolio: {
        tag: 'Portfolio Project',
        title: 'Animated Personal Website',
        description: 'A premium animated Spring Boot portfolio website with a real photo animation, AI guide, project popups, certificates, contact form, and dark/light mode.',
        tech: 'Spring Boot, Thymeleaf, CSS Animations, JavaScript',
        role: 'Full Website Owner',
        status: 'Personal Project',
        link: 'https://github.com/senuthnethwin'
    }
};

const modal = document.getElementById('projectModal');
const modalClose = document.getElementById('modalClose');
function openProjectModal(key) {
    const data = projectData[key];
    if (!data || !modal) return;
    document.getElementById('modalTag').textContent = data.tag;
    document.getElementById('modalTitle').textContent = data.title;
    document.getElementById('modalDescription').textContent = data.description;
    document.getElementById('modalTech').textContent = data.tech;
    document.getElementById('modalRole').textContent = data.role;
    document.getElementById('modalStatus').textContent = data.status;
    document.getElementById('modalLink').href = data.link;
    modal.classList.add('show');
    modal.setAttribute('aria-hidden', 'false');
}
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', (event) => {
        if (event.target.closest('a') || event.target.closest('button')) return;
        openProjectModal(card.dataset.project);
    });
});
document.querySelectorAll('.open-project').forEach(button => {
    button.addEventListener('click', (event) => {
        event.stopPropagation();
        openProjectModal(button.closest('.project-card')?.dataset.project);
    });
});
modalClose?.addEventListener('click', () => modal?.classList.remove('show'));
modal?.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('show');
});

document.getElementById('contactForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('visitorName')?.value || 'Visitor';
    const email = document.getElementById('visitorEmail')?.value || '';
    const message = document.getElementById('visitorMessage')?.value || '';
    const status = document.getElementById('formStatus');
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:senuthnethwin@gmail.com?subject=${subject}&body=${body}`;
    if (status) status.textContent = `Thank you ${name}. Your email app is opening now.`;
    e.target.reset();
});

const visitorCount = document.getElementById('visitorCount');
if (visitorCount) {
    const visits = Number(localStorage.getItem('senuthPortfolioVisits') || '0') + 1;
    localStorage.setItem('senuthPortfolioVisits', String(visits));
    visitorCount.textContent = visits;
}
//
