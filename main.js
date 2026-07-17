(() => {
  "use strict";

  /* ── Scroll Progress Bar ──────────────────────────────── */
  const progressBar = document.querySelector(".scroll-progress");
  if (progressBar) {
    const updateProgress = () => {
      const h = document.documentElement;
      const scrollTop = window.scrollY;
      const scrollHeight = h.scrollHeight - h.clientHeight;
      const pct = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      progressBar.style.width = pct + "%";
    };
    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();
  }

  /* ── Custom Cursor ────────────────────────────────────── */
  const ring = document.querySelector(".cursor-ring");
  const dot  = document.querySelector(".cursor-dot");
  if (ring && dot && window.matchMedia("(pointer: fine)").matches) {
    let mx = -100, my = -100, rx = -100, ry = -100;
    let rafId = null;

    // Dot follows instantly
    document.addEventListener("mousemove", (e) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.left = mx + "px";
      dot.style.top  = my + "px";
    });

    // Ring lags behind for smooth effect
    const lerp = (a, b, t) => a + (b - a) * t;
    const animateRing = () => {
      rx = lerp(rx, mx, 0.14);
      ry = lerp(ry, my, 0.14);
      ring.style.left = rx + "px";
      ring.style.top  = ry + "px";
      rafId = requestAnimationFrame(animateRing);
    };
    animateRing();

    // Hover states on interactive elements
    const interactives = "a, button, [data-hover], input, select, textarea, label";
    document.querySelectorAll(interactives).forEach(el => {
      el.addEventListener("mouseenter", () => {
        ring.classList.add("is-hovering");
      });
      el.addEventListener("mouseleave", () => {
        ring.classList.remove("is-hovering");
      });
    });

    // Observe dynamically added elements via MutationObserver
    const mo = new MutationObserver(() => {
      document.querySelectorAll(interactives).forEach(el => {
        if (!el._cursorBound) {
          el._cursorBound = true;
          el.addEventListener("mouseenter", () => ring.classList.add("is-hovering"));
          el.addEventListener("mouseleave", () => ring.classList.remove("is-hovering"));
        }
      });
    });
    mo.observe(document.body, { childList: true, subtree: true });

    // Click state
    document.addEventListener("mousedown", () => {
      ring.classList.add("is-clicking");
      dot.classList.add("is-clicking");
    });
    document.addEventListener("mouseup", () => {
      ring.classList.remove("is-clicking");
      dot.classList.remove("is-clicking");
    });

    // Hide on leave
    document.addEventListener("mouseleave", () => { ring.style.opacity = "0"; dot.style.opacity = "0"; });
    document.addEventListener("mouseenter", () => { ring.style.opacity = ""; dot.style.opacity = ""; });
  }

  /* ── Particle Canvas ──────────────────────────────────── */
  const canvas = document.getElementById("particle-canvas");
  if (canvas) {
    const ctx = canvas.getContext("2d");
    let W, H, nodes, animFrame;

    const GOLD_LIGHT = "212,168,67";
    const GOLD_DEEP  = "184,134,11";

    const resize = () => {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };

    const randBetween = (a, b) => a + Math.random() * (b - a);

    const createNodes = () => {
      const count = Math.min(60, Math.floor((W * H) / 22000));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: randBetween(-0.18, 0.18),
        vy: randBetween(-0.12, 0.12),
        r: randBetween(1.2, 2.8),
        color: Math.random() > 0.50 ? GOLD_DEEP : GOLD_LIGHT,
        alpha: randBetween(0.3, 0.85),
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      // Draw edges
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

      // Draw nodes
      nodes.forEach(n => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${n.color},${n.alpha})`;
        ctx.fill();

        // Glow
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * 3, 0, Math.PI * 2);
        const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 3);
        grad.addColorStop(0, `rgba(${n.color},${n.alpha * 0.4})`);
        grad.addColorStop(1, `rgba(${n.color},0)`);
        ctx.fillStyle = grad;
        ctx.fill();

        // Move
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

    window.addEventListener("resize", () => {
      resize();
      createNodes();
    }, { passive: true });
  }

  /* ── 3D Logo Tilt ─────────────────────────────────── */
  const logoScene = document.getElementById("logo3d-scene");
  const logoStage = document.getElementById("logo3d-stage");
  if (logoScene && logoStage && window.matchMedia("(pointer: fine)").matches) {
    const clamp = (v, mn, mx) => Math.min(mx, Math.max(mn, v));
    let targetRX = 0, targetRY = 0, curRX = 0, curRY = 0;
    let logoRaf = null;

    logoScene.addEventListener("mousemove", (e) => {
      const rect = logoScene.getBoundingClientRect();
      const x = ((e.clientX - rect.left)  / rect.width  - 0.5) * 2;
      const y = ((e.clientY - rect.top)   / rect.height - 0.5) * 2;
      targetRY = clamp(x * 18, -22, 22);
      targetRX = clamp(-y * 14, -16, 16);
    });

    logoScene.addEventListener("mouseleave", () => {
      targetRX = 0; targetRY = 0;
    });

    const logoTiltLoop = () => {
      curRX += (targetRX - curRX) * 0.08;
      curRY += (targetRY - curRY) * 0.08;
      logoStage.style.transform = `rotateX(${curRX}deg) rotateY(${curRY}deg)`;
      logoRaf = requestAnimationFrame(logoTiltLoop);
    };
    logoTiltLoop();
  }

  /* ── Scroll Reveal (IntersectionObserver) ─────────────── */
  const revealClasses = [".reveal", ".reveal-left", ".reveal-right"];
  const allReveal = document.querySelectorAll(revealClasses.join(","));

  if (allReveal.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px 0px" }
    );
    allReveal.forEach((el) => observer.observe(el));
  }

  /* ── Mobile Nav ───────────────────────────────────────── */
  const navToggle   = document.querySelector("[data-nav-toggle]");
  const mobilePanel = document.querySelector("[data-mobile-panel]");
  if (navToggle && mobilePanel) {
    navToggle.addEventListener("click", () => {
      const open = mobilePanel.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(open));
    });
    mobilePanel.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobilePanel.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ── Active Nav Link ──────────────────────────────────── */
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("[data-nav-link]").forEach((link) => {
    const href = link.getAttribute("href") || "";
    if (href.endsWith(currentPath)) {
      link.setAttribute("aria-current", "page");
    }
  });

  /* ── Service Select from URL Params ───────────────────── */
  const params = new URLSearchParams(window.location.search);
  const svc = params.get("service");
  const svcSelect = document.querySelector("[data-service-select]");
  if (svcSelect && svc) {
    const map = {
      "tier-1": "security-health-check",
      "tier-2": "business-security-assessment",
      "tier-3": "monthly-security-support",
      "custom": "custom-enterprise",
    };
    const mapped = map[svc] || svc;
    const option = [...svcSelect.options].find((o) => o.value === mapped);
    if (option) svcSelect.value = option.value;
  }

  /* ── Header scroll class ──────────────────────────────── */
  const header = document.querySelector(".site-header");
  if (header) {
    const onScroll = () => {
      header.classList.toggle("scrolled", window.scrollY > 24);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ── Footer year ──────────────────────────────────────── */
  const year = document.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();

  /* ── Animated Counter (metric-value) ──────────────────── */
  const metrics = document.querySelectorAll(".metric-value[data-count]");
  if (metrics.length) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el   = entry.target;
          const end  = parseFloat(el.dataset.count);
          const dur  = 1600;
          const step = 16;
          const inc  = end / (dur / step);
          let cur    = 0;
          const prefix = el.dataset.prefix || "";
          const suffix = el.dataset.suffix || "";
          const timer = setInterval(() => {
            cur = Math.min(cur + inc, end);
            el.textContent = prefix + (Number.isInteger(end) ? Math.round(cur) : cur.toFixed(1)) + suffix;
            if (cur >= end) clearInterval(timer);
          }, step);
          counterObserver.unobserve(el);
        }
      });
    }, { threshold: 0.5 });
    metrics.forEach((m) => counterObserver.observe(m));
  }

  /* ── Parallax subtle depth ────────────────────────────── */
  if (window.matchMedia("(pointer: fine)").matches) {
    const glowNodes = document.querySelectorAll(".glow-node");
    if (glowNodes.length) {
      window.addEventListener("mousemove", (e) => {
        const cx = e.clientX / window.innerWidth  - 0.5;
        const cy = e.clientY / window.innerHeight - 0.5;
        glowNodes.forEach((n, i) => {
          const factor = (i % 2 === 0 ? 1 : -1) * (i + 1) * 14;
          n.style.transform = `translate(${cx * factor}px, ${cy * factor * 0.6}px)`;
        });
      }, { passive: true });
    }
  }
})();
