  const icon = document.getElementById("hamburger_icon");
  const menu = document.getElementById("mobile_menu"); // <--- use the id that exists in HTML

  if (icon && menu) {
    icon.addEventListener("click", () => {
      menu.classList.toggle("active");
    });

    // close menu when user clicks a link (nice UX)
    menu.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => menu.classList.remove("active"))
    );
  } else {
    console.warn("hamburger icon or mobile menu not found", { icon, menu });
  }
