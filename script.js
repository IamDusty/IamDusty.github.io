document.addEventListener('DOMContentLoaded', () => {
    // Set current year in footer
    const yearElement = document.querySelector('.year');
    const currentYear = new Date().getFullYear();
    yearElement.textContent = `© ${currentYear}`;

    // Button hover effects
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        // Add hover animations
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-3px)';
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

    // Add CSS for ripple effect
    const style = document.createElement('style');
    style.textContent = `
        .button {
            position: relative;
            overflow: hidden;
        }
        
        .ripple {
            position: absolute;
            background: rgba(52, 152, 219, 0.4);
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

    // Add subtle background movement on mouse move
    document.addEventListener('mousemove', (e) => {
        const shapes = document.querySelectorAll('.shape');
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;

        shapes.forEach((shape, index) => {
            const depth = (index + 1) * 5;
            const moveX = (mouseX - 0.5) * depth;
            const moveY = (mouseY - 0.5) * depth;

            shape.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
    });

    // Add sequential fade-in for elements
    const elements = [
        document.querySelector('.title'),
        document.querySelector('.subtitle'),
        ...Array.from(document.querySelectorAll('.button')),
        document.querySelector('.footer')
    ];

    elements.forEach((element, index) => {
        if (element) {
            element.style.opacity = '0';
            element.style.transform = 'translateY(10px)';
            element.style.transition = 'opacity 0.4s ease, transform 0.4s ease';

            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, 200 + (index * 120));
        }
    });

    // Add random system messages
    const systemMessages = ["SYSTEM RESOURCES: OPTIMAL", "ALL SYSTEMS NOMINAL", "RUNNING DIAGNOSTICS..."];
    function addRandomMessage() {
        const outputLine = document.querySelector('.output');
        const randomMessage = systemMessages[Math.floor(Math.random() * systemMessages.length)];
        outputLine.textContent = `[SYSTEM]: ${randomMessage}`;

        // Add glitch effect to the message
        outputLine.style.animation = 'none';
        setTimeout(() => {
            outputLine.style.animation = 'fadeIn 0.3s forwards';
        }, 10);

        // Schedule next message
        setTimeout(addRandomMessage, Math.random() * 15000 + 15000);
    }
    setTimeout(addRandomMessage, 10000);

    // Add random glitch effect to terminal window
    function randomGlitch() {
        const terminal = document.querySelector('.terminal-window');

        // Small chance of glitch
        if (Math.random() > 0.9) {
            const offsetX = Math.random() * 10 - 5;
            const offsetY = Math.random() * 10 - 5;
            terminal.style.transform = `translate(${offsetX}px, ${offsetY}px)`;

            setTimeout(() => {
                terminal.style.transform = 'translate(0, 0)';
            }, 100);
        }

        setTimeout(randomGlitch, Math.random() * 5000 + 5000);
    }
    randomGlitch();
});