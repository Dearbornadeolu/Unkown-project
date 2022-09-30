"use strict";

///////////////////////////////////////////////////////////
// Sticky navigation

const sectionHeroEl = document.querySelector(".section-hero");
const sectionHeaderEl = document.querySelector(".fake-div");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    console.log(entries);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
      document.querySelector(".header").classList.remove("container");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
      document.querySelector(".header").classList.add("container");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

obs.observe(sectionHeaderEl);
