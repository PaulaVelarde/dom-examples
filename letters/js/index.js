/**
 * Chapter 3 - DOM.
 * Green Store.
 *
 */

// 1. Change the title to 'Verduleria de Centro'
var titleElement = document.getElementById('title');

// 2. Fix the name of the orange
var allDivs = document.getElementsByTagName('div');
var nameOrange = allDivs[13];
nameOrange.innerHTML = 'Orange';

// 3. Change the source of the orange image to 'img/orange2.jpg'
var images = document.getElementsByTagName('img');

var orangeImage = images[3];
orangeImage.setAttribute('src', 'img/orange2.jpg');

// 4. Change the color of background of each vegetable

// 5. Add 10% of discount to each fruit

// 6. Show the prices with the discounts

// 7. Add a new product

// 8. Delete the orange product
