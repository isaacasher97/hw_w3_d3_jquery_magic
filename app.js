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
    
  });
