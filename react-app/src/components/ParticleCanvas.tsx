import { useEffect, useRef } from "react";

const GOLD_LIGHT = "212,168,67";
const GOLD_DEEP = "184,134,11";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  color: string;
  alpha: number;
};

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let W: number, H: number;
    let nodes: Node[] = [];
    let animFrame: number;
    const randBetween = (a: number, b: number) => a + Math.random() * (b - a);

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };

    const createNodes = () => {
      const count = Math.min(60, Math.floor((W * H) / 22000));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: randBetween(-0.18, 0.18),
        vy: randBetween(-0.12, 0.12),
        r: randBetween(1.2, 2.8),
        color: Math.random() > 0.5 ? GOLD_DEEP : GOLD_LIGHT,
        alpha: randBetween(0.3, 0.85),
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 160) {
            const strength = (1 - dist / 160) * 0.35;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(${nodes[i].color},${strength})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      nodes.forEach((n) => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${n.color},${n.alpha})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * 3, 0, Math.PI * 2);
        const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 3);
        grad.addColorStop(0, `rgba(${n.color},${n.alpha * 0.4})`);
        grad.addColorStop(1, `rgba(${n.color},0)`);
        ctx.fillStyle = grad;
        ctx.fill();

        n.x += n.vx;
        n.y += n.vy;
        if (n.x < -10) n.x = W + 10;
        if (n.x > W + 10) n.x = -10;
        if (n.y < -10) n.y = H + 10;
        if (n.y > H + 10) n.y = -10;
      });

      animFrame = requestAnimationFrame(draw);
    };

    resize();
    createNodes();
    draw();

    const handleResize = () => {
      resize();
      createNodes();
    };
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 -z-10 opacity-40"
      aria-hidden="true"
    />
  );
}
