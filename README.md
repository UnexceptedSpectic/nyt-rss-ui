# NYT Tech News

A single page application that ingests and displays articles from the NYT technology RSS feed.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.4.

## Features

### Requirements

- Sticky header
- Data obtained from backend API
- Responsive font sizes
- Clicking on an article title, description, or image opens the article in a new tab
- Filter displayed articles by language (`eng` / `esp`)

### Extra

- Semantic HTML
- BEM Sass
- Configurable colors in `_variablse.scss`
- Basic SEO
- A11y

### TODO

- Responsive design for tablet and mobile
- Unit and e2e tests

## Usage

### Dependencies

Install dependencies with `yarn install` or `npm install`.

### Configuration

Update the `apiUrl` variable located in `src/environment.ts` to point to the back end `articles` endpoint.

## Development

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Testing

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Deployment

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
