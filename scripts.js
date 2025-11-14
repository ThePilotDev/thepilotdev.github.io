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

  // scripts.js

// scripts.js

function copyDiscordID() {
    const discordID = "thepilotdev";
    navigator.clipboard.writeText(discordID).then(() => {
      showNotification("Discord ID copied to clipboard!");
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  }
  
  function showNotification(message) {
    const notification = document.getElementById("notification");
    notification.textContent = message;
    notification.classList.remove("hidden");
    notification.classList.add("show");
  
    // Hide the notification after 3 seconds
    setTimeout(() => {
      notification.classList.remove("show");
      notification.classList.add("hidden");
    }, 3000);
  }
  