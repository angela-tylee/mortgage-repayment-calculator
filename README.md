# Frontend Mentor - Mortgage repayment calculator solution

This is a solution to the [Mortgage repayment calculator challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/mortgage-repayment-calculator-Galx1LXK73). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - Mortgage repayment calculator solution](#frontend-mentor---mortgage-repayment-calculator-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)

## Overview

### The challenge

Users should be able to:

- Input mortgage information and see monthly repayment and total repayment amounts after submitting the form
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot



### Links

- Solution URL: 
- Live Site URL: 

## My process

### Built with

- HTML / CSS / JavaScript

### What I learned

- CSS
  - style `<input>` with an additional `.input-group`(or any other name) as parent element
  - style `.input-group` when `input:focus` with `:focus-within`
    ```css
    .input-group[type="number"]:focus-within {
      border: solid 1px var(--lime);
    }

    .input-group[type="radio"]:focus-within,
    .radio-input-checked {
      border: solid 1px var(--lime);
      background: hsl(60, 81%, 94%);
    }
    ```
  - style `<input type="radio">`'s radio button with `appearance: none`, `accent-color`, `border`, `outline`
    ```css
    input[type="radio"] {
      appearance: none;
      border-radius: 50%;
      width: 16px;
      height: 16px;
      accent-color: var(--lime);
      border: 2px solid #999;
      transition: 0.2s all linear;
    }

    input[type="radio"]:checked {
      background-color: var(--lime);
      border: 3px solid hsl(60, 81%, 94%);
      outline: 2px solid var(--lime);
    }
    ```
  - remove `<input type="number">`'s default spin button 
    ```css
    /* Hide the spinner in WebKit browsers */
    input[type=number]::-webkit-outer-spin-button,
    input[type=number]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    /* Hide the spinner in Firefox */
    input[type=number] {
        -moz-appearance: textfield;
    }
    ```
  - make `<input type="radio">` single-choice by applying same attribute `name` on each to group them together.
- JavaScript
  - Do calculations and render results on page. (Use `<button>` to call the calculation function directly)
    ```js
    document.querySelector('#monthly-repayment').textContent = repayment.toFixed(2);
    document.querySelector('#total-repayment').textContent = totalRepayment.toFixed(2);
    ```
  - Format numbers.
    ```js
    function formatNumber(value) {
        if (value) {
            let parts = value.split('.');
            let integerPart = parts[0];
            let decimalPart = parts[1] ? '.' + parts[1] : '';
            // Add commas to the integer part
            integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            // Combine parts and set the formatted value
            value = integerPart + decimalPart;
            return value;
        }
    };
    ```

### Continued development

- See form validation messages if any field is incomplete.
- Complete the form only using their keyboard.
- Format numbers of input fields.
