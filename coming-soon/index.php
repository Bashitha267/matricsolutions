<?php
/**
 * Matrix Digital Solution - Coming Soon Teaser
 */
$pageTitle = "Matrix Digital Solution | Something New Coming";
$year = date("Y");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $pageTitle; ?></title>
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800;900&family=Raleway:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg-color: #050507;
            --primary-orange: #e35c24;
            --secondary-orange: #ff7738;
            --dark-card: rgba(18, 18, 24, 0.75);
            --border-glow: rgba(227, 92, 36, 0.35);
            --text-main: #ffffff;
            --text-muted: #94a3b8;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            background-color: var(--bg-color);
            color: var(--text-main);
            font-family: 'Raleway', sans-serif;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            overflow-x: hidden;
            position: relative;
        }

        /* Ambient Glow & 3D Background */
        #bg-canvas {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 0;
            pointer-events: none;
        }

        .ambient-glow-1 {
            position: absolute;
            width: 550px;
            height: 550px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(227, 92, 36, 0.22) 0%, rgba(227, 92, 36, 0.02) 65%, transparent 75%);
            top: 15%;
            left: 50%;
            transform: translate(-50%, -50%);
            filter: blur(80px);
            z-index: 1;
            pointer-events: none;
            animation: pulseGlow 8s ease-in-out infinite alternate;
        }

        .ambient-glow-2 {
            position: absolute;
            width: 400px;
            height: 400px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(255, 119, 56, 0.15) 0%, transparent 70%);
            bottom: 5%;
            right: 15%;
            filter: blur(100px);
            z-index: 1;
            pointer-events: none;
        }

        @keyframes pulseGlow {
            0% { transform: translate(-50%, -50%) scale(0.9); opacity: 0.7; }
            100% { transform: translate(-50%, -50%) scale(1.15); opacity: 1; }
        }

        /* Header with Logo */
        header {
            width: 100%;
            max-width: 1200px;
            padding: 2.5rem 2rem;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10;
        }

        .logo-container {
            position: relative;
            display: inline-block;
            transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .logo-container:hover {
            transform: translateY(-2px) scale(1.03);
        }

        .logo {
            max-height: 70px;
            width: auto;
            object-fit: contain;
            filter: drop-shadow(0 4px 15px rgba(227, 92, 36, 0.25));
        }

        /* Main Content */
        main {
            z-index: 10;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 1.5rem 1.5rem 3rem;
            max-width: 860px;
            width: 100%;
        }

        /* 3D Glass Card Container */
        .glass-card {
            background: var(--dark-card);
            backdrop-filter: blur(18px);
            -webkit-backdrop-filter: blur(18px);
            border: 1px solid rgba(227, 92, 36, 0.25);
            border-radius: 28px;
            padding: 3.5rem 2.5rem;
            width: 100%;
            box-shadow: 
                0 20px 50px rgba(0, 0, 0, 0.7),
                0 0 40px rgba(227, 92, 36, 0.12),
                inset 0 1px 1px rgba(255, 255, 255, 0.1);
            position: relative;
            overflow: hidden;
            transform-style: preserve-3d;
            perspective: 1000px;
        }

        .glass-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(90deg, transparent, var(--primary-orange), #ff9f43, transparent);
        }

        .status-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 18px;
            background: rgba(227, 92, 36, 0.12);
            border: 1px solid rgba(227, 92, 36, 0.4);
            border-radius: 9999px;
            font-size: 0.85rem;
            font-weight: 600;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: #ffaa7d;
            margin-bottom: 2rem;
            box-shadow: 0 0 15px rgba(227, 92, 36, 0.15);
        }

        .status-dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background-color: var(--primary-orange);
            box-shadow: 0 0 10px var(--primary-orange);
            animation: blink 1.5s ease-in-out infinite;
        }

        @keyframes blink {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.4; transform: scale(0.85); }
        }

        /* Headline */
        h1.heading {
            font-family: 'Montserrat', sans-serif;
            font-size: clamp(2.4rem, 6vw, 4.2rem);
            font-weight: 900;
            line-height: 1.15;
            letter-spacing: -0.02em;
            margin-bottom: 1.25rem;
            color: #ffffff;
            text-shadow: 0 4px 30px rgba(0, 0, 0, 0.8);
        }

        .highlight-text {
            background: linear-gradient(135deg, #ffffff 10%, #e35c24 60%, #ff8b52 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            display: inline;
        }

        .orange-dot {
            color: var(--primary-orange);
            -webkit-text-fill-color: var(--primary-orange);
            display: inline-block;
            animation: bounceDot 2s ease-in-out infinite;
        }

        @keyframes bounceDot {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-6px); }
        }

        /* Subtext */
        p.subheading {
            font-size: clamp(1.05rem, 2vw, 1.25rem);
            color: var(--text-muted);
            line-height: 1.7;
            max-width: 600px;
            margin: 0 auto 2.5rem;
            font-weight: 400;
        }

        /* 3D Interactive Feature Badges */
        .feature-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
            gap: 1.2rem;
            margin-top: 1rem;
            width: 100%;
        }

        .feature-pill {
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 14px;
            padding: 1.1rem 1rem;
            font-size: 0.95rem;
            color: #e2e8f0;
            font-weight: 500;
            transition: all 0.3s ease;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 6px;
        }

        .feature-pill:hover {
            border-color: rgba(227, 92, 36, 0.5);
            background: rgba(227, 92, 36, 0.07);
            transform: translateY(-4px);
            box-shadow: 0 10px 25px -5px rgba(227, 92, 36, 0.2);
        }

        .feature-icon {
            font-size: 1.5rem;
            color: var(--primary-orange);
        }

        /* Footer */
        footer {
            width: 100%;
            padding: 2rem;
            text-align: center;
            font-size: 0.9rem;
            color: #64748b;
            z-index: 10;
        }

        footer a {
            color: var(--primary-orange);
            text-decoration: none;
            transition: color 0.2s;
        }

        footer a:hover {
            color: var(--secondary-orange);
            text-decoration: underline;
        }

        /* Responsive tweaks */
        @media (max-width: 640px) {
            .glass-card {
                padding: 2.5rem 1.5rem;
                border-radius: 20px;
            }
            .feature-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>

    <canvas id="bg-canvas"></canvas>
    <div class="ambient-glow-1"></div>
    <div class="ambient-glow-2"></div>

    <!-- Header Logo -->
    <header>
        <div class="logo-container">
            <img src="assests/Group-18.png" alt="Matrix Digital Solution Logo" class="logo" onerror="this.onerror=null; this.src='../assests/Group-18.png';">
        </div>
    </header>

    <!-- Main Teaser Content -->
    <main>
        <div class="glass-card">
            <div class="status-badge">
                <span class="status-dot"></span>
                <span>Next Generation Launch</span>
            </div>

            <h1 class="heading">
                <span class="highlight-text">Something new coming</span><span class="orange-dot">.</span>
            </h1>

            <p class="subheading">
                We are currently crafting an immersive 3D digital experience tailored for exceptional growth, cutting-edge web performance, and brand transformation.
            </p>

            <div class="feature-grid">
                <div class="feature-pill">
                    <span class="feature-icon">&#9889;</span>
                    <strong>Next-Gen Web</strong>
                    <span style="font-size: 0.8rem; color: #94a3b8;">High Performance</span>
                </div>
                <div class="feature-pill">
                    <span class="feature-icon">&#10024;</span>
                    <strong>3D Innovation</strong>
                    <span style="font-size: 0.8rem; color: #94a3b8;">Interactive Motion</span>
                </div>
                <div class="feature-pill">
                    <span class="feature-icon">&#128640;</span>
                    <strong>Digital Growth</strong>
                    <span style="font-size: 0.8rem; color: #94a3b8;">Marketing & Dev</span>
                </div>
            </div>
        </div>
    </main>

    <!-- Footer -->
    <footer>
        <p>&copy; <?php echo $year; ?> <strong>Matrix Digital Solution</strong>. All rights reserved.</p>
    </footer>

    <!-- Interactive 3D Particle Grid Script -->
    <script>
        const canvas = document.getElementById('bg-canvas');
        const ctx = canvas.getContext('2d');

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        window.addEventListener('resize', () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            initParticles();
        });

        let mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };

        window.addEventListener('mousemove', (e) => {
            mouse.targetX = e.clientX;
            mouse.targetY = e.clientY;
        });

        class Particle {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.z = Math.random() * 800 + 200; // Depth
                this.size = Math.random() * 1.8 + 0.8;
                this.baseAlpha = Math.random() * 0.4 + 0.2;
                this.vx = (Math.random() - 0.5) * 0.4;
                this.vy = (Math.random() - 0.5) * 0.4;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0) this.x = width;
                if (this.x > width) this.x = 0;
                if (this.y < 0) this.y = height;
                if (this.y > height) this.y = 0;
            }

            draw() {
                const fov = 400;
                const scale = fov / (fov + this.z * 0.4);
                const projX = (this.x - width / 2) * scale + width / 2;
                const projY = (this.y - height / 2) * scale + height / 2;

                // Color accent: orange or subtle white
                const isOrange = Math.sin(this.z) > 0.3;
                ctx.fillStyle = isOrange 
                    ? `rgba(227, 92, 36, ${this.baseAlpha * scale})` 
                    : `rgba(255, 255, 255, ${this.baseAlpha * 0.5 * scale})`;

                ctx.beginPath();
                ctx.arc(projX, projY, this.size * scale, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const particleCount = 70;
        let particles = [];

        function initParticles() {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        }

        initParticles();

        function render() {
            ctx.clearRect(0, 0, width, height);

            // Connect nearby particles
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 110) {
                        ctx.strokeStyle = `rgba(227, 92, 36, ${0.12 * (1 - dist / 110)})`;
                        ctx.lineWidth = 0.6;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }

            particles.forEach(p => {
                p.update();
                p.draw();
            });

            requestAnimationFrame(render);
        }

        render();
    </script>
</body>
</html>
