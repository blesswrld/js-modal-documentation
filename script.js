import modal from './modules/modal';
import {openModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', function() {

    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 50000);

    modal('[data-modal]', '.modal', modalTimerId);
});
