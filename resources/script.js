// // fade-in-down function 

window.addEventListener("load", () => {
    const items = document.querySelectorAll(".fade-down");
    const itemsArray = Array.from(items);
    itemsArray.forEach((item, index) => {
        item.style.animation = `fadeInDown 0.5s ease-out ${index * 0.2}s forwards`;
    })
});


$(document).on("scroll", () => {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var fades = $(".fade");

    for (var i = 0; i < fades.length; i++) {
        var fade = fades[i];
        if ($(fade).position().top < pageBottom) {
            $(fade).addClass("visible");
        } 
    }
});


function toggleNav() {
    const mobileNav = document.getElementById("mobileNav");
    if (mobileNav.style.width === "13rem") {
      mobileNav.style.width = "0";
    } else {
      mobileNav.style.width = "13rem";
    }
  };

// Function to update the logo based on the current theme
function updateLogo(theme) {
    const logo = document.getElementById('logo');
    if (theme === 'pink') {
        logo.src = './resources/images/logo-pink.png'; // Pink logo
    } else {
        logo.src = './resources/images/logo.png'; // Default (blue) logo
    }
}

// Function to update the media sidebar icons based on the current theme
function updateMediaIcons(theme) {
    const icons = document.querySelectorAll('.media-logos');
  
    icons.forEach(icon => {
        const iconId = icon.id;
    
        if (theme === 'pink') {
            if (iconId === 'instagram-icon') {
                icon.src = './resources/images/instagram-icon-pink.png';
            } else if (iconId === 'github-icon') {
                icon.src = './resources/images/github-icon-pink.png';
            } else if (iconId === 'discord-icon') {
                icon.src = './resources/images/discord-icon-pink.png';
            } else if (iconId === 'spotify-icon') {
                icon.src = './resources/images/spotify-icon-pink.png';
            } else if (iconId === 'linkedin-icon') {
                icon.src = './resources/images/linkedin-icon-pink.png';
            }
        } else {
            if (iconId === 'instagram-icon') {
                icon.src = './resources/images/instagram-icon.png';
            } else if (iconId === 'github-icon') {
                icon.src = './resources/images/github-icon.png';
            } else if (iconId === 'discord-icon') {
                icon.src = './resources/images/discord-icon.png';
            } else if (iconId === 'spotify-icon') {
                icon.src = './resources/images/spotify-icon.png';
            } else if (iconId === 'linkedin-icon') {
                icon.src = './resources/images/linkedin-icon.png';
            }
        }
    });
}

// Function to update the project icons based on the current theme
function updateProjectIcons(theme) {
    const icons = document.querySelectorAll('.project-logos');
  
    icons.forEach(icon => {
        const iconId = icon.id;
    
        if (theme === 'pink') {
            if (iconId === 'github-icon') {
                icon.src = './resources/images/github-icon-pink.png';
            } else if (iconId === 'link-icon') {
                icon.src = './resources/images/link-icon-pink.png';
            } else if (iconId === 'folder-icon') {
                icon.src = './resources/images/folder-icon-pink.png';
            }
        } else {
            if (iconId === 'github-icon') {
                icon.src = './resources/images/github-icon.png';
            } else if (iconId === 'link-icon') {
                icon.src = './resources/images/link-icon.png';
            } else if (iconId === 'folder-icon') {
                icon.src = './resources/images/folder-icon.png';
            }
        }
    });
};

// Get the necessary elements
const toggleButton = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

// Set the initial theme to "blue" if not specified in localStorage
const currentTheme = localStorage.getItem('theme') || 'blue';
document.documentElement.setAttribute('data-theme', currentTheme);

// Set the initial icon and button background based on the theme
themeIcon.src = currentTheme === 'pink' ? './resources/images/off-button.png' : './resources/images/on-button.png';
toggleButton.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--button-bg-color');

// Set the initial icons based on the current theme
updateMediaIcons(currentTheme);
updateLogo(currentTheme);
updateProjectIcons(currentTheme);

// Toggle theme when the button is clicked
toggleButton.addEventListener('click', function() {
    toggleTheme();
});

// Optionally, add touchstart for mobile compatibility
toggleButton.addEventListener('touchstart', function() {
    toggleTheme();
});

// Function to toggle between "blue" and "pink" themes
function toggleTheme() {
    const theme = document.documentElement.getAttribute('data-theme') === 'pink' ? 'blue' : 'pink';
    document.documentElement.setAttribute('data-theme', theme);

    // Save the user's preference
    localStorage.setItem('theme', theme);

    // Update the icon based on the theme
    themeIcon.src = theme === 'pink' ? './resources/images/off-button.png' : './resources/images/on-button.png';

    // Update button background color
    toggleButton.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--button-bg-color');

    // Update the media icons and logo based on the new theme
    updateMediaIcons(theme);
    updateLogo(theme);
    updateProjectIcons(theme);
}
