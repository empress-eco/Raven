<div align="center">
    <a href="https://empress.eco/">
        <img src="https://avatars.githubusercontent.com/u/46308912?s=96&v=4" height="50">
    </a>
    <h2>Empress Chat</h2>
    <p align="center">
        <p>Message Effortlessly.</p>
    </p>

[https://empress.eco/app/one/](https://empress.eco/app/chat/)

</div>

---

## Welcome to Empress Chat

Empress Chat is a streamlined messaging tool for team collaboration, designed to enhance communication through the creation of channels, message sharing, file transfers, and more, accessible on both desktop and mobile platforms.

## Features

- **Channels**: Public and private channels for team communication.
- **Messaging**: Supports text, code blocks, emojis, file, and image sharing.
- **Mentions**: Tag individuals in messages for direct communication.
- **Reactions**: Express responses with emojis.
- **File Previews**: Inline viewing of images and PDFs.
- **Comprehensive Search**: Quickly find messages, files, channels, and members.
- **Dark Mode**: For comfortable use in low-light conditions.
- **Mobile App**: Keep in touch while on the move (development in progress).

## Built With

Empress Chat incorporates technologies such as Python, Redis, MariaDB, and Socket.io for backend services, and React, RadixUI, react-icons, Tiptap, and Tailwind CSS for the frontend. The mobile experience is powered by Ionic, Tailwind CSS, and Capacitor.

## Installation

Since Empress Chat can be installed using bench on your local machine or on your production site.

Once you have setup your bench and your site, you can install the app via the following commands:


```bash
bench get-app https://github.com/The-Commit-Company/Raven.git
```

```bash
bench --site yoursite.name install-app raven
```

```bash
Post this, you can access Raven on your Frappe site at the /raven endpoint (e.g. https://yoursite.com/raven).
```

## Local development setup

To set up your local development environment, make sure that you have enabled developer mode in your site config.

You also need to disable CSRF (add ignore_csrf: 1 in your site_config.json) since the React web server will not have any CSRF token in live reload mode. If you are working on the mobile app, you would also need to allow CORS (add allow_cors: "*" in your site_config.json). Please note that this is only for the local dev setup - not meant for Production.

**You can start the React live web server by:**

```bash
cd frappe-bench/apps/raven
```

```bash
yarn dev
```

Your local dev server would be running at http://localhost:8080.

You can also run the mobile app on your browser by:

```bash
cd frappe-bench/apps/raven/mobile
```

```bash
yarn install
```

```bash
yarn dev
```

## Reporting Bugs

Found a bug? Report it on GitHub Issues, with detailed information to help us fix it quickly.

## Attribution

Empress Chat was originally developed as "Raven" by contributors at The Commit Company. This project builds upon their foundational work.

## License

Empress Chat is licensed under the AGPLv3. For more information, see the license file.