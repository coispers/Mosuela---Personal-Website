function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
 
  const button = document.getElementById("dark-mode-btn");

  if (document.body.classList.contains("dark-mode")) {
    button.innerHTML = '<i class="fa-solid fa-sun"></i> Lights On';
  } else {
    
    button.innerHTML = '<i class="fa-solid fa-moon"></i> Lights Off';
  }
}
