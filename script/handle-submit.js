import toCommaSeparatedString from "./to-comma-separated-string";

/**
 * Called by event listener.
 * Update query based on form and redirect page with JS.
 */
export default (element) => (e) => {
    // Prevent default page transition.
    e.preventDefault();

    // get form data in comma separated list.
    const formData = Array.from(element.querySelectorAll(".js-form-input"))
        .map((item) => item.value)
        .filter((a) => a)
        .reduce(toCommaSeparatedString, "");

    // Update URL.
    const query = formData
        ? `?active-main-filters=${formData}&active-sub-filters=`
        : "";
    window.location = `${e.target.action}${query}`;
};
