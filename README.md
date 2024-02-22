<div align="center">
<img src="https://grow.empress.eco/uploads/default/original/2X/1/1f1e1044d3864269d2a613577edb9763890422ab.png" alt="Empress Chat" width="80" height="80">
<h1>Empress Chat: Seamless Team Communication</h1>
<p>Streamline your team collaboration with effortless message sharing, file transfers, and more!</p>

<a href="https://empress.eco/">Explore the App</a>
·
<a href="https://github.com/empress-eco/chat/issues">Report Bug</a>
·
<a href="https://github.com/empress-eco/chat/issues">Request Feature</a>
</div>

## About The Project
Empress Chat is a comprehensive messaging tool tailored for teams that prioritize efficient and streamlined communication. The app allows users to create channels, share messages, transfer files, and more, all conveniently accessible via desktop and mobile devices.

### Key Features
- **Channels**: Public and private channels for team communication.
- **Messaging**: Supports text, code blocks, emojis, file, and image sharing.
- **Mentions**: Tag individuals in messages for direct communication.
- **Reactions**: Express responses with emojis.
- **File Previews**: Inline viewing of images and PDFs.
- **Comprehensive Search**: Quickly find messages, files, channels, and members.
- **Dark Mode**: For comfortable use in low-light conditions.
- **Mobile App**: Keep in touch while on the move.

### Technical Stack
Empress Chat leverages the power of robust technologies:
- Backend: Python, Redis, MariaDB, and Socket.io
- Frontend: React, RadixUI, react-icons, Tiptap, and Tailwind CSS
- Mobile: Ionic, Tailwind CSS, and Capacitor

## Getting Started

### Prerequisites
Empress Chat can be installed using bench on your local machine or your production site.

### Installation
Set up your bench and site, then install the app using these commands:

```bash
git clone https://github.com/empress-eco/chat.git
bench --site yoursite.name install-app raven
```
Your Empress Chat can be accessed at the /raven endpoint on your site (https://yoursite.com/raven).

## Usage

For local development setup, enable developer mode in your site config. Disable CSRF and allow CORS in your site_config.json.

Start the React live web server:

```bash
cd Empress-bench/apps/raven
yarn dev
```

You can run the mobile app on your browser:

```bash
cd Empress-bench/apps/raven/mobile
yarn install
yarn dev
```

## Contributing
We welcome contributions! Here's how you can contribute:

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License and Acknowledgements
This project is under the MIT License. Your contributions are also licensed under the MIT License.

Special thanks to the Empress Community for their foundational contributions. Their innovation and dedication have been instrumental in building the foundations and functionalities we rely on. We are profoundly grateful for their pioneering work and ongoing support.