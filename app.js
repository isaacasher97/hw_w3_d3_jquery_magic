// Prerquisite Step: Ensures the code executes when the DOM is fully loaded
$(document).ready(function() {
    // Step 1: Query for the div with the id of container and set it to a variable named $container
    const $container = $('#container');
    
    // Step 2: Console log $container
    console.log($container);
    
    // Step 3: Create an h1 element and set it to a variable called $h1
    let $h1 = $('<h1>');

    // Console log $h1
    console.log($h1);
    
    // Step 4: Add text inside the h1 element
    $h1.text('Hogwarts');
    
    // Step 5: Append $h1 to $container
    $container.append($h1);
    
    // Step 6: add a CSS rule to align all text center inside the body
    $('body').css('text-align', 'center');

    // Year 2

    // Step 7: Create an h2 element with your name
    let $h2 = $('<h2>');
    $h2.text('Isaac');
    $container.append($h2);
    
    // Step 8: Create an h3 element with your house
    let $h3 = $('<h3>');
    $h3.text('Gryffindor');
    $container.append($h3);
    
    // Step 9: Create an h4 element with your pet's name and add a class for the pet type
    let $h4Pet = $('<h4>');
    $h4Pet.text('Storm');
    $h4Pet.addClass('owl'); // Replace 'owl' with your pet type
    $container.append($h4Pet);
    
    // Step 10: Create an h4 element with your wand name
    let $h4Wand = $('<h4>');
    $h4Wand.text('Holly Wand With Unicorn Hair');
    $container.append($h4Wand);
    
    // Step 11: Add the font-family attribute to elements with a class matching your pet's class
    let petClass = 'owl'; // Replace 'owl' with your pet class
    $('.' + petClass).css('font-family', 'fantasy');
    
    // Console log $h1, $h2, $h3, $h4Pet, and $h4Wand
    console.log($h1);
    console.log($h2);
    console.log($h3);
    console.log($h4Pet);
    console.log($h4Wand);

  });