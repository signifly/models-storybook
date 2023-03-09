# Models Storybook

Style guide made on Storybook for Models.com. A compressed style file is hosted on GitHub through jsDelivr and can be fetched as CDN so it is used by the client.
<br><br>
## Tech Stack

Storybook, Chromatic, SCSS
<br><br>
## Run Locally

Install dependencies with npm

```bash
  npm i
```

Run the storybook script

```bash
  npm run storybook
```
<br><br>
## Deployment
Before pushing a change to any branch, the SCSS files need to be compiled to both a CSS file and a compressed CSS file.

To do this, run:
```bash
  npm run sass
```
Make sure you push these updated files along with your changes to the `main` branch.

When a commit gets pushed to the `main` branch, a GitHub action gets triggered in order to publish the changes to Chromatic and review the visual changes. This is where the client reviews the Storybook as well.

GitHub action setup file: `.github/workflows/chromatic.yml`
<br><br>
## Authors

#### Lead Developer

- [@hugh-hmiranda](https://www.github.com/hugh-miranda)
