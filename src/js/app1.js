class PageHandler1 {

constructor() {
  if (localStorage.getItem("theme") == "dark") {
    document.documentElement.classList.add("dark");
  }

  this.setThemeIcon1();

  document.querySelector("#colorSwitch1").addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");

    if (localStorage.getItem("theme") == "dark") {
      localStorage.setItem("theme", "");
    } else {
      localStorage.setItem("theme", "dark");
    }

    this.setThemeIcon1();

    location.reload();


  });
}

setThemeIcon1() {
  let colorSwitch1 = document.querySelector("#colorSwitch1");
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
}


const init1 = () => {
  const pageHandler1 = new PageHandler1();
  pageHandler1.setThemeIcon1() 
};
document.addEventListener("DOMContentLoaded", () => init1());
