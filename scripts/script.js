/**
 * portfolio/scripts/script.js
 * Vanilla JS — no dependencies, no inline styles injected at runtime.
 * All dynamic classes are toggled; visual values live in style.css.
 */

(function () {
  'use strict';

  /* ------------------------------------------------------------------
     SMOOTH SCROLL (native href="#…" anchors)
  ------------------------------------------------------------------ */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Move focus to the target for keyboard users
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    });
  });

  /* ------------------------------------------------------------------
     STICKY HEADER — add shadow when user scrolls
  ------------------------------------------------------------------ */
  var header = document.querySelector('.site-header');
  if (header) {
    var onScroll = function () {
      header.classList.toggle('scrolled', window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run once on load
  }

  /* ------------------------------------------------------------------
     NAV TOGGLE (mobile hamburger)
  ------------------------------------------------------------------ */
  var toggle = document.querySelector('.nav-toggle');
  var navList = document.getElementById('nav-list');

  if (toggle && navList) {
    toggle.addEventListener('click', function () {
      var isOpen = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!isOpen));
      navList.classList.toggle('open', !isOpen);
    });

    // Close on nav link click
    navList.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        toggle.setAttribute('aria-expanded', 'false');
        navList.classList.remove('open');
      });
    });

    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && navList.classList.contains('open')) {
        toggle.setAttribute('aria-expanded', 'false');
        navList.classList.remove('open');
        toggle.focus();
      }
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (navList.classList.contains('open') &&
          !navList.contains(e.target) &&
          !toggle.contains(e.target)) {
        toggle.setAttribute('aria-expanded', 'false');
        navList.classList.remove('open');
      }
    });
  }

  /* ------------------------------------------------------------------
     BACK TO TOP
  ------------------------------------------------------------------ */
  var backToTop = document.getElementById('back-to-top');
  if (backToTop) {
    var onScrollBtt = function () {
      if (window.scrollY > 400) {
        backToTop.hidden = false;
      } else {
        backToTop.hidden = true;
      }
    };
    window.addEventListener('scroll', onScrollBtt, { passive: true });
    onScrollBtt();

    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ------------------------------------------------------------------
     ACTIVE NAV LINK (IntersectionObserver — highlights current section)
  ------------------------------------------------------------------ */
  var sections = document.querySelectorAll('section[id]');
  var navLinks = document.querySelectorAll('.nav-list a[href^="#"]');

  if (sections.length && navLinks.length && 'IntersectionObserver' in window) {
    var sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var id = entry.target.id;
        navLinks.forEach(function (link) {
          var matches = link.getAttribute('href') === '#' + id;
          link.setAttribute('aria-current', matches ? 'page' : 'false');
        });
      });
    }, { rootMargin: '-40% 0px -55% 0px' });

    sections.forEach(function (section) {
      sectionObserver.observe(section);
    });
  }

  /* ------------------------------------------------------------------
     SCROLL REVEAL (adds .visible when element enters viewport)
     Respects prefers-reduced-motion — skips animation if reduced.
  ------------------------------------------------------------------ */
  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReduced && 'IntersectionObserver' in window) {
    // Add .reveal to all cards and timeline items
    var revealTargets = document.querySelectorAll(
      '.skill-card, .project-card, .timeline-item, .contact-card'
    );

    revealTargets.forEach(function (el) {
      el.classList.add('reveal');
    });

    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    revealTargets.forEach(function (el) {
      revealObserver.observe(el);
    });
  }

})();
