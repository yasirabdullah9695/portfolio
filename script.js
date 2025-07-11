 
           // Create floating particles
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            
            for (let i = 0; i < 50; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                
                // Random size
                const size = Math.random() * 4 + 2;
                particle.style.width = size + 'px';
                particle.style.height = size + 'px';
                
                // Random position
                particle.style.left = Math.random() * 100 + '%';
                
                // Random animation delay
                particle.style.animationDelay = Math.random() * 15 + 's';
                
                // Random animation duration
                particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
                
                particlesContainer.appendChild(particle);
            }
        }

        // Mouse movement effect
        document.addEventListener('mousemove', (e) => {
            const shapes = document.querySelectorAll('.shape');
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;
            
            shapes.forEach((shape, index) => {
                const speed = (index + 1) * 0.5;
                const x = (mouseX - 0.5) * speed * 50;
                const y = (mouseY - 0.5) * speed * 50;
                
                shape.style.transform = `translate(${x}px, ${y}px)`;
            });
        });

        // Initialize particles
        createParticles();

        // // Color changing background
        // let hue = 0;
        // setInterval(() => {
        //     hue = (hue + 1) % 360;
        //     document.body.style.background = `linear-gradient(580deg, hsl(${hue}, 70%, 60%) 0%, hsl(${(hue + 60) % 360}, 70%, 60%) 100%)`;
        // }, 100);

   
         // Light color changing background
        let hue = 0;
        setInterval(() => {
            hue = (hue + 1) % 360;
            
            // Using light colors - light blue, pink, white, grey tones
            // High lightness (80-95%) for light effect
            // Low saturation (20-40%) for soft pastels
            document.body.style.background = `linear-gradient(135deg, 
                hsl(${hue}, 30%, 90%) 0%, 
                hsl(${(hue + 60) % 360}, 25%, 85%) 30%,
                hsl(${(hue + 120) % 360}, 20%, 92%) 60%,
                hsl(${(hue + 180) % 360}, 35%, 88%) 100%)`;
        }, 100);
        // Interactive cube rotation on click
        document.querySelector('.cube').addEventListener('click', function() {
            this.style.animationDuration = '2s';
            setTimeout(() => {
                this.style.animationDuration = '20s';
            }, 2000);
        });







        // Skill detail data with enhanced information
        const skillDetailData = {
    html: {
        logo: '🌐',
        logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        title: 'HTML5 Expert',
        subtitle: 'Semantic Markup Specialist',
        description: 'Mastery in creating clean, semantic, and accessible HTML structures that form the foundation of modern web applications.',
        features: [
            'Semantic HTML5 elements',
            'Accessibility (ARIA) implementation',
            'SEO-optimized markup',
            'Cross-browser compatibility',
            'Progressive enhancement'
        ]
    },
    css: {
        logo: '🎨',
        logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
        title: 'CSS3 Specialist',
        subtitle: 'Advanced Styling & Animation',
        description: 'Expert in modern CSS techniques including Flexbox, Grid, animations, and responsive design principles.',
        features: [
            'CSS Grid & Flexbox layouts',
            'Advanced animations & transitions',
            'Responsive design patterns',
            'CSS preprocessors (Sass/SCSS)',
            'CSS-in-JS solutions'
        ]
    },
    js: {
        logo: '⚡',
        logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        title: 'JavaScript Developer',
        subtitle: 'Modern ES6+ Development',
        description: 'Proficient in modern JavaScript development with expertise in ES6+ features, DOM manipulation, and asynchronous programming.',
        features: [
            'ES6+ syntax and features',
            'Async/await and Promises',
            'DOM manipulation',
            'Event-driven programming',
            'Module systems (ES6, CommonJS)'
        ]
    },
    react: {
        logo: '⚛️',
        title: 'React Developer',
        subtitle: 'Component-Based Architecture',
        description: 'Experienced in building scalable React applications with hooks, context API, and modern development patterns.',
        features: [
            'React Hooks & Context API',
            'Component lifecycle management',
            'State management (Redux/Zustand)',
            'Performance optimization',
            'Testing with Jest & React Testing Library'
        ]
    },
    tailwind: {
        logo: '💨',
        logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
        title: 'Tailwind CSS',
        subtitle: 'Utility-First Framework',
        description: 'Expert in rapid UI development using Tailwind CSS utility classes for consistent and maintainable styling.',
        features: [
            'Utility-first CSS approach',
            'Custom design systems',
            'Responsive design utilities',
            'Component extraction patterns',
            'Performance optimization'
        ]
    },
    python: {
        logo: '🐍',
        logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        title: 'Python Developer',
        subtitle: 'Data Analysis & Automation',
        description: 'Proficient in Python for data analysis, machine learning, web scraping, and automation tasks.',
        features: [
            'Data analysis with Pandas/NumPy',
            'Machine learning with Scikit-learn',
            'Web scraping (BeautifulSoup, Scrapy)',
            'API development with FastAPI/Flask',
            'Automation and scripting'
        ]
    },
    sql: {
        logo: '🗄️',
        logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
        title: 'SQL Expert',
        subtitle: 'Database Management',
        description: 'Advanced SQL skills for complex queries, database design, and data manipulation across various database systems.',
        features: [
            'Complex JOIN operations',
            'Window functions & CTEs',
            'Database optimization',
            'Stored procedures & triggers',
            'Multi-database experience (MySQL, PostgreSQL, SQLite)'
        ]
    },
    tableau: {
        logo: '📊',
        title: 'Tableau Specialist',
        subtitle: 'Data Visualization Expert',
        description: 'Creating compelling data visualizations and interactive dashboards that transform complex data into actionable insights.',
        features: [
            'Interactive dashboard creation',
            'Advanced chart types',
            'Data blending techniques',
            'Performance optimization',
            'Storytelling with data'
        ]
    }
};

        // Typewriter effect
        function typeWriter(text, element, speed = 100) {
            element.innerHTML = '';
            let i = 0;
            function type() {
                if (i < text.length) {
                    element.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(type, speed);
                }
            }
            type();
        }

        // Typewriter effect with erase and loop
        function typeWriterLoop(words, element, speed = 100, eraseSpeed = 50, delay = 1200) {
            let i = 0, j = 0, isDeleting = false, wordIndex = 0;

            function type() {
                const current = words[wordIndex];
                if (!isDeleting) {
                    element.innerHTML = current.substring(0, i + 1);
                    i++;
                    if (i === current.length) {
                        isDeleting = true;
                        setTimeout(type, delay);
                        return;
                    }
                } else {
                    element.innerHTML = current.substring(0, i - 1);
                    i--;
                    if (i === 0) {
                        isDeleting = false;
                        wordIndex = (wordIndex + 1) % words.length;
                    }
                }
                setTimeout(type, isDeleting ? eraseSpeed : speed);
            }
            type();
        }

        document.addEventListener('DOMContentLoaded', function() {
            const typewriterElement = document.getElementById('typewriter');
            typeWriterLoop(
                ["Yasir Abdullah", "Frontend Developer"],
                typewriterElement,
                100, 50, 1200
            );
        });

        // Skill card interactions
        document.addEventListener('DOMContentLoaded', function() {
            const skillCards = document.querySelectorAll('.skill-card');
            const skillDetailCard = document.getElementById('skillDetailCard');
            const overlay = document.getElementById('overlay');
            const closeDetail = document.getElementById('closeDetail');

            skillCards.forEach(card => {
                card.addEventListener('click', function() {
                    const skillKey = this.getAttribute('data-skill');
                    const skillData = skillDetailData[skillKey];
                    
                    if (skillData) {
                        // Populate detail card
                        document.getElementById('detailLogo').textContent = skillData.logo;
                        document.getElementById('detailTitle').textContent = skillData.title;
                        document.getElementById('detailSubtitle').textContent = skillData.subtitle;
                        document.getElementById('detailDescription').textContent = skillData.description;
                        
                        const featuresList = document.getElementById('detailFeatures');
                        featuresList.innerHTML = '';
                        skillData.features.forEach(feature => {
                            const li = document.createElement('li');
                            li.textContent = feature;
                            featuresList.appendChild(li);
                        });
                        
                        // Show detail card
                        overlay.classList.add('show');
                        skillDetailCard.classList.add('show');
                        document.body.style.overflow = 'hidden';
                    }
                });
            });

            // Close detail card
            function closeDetailCard() {
                overlay.classList.remove('show');
                skillDetailCard.classList.remove('show');
                document.body.style.overflow = 'auto';
            }

            closeDetail.addEventListener('click', closeDetailCard);
            overlay.addEventListener('click', closeDetailCard);

            // Close on Escape key
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape') {
                    closeDetailCard();
                }
            });
        });

        // Skill card hover tooltip with logo
        document.addEventListener('DOMContentLoaded', function() {
            const skillCards = document.querySelectorAll('.skill-card');
            const tooltip = document.getElementById('skillTooltip');
            const tooltipLogo = document.getElementById('skillTooltipLogo');
            const tooltipText = document.getElementById('skillTooltipText');

            skillCards.forEach(card => {
                card.addEventListener('mousemove', function(e) {
                    const skillKey = this.getAttribute('data-skill');
                    const skillData = skillDetailData[skillKey];
                    if (skillData) {
                        // Show SVG logo if available
                        if (skillData.logoUrl) {
                            tooltipLogo.innerHTML = `<img src="${skillData.logoUrl}" alt="${skillData.title}" style="width:3.2rem;height:3.2rem;display:block;">`;
                        } else {
                            tooltipLogo.textContent = skillData.logo;
                        }
                        tooltipText.textContent = skillData.title;
                        tooltip.style.display = 'flex';
                        tooltip.style.left = (e.pageX + 20) + 'px';
                        tooltip.style.top = (e.pageY - 30) + 'px';
                        tooltip.style.opacity = 1;
                    }
                });
                card.addEventListener('mouseleave', function() {
                    tooltip.style.display = 'none';
                    tooltip.style.opacity = 0;
                });
            });
        });
