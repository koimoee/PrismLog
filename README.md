
![Logo](https://img.icons8.com/color/100/console.png)

# PrismLog

  <p>
    <a href="https://github.com/oneofremii/prismlog#readme" target="_blank">
      <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg?style=flat-square" />
    </a>
    <a href="https://github.com/oneofremii/prismlog/graphs/commit-activity" target="_blank">
      <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg?style=flat-square" />
    </a>
    <a href="(https://github.com/oneofremii/Welcomify/blob/main/LICENSE" target="_blank">
      <img alt="License: MIT" src="https://img.shields.io/github/license/oneofremii/prismlog?style=flat-square" />
    </a>
    <a href="https://npmjs.org/package/prismlog" target="_blank">
      <img alt="NPM Version" src="https://img.shields.io/npm/v/prismlog?style=flat-square&logo=npm" />
    </a>
    <a href="https://npmjs.org/package/prismlog" target="_blank">
      <img alt="NPM Downloads" src="https://img.shields.io/npm/dt/prismlog?style=flat-square&logo=npm">
    </a>
  </p>
</div>

Prismlog is a simple logging utility for Node.js applications, providing colorful and formatted console logs.

## Installation

```bash
npm install prismlog
```

## Usage

```javascript
const prismlog = require('prismlog'); //or const { warn, log, success, error } = require("prismlog");

prismlog.success({ name: "Deployment", description: "Deployment successful" });
prismlog.log({ name: "Server", description: "Server started on port 3000" });
prismlog.warn({ name: "Security", description: "Potential security vulnerability detected" });
prismlog.error({ name: "Database", description: "Database connection failed" });
```

## Configuration

Users can configure the behavior of the log messages by providing optional parameters:

- `showDate`: Show or hide the date in the log message. Default is `true`.

Example:

```javascript
prismlog.success({ name: "Deployment", description: "Deployment successful", showDate: false});
```
### With Date
![Sample](https://prnt.sc/Zz1lpmxC1mE8)
### Without Date
![Sample](https://prnt.sc/_SKCptopvwU9)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

Remii - [Homepage](https://fypmoon.org)
Discord - [Add Me As Friends](https://discord.com/invite/dkgSkb5M)
GitHub - [View On GitHub](https://github.com/oneofremii)