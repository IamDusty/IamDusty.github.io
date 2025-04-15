document.addEventListener('DOMContentLoaded', () => {
    // Set current year in footer
    const yearElement = document.querySelector('.year');
    const currentYear = new Date().getFullYear();
    yearElement.textContent = `© ${currentYear}`;
    
    // Initialize Matrix-style binary rain
    initBinaryRain();
    
    // Terminal typing effect
    const terminalCommands = [
        "scanning system...",
        "accessing network...",
        "bypassing security protocols...",
        "initializing connection...",
        "running penetration tests...",
        "checking for vulnerabilities...",
        "deploying countermeasures...",
        "establishing secure tunnel...",
        "encryption protocol activated...",
        "system compromised successfully..."
    ];
    
    const terminalText = document.getElementById('terminal-text');
    let currentCommandIndex = 0;
    
    function typeTerminalCommand(command, charIndex = 0) {
        if (charIndex < command.length) {
            terminalText.textContent += command.charAt(charIndex);
            setTimeout(() => typeTerminalCommand(command, charIndex + 1), Math.random() * 50 + 30);
        } else {
            // Clear after a delay and type the next command
            setTimeout(() => {
                terminalText.textContent = '';
                currentCommandIndex = (currentCommandIndex + 1) % terminalCommands.length;
                typeTerminalCommand(terminalCommands[currentCommandIndex]);
            }, 1500);
        }
    }
    
    // Start the typing animation
    typeTerminalCommand(terminalCommands[currentCommandIndex]);
    
    // Button hover and click effects
    const buttons = document.querySelectorAll('.button');
    
    buttons.forEach(button => {
        const buttonText = button.querySelector('.button-text');
        
        // Add hover animations with random glitch chance
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-3px)';
            
            // 50% chance of glitch effect on hover
            if (Math.random() > 0.5) {
                buttonText.classList.add('glitch');
                setTimeout(() => {
                    buttonText.classList.remove('glitch');
                }, 150);
            }
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0)';
        });
        
        // Add click effects
        button.addEventListener('click', (e) => {
            // Create stronger ripple effect
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            button.appendChild(ripple);
            
            // Add glitch effect to the button text
            buttonText.classList.add('glitch');
            
            // Remove ripple and glitch after animation
            setTimeout(() => {
                ripple.remove();
                buttonText.classList.remove('glitch');
            }, 600);
        });
    });
    
    // Add title glitch effect
    const title = document.querySelector('.title');
    title.setAttribute('data-title', title.textContent);
    
    // Randomly apply glitch effect to title
    /* Removed title glitch effect */
    
    // Add CSS for ripple effect
    const style = document.createElement('style');
    style.textContent = `
        .button {
            position: relative;
            overflow: hidden;
        }
        
        .ripple {
            position: absolute;
            background: rgba(0, 255, 0, 0.35);
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
    
    // Sequential fade-in for elements
    const elements = [
        document.querySelector('.title'),
        document.querySelector('.terminal-line'),
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
    
    // Add random glitches to the whole page occasionally
    setInterval(() => {
        if (Math.random() > 0.85) {
            document.body.classList.add('glitch');
            setTimeout(() => {
                document.body.classList.remove('glitch');
            }, 150);
        }
    }, 5000);
    
    // Occasional button glow effects
    setInterval(() => {
        if (Math.random() > 0.7) {
            const randomButton = buttons[Math.floor(Math.random() * buttons.length)];
            randomButton.style.boxShadow = '0 0 20px rgba(0, 255, 0, 0.6)';
            setTimeout(() => {
                randomButton.style.boxShadow = '';
            }, 300);
        }
    }, 2000);
    
    // Add mouse trail binary effect
    document.addEventListener('mousemove', (e) => {
        // Occasionally leave a trail of binary as cursor moves
        if (Math.random() > 0.98) {
            const binary = document.createElement('div');
            binary.textContent = Math.random() > 0.5 ? '1' : '0';
            binary.style.position = 'absolute';
            binary.style.left = `${e.clientX}px`;
            binary.style.top = `${e.clientY}px`;
            binary.style.color = 'rgba(0, 255, 0, 0.7)';
            binary.style.fontSize = '16px';
            binary.style.fontFamily = "'Fira Code', monospace";
            binary.style.pointerEvents = 'none';
            binary.style.zIndex = '9999';
            binary.style.userSelect = 'none';
            
            // Animation
            binary.style.animation = 'fade-out 1.5s forwards';
            
            // Create style for animation if it doesn't exist
            if (!document.querySelector('#binary-fade-style')) {
                const style = document.createElement('style');
                style.id = 'binary-fade-style';
                style.textContent = `
                    @keyframes fade-out {
                        0% { opacity: 1; transform: translateY(0); }
                        100% { opacity: 0; transform: translateY(-20px); }
                    }
                `;
                document.head.appendChild(style);
            }
            
            document.body.appendChild(binary);
            
            // Remove after animation completes
            setTimeout(() => {
                if (binary.parentNode) {
                    binary.parentNode.removeChild(binary);
                }
            }, 1500);
        }
    });
    
    // Add random code snippets function
    function addRandomCodeSnippet() {
        const codeSnippets = [
            "while(true) { hack(); }",
            "if(security.level < 1) { breach(); }",
            "for(let i=0; i<firewall.length; i++) { bypass(i); }",
            "async function crackPassword() { /* ... */ }",
            "const encryption = new AES256();",
            "socket.connect(target.IP, target.PORT);",
            "ssh.tunnel('hidden_server', credentials);",
            "const exploit = findVulnerability(system);",
            "try { injectPayload(); } catch(e) { eraseTraces(); }"
        ];
        
        if (Math.random() > 0.7) {
            const codeElement = document.createElement('div');
            const randomSnippet = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
            
            codeElement.textContent = randomSnippet;
            codeElement.style.position = 'absolute';
            codeElement.style.left = `${Math.random() * window.innerWidth}px`;
            codeElement.style.top = `${Math.random() * window.innerHeight}px`;
            codeElement.style.color = 'rgba(0, 255, 0, 0.15)';
            codeElement.style.fontSize = '12px';
            codeElement.style.fontFamily = "'Fira Code', monospace";
            codeElement.style.pointerEvents = 'none';
            codeElement.style.zIndex = '-1';
            codeElement.style.userSelect = 'none';
            codeElement.style.opacity = '0';
            codeElement.style.transition = 'opacity 2s';
            
            document.body.appendChild(codeElement);
            
            // Fade in
            setTimeout(() => {
                codeElement.style.opacity = '1';
            }, 100);
            
            // Remove after some time
            setTimeout(() => {
                if (codeElement.parentNode) {
                    codeElement.style.opacity = '0';
                    setTimeout(() => {
                        if (codeElement.parentNode) {
                            codeElement.parentNode.removeChild(codeElement);
                        }
                    }, 2000);
                }
            }, 5000 + Math.random() * 5000);
        }
        
        // Schedule next snippet
        setTimeout(addRandomCodeSnippet, 2000 + Math.random() * 3000);
    }
    
    // Start the code snippet generator
    setTimeout(addRandomCodeSnippet, 3000);
});

// Binary Rain Animation
function initBinaryRain() {
    const canvas = document.getElementById('binary-rain');
    const ctx = canvas.getContext('2d');
    
    // Set canvas size to match window
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Binary characters
    const binary = "01";
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    
    // Array to track the y position of each column
    const drops = [];
    for (let i = 0; i < columns; i++) {
        drops[i] = Math.floor(Math.random() * -canvas.height);
    }
    
    // Colors
    const greenColors = [
        'rgba(0, 255, 0, 0.1)',
        'rgba(0, 255, 0, 0.2)',
        'rgba(0, 255, 0, 0.3)',
        'rgba(0, 255, 0, 0.4)',
        'rgba(0, 255, 0, 0.8)'
    ];
    
    // Drawing the characters
    function draw() {
        // Slightly transparent black background to show trail
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.font = `${fontSize}px 'Fira Code'`;
        
        // For each column
        for (let i = 0; i < drops.length; i++) {
            // Random binary character to print
            const char = binary.charAt(Math.floor(Math.random() * binary.length));
            
            // Varying the green color
            const colorIndex = Math.floor(Math.random() * greenColors.length);
            ctx.fillStyle = greenColors[colorIndex];
            
            // x = i * fontSize, y = drops[i] * fontSize
            ctx.fillText(char, i * fontSize, drops[i] * fontSize);
            
            // Randomly reset some drops to top with randomization
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = Math.floor(Math.random() * -20);
            }
            
            // Increment y coordinate for next drop
            drops[i]++;
        }
        
        requestAnimationFrame(draw);
    }
    
    draw();
}