// 3D Carousel Logic
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('carousel3d');
    const cards = carousel.querySelectorAll('.carousel-card');
    const prevBtn = document.getElementById('carouselPrev');
    const nextBtn = document.getElementById('carouselNext');
    let current = 0;
    const total = cards.length;

    function updateCarousel() {
        cards.forEach((card, i) => {
            const offset = i - current;
            card.classList.remove('active');
            card.style.transform = `rotateY(${offset * 40}deg) translateZ(${Math.max(0, 400 - Math.abs(offset)*100)}px) scale(${offset === 0 ? 1 : 0.85})`;
            card.style.opacity = offset === 0 ? '1' : '0.7';
            card.style.zIndex = offset === 0 ? 10 : 1;
            if (offset === 0) card.classList.add('active');
        });
    }
    updateCarousel();

    prevBtn.addEventListener('click', () => {
        current = (current - 1 + total) % total;
        updateCarousel();
    });
    nextBtn.addEventListener('click', () => {
        current = (current + 1) % total;
        updateCarousel();
    });

    // Auto-rotate
    setInterval(() => {
        current = (current + 1) % total;
        updateCarousel();
    }, 3500);
});
        // Scroll animations
        function animateOnScroll() {
            const elements = document.querySelectorAll('.fade-in, .slide-left, .slide-right');
            
            elements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < window.innerHeight - elementVisible) {
                    element.classList.add('visible');
                }
            });
        }

        window.addEventListener('scroll', animateOnScroll);
        document.addEventListener('DOMContentLoaded', animateOnScroll);

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Navigation background opacity on scroll
        window.addEventListener('scroll', function() {
            const nav = document.querySelector('nav');
            if (window.scrollY > 50) {
                nav.style.background = 'rgba(10, 10, 10, 0.95)';
            } else {
                nav.style.background = 'rgba(10, 10, 10, 0.8)';
            }
        });

        // Project cards hover effect enhancement
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-15px) rotateX(8deg) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) rotateX(0deg) scale(1)';
            });
        });

        // Add some interactive particles effect
        function createParticle() {
            const particle = document.createElement('div');
            particle.style.position = 'fixed';
            particle.style.width = '4px';
            particle.style.height = '4px';
            particle.style.background = '#00ffff';
            particle.style.borderRadius = '50%';
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '1';
            particle.style.opacity = '0.7';
            
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;
            
            particle.style.left = x + 'px';
            particle.style.top = y + 'px';
            
            document.body.appendChild(particle);
            
            // Animate particle
            const duration = Math.random() * 3000 + 2000;
            const targetY = y - (Math.random() * 100 + 50);
            
            particle.animate([
                { transform: `translate(0, 0) scale(1)`, opacity: 0.7 },
                { transform: `translate(0, ${targetY - y}px) scale(0)`, opacity: 0 }
            ], {
                duration: duration,
                easing: 'ease-out'
            }).onfinish = () => {
                particle.remove();
            };
        }

        // Create particles periodically
        setInterval(createParticle, 2000);

        // Enhanced button hover effects
        document.querySelectorAll('.btn').forEach(btn => {
            btn.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-3px) scale(1.05)';
            });
            
            btn.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
