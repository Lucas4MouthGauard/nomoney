// Language data
const translations = {
    en: {
        title: "NO MONEY. NO HAPPY.",
        heroSubtitle: "This is not a joke.\nThis is life.",
        mascotText: "You are not late.\nYou are just poor.",
        manifestoText: "People with money buy early.\nPeople without money buy later.\nEarly buyers get rich.\nLate buyers pay the tax.\nThis time,\nthe tax goes back to the poor.",
        mechanismText: "The less you have,\nthe more you get back.",
        footerSub: "We are still here."
    },
    zh: {
        title: "没钱。不快乐。",
        heroSubtitle: "这不是玩笑。\n这就是生活。",
        mascotText: "你并不晚。\n你只是穷。",
        manifestoText: "有钱人买得早。\n没钱人买得晚。\n早买的人变富。\n晚买的人交税。\n这一次，\n税回到穷人手里。",
        mechanismText: "你拥有的越少，\n得到的回报越多。",
        footerSub: "我们依然在这里。"
    }
};

// Current language
let currentLang = 'en';

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    initLanguageSwitcher();
    initAnimations();
});

// Language Switcher
function initLanguageSwitcher() {
    const langButtons = document.querySelectorAll('.lang-btn');
    const htmlRoot = document.getElementById('html-root');
    
    langButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            switchLanguage(lang);
            
            // Update active state
            langButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Load saved language preference
    const savedLang = localStorage.getItem('preferredLang') || 'en';
    if (savedLang !== 'en') {
        switchLanguage(savedLang);
        langButtons.forEach(btn => {
            if (btn.getAttribute('data-lang') === savedLang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }
}

function switchLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('preferredLang', lang);
    
    const htmlRoot = document.getElementById('html-root');
    htmlRoot.setAttribute('lang', lang);
    
    // Update title
    document.title = translations[lang].title;
    
    // Update all elements with data-en and data-zh attributes
    const elements = document.querySelectorAll('[data-en][data-zh]');
    elements.forEach(el => {
        const text = translations[lang][el.getAttribute('data-en')] || 
                    (lang === 'zh' ? el.getAttribute('data-zh') : el.getAttribute('data-en'));
        
        if (el.tagName === 'P' || el.tagName === 'H1' || el.tagName === 'H2' || el.tagName === 'H3') {
            el.innerHTML = text.replace(/\n/g, '<br>');
        } else {
            el.textContent = text.replace(/\n/g, ' ');
        }
    });
    
    // Special handling for hero subtitle
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        heroSubtitle.innerHTML = translations[lang].heroSubtitle.replace(/\n/g, '<br>');
    }
    
    // Special handling for mascot text
    const mascotText = document.querySelector('.mascot-text');
    if (mascotText) {
        mascotText.innerHTML = translations[lang].mascotText.replace(/\n/g, '<br>');
    }
    
    // Special handling for manifesto text
    const manifestoText = document.querySelector('.manifesto-text');
    if (manifestoText) {
        manifestoText.innerHTML = translations[lang].manifestoText.replace(/\n/g, '<br>');
    }
    
    // Special handling for mechanism text
    const mechanismText = document.querySelector('.mechanism-text');
    if (mechanismText) {
        mechanismText.innerHTML = translations[lang].mechanismText.replace(/\n/g, '<br>');
    }
    
    // Special handling for footer sub
    const footerSub = document.querySelector('.footer-sub');
    if (footerSub) {
        footerSub.textContent = translations[lang].footerSub;
    }
    
    // Update hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.innerHTML = translations[lang].title.replace(/\n/g, '<br>');
        heroTitle.setAttribute('data-text', translations[lang].title);
    }
    
    // Update footer main
    const footerMain = document.querySelector('.footer-main');
    if (footerMain) {
        footerMain.textContent = translations[lang].title;
        footerMain.setAttribute('data-text', translations[lang].title);
    }
}

// Initialize animations
function initAnimations() {
    // Add random glitch effects
    setInterval(() => {
        const glitchElements = document.querySelectorAll('.glitch, .glitch-text');
        glitchElements.forEach(el => {
            if (Math.random() > 0.7) {
                el.style.animation = 'none';
                setTimeout(() => {
                    el.style.animation = '';
                }, 10);
            }
        });
    }, 3000);
    
    // Add random street light flicker
    setInterval(() => {
        const lights = document.querySelectorAll('.light');
        lights.forEach(light => {
            if (Math.random() > 0.8) {
                light.style.opacity = Math.random() * 0.5 + 0.2;
            }
        });
    }, 500);
    
    // Add mouse interaction effects
    document.addEventListener('mousemove', (e) => {
        const elements = document.querySelectorAll('.hero-title, .mechanism-text, .footer-main');
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
                const intensity = 5;
                const moveX = (x - rect.width / 2) / rect.width * intensity;
                const moveY = (y - rect.height / 2) / rect.height * intensity;
                el.style.transform = `translate(${moveX}px, ${moveY}px)`;
            }
        });
    });
    
    // Reset transform on mouse leave
    document.addEventListener('mouseleave', () => {
        const elements = document.querySelectorAll('.hero-title, .mechanism-text, .footer-main');
        elements.forEach(el => {
            el.style.transform = '';
        });
    });
}

// Add scroll animations
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    const sections = document.querySelectorAll('section');
    
    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            const scrollProgress = 1 - (rect.top / window.innerHeight);
            section.style.opacity = Math.max(0.5, scrollProgress);
        }
    });
    
    lastScroll = currentScroll;
});

