document.addEventListener('DOMContentLoaded', () => {
    // Set current year in footer
    const yearElement = document.querySelector('.year');
    const currentYear = new Date().getFullYear();
    yearElement.textContent = `© ${currentYear}`;
    
    // Button hover audio feedback (subtle click)
    const buttons = document.querySelectorAll('.button');
    
    buttons.forEach(button => {
        // Add hover animations for desktop
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-5px)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0)';
        });
        
        // Add click effects
        button.addEventListener('click', (e) => {
            // Create ripple effect
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            button.appendChild(ripple);
            
            // Remove ripple after animation
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Mouse movement parallax effect for shapes
    document.addEventListener('mousemove', (e) => {
        const shapes = document.querySelectorAll('.shape');
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        shapes.forEach((shape, index) => {
            const depth = (index + 1) * 10;
            const moveX = (mouseX - 0.5) * depth;
            const moveY = (mouseY - 0.5) * depth;
            
            shape.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
    });
    
    // Add CSS for ripple effect
    const style = document.createElement('style');
    style.textContent = `
        .button {
            position: relative;
            overflow: hidden;
        }
        
        .ripple {
            position: absolute;
            background: rgba(255, 255, 255, 0.7);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            width: 100px;
            height: 100px;
            pointer-events: none;
        }
        
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Add progressive loading effect for elements
    const elements = [
        document.querySelector('.title'),
        document.querySelector('.subtitle'),
        document.querySelectorAll('.button')[0],
        document.querySelectorAll('.button')[1],
        document.querySelector('.footer')
    ];
    
    elements.forEach((element, index) => {
        if (element) {
            setTimeout(() => {
                element.style.opacity = '0';
                element.style.transform = 'translateY(20px)';
                element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                
                setTimeout(() => {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }, 50);
            }, 300 + (index * 150));
        }
    });
});