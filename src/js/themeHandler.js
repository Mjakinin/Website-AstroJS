class PageHandler1 {
  constructor() {
    window.__themeHandlerActive = true;

    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    this.updateAll();
    this.bindEvents();
  }

  bindEvents() {
    const toggle = (e) => {
      if (e) e.preventDefault();
      document.documentElement.classList.toggle("dark");

      if (document.documentElement.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "");
      }

      this.updateAll();
      window.dispatchEvent(new CustomEvent("themechange"));
    };

    const colorSwitch = document.querySelector("#colorSwitch");
    if (colorSwitch && !colorSwitch.dataset.themeBound) {
      colorSwitch.dataset.themeBound = "true";
      colorSwitch.addEventListener("click", toggle);
    }

    const farbenwechsel = document.querySelector("#farbenwechsel");
    if (farbenwechsel && !farbenwechsel.dataset.themeBound) {
      farbenwechsel.dataset.themeBound = "true";
      farbenwechsel.addEventListener("click", toggle);
    }
  }

  updateAll() {
    this.setThemeIcon();
    this.setFarbenwechsel();
    this.setIcon();
    this.setLogo();
    this.setLogo1();
    this.setImg();
    this.setWhatsapp();
    this.setScrollIcon();
  }

  setThemeIcon() {
    const colorSwitch = document.querySelector("#colorSwitch");
    if (!colorSwitch) return;

    if (document.documentElement.classList.contains("dark")) {
      colorSwitch.innerHTML = `<span class="w-[30px] h-[30px] flex items-center justify-center text-inherit"><svg class="w-[24px] h-[24px] fill-current" viewBox="0 0 24 24"><path d="M12.3 2a10 10 0 0 0-.19 14 10 10 0 0 0 11.89 4A10 10 0 1 1 12.3 2z"/></svg></span>`;
    } else {
      colorSwitch.innerHTML = `<span class="w-[30px] h-[30px] flex items-center justify-center text-inherit"><svg class="w-[26px] h-[26px] fill-current" viewBox="0 0 24 24"><path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0-5a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1zm0 18a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1zm9-9a1 1 0 0 1 0 2h-2a1 1 0 1 1 0-2h2zM5 12a1 1 0 0 1-1 1H2a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1zm13.364-7.364a1 1 0 0 1 0 1.414l-1.414 1.414a1 1 0 1 1-1.414 1.414l1.414-1.414a1 1 0 0 1 1.414 0zM7.05 16.95a1 1 0 0 1 0 1.414l-1.414 1.414a1 1 0 1 1-1.414-1.414l1.414-1.414a1 1 0 0 1 1.414 0zm11.314 11.314a1 1 0 0 1-1.414 0l-1.414-1.414a1 1 0 1 1 1.414-1.414l1.414 1.414a1 1 0 0 1 0 1.414zM7.05 7.05a1 1 0 0 1-1.414 0L4.222 5.636a1 1 0 1 1 1.414-1.414l1.414 1.414a1 1 0 0 1 0 1.414z"/></svg></span>`;
    }
  }

  setFarbenwechsel() {
    const colorSwitch1 = document.querySelector("#farbenwechsel");
    if (!colorSwitch1) return;

    if (document.documentElement.classList.contains("dark")) {
      colorSwitch1.innerHTML = `<svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12.3 2a10 10 0 0 0-.19 14 10 10 0 0 0 11.89 4A10 10 0 1 1 12.3 2z"/></svg>`;
    } else {
      colorSwitch1.innerHTML = `<svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0-5a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1zm0 18a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1zm9-9a1 1 0 0 1 0 2h-2a1 1 0 1 1 0-2h2zM5 12a1 1 0 0 1-1 1H2a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1zm13.364-7.364a1 1 0 0 1 0 1.414l-1.414 1.414a1 1 0 1 1-1.414 1.414l1.414-1.414a1 1 0 0 1 1.414 0zM7.05 16.95a1 1 0 0 1 0 1.414l-1.414 1.414a1 1 0 1 1-1.414-1.414l1.414-1.414a1 1 0 0 1 1.414 0zm11.314 11.314a1 1 0 0 1-1.414 0l-1.414-1.414a1 1 0 1 1 1.414-1.414l1.414 1.414a1 1 0 0 1 0 1.414zM7.05 7.05a1 1 0 0 1-1.414 0L4.222 5.636a1 1 0 1 1 1.414-1.414l1.414 1.414a1 1 0 0 1 0 1.414z"/></svg>`;
    }
  }

  setImg() {
    const isLight = document.documentElement.classList.contains("dark");
    const img2 = document.querySelector("#img2");
    if (img2) {
      if (isLight) {
        img2.innerHTML = `<img src="/icons/fernsehturm.svg" alt="img2" class="transition-transform duration-300 transform hover:scale-105 -rotate-12 absolute hidden xl:block xl:w-52 xl:h-52 xl:-bottom-48 xl:left-42 2xl:w-72 2xl:h-72 2xl:-bottom-48 2xl:left-24"/>`;
      } else {
        img2.innerHTML = `<img src="/icons/fernsehturm-dark.svg" alt="img2" class="transition-transform duration-300 transform hover:scale-105 -rotate-12 absolute hidden xl:block xl:w-52 xl:h-52 xl:-bottom-48 xl:left-42 2xl:w-72 2xl:h-72 2xl:-bottom-48 2xl:left-24"/>`;
      }
    }

    const img = document.querySelector("#img");
    if (img) {
      if (isLight) {
        img.innerHTML = `<img src="/icons/brandenburger-tor.svg" alt="img" class="transition-transform duration-300 transform hover:scale-105 rotate-12 absolute right-10 bottom-0 w-20 h-20 hidden xl:block xl:w-52 xl:h-52 xl:top-112 xl:translate-y-96 xl:-translate-x-52 2xl:w-72 2xl:h-72 2xl:top-96 2xl:translate-y-[355px] 2xl:-translate-x-52"/>`;
      } else {
        img.innerHTML = `<img src="/icons/brandenburger-tor-dark.svg" alt="img" class="transition-transform duration-300 transform hover:scale-105 rotate-12 absolute right-10 bottom-0 w-20 h-20 hidden xl:block xl:w-52 xl:h-52 xl:top-112 xl:translate-y-96 xl:-translate-x-52 2xl:w-72 2xl:h-72 2xl:top-96 2xl:translate-y-[355px] 2xl:-translate-x-52"/>`;
      }
    }
  }

  setWhatsapp() {
    const logo = document.querySelector("#whatsapplink");
    if (!logo) return;

    if (document.documentElement.classList.contains("dark")) {
      logo.innerHTML = `<img src="/images/whatsappdark.png" alt="icon1" class="" />`;
    } else {
      logo.innerHTML = `<img src="/images/whatsapplight.png" alt="logo1" class="" />`;
    }
  }

  setLogo() {
    const logo = document.querySelector("#logoSwitch");
    if (!logo) return;

    if (document.documentElement.classList.contains("dark")) {
      logo.innerHTML = `<img src="/images/DunkelLogo.png" alt="logo2"/>`;
    } else {
      logo.innerHTML = `<img src="/images/HellLogo.png" alt="logo1"/>`;
    }
  }

  setLogo1() {
    const logo = document.querySelector("#logoSwitch1");
    if (!logo) return;

    if (document.documentElement.classList.contains("dark")) {
      logo.innerHTML = `<img src="/images/DunkelLogo.png" alt="logo3"/>`;
    } else {
      logo.innerHTML = `<img src="/images/HellLogo.png" alt="logo4"/>`;
    }
  }

  setIcon() {
    const isLight = document.documentElement.classList.contains("dark");
    const icons = [
      { id: "#icon1", dark: "/icons/rocket-dark.svg", light: "/icons/rocket.svg" },
      { id: "#icon2", dark: "/icons/money-dark.svg", light: "/icons/money.svg" },
      { id: "#icon3", dark: "/icons/tools-dark.svg", light: "/icons/tools.svg" },
      { id: "#icon4", dark: "/icons/arrow-dark.svg", light: "/icons/arrow.svg" },
      { id: "#icon5", dark: "/icons/person-dark.svg", light: "/icons/person.svg" },
      { id: "#icon6", dark: "/icons/pc-dark.svg", light: "/icons/pc.svg" },
    ];

    icons.forEach(({ id, dark, light }) => {
      const el = document.querySelector(id);
      if (el) {
        el.innerHTML = `<img src="${isLight ? dark : light}" alt="${id}" class="w-10 h-10" />`;
      }
    });
  }

  setScrollIcon() {
    const isLight = document.documentElement.classList.contains("dark");
    ["#icon7", "#icon8"].forEach((id) => {
      const el = document.querySelector(id);
      if (el) {
        el.innerHTML = `<img src="${isLight ? "/icons/arrow-small.svg" : "/icons/arrow-small-dark.svg"}" alt="scroll" class="w-10 h-10" />`;
      }
    });
  }
}

const initTheme = () => {
  window.__pageHandler1 = new PageHandler1();
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initTheme);
} else {
  initTheme();
}
