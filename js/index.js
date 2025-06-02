
document.addEventListener('DOMContentLoaded', () => {
  // New footer element.
  
  const footerElement = document.createElement('footer');

  
  const copyrightParagraph = document.createElement('p');

  
  /*copyrightParagraph.textContent = '© Ben Chapman 2025'; */

  
  footerElement.appendChild(copyrightParagraph);

  // Append footer element to  <body> 
  
  document.body.appendChild(footerElement);

  /* button finally fixed */
  const changeTextButton = document.getElementById("change-text-btn");
  if (changeTextButton) { 
    changeTextButton.addEventListener("click", function() {
      
      const mainHeading = document.getElementById("main-heading");
      if (mainHeading) {
        mainHeading.textContent = "I'm a web developer, and I love to code!";
      }
      
      const bio = document.getElementById("bio");
      if (bio) {
        bio.textContent = "I'm a web developer, and I love to code!";
      }
    });
  }


  const button = document.getElementById('clickMeBtn');
  const colors = [
    '#FFADAD', '#FFD6A5', '#FDFFB6',
    '#CAFFBF', '#9BF6FF', '#A0C4FF',
    '#BDB2FF', '#FFC6FF', '#FFFFFC'
  ];
  let currentIndex = 0;

  if (button) { 
    button.addEventListener('click', () => {
      document.body.style.backgroundColor = colors[currentIndex];
      currentIndex = (currentIndex + 1) % colors.length;
    });
  }

  // --- Skills Section ---
  const skills = ["HTML", "CSS", "JavaScript", "Git/GitHub", "Responsive Design", "Problem Solving"]; // Added "CSS", "Responsive Design", "Problem Solving" as examples, based on your original list and typical web dev skills. Feel free to change these.

  const skillsSection = document.getElementById('skills-section');
  
  if (skillsSection) { 
    const skillsList = skillsSection.querySelector('ul');

    if (skillsList) { 
      skillsList.innerHTML = ''; 

      for (let i = 0; i < skills.length; i++) {
        const skill = document.createElement('li');
        skill.textContent = skills[i]; 
        skillsList.appendChild(skill);
      }
    }
  }
  // --- End of Skills ---

});


const today = new Date();
const thisYear = today.getFullYear();


document.addEventListener('DOMContentLoaded', () => {
    const copyrightParagraph = document.querySelector('footer p'); 
    if (copyrightParagraph) {
        copyrightParagraph.textContent = `© Ben Chapman ${thisYear}`;
    }
});


console.log("Today's date object:", today);
console.log("Current year:", thisYear);