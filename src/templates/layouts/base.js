import header from './../partials/header.js';
import footer from './../partials/footer.js';

export default (title, content) => `${header(title)}${content}${footer}`;
