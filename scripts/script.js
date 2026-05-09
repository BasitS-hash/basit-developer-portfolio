// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// Back to top button
const backToTop = document.createElement('button');
backToTop.textContent = '↑';
backToTop.id = 'back-to-top';
Object.assign(backToTop.style, {
    position: 'fixed', bottom: '20px', right: '20px',
    display: 'none', padding: '10px 14px',
    border: 'none', borderRadius: '5px',
    backgroundColor: '#007BFF', color: '#fff',
    cursor: 'pointer', zIndex: '1000', fontSize: '1rem'
});
document.body.appendChild(backToTop);

window.addEventListener('scroll', () => {
    backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
});
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Dark mode toggle
const darkToggle = document.createElement('button');
darkToggle.textContent = '🌙';
darkToggle.id = 'dark-mode-toggle';
Object.assign(darkToggle.style, {
    position: 'fixed', bottom: '65px', right: '20px',
    padding: '10px 14px', border: 'none', borderRadius: '5px',
    backgroundColor: '#333', color: '#fff',
    cursor: 'pointer', zIndex: '1000', fontSize: '1rem'
});
document.body.appendChild(darkToggle);

const saved = localStorage.getItem('darkMode');
if (saved === 'true') document.body.classList.add('dark-mode');

darkToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});

const darkStyles = document.createElement('style');
darkStyles.textContent = `
    body.dark-mode { background-color: #121212; color: #e0e0e0; }
    body.dark-mode header { background-color: #1a1a2e; }
    body.dark-mode nav ul li a { color: #90caf9; }
    body.dark-mode a { color: #90caf9; }
    body.dark-mode .project, body.dark-mode .experience {
        background-color: #1e1e1e; border-color: #333;
    }
`;
document.head.appendChild(darkStyles);
