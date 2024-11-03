document.addEventListener("DOMContentLoaded", () => {
    const showMoreBtn = document.getElementById("showMoreBtn");
    const hiddenProjects = document.querySelectorAll(".project.hidden");
  
    showMoreBtn.addEventListener("click", () => {
      hiddenProjects.forEach((project) => {
        project.classList.remove("hidden");
      });
  
      // Ocultar el botón "Show More" una vez que se muestran todos los proyectos
      showMoreBtn.style.display = "none";
    });
  });
  