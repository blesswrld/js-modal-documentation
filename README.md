
# JavaScript Modal Documentation 🗝️

The **JavaScript Modal Module** provides a fully customizable modal window component that can be triggered by clicking buttons or reaching the bottom of the page. This module allows you to easily add modals to your project with the option for auto-triggering based on user scrolling.

---

## Key Features

1. **Open/Close Modals**: Easily trigger modal popups with the ability to close them by clicking outside or pressing `Escape`. <br>
2. **Scroll Trigger**: Modals can automatically appear when the user reaches the bottom of the page. <br>
3. **Customizable Trigger**: Trigger modals with any elements (e.g., buttons). <br>
4. **Timer Support**: Allows the option to trigger modals after a certain amount of time. <br>
5. **CSS-Driven Transitions**: Includes smooth transitions for modal opening and closing. <br>

---

## Installation

To get started, clone the repository:

```bash
git clone https://github.com/yourusername/js-modal-module.git
```

Or download the `modal.js` file and include it in your project.

---

## Quick Start

### Example HTML Structure

Ensure your modal follows this structure:

```html
<!-- Trigger Button -->
<button data-modal>Open Modal</button>

<!-- Modal Window -->
<div class="modal hide">
    <div class="modal-content">
        <span class="modal-close" data-close>&times;</span>
        <p>Your content goes here</p>
    </div>
</div>
```

---

### JavaScript Initialization

Initialize the modal by importing the `modal.js` module and passing the required selectors:

```javascript
import modal from './modules/modal.js';

const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 50000); // Optional: Auto-open after 50s

modal('[data-modal]', '.modal', modalTimerId);
```

---

## Usage Example

Here’s an example of how the modal works:

- **Open Modal**: Click the trigger button to open the modal.
- **Close Modal**: Click the close button or anywhere outside the modal to close it.
- **Escape Key**: Press the `Escape` key to close the modal.
- **Auto-Trigger on Scroll**: Modal opens when the user scrolls to the bottom of the page.
- **Custom Timer**: You can specify a timer to open the modal after a delay.

```javascript
// Opening the modal when clicking on the trigger
function openModal(modalSelector, modalTimerId) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
    
    console.log(modalTimerId);
    if (modalTimerId) {
        clearInterval(modalTimerId);
    }
}

// Closing the modal
function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

// Modal module function to handle open/close logic
function modal(triggerSelector, modalSelector, modalTimerId) {
    const modalTrigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector);

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', () => openModal(modalSelector, modalTimerId));
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == "") {
            closeModal(modalSelector);
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) {
            closeModal(modalSelector);
        }
    });

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal(modalSelector, modalTimerId);
            window.removeEventListener('scroll', showModalByScroll);
        }
    }
    window.addEventListener('scroll', showModalByScroll);
}
```

---

## Supported Features

The JavaScript Modal Module supports:

- **Custom Triggers**: Use any element (like buttons or images) to trigger modals.
- **Auto-Trigger with Timer**: Set a delay to auto-open modals.
- **Scroll-triggered Modals**: Modals open automatically when the user reaches the bottom of the page.
- **Escape Key & Close Button**: Modal can be closed with both the `Escape` key and the close button.

---

## License

This project is licensed under the **MIT License**—you are free to use, modify, and distribute it.
