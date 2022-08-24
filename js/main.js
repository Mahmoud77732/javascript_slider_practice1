
// Get slider items | Array.from [ES6 Feature]
var sliderImages = Array.from(document.querySelectorAll('.slider-container img'));

// Get number of slides
var slidesCount = sliderImages.length;

// Set current slide
var currentSlide = 1;

// Slide number_string element
var slideNumberElement = document.getElementById('slide-number');

// Previous and next buttons
var prevButton = document.getElementById('prev');
var nextButton = document.getElementById('next');

// Handle click on previous and next buttons
prevButton.onclick = prevSlide;
nextButton.onclick = nextSlide;

// Create The Main ul Element
var paginationElement = document.createElement('ul');

// Set id on created ul element
paginationElement.setAttribute('id', 'pagination-ul');

// Create list items based on slides count
for(var i = 1; i <= slidesCount; i++){
    // Create the li
    var paginationItem = document.createElement('li');

    // Set custom attribute
    paginationItem.setAttribute('data-index', i);

    // Set item content
    paginationItem.appendChild(document.createTextNode(i));

    // Append items to the main ul list
    paginationElement.appendChild(paginationItem);
}

// Add the created ul element to the page
document.getElementById('indicators').appendChild(paginationElement);

// Get the new created ul
var paginationCreatedUl = document.getElementById('pagination-ul');

// Get pagination items | Array.from [ES6 Feature]
var paginationBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

// Loop through all bullets items
for(var i = 0;  i < paginationBullets.length; i++){
    paginationBullets[i].onclick = function() {
        currentSlide = parseInt(this.getAttribute('data-index'));
        theChecker();
    };
}

// Trigger theChecker function
theChecker();


// Next slide function
function nextSlide(){
    if(nextButton.classList.contains('disabled')){
        // Do nothing
        return false;
    }
    else{
        currentSlide++;
        theChecker();
    }
}

// Previous slide function
function prevSlide(){
    if(prevButton.classList.contains('disabled')){
        // Do nothing
        return false;
    }
    else{
        currentSlide--;
        theChecker();
    }
}

// Create the checker function
function theChecker(){
    // Set the slide number
    slideNumberElement.textContent = 'Slide #' + (currentSlide) + ' of ' + (slidesCount);

    // Remove all active classes
    removeAllActive();

    // Set active class on current slide
    sliderImages[currentSlide - 1].classList.add('active'); // '-1' index starts with 0

    // Set active class on current pagination item
    paginationCreatedUl.children[currentSlide - 1].classList.add('active');

    // Check if current slide is the first
    if(currentSlide == 1){
        // Add disabled class on previous button
        prevButton.classList.add('disabled');
    }
    else{
        // Remove disabled class on previous button
        prevButton.classList.remove('disabled');
    }
    
    // Check if current slide is the last
    if(currentSlide == slidesCount){
        // Add disabled class on next button
        nextButton.classList.add('disabled');
    }
    else{
        // Remove disabled class on next button
        nextButton.classList.remove('disabled');
    }
}

// Remove all active classes from images and pagination bullets
function removeAllActive(){
    // Loop through images
    sliderImages.forEach(function(img) {
        img.classList.remove('active');
    });

    // Loop through pagination buttles
    paginationBullets.forEach(function(bullet){
        bullet.classList.remove('active');
    });
}
