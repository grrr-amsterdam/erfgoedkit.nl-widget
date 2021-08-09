// Polyfills
import "./polyfill/array-from";

// Modules
import createForm from "./create-form";
import handleSubmit from "./handle-submit";
import getData from "./get-data";

/**
 * Container-query.
 * Called by eventListener
 * Update attribute based on element size.
 */
const handleResize = (element) => () => {
    const { width } = element.getBoundingClientRect();
    const isLargerSize = width > 400;
    element.setAttribute("data-larger-size", isLargerSize);
};

/**
 * Create a widget for each widgetContainer.
 */
const createWidgets = (widgetContainers) => ({
    instruments_url,
    werkterrein,
    onderwerp,
}) => {
    widgetContainers.forEach((container) => {
        // Create and append form
        const form = createForm(instruments_url, werkterrein, onderwerp);
        form.addEventListener("submit", handleSubmit(form));
        container.appendChild(form);

        // Setup window event listeners
        window.addEventListener("resize", handleResize(container));
        window.addEventListener("orientationchange", handleResize(container));
        handleResize(container)();
    });
};

(() => {
    // Get all widget container
    const widgetContainers = Array.from(
        document.querySelectorAll('[data-container="nde-widget"]')
    );

    getData()
        .then(createWidgets(widgetContainers))
        .catch((err) => {});
})();