//Certificate viewer functionality

// Certificate viewer functionality
// Certificate viewer functionality
document.addEventListener('DOMContentLoaded', function() {
    
    // Get all view certificate buttons
    const viewButtons = document.querySelectorAll('.btn-view');
    
    // Create modal HTML (add this to your HTML or create dynamically)
    const modalHTML = `
        <div id="certificateModal" class="certificate-modal" style="display: none; opacity: 0;">
            <div class="certificate-modal-content">
                <span class="certificate-close-btn">&times;</span>
                <img id="certificateImage" src="" alt="Certificate" class="certificate-img">
            </div>
        </div>
    `;
    
    // Add modal to body if it doesn't exist
    if (!document.getElementById('certificateModal')) {
        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }
    
    // Get modal elements
    const modal = document.getElementById('certificateModal');
    const modalImage = document.getElementById('certificateImage');
    const closeBtn = document.querySelector('.certificate-close-btn');
    
    // Add click event to all view buttons
    viewButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get certificate filename from data-certificate attribute
            const certificateFile = this.getAttribute('data-certificate');
            
            if (certificateFile) {
                // Set image source based on certificate file
                let imagePath;
                
                switch(certificateFile) {

                     
                    case 'nptel.jpg':
                        imagePath = './nptel.jpg';
                        break;
                    case 'deloitte.jpg':
                        imagePath = './deloitte.jpg';
                        break;
                    case 'google-data-analytics.pdf':
                        imagePath = './microsoft.jpg';
                        break;
                  
                       case 'codtech.jpg':
                        imagePath = './codtech.jpg';
                        break;
                       
                    default:
                        imagePath = `./${certificateFile}`;
                }
                
                // Show modal first
                modal.style.display = 'flex';
                
                // Load image
                modalImage.onload = function() {
                    // Show modal with fade in after image loads
                    setTimeout(() => {
                        modal.style.opacity = '1';
                    }, 50);
                };
                
                modalImage.src = imagePath;
            }
        });
    });
    
    // Close modal function
    function closeModal() {
        modal.style.opacity = '0';
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    }
    
    // Close modal when clicking close button
    closeBtn.addEventListener('click', closeModal);
    
    // Close modal when clicking outside the image
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            closeModal();
        }
    });
    
    // // Handle image load error
    // modalImage.addEventListener('error', function() {
    //     console.log('Certificate image not found: ' + this.src);
    //     alert('Certificate image not found. Please check the file path.');
    //     closeModal();
    // });
});// Method 1: Direct file download (PDF file same folder mein hona chahiye)
document.querySelector('.btn-primary').addEventListener('click', function() {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = 'resume.pdf'; // Yahan aapka PDF file ka naam
    link.download = 'Yasir_Abdullah_Resume.pdf'; // Download hone wala file name
    link.click();
});

