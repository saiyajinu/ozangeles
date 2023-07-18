const allLinks = document.querySelectorAll('a');

    // Loop through each <a> tag
    allLinks.forEach(link => {
      if (link.innerText.toLowerCase().includes('free')) {
        link.remove();
      }
    });