## Getting Started

Thus is a small crash course for `next.js` and `react.js` to get you started.

### Prerequisites

- React.js
- Tailwindcss

### Installation

1. Clone the repo
   ```sh
   git clone
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run the project
   ```sh
   npm run dev
   ```

# Notes

## 1. RSC : (React Server Components)

### Advantages

- Load faster - Don't have to wait for the Javascript to load
- Smaller client bundle size
- SEO friendly
- Access to resources the client can't access
- Hide sensitive data from the client
- More secure against XSS attacks
- Improved developer experience

### Disadvantages

- Not as Interactive
- No component state. We can not use `useState` hook.
- No component lifecycle methods. We can not use the `useEffect` hook.

How to convert `RSC` to `CC` ?

```js
'use client'
import {useState} from 'react';
```
and you can treat it as a normal react component.
