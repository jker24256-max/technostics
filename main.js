(() => {
  const body = document.body;

  const navToggle = document.querySelector("[data-nav-toggle]");
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

  const revealElements = document.querySelectorAll(".reveal");
  if (revealElements.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -40px 0px" }
    );

    revealElements.forEach((el) => observer.observe(el));
  }

  const heroVisual = document.querySelector("[data-hero-visual]");
  const stack = document.querySelector("[data-visual-stack]");
  if (heroVisual && stack && window.matchMedia("(pointer: fine)").matches) {
    const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

    heroVisual.addEventListener("mousemove", (event) => {
      const rect = heroVisual.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
      const rotateY = clamp(x * 7, -10, 10);
      const rotateX = clamp(-y * 6, -8, 8);
      stack.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    heroVisual.addEventListener("mouseleave", () => {
      stack.style.transform = "";
    });
  }

  const params = new URLSearchParams(window.location.search);
  const service = params.get("service");
  const serviceSelect = document.querySelector("[data-service-select]");
  if (serviceSelect && service) {
    const serviceMap = {
      "tier-1": "security-health-check",
      "tier-2": "business-security-assessment",
      "tier-3": "monthly-security-support",
      "custom": "custom-enterprise",
    };
    const mapped = serviceMap[service] || service;
    const option = [...serviceSelect.options].find((o) => o.value === mapped);
    if (option) serviceSelect.value = option.value;
  }

  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("[data-nav-link]").forEach((link) => {
    const href = link.getAttribute("href") || "";
    if (href.endsWith(currentPath)) {
      link.setAttribute("aria-current", "page");
    }
  });

  const year = document.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();

  let ticking = false;
  const updateScroll = () => {
    ticking = false;
    const scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
    body.style.setProperty("--scroll-y", String(scrollTop));
  };

  window.addEventListener("scroll", () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(updateScroll);
    }
  });
  updateScroll();
})();
