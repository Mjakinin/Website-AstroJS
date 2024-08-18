class PageHandler1 {
  constructor() {
    if (localStorage.getItem("theme") == "dark") {
      document.documentElement.classList.add("dark");
    }

    this.setThemeIcon();
    this.setFarbenwechsel();

    document.querySelector("#farbenwechsel").addEventListener("click", () => {
      document.documentElement.classList.toggle("dark");

      if (localStorage.getItem("theme") == "dark") {
        localStorage.setItem("theme", "");
      } else {
        localStorage.setItem("theme", "dark");
      }

      this.setFarbenwechsel();
      this.setThemeIcon();
      this.setIcon();
      this.setLogo();
      this.setLogo1();
      this.setImg();
      this.setWhatsapp();
      this.setScrollIcon();
    });
  }

  setThemeIcon() {
    let colorSwitch = document.querySelector("#colorSwitch");
    if (colorSwitch === null) return;

    if (localStorage.getItem("theme") == "dark") {
      colorSwitch.innerHTML = `
        <img src="/icons/moon.svg?a=${Math.random()}" alt="moon" class="w-6 h-6" />
      `;
    } else {
      colorSwitch.innerHTML = `
        <img src="/icons/sun.svg?a=${Math.random()}" alt="sun" class="w-6 h-6" />
      `;
    }
  }

  setFarbenwechsel() {
    let colorSwitch1 = document.querySelector("#farbenwechsel");
    if (colorSwitch1 === null) return;
  
    if (localStorage.getItem("theme") == "dark") {
      colorSwitch1.innerHTML = `
        <img src="/icons/moon1.svg?a=${Math.random()}" alt="moon1" class="w-6 h-6" />
      `;
    } else {
      colorSwitch1.innerHTML = `
        <img src="/icons/sun1.svg?a=${Math.random()}" alt="sun1" class="w-6 h-6" />
      `;
    }
  }

  setImg()
  {
    const img2 = document.querySelector("#img2");
    if (img2 === null) return;

    if (localStorage.getItem("theme") == "dark") {
      img2.innerHTML = `
        <img src="/icons/fernsehturm.svg?a=${Math.random()}" alt="img2" class="transition-transform duration-300 transform hover:scale-105 -rotate-12 absolute hidden xl:block xl:w-52 xl:h-52 xl:-bottom-48 xl:left-42 2xl:w-72 2xl:h-72 2xl:-bottom-48 2xl:left-24"/>
      `;
    } else {
      img2.innerHTML = `
        <img src="/icons/fernsehturm-dark.svg?a=${Math.random()}" alt="img2" class="transition-transform duration-300 transform hover:scale-105 -rotate-12 absolute hidden xl:block xl:w-52 xl:h-52 xl:-bottom-48 xl:left-42 2xl:w-72 2xl:h-72 2xl:-bottom-48 2xl:left-24"/>
      `;
    }

    const img = document.querySelector("#img");
    if (img === null) return;

    if (localStorage.getItem("theme") == "dark") {
      img.innerHTML = `
        <img src="/icons/brandenburger-tor.svg?a=${Math.random()}" alt="img" class="transition-transform duration-300 transform hover:scale-105 rotate-12 absolute right-10 bottom-0 w-20 h-20 hidden xl:block xl:w-52 xl:h-52 xl:top-112 xl:translate-y-96 xl:-translate-x-52 2xl:w-72 2xl:h-72 2xl:top-96 2xl:translate-y-60 2xl:-translate-x-52"/>
      `;
    } else {
      img.innerHTML = `
        <img src="/icons/brandenburger-tor-dark.svg?a=${Math.random()}" alt="img" class="transition-transform duration-300 transform hover:scale-105 rotate-12 absolute right-10 bottom-0 w-20 h-20 hidden xl:block xl:w-52 xl:h-52 xl:top-112 xl:translate-y-96 xl:-translate-x-52 2xl:w-72 2xl:h-72 2xl:top-96 2xl:translate-y-60 2xl:-translate-x-52"/>
      `;
    }
  }

  setWhatsapp()
  {
    const logo = document.querySelector("#whatsapplink");
    if (logo === null) return;

    if (localStorage.getItem("theme") == "dark") {
      logo.innerHTML = `
        <img src="/images/whatsappdark.png?a=${Math.random()}" alt="icon1" class="" />
      `;
    } else {
      logo.innerHTML = `
        <img src="/images/whatsapplight.png?a=${Math.random()}" alt="logo1" class="" />
      `;
    }
  }

  setLogo() {
    const logo = document.querySelector("#logoSwitch");
    if (logo === null) return;

    if (localStorage.getItem("theme") == "dark") {
      logo.innerHTML = `
        <img src="/images/DunkelLogo.png?a=${Math.random()}" alt="logo2"/>
      `;
    } else {
      logo.innerHTML = `
        <img src="/images/HellLogo.png?a=${Math.random()}" alt="logo1"/>
      `;
    }
  }

  setLogo1() {
    const logo = document.querySelector("#logoSwitch1");
    if (logo === null) return;

    if (localStorage.getItem("theme") == "dark") {
      logo.innerHTML = `
        <img src="/images/DunkelLogo.png?a=${Math.random()}" alt="logo3"/>
      `;
    } else {
      logo.innerHTML = `
        <img src="/images/HellLogo.png?a=${Math.random()}" alt="logo4"/>
      `;
    }
  }

  setIcon() {
    const icon1 = document.querySelector("#icon1");
    if (icon1 === null) return;

    if (localStorage.getItem("theme") == "dark") {
      icon1.innerHTML = `
        <img src="/icons/rocket-dark.svg?a=${Math.random()}" alt="icon1" class="w-10 h-10" />
      `;
    } else {
      icon1.innerHTML = `
        <img src="/icons/rocket.svg?a=${Math.random()}" alt="icon1" class="w-10 h-10" />
      `;
    }

    const icon2 = document.querySelector("#icon2");
    if (icon2 === null) return;

    if (localStorage.getItem("theme") == "dark") {
      icon2.innerHTML = `
        <img src="/icons/money-dark.svg?a=${Math.random()}" alt="logo" class="w-10 h-10" />
      `;
    } else {
      icon2.innerHTML = `
        <img src="/icons/money.svg?a=${Math.random()}" alt="logo" class="w-10 h-10" />
      `;
    }

    const icon3 = document.querySelector("#icon3");
    if (icon3 === null) return;

    if (localStorage.getItem("theme") == "dark") {
      icon3.innerHTML = `
        <img src="/icons/tools-dark.svg?a=${Math.random()}" alt="logo" class="w-10 h-10" />
      `;
    } else {
      icon3.innerHTML = `
        <img src="/icons/tools.svg?a=${Math.random()}" alt="logo" class="w-10 h-10" />
      `;
    }

    const icon4 = document.querySelector("#icon4");
    if (icon4 === null) return;

    if (localStorage.getItem("theme") == "dark") {
      icon4.innerHTML = `
        <img src="/icons/arrow-dark.svg?a=${Math.random()}" alt="logo" class="w-10 h-10" />
      `;
    } else {
      icon4.innerHTML = `
        <img src="/icons/arrow.svg?a=${Math.random()}" alt="logo" class="w-10 h-10" />
      `;
    }

    const icon5 = document.querySelector("#icon5");
    if (icon5 === null) return;

    if (localStorage.getItem("theme") == "dark") {
      icon5.innerHTML = `
        <img src="/icons/person-dark.svg?a=${Math.random()}" alt="logo" class="w-10 h-10" />
      `;
    } else {
      icon5.innerHTML = `
        <img src="/icons/person.svg?a=${Math.random()}" alt="logo" class="w-10 h-10" />
      `;
    }

    const icon6 = document.querySelector("#icon6");
    if (icon6 === null) return;

    if (localStorage.getItem("theme") == "dark") {
      icon6.innerHTML = `
        <img src="/icons/pc-dark.svg?a=${Math.random()}" alt="logo" class="w-10 h-10" />
      `;
    } else {
      icon6.innerHTML = `
        <img src="/icons/pc.svg?a=${Math.random()}" alt="logo" class="w-10 h-10" />
      `;
    }
  }

  setScrollIcon() {
    const icon7 = document.querySelector("#icon7");
    if (icon7 === null) return;

    if (localStorage.getItem("theme") == "dark") {
      icon7.innerHTML = `
        <img src="/icons/arrow-small.svg?a=${Math.random()}" alt="icon7" class="w-10 h-10" />
      `;
    } else {
      icon7.innerHTML = `
        <img src="/icons/arrow-small-dark.svg?a=${Math.random()}" alt="icon7" class="w-10 h-10" />
      `;
    }


    const icon8 = document.querySelector("#icon8");
    if (icon8 === null) return;

    if (localStorage.getItem("theme") == "dark") {
      icon8.innerHTML = `
        <img src="/icons/arrow-small.svg?a=${Math.random()}" alt="icon7" class="w-10 h-10" />
      `;
    } else {
      icon8.innerHTML = `
        <img src="/icons/arrow-small-dark.svg?a=${Math.random()}" alt="icon7" class="w-10 h-10" />
      `;
    }
  }
}
  
  
  const init = () => {
    const pageHandler1 = new PageHandler1();
    pageHandler1.setIcon(); // Set logo based on initial theme
    pageHandler1.setLogo();
    pageHandler1.setLogo1();
    pageHandler1.setImg();
    pageHandler1.setWhatsapp();
    pageHandler1.setThemeIcon();
    pageHandler1.setScrollIcon();
    pageHandler1.setFarbenwechsel();
  };
  document.addEventListener("DOMContentLoaded", () => init());