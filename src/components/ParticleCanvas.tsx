import { useEffect, useRef } from 'react';

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let animationFrameId: number;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const particleCount = 48;

    class DustParticle {
      x: number = 0;
      y: number = 0;
      radius: number = 1;
      speedY: number = 0.2;
      speedX: number = 0;
      baseAlpha: number = 0.3;
      alpha: number = 0.3;
      oscillationSpeed: number = 0.015;
      oscillationOffset: number = 0;
      color: string = '34, 211, 238'; // Cyan default

      constructor() {
        this.reset(true);
      }

      reset(initial = false) {
        this.x = Math.random() * width;
        this.y = initial ? Math.random() * height : height + 10;
        this.radius = 0.7 + Math.random() * 1.5;
        this.speedY = 0.12 + Math.random() * 0.38;
        this.speedX = (Math.random() - 0.5) * 0.25;
        this.baseAlpha = 0.18 + Math.random() * 0.45;
        this.alpha = this.baseAlpha;
        this.oscillationSpeed = 0.01 + Math.random() * 0.02;
        this.oscillationOffset = Math.random() * Math.PI * 2;
        // 65% electric cyan, 35% warm amber
        const isCyan = Math.random() > 0.35;
        this.color = isCyan ? '34, 211, 238' : '251, 191, 36';
      }

      update() {
        this.y -= this.speedY;
        this.oscillationOffset += this.oscillationSpeed;
        this.x += this.speedX + Math.sin(this.oscillationOffset) * 0.3;
        this.alpha = this.baseAlpha + Math.sin(this.oscillationOffset * 1.5) * 0.18;

        if (this.y < -15 || this.x < -20 || this.x > width + 20) {
          this.reset(false);
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color}, ${Math.max(0.05, Math.min(1, this.alpha))})`;
        ctx.shadowBlur = this.radius > 1.3 ? 7 : 3;
        ctx.shadowColor = `rgba(${this.color}, 0.6)`;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    const particles: DustParticle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new DustParticle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-10 w-full h-full"
      aria-hidden="true"
    />
  );
}
