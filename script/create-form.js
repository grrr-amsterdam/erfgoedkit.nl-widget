/**
 * Creates an option element with the correct data
 */
const createOption = ({ label, slug }) =>
    `<option value="${slug}">${label}</option>`;

/**
 * Helper to go from array of elements to string of elements.
 */
const toString = (accumulator, item) => `${accumulator} ${item}`;

/**
 * Creates the form section with label and option.
 */
const createFormSection = ({ items, label, slug }) => {
    const optionList = Object.values(items).map(createOption).reduce(toString);

    return `
<div class="erfgoedkit-widget__form-item">
    <label class="erfgoedkit-widget__label" for="${slug}">${label}</label>
    <select class="erfgoedkit-widget__input js-form-input" name="subject" id="${slug}">
        <option value="">Kies een ${label.toLowerCase()}</option>
        ${optionList}
    </select>
    <span class="erfgoedkit-widget__input-icon" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><path stroke="currentColor" stroke-width="2" d="M4 1l6 6-6 6" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
</div>`;
};

/**
 * Create the widget (form)
 */
export default (url, domain, subject) => {
    // Create form sections
    const domainSection = createFormSection(domain);
    const subjectSection = createFormSection(subject);

    // Create form element.
    // This is done with the createElement method so it's easy to connect a listener
    // and other properties/listeners to the element.
    const form = document.createElement("form");
    form.setAttribute("action", url);
    form.method = "get";
    form.classList.add("erfgoedkit-widget");

    // Create the form inner HTML.
    const formInner = `<div>
    <div class="erfgoedkit-widget__header">
        <h2 class="erfgoedkit-widget__title">
            <span class="erfgoedkit-widget__sr-only">Erfgoedkit</span>
            <svg class="erfgoedkit-widget__img" aria-hidden="true" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 170 38" xml:space="preserve"><style>.st0{fill:currentColor}</style><path transform="rotate(-45.001 28.19 28.216)" class="st0" d="M26.89 22.35h2.61v11.73h-2.61z"></path><path transform="rotate(-45.001 9.612 9.638)" class="st0" d="M8.31 3.77h2.61V15.5H8.31z"></path><path transform="rotate(-67.492 23.929 6.79)" class="st0" d="M18.06 5.49h11.73V8.1H18.06z"></path><path transform="rotate(-67.492 13.874 31.065)" class="st0" d="M8.01 29.76h11.73v2.61H8.01z"></path><path class="st0" d="M17.6 26.2h2.61v11.73H17.6zM17.6-.08h2.61v11.73H17.6z"></path><path transform="rotate(-22.5 23.928 31.063)" class="st0" d="M22.62 25.2h2.61v11.73h-2.61z"></path><path transform="rotate(-22.5 13.873 6.79)" class="st0" d="M12.57.92h2.61v11.73h-2.61z"></path><path transform="rotate(-67.5 6.764 13.9)" class="st0" d="M5.46 8.03h2.61v11.73H5.46z"></path><path transform="rotate(-22.5 31.037 13.9)" class="st0" d="M25.17 12.6H36.9v2.61H25.17z"></path><path transform="rotate(-22.5 6.764 23.953)" class="st0" d="M.9 22.65h11.73v2.61H.9z"></path><path transform="rotate(-45.001 28.189 9.638)" class="st0" d="M22.32 8.33h11.73v2.61H22.32z"></path><path transform="rotate(-45.001 9.612 28.216)" class="st0" d="M3.75 26.91h11.73v2.61H3.75z"></path><path class="st0" d="M51.99 12.53c-1.06-.57-2.25-.86-3.59-.86-1.39 0-2.61.3-3.67.89a6.23 6.23 0 00-2.48 2.53c-.41.76-.68 1.61-.8 2.54H-.1v2.61h41.55c.13.91.4 1.73.81 2.48.6 1.1 1.44 1.95 2.51 2.55 1.07.6 2.28.9 3.64.9 1.67 0 3.08-.43 4.23-1.31 1.15-.87 1.93-1.98 2.33-3.33h-3.83c-.56 1.13-1.5 1.7-2.81 1.7-.91 0-1.68-.29-2.31-.86-.63-.57-.98-1.37-1.06-2.38h10.26c.07-.41.1-.86.1-1.37 0-1.37-.29-2.58-.87-3.64a5.987 5.987 0 00-2.46-2.45zm-7.01 5.06c.14-.95.5-1.69 1.1-2.22.6-.53 1.34-.8 2.22-.8.93 0 1.71.27 2.36.82.64.55.97 1.28.99 2.19h-6.67zM61.2 14.07v-2.18h-3.55v14.04h3.55v-6.99c0-1.3.28-2.21.85-2.74.57-.52 1.41-.79 2.52-.79h.94v-3.73c-.95 0-1.79.21-2.52.63-.74.44-1.33 1.02-1.79 1.76zM71.62 11.31c0-.79.17-1.34.51-1.65.34-.3.94-.45 1.8-.43V6.24c-1.98-.05-3.46.33-4.44 1.14-.98.81-1.47 2.08-1.47 3.8v.71h-1.6v2.91h1.6v11.13h3.6V14.81h2.46V11.9h-2.46v-.59zM86.27 13.89c-.46-.66-1.08-1.2-1.88-1.61-.79-.41-1.72-.62-2.76-.62-1.2 0-2.29.3-3.26.89-.97.59-1.74 1.44-2.31 2.53-.57 1.1-.85 2.36-.85 3.78 0 1.44.28 2.71.85 3.81.57 1.11 1.34 1.96 2.32 2.57.98.61 2.06.91 3.24.91 1.03 0 1.95-.22 2.75-.66.8-.44 1.43-.99 1.89-1.65v2.18c0 1.25-.32 2.18-.96 2.8-.64.62-1.48.93-2.51.93-.88 0-1.63-.19-2.24-.57-.62-.38-1.02-.89-1.2-1.53h-3.52c.17 1.6.89 2.87 2.17 3.8 1.28.93 2.91 1.39 4.9 1.39 1.49 0 2.75-.3 3.8-.9 1.05-.6 1.83-1.41 2.36-2.43.52-1.02.79-2.18.79-3.48V11.89h-3.57v2zm-.51 7.24c-.34.62-.79 1.09-1.37 1.42-.57.33-1.19.49-1.85.49-.64 0-1.25-.17-1.81-.51-.57-.34-1.02-.82-1.37-1.46-.35-.63-.52-1.37-.52-2.22 0-.84.17-1.58.52-2.19.35-.62.8-1.09 1.36-1.41.56-.32 1.17-.48 1.82-.48s1.28.16 1.85.49c.57.33 1.03.8 1.37 1.42.34.62.51 1.36.51 2.22s-.17 1.61-.51 2.23zM103.07 12.56c-1.1-.6-2.32-.9-3.67-.9s-2.58.3-3.67.9c-1.1.6-1.96 1.45-2.6 2.55-.63 1.1-.95 2.37-.95 3.8 0 1.44.31 2.7.93 3.8.62 1.1 1.47 1.95 2.55 2.55 1.08.6 2.3.9 3.65.9 1.37 0 2.61-.3 3.71-.9 1.11-.6 1.99-1.45 2.64-2.55.65-1.1.98-2.37.98-3.8 0-1.44-.32-2.7-.95-3.8-.66-1.1-1.52-1.95-2.62-2.55zm-.61 8.63c-.34.63-.79 1.09-1.36 1.41-.57.31-1.17.47-1.81.47-1.01 0-1.85-.36-2.52-1.08-.67-.72-1-1.74-1-3.08 0-1.33.34-2.36 1.03-3.08.68-.72 1.53-1.08 2.55-1.08s1.87.36 2.57 1.08c.7.72 1.05 1.74 1.05 3.08 0 .9-.17 1.66-.51 2.28zM118.69 12.53c-1.06-.57-2.25-.86-3.59-.86-1.39 0-2.61.3-3.67.89a6.23 6.23 0 00-2.48 2.53c-.59 1.1-.89 2.37-.89 3.83 0 1.44.3 2.7.9 3.8.6 1.1 1.44 1.95 2.51 2.55 1.07.6 2.28.9 3.64.9 1.67 0 3.08-.43 4.23-1.31 1.15-.87 1.93-1.98 2.33-3.33h-3.83c-.56 1.13-1.5 1.7-2.81 1.7-.91 0-1.68-.29-2.31-.86-.63-.57-.98-1.37-1.06-2.38h10.26c.07-.41.1-.86.1-1.37 0-1.37-.29-2.58-.87-3.64a5.987 5.987 0 00-2.46-2.45zm-7 5.06c.14-.95.5-1.69 1.1-2.22.6-.53 1.34-.8 2.22-.8.93 0 1.71.27 2.36.82.64.55.97 1.28.99 2.19h-6.67zM134.47 13.84c-.49-.66-1.15-1.19-1.98-1.58-.83-.4-1.7-.6-2.61-.6-1.2 0-2.29.3-3.27.89-.98.59-1.75 1.44-2.32 2.53-.57 1.1-.85 2.36-.85 3.78 0 1.44.28 2.71.85 3.81.57 1.11 1.34 1.96 2.32 2.57.98.61 2.06.91 3.24.91 1.05 0 1.97-.21 2.76-.63.79-.42 1.41-.98 1.85-1.67v2.08h3.6V7.18h-3.6v6.66zm-.48 7.29c-.34.62-.79 1.09-1.37 1.42-.57.33-1.19.49-1.85.49-.64 0-1.25-.17-1.81-.51-.57-.34-1.02-.82-1.37-1.46-.35-.63-.52-1.37-.52-2.22 0-.84.17-1.58.52-2.19.35-.62.8-1.09 1.36-1.41.56-.32 1.17-.48 1.82-.48s1.28.16 1.85.49c.57.33 1.03.8 1.37 1.42.34.62.51 1.36.51 2.22s-.17 1.61-.51 2.23zM154.16 11.89h-4.61l-4.72 5.96V7.18h-3.54v18.75h3.54v-5.98l4.77 5.98h4.61l-6.23-6.99zM155.83 11.89h3.55v14.04h-3.55zM157.63 6.06c-.63 0-1.14.2-1.56.6-.41.4-.62.89-.62 1.48s.21 1.09.62 1.48c.41.4.93.6 1.56.6.62 0 1.14-.2 1.56-.6.41-.4.62-.89.62-1.48s-.21-1.09-.62-1.48c-.41-.4-.93-.6-1.56-.6zM169.9 14.81V11.9h-3.14V8.42h-3.57v3.47h-1.67v2.91h1.67v6.77c0 2.91 1.5 4.36 4.49 4.36h2.23v-2.99h-1.65c-.54 0-.93-.11-1.15-.32-.23-.21-.34-.55-.34-1.03V14.8h3.13z"></path></svg>
        </h2>
        <p class="erfgoedkit-widget__sub-title">De toolbox voor digitaal erfgoed</p>
    </div>

    <div class="erfgoedkit-widget__form-inner">
        ${domainSection}
        ${subjectSection}

        <button class="erfgoedkit-widget__submit" type="submit">Bekijk de hulpmiddelen</button>
    </div>
</div>`;

    // Combine and return the form.
    form.innerHTML = formInner;
    return form;
};
