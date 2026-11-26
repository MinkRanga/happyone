# happyone ♡

A standalone, one-page first-anniversary website built with plain HTML, CSS and JavaScript. This project is independent of the original TwentySeven website and can be published as its own GitHub repository.

## Preview locally
Open `index.html` in a browser, or use VS Code Live Server.

## Add your 12 photos
Put your photos in `assets/photos/` named `month-01.jpg` through `month-12.jpg`. Update the matching `photo` path in `script.js` if you use PNG or WebP instead.

## Add your song
Put your audio file at `assets/audio/our-song.mp3`. The music button starts playback after a click because browsers generally block autoplay.

## Personalise the site
- Edit the `memories` array in `script.js` for each month's heading, caption, date and photo.
- Edit the `reasons` array in `script.js` with your own reasons.
- Edit the text inside `#letterBody` in `index.html` for your letter.

## Publish as a new GitHub repository
1. Create a new empty GitHub repository (for example, `happyone`).
2. Put the contents of this folder into that repository.
3. Push to the new repository's `main` branch.
4. In **Settings → Pages**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.

Your site will be at `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`.
