/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/
const sections = document.querySelectorAll('section');
const navigationBar = document.querySelector('#navbar__list');
const sectionHeadings = document.querySelectorAll('h2');  // TODO: To pass number of sections as a parameter.
const fragment = document.createDocumentFragment(); // TODO: Fragment creation to improve performance with loops

/**
 * End Global Variables
 * Start Helper Functions
 *
*/

/**
 * @description Scroll to the opposite section to the list item
 * @param {nodeList} sectionsHeaders 
 */
const clickToScroll = (sectionsHeaders) => {
  for (let listIndex = 0; listIndex < sectionsHeaders.length; listIndex++){ // TODO: for loop to iterate over number of sections 
    const listElements = document.querySelectorAll('li');
    const listElement = listElements[listIndex];
    listElement.addEventListener('click', function(){ // TODO: create a click event listener to scroll to the right section
      sections[listIndex].scrollIntoView({behavior: 'smooth'}); // TODO: this function scrolls to the required element in the page smoothly
    });
  }
};

/**
 * @description This function distinguishes the section in view
 * @param {nodeList} allSections 
 */
const activeSection = (allSections) => {
  for(let sectionIndex = 0; sectionIndex < allSections.length; sectionIndex++){
    window.addEventListener('scroll', function(){ // TODO: scroll eventlistener which distinguishes the section in view
      scrollToActivate(sectionIndex); // TODO: Call the function which has the algorithm responsible for activating the section in view
    });
  }
};

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav

/**
 * @description To create menu(navigation bar)
 * @param {nodeList} sectionsHeaders 
 */
const menuCreator = (sectionsHeaders) => {
  for (let listIndex = 0; listIndex < sectionsHeaders.length; listIndex++){
    const navBarListElement = document.createElement('li'); // TODO: Create menu elements.
    navBarListElement.classList.add('menu__link');  // TODO: Give it good CSS by adding 'menu__link' class
    navBarListElement.textContent = sectionsHeaders[listIndex].innerHTML; // TODO: Give the menu element the same name of its opposite section
    fragment.appendChild(navBarListElement); // TODO: Append to fragment
  }
  navigationBar.appendChild(fragment);  // TODO: Append the fragment to the navigation bar(menu) --> this multiple appends were to improve performance
};

// Add class 'active' to section when near top of viewport

/**
 * @description Here I have built the algorithm to scroll to the required section
 * @param {nodeList} sectionIndex 
 */
const scrollToActivate = (sectionIndex) => {
  const place = sections[sectionIndex].getBoundingClientRect(); // TODO: for each section I got its size and position values
  const listElement = document.querySelectorAll('li');
  /**
   * Here in our application I used the last function top property as we want to activate the section in view only
   * I have chosen these values because they are the values where the section lies between
  */
  if (place.top > -100 && place.top < 300){
    sections[sectionIndex].classList.add('your-active-class');  // TODO: Here I want to distinguish the section in view so, I added active class to it to apply additional Css
    listElement[sectionIndex].style.cssText = 'background-color: black; color: white';  // TODO: Add some css to the list item when the opposite section is in view
  } else {
    sections[sectionIndex].classList.remove('your-active-class'); // TODO: Except for section in view there won't be additional Css
    listElement[sectionIndex].style.cssText = ''; // TODO: Except for section in view there won't be additional Css to its opposite list item
  }
};

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu
menuCreator(sectionHeadings); // TODO: Function Call

// Scroll to section on link click
clickToScroll(sectionHeadings); // TODO: Function Call

// Set sections as active
activeSection(sectionHeadings); // TODO: Function Call