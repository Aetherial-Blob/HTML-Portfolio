


      // Function to toggle visibility of choice buttons
      function toggleChoices() {
        const choiceButtons = document.querySelector('.choice-buttons');
        // Toggle the display of the choice buttons
        if (choiceButtons.style.display === 'none' || choiceButtons.style.display === '') {
          choiceButtons.style.display = 'block';
        } else {
          choiceButtons.style.display = 'none';
        }
      }