// Method 2: If PDF different folder mein hai
document.querySelector('.btn-primary').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'assets/resume.pdf'; // Folder path ke saath
    link.download = 'Yasir_Abdullah_Resume.pdf';
    link.click();
});

// Method 3: Better approach with error handling
document.querySelector('.btn-primary').addEventListener('click', function() {
    try {
        const link = document.createElement('a');
        link.href = 'resume.pdf';
        link.download = 'Yasir_Abdullah_Resume.pdf';
        
        // Add to DOM temporarily
        document.body.appendChild(link);
        link.click();
        
        // Remove from DOM
        document.body.removeChild(link);
        
        console.log('Resume download started');
    } catch (error) {
        console.error('Download failed:', error);
        alert('Sorry, resume download failed. Please try again.');
    }
});

// Method 4: With loading indicator
document.querySelector('.btn-primary').addEventListener('click', function() {
    const button = this;
    const originalText = button.textContent;
    
    // Show loading
    button.textContent = 'Downloading...';
    button.disabled = true;
    
    try {
        const link = document.createElement('a');
        link.href = 'resume.pdf';
        link.download = 'Yasir_Abdullah_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Reset button after 2 seconds
        setTimeout(() => {
            button.textContent = originalText;
            button.disabled = false;
        }, 2000);
        
    } catch (error) {
        console.error('Download failed:', error);
        button.textContent = originalText;
        button.disabled = false;
        alert('Download failed. Please try again.');
    }
});

// Method 5: Modern fetch approach (for remote files)
async function downloadResume() {
    try {
        const response = await fetch('resume.pdf');
        const blob = await response.blob();
        
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'Yasir_Abdullah_Resume.pdf';
        link.click();
        
        // Clean up
        window.URL.revokeObjectURL(url);
    } catch (error) {
        console.error('Download failed:', error);
        alert('Failed to download resume');
    }
}

// Apply to button
document.querySelector('.btn-primary').addEventListener('click', downloadResume);

document.addEventListener("DOMContentLoaded", function () {
    const viewBtn = document.getElementById("view-project-btn");

    viewBtn.addEventListener("click", function (e) {
        e.preventDefault(); // ❗ Stop default anchor behavior
        window.open("https://coaching-nn9b.vercel.app/", "_blank");
    });
});

