# JD Sports Clone

An Ecommerce website based on the popular apparel E-commerce website https://www.jdsports.co.uk/

> Disclaimer: This is a practice project for educational purposes and not for commercial use.

I decided not to create a user domain so anyone accessing this project do not worry about signing up.

---

## Successful Payments (Stripe test cards)

- Visa: 4242 4242 4242 4242
- Mastercard: 5555 5555 5555 4444
- American Express: 3782 822463 10005
- Discover: 6011 1111 1111 1117

## Declined / Error Payments (Stripe test cards)

- Insufficient funds: 4000 0000 0000 9995
- Expired card: 4000 0000 0000 0069
- Incorrect CVC: 4000 0000 0000 0127

You can use any future expiration date (e.g., 12/34) and any three-digit CVC (four-digit for Amex).

---

## Tech Stack / Features

- React 18 (Create React App)
- Context API for local state (cart, products, UI toggles)
- Stripe (Elements + server-side PaymentIntent) for payments
- Firebase Firestore for product storage
- Netlify serverless functions (optional) for creating Stripe PaymentIntents
- CSS / SCSS for styles

> Data from ChatGPT and images referenced from JD Sports.

---

## Overview — what this app does

This is a client-side React storefront that displays product categories and product detail pages, lets a visitor add items to a cart, view and edit the cart, and pay using Stripe. There is no user authentication — all visitors interact as guests. Product data is fetched from Firestore (collection `products`) and rendered in category and product pages. The checkout flow collects card details using Stripe Elements and confirms a PaymentIntent returned by a serverless endpoint.


## Routing (routes implemented)

The app uses react-router-dom v6 and the main routes (see src/App.jsx) are:

- / — Home (Navigation wrapper)
- /men/* — Men category routes (src/Categories/Category-men/*)
- /women/* — Women category routes (src/Categories/Category-women/*)
- /kids/* — Kids category routes (src/Categories/Category-Kids/*)
- /brands/* — Brands routes (src/Categories/Category-brands/*)
- /accessories/* — Accessories routes (src/Categories/Category-accessories/*)
- /productView — Product detail page (src/ProductView.jsx) — expects URL search param `?product=<id>`
- /Checkout — Checkout page (src/Checkout.jsx)
- /BlogsRoute — Blogs listing (src/BlogsPage.jsx)
- /SearchResultPage — Search results (src/SearchResultPage.jsx)
- /* — PageNotFound (src/PageNotFound.jsx)

Navigation is provided by src/Navigation.jsx which renders header, search form, and category links. The app root mounts Context providers and Stripe Elements in src/index.js.

---

## Databases & data flow

- Firestore is used to store product data. The Firebase client is initialized in src/Utilities/cloudfile.js with a firebaseConfig object. The helper getAllProductsFromCloud() queries the `products` collection and returns documents as an array.
- There is a helper function writeToDataBase() (commented out) that writes a local `category` payload (src/assets/products/categories) into the `products` collection.

Files to inspect for DB usage:
- src/Utilities/cloudfile.js — Firebase initialization, getAllProductsFromCloud, writeToDataBase
- src/ProductView.jsx — calls getAllProductsFromCloud and finds product by id

Note: The repo includes a firebase configuration object in source; if you plan to publish or share, consider moving keys into env variables and restricting access in the Firebase console.

---

## Payment structure

Payment flow components:

- Frontend: src/components/Stripe-payment/stripe.components.jsx
  - Uses @stripe/react-stripe-js and a CardElement to collect card details.
  - Calls a serverless endpoint to create a PaymentIntent (amount calculated from cart total).
  - Confirms the PaymentIntent client-side using stripe.confirmCardPayment(client_secret,...).

- Server-side / serverless: two copies of a create-payment-intent function exist (both perform the same role):
  - netlify/functions/create-payment-intent.js — Netlify function that reads STRIPE_SECRET_KEY from environment and creates a paymentIntent using stripe.paymentIntents.create.
  - api/stripe/create-payment-intent.js — another server-side handler in api/stripe/ (uses process.env.STRIPE_SECRET_KEY).

Frontend endpoint used: the Stripe component fetches POST "/.netlify/functions/create-payment-intent" (see src/components/Stripe-payment/stripe.components.jsx). That path maps to the netlify function when deployed to Netlify.

Environment variables (see .env.example):
- STRIPE_SECRET_KEY — server-side secret key (keep private)
- REACT_APP_STRIPE_PUBLIC_KEY or REACT_APP_STRIPE_PUBLISHABLE_KEY — publishable key used by loadStripe on the frontend (note: src/index.js reads process.env.REACT_APP_STRIPE_PUBLIC_KEY).
- Optional Firebase config values (REACT_APP_FIREBASE_...)

Important: ensure the publishable key env name you set matches the reference in src/index.js (REACT_APP_STRIPE_PUBLIC_KEY) or update the code to match `.env` naming.

---

## File structure (top-level and key files)

```
.codesandbox/         # sandbox config (if present)
.env.example          # example environment variables
.gitignore
README.md
api/                  # alternative server handlers (api/stripe/...)
build/                # build output
netlify/              # netlify config and serverless functions
  functions/
    create-payment-intent.js   # serverless function used by frontend
package.json
package-lock.json
public/               # CRA public assets (index.html, images)
src/                  # application source
  App.jsx             # main routes
  index.js            # mounts providers & Stripe Elements
  styles.css          # app-wide styles
  Navigation.jsx      # header/navigation + Outlet wrapper
  Home.jsx
  Checkout.jsx        # cart and checkout UI
  ProductView.jsx     # product detail page
  Products.jsx        # local product/category list (sample)
  Categories/         # category route components
  Contexts/           # React Context providers (Cart, Products)
  components/         # UI components (Stripe payment, cart, lists...)
  Utilities/          # helpers (cloudfile.js, redirection, scrollToTop...)
  assets/             # images and local product data
```

**How it fits together**
- src/index.js wraps App with UserProvider and ProductContextProvider and Stripe Elements.
- App.jsx defines routing; Navigation renders the header and Outlet.
- Product data is fetched from Firestore by cloudfile.js; components read product data through ProductLiteralContext.
- Checkout/Stripe collect payment, call the create-payment-intent serverless function, and confirm the payment via Stripe JS.

---

## How to run (short path)

1. Clone the repo
2. Install dependencies

```bash
npm install
```

3. Create a .env file (or set env vars); use .env.example as reference. Required (example):
- STRIPE_SECRET_KEY (server only)
- REACT_APP_STRIPE_PUBLIC_KEY (frontend publishable key) — or update src/index.js to use REACT_APP_STRIPE_PUBLISHABLE_KEY if you prefer that name
- Optional: REACT_APP_FIREBASE_* (if you want to use the included Firestore project)

4. Run locally

```bash
npm start
```

5. Build for production

```bash
npm run build
```

Notes for payments locally: when running on Netlify dev or deployed to Netlify, the frontend POST to "/.netlify/functions/create-payment-intent" will be routed to netlify/functions/create-payment-intent.js. For local testing you can run the Netlify CLI (netlify dev) or adapt the frontend to call a local server that creates PaymentIntents using your STRIPE_SECRET_KEY.

---

## Deployment notes

- The project includes a Netlify serverless function and a netlify/ directory — this repo appears set up for deployment to Netlify. The frontend also contains Firebase config and was previously deployed to Firebase hosting by the author.
- When deploying, ensure you set STRIPE_SECRET_KEY in the server environment variables (Netlify's dashboard if using Netlify), and the frontend publishable key in your hosting environment variables.

---

## Security & cleanup suggestions

- Move Firebase API keys and any secret configuration to environment variables (the firebaseConfig object is currently in source).
- Ensure only publishable keys are embedded in the frontend; secrets must remain server-side.

---

## License / Acknowledgements

This is a practice project created for learning and demonstration. Images are referenced from JD Sports and some content was assisted by ChatGPT.
