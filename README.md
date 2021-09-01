# Erfgoedkit.nl Widget

## How to add the widget to your website

### 1. Add an HTML element

Add an HTML element with the data attribute `data-container="nde-widget"` to the
desired location on the page.

#### Example

```html
<div data-container="nde-widget"></div>
```

You can place this element wherever you like. The widget will place itself inside this element. No need to set any size attributes, the widget will ensure it fits inside the given box.

It's also possible to add multiple widgets on the same page.

### 2. Include the styles in your head

#### Example

```html
<link rel="stylesheet" href="https://widget.erfgoedkit.nl/v2.0.1/style.css" />
```

### 3. Include the script in your body

#### Example

```js
<script src="https://widget.erfgoedkit.nl/v2.0.1/script.js"></script>
```

This script will insert the Widget inside the desired element.

## Contact or bugs

For question or bug-reports you can create a new issue.

## Contribute

Configure the URL to the API:

```shell
cp .env.example .env
```

Start the build server:

```shell
yarn dev

# Output:
# Server running at https://localhost:1234
```

Open the provided url in your browser.
