# Second Spin — starter website

**Tagline:** Share the Gear. Spread the Joy.

This is a responsive, static website starter for a community-led skating-equipment donation initiative. It is written in plain HTML, CSS and JavaScript, so no build tools or paid software are required.

## What's included

- `index.html` — home page and all main sections
- `styles.css` — responsive styling and accessible layouts
- `script.js` — mobile navigation, sample-listing search/filter, and local-only form previews
- `favicon.svg` — simple brand mark
- `.nojekyll` — tells GitHub Pages not to run Jekyll processing

## Important: what works now and what doesn't

The site is a working front-end prototype. Search/filter operates on clearly labelled **sample listings**. Donation and request forms validate the fields and create a preview in the browser; they **do not send, upload, or store any submission**. There is no shared inventory, account system, moderation dashboard, email notification, or database yet.

Before inviting the public to submit real donations or requests:
1. Create separate Google Forms (or another trusted form service) for donation listings and equipment requests.
2. Configure access to the response spreadsheet so only approved coordinators can see contact details.
3. Replace the demo form blocks with clearly labelled links or embedded forms from the provider.
4. Remove the sample listings and display only reviewed, available items.
5. Add a project contact email and publish a privacy notice that identifies the actual form provider, the information collected, purpose, access, retention and deletion/contact process.
6. Test the whole workflow on a phone and desktop before sharing publicly.

Do not add real phone numbers, private addresses, children's names, photos, or donor contact information to this public code repository.

## Preview on your computer

1. Download and unzip `second-spin-website.zip`.
2. Open `index.html` in a current browser.
3. Try the navigation, sample listing filters, and form previews.

No installation is required.

## Publish free using GitHub Pages

GitHub Pages can publish static HTML/CSS/JavaScript from a repository. With GitHub Free, the repository must be public for this hosting method. Anything committed to the repository is public, so do not put personal data, API keys, private contact details, or form response data in it.

1. Create or sign in to a GitHub account at https://github.com/.
2. Select **New repository**. Name it `second-spin` and set it to **Public**. Do not add sensitive information.
3. Open the new repository and select **Add file → Upload files**.
4. Unzip this package on your computer, then upload the *contents* of the `second-spin-website` folder (not just the ZIP). Ensure `index.html` is at the repository root.
5. Select **Commit changes**.
6. In the repository, open **Settings → Pages**.
7. Under the build/publishing source, select **Deploy from a branch**. Choose branch `main` and folder `/(root)`, then save.
8. Wait for the deployment to finish. Return to **Settings → Pages** and use the displayed **Visit site** link. A project site normally uses the pattern `https://YOUR-USERNAME.github.io/second-spin/`; use the actual URL GitHub displays.
9. If you update the website later, upload/commit the updated files. Allow a few minutes for publication.

Official instructions:
- What GitHub Pages is: https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages
- Create a GitHub Pages site: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

## Zero-cost submission workflow for the pilot

Suggested low-maintenance launch:
- Use Google Sites if you prefer a no-code editor, or keep this static design on GitHub Pages.
- Create a Google Form named **Second Spin — Donate Equipment** and another named **Second Spin — Request Equipment**.
- Ask only for necessary details. Do not ask for a child's full name, date of birth, school, or home address.
- In form settings, avoid collecting email addresses automatically unless genuinely needed and explained. Add a clear consent statement.
- Restrict response-sheet access to the small group of trusted coordinators. Never publish the raw response sheet.
- Link the forms from the website and manually review listings before publishing any public listing.
- Arrange handovers through a skating club/coach or another public location, with adults coordinating.

Google Forms: https://forms.google.com/
Google Sheets: https://sheets.google.com/

Free service terms and limits can change. Review the provider's current terms before launching. A custom domain usually costs extra and is not included in the ₹0 plan.

## Suggested first launch checklist

- [ ] Choose two trusted adult coordinators
- [ ] Create the donation and request forms
- [ ] Add real submission links to the website
- [ ] Remove sample cards or clearly replace them with verified listings
- [ ] Add a working project contact method
- [ ] Publish privacy and safety rules
- [ ] Test on mobile and desktop
- [ ] Ask one skating club to pilot the process
- [ ] Record completed handovers without publishing recipient identities

## Brand

- Name: **Second Spin**
- Tagline: **Share the Gear. Spread the Joy.**
- Primary forest green: `#123A32`
- Fresh lime: `#D5F1BD`
- Warm orange accent: `#F0A56B`

This is a community project starter, not legal advice or a statement that the initiative is registered as a charity. Use “community initiative” until any formal registration is completed.
