# ichabod

headless react components

## styles

generated tailwindcss classes are provided if desired

`npx ichabod classes` will write a top-level `classes.js` file that contains classes for all ichabod components. You can bring that file into `src/` and tailwindcss will detect it and include the class styles. In the future I would like to support user-supplied `theme.js` files, but for now I'm still trying to discover the appropriate theme-based abstractions.
