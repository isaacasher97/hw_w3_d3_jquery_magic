// Prerquisite Step: Ensures the code executes when the DOM is fully loaded
$(document).ready(function() {
    // Step 1: Query for the div with the id of container and set it to a variable named $container
    const $container = $('#container');
    
    // Step 2: Console log $container
    // console.log($container);
    
    // Step 3: Create an h1 element and set it to a variable called $h1
    let $h1 = $('<h1>');

    // Console log $h1
    // console.log($h1);
    
    // Step 4: Add text inside the h1 element
    $h1.text('Hogwarts');
    
    // Step 5: Append $h1 to $container
    $container.append($h1);
    
    // Step 6: add a CSS rule to align all text center inside the body
    $('body').css('text-align', 'center');

    // Year 2 --------------------------------------------------------------------------------------------->

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
    $h4Pet.addClass('Cat'); // Replace 'owl' with your pet type
    $container.append($h4Pet);
    
    // Step 10: Create an h4 element with your wand name
    let $h4Wand = $('<h4>');
    $h4Wand.text('Holly Wand With Unicorn Hair');
    $container.append($h4Wand);
    
    // Step 11: Add the font-family attribute to elements with a class matching your pet's class
    let petClass = 'owl'; // Replace 'owl' with your pet class
    $('.' + petClass).css('font-family', 'fantasy');
    
    // Console log $h1, $h2, $h3, $h4Pet, and $h4Wand
    // console.log($h1);
    // console.log($h2);
    // console.log($h3);
    // console.log($h4Pet);
    // console.log($h4Wand);

    // Year 3 --------------------------------------------------------------------------------------------->

    // Step 12: Create an unordered list with the attribute of storage and a value of trunk
    let $ul = $('<ul>');
    $ul.attr('storage', 'trunk');
    
    // Step 13: Create list items and add classes as specified
    let $li1 = $('<li>').text('Butter Beer'); // butter beer
    let $li2 = $('<li>').text('Invisibility Cloak').addClass('secret'); // invisibility cloak (add a class of secret)
    let $li3 = $('<li>').text('Magic Map').addClass('secret'); // magic map (add a class of secret)
    let $li4 = $('<li>').text('Time Turner').addClass('secret'); // time turner (add a class of secret)
    let $li5 = $('<li>').text('Leash').addClass(petClass); // Use the same class as your pet
    let $li6 = $('<li>').text('Bertie Bott\'s Every Flavor [Jelly] Beans.').addClass(petClass); // Create a list item with a class matching your pet's class

    // Step 14: Append the list items to the unordered list
    $ul.append($li1, $li2, $li3, $li4, $li5, $li6);

    // Step 15: Append the unordered list to the container div
    $container.append($ul);

    // Year 4 --------------------------------------------------------------------------------------------->
    
   // Create an h5 element with text 'Spring 2017'
   let $h5 = $('<h5>').text('Spring 2017');

   // Make A table
   let $table = $('<table>');
 
   // Create thead element
   let $thead = $('<thead>');
 
   // Create th elements and add text to them
   let $th1 = $('<th>').text('Day');
   let $th2 = $('<th>').text('Classes');
 
   // Append the th elements to the thead element
   $thead.append($th1, $th2);
 
   // Append the thead element inside the table
   $table.append($thead);
 
   // Create tbody element
   let $tbody = $('<tbody>');
 
   // Create tr elements for each day
   let $trMonday = $('<tr>');
   let $trTuesday = $('<tr>');
   let $trWednesday = $('<tr>');
   let $trThursday = $('<tr>');
   let $trFriday = $('<tr>');
 
   // Create td elements for each day and classes
   let $tdMondayDay = $('<td>').text('Monday');
   let $tdMondayClasses = $('<td>').text('Defense Against the Dark Arts, Quidditch practice');
   let $tdTuesdayDay = $('<td>').text('Tuesday');
   let $tdTuesdayClasses = $('<td>').text('Herbology, Potions');
   let $tdWednesdayDay = $('<td>').text('Wednesday');
   let $tdWednesdayClasses = $('<td>').text('Transfiguration, Charms');
   let $tdThursdayDay = $('<td>').text('Thursday');
   let $tdThursdayClasses = $('<td>').text('Divination, History Of Magic');
   let $tdFridayDay = $('<td>').text('Friday');
   let $tdFridayClasses = $('<td>').text('Go to Hogsmeade, Visit Hagrid');
 
   // Append the td elements to the tr elements
   $trMonday.append($tdMondayDay, $tdMondayClasses);
   $trTuesday.append($tdTuesdayDay, $tdTuesdayClasses);
   $trWednesday.append($tdWednesdayDay, $tdWednesdayClasses);
   $trThursday.append($tdThursdayDay, $tdThursdayClasses);
   $trFriday.append($tdFridayDay, $tdFridayClasses);
 
   // Append the tr elements to the tbody
   $tbody.append($trMonday, $trTuesday, $trWednesday, $trThursday, $trFriday);
 
   // Append the tbody inside the table
   $table.append($tbody);
 
   // Insert the h5 element before the table
   $h5.insertBefore($table);
 
   // Append the table to the container div
   $('#container').append($h5, $table);


    // Year 5 --------------------------------------------------------------------------------------------->

    // Break your wand! Remove the element that contains your wand
   $h4Wand.remove();
  
    // Class was hard! Drink all your butter beer! Remove the butter beer from the list
   $('li:contains("Butter Beer")').remove();
  
   // Get a new wand. Add the same element back with new text describing your new wand
   let $newWand = $('<h4>').text('Elder Wand With Phoenix Feather Core');
   $h4Pet.after($newWand); // Be sure to insert it after your pet in the DOM
  
   // Make your new wand stand out by adding a color of indigo (or whatever color you like). But do it with magic (jQuery): Don't add this css in your main.css file
   $newWand.css('color', 'indigo');
  
   // Send your pet on a spy mission. Remove your pet from the DOM and put it somewhere else in your HTML
   let $pet = $('.' + petClass);
   $pet.detach();
   $('#spy-mission').append($pet);
  
   // Have your pet come back. Remove your pet from its current location and put it back in its original location
   $pet.detach();
   $container.append($pet);

    // Year 6 --------------------------------------------------------------------------------------------->
      
        // Hide all your belongings with a class of 'secret'
        $('.secret').hide('slow');
        
        // Delay showing your secret elements to simulate roommate falling asleep + Use jQuery method show to reveal all of your belongings with a class of secret (give an argument of 'slow' - to see this function in action)
        $('.secret').delay(2000).show('slow');
        
        // Transmogrify your pet's leash into half cabbage by adding the class 'cabbage'
        $li5.addClass('cabbage');
        
        // Fix your pet's leash by removing the class 'cabbage'
        $li5.removeClass('cabbage');

    // Year 7 --------------------------------------------------------------------------------------------->
      
        // Update your class schedule to read 'Fall 2018'
        $('h5').text('Fall 2018');
      
        // Append a list item with the text 'Butter beer' as the first item in the unordered list
        $ul.prepend($('<li>').text('Butter beer'));
      
        // Replace the unordered list's attribute value of 'trunk' with 'chest'
        $ul.attr('storage', 'chest');

  });