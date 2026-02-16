# Client Handover & Deployment Guide

## 1. Prepare the Code for Production
Before sending the site to the client or hosting it, you must build the "production" version. This optimizes the code and makes it ready for the web.

**Command:**
```bash
npm run build
```

**Output:**
This will create a `dist` folder in your project directory.
- **This `dist` folder IS the website.** It contains the HTML, CSS, and JavaScript files.
- You do **not** need to send the huge `node_modules` folder.

---

## 2. Hosting Options (The "Server")
Since this is a modern React website (Static Site), you don't need a complex expensive server. You have three main options to sell to your client:

### Option A: Managed Hosting (Easiest & Best Performance)
**Platforms:** [Vercel](https://vercel.com), [Netlify](https://netlify.com)
1.  Create an account on Vercel/Netlify.
2.  Drag and drop the `dist` folder (or connect your GitHub repository).
3.  **Cost:** Free for starters, or ~$20/mo for Pro (sell this as "Premium Hosting").
4.  **Handover:** You can transfer the project to the client's email later, or keep it in your account and charge them a "Monthly Maintenance Fee".

### Option B: Traditional Hosting (cPanel/GoDaddy/Namecheap)
If the client already has a "cPanel" hosting plan:
1.  Run `npm run build`.
2.  Open the File Manager in their cPanel.
3.  Upload the **contents** of the `dist` folder to `public_html`.
4.  **Note:** You might need to configure a `.htaccess` file if you use multiple pages (React Router), but for a single-page scrolling site like this, it's straightforward.

---

## 3. Domain Name (The "Address")
1.  **Buy the Domain:** Use Namecheap, GoDaddy, or Google Domains to buy `apexflowplumbing.com` (or whatever they want).
2.  **Connect to Hosting:**
    - **In Vercel/Netlify:** Go to Settings > Domains > Add Domain. Follow the instructions to add "A Records" or "CNAME" records in your domain registrar.
    - **In cPanel:** It usually works automatically if you bought the domain with the hosting.

---

## 4. The "Database" & Contact Form
Currently, your site is a **Frontend-Only** application. It serves information beautifully, but it doesn't have a "backend database" connected yet.

**To make the Contact Form work without a server:**
Use a service like **[EmailJS](https://www.emailjs.com/)** or **[Formspree](https://formspree.io/)**.
1.  Sign up for EmailJS (Free tier is usually enough for local businesses).
2.  Connect it to the `Contact.jsx` form.
3.  **Result:** When someone fills the form, the client gets an email immediately. No complex database validation needed.

**If the client specifically needs a Database (e.g., to store bookings):**
You would need to integrate a service like **Supabase** or **Firebase**. This is more advanced work. For a standard plumbing brochure site, **email notifications are usually what they actually want.**

---

## 5. Pricing & Packaging (How to Sell)

**Package 1: "Turnkey Website" ($$$)**
- You buy the domain and hosting (on your Vercel/Netlify account).
- You set up the email forwarding.
- **Client gets:** The finished live website.
- **You charge:** One-time setup fee + Monthly maintenance fee (for "hosting and updates").

**Package 2: "Code Handover" ($$)**
- You send them the `zip` file of the project.
- **Client gets:** The raw code. They have to hire someone to deploy it.
- *Not recommended for non-tech clients.*

**Deliverables for Handover:**
1.  **Source Code:** Zip up the entire folder (EXCLUDING `node_modules`).
2.  **Production Build:** Zip up the `dist` folder.
3.  **Documentation:** A simple file explaining how to update the text/images.
