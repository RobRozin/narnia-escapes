# Newsletter Google Sheet Setup

This site now posts newsletter signups to a Google Apps Script web app. The flow is:

1. Visitor submits email in the modal.
2. `js/app.js` sends the payload to `window.NARNIA_CONFIG.newsletterEndpoint`.
3. The Apps Script app appends the email to a `Newsletter` tab in the bound Google Sheet.

## 1. Create the sheet

Create or open the Google Sheet that should store newsletter signups.

Recommended columns in row 1:

- `subscribed_at`
- `email`
- `source`
- `page`
- `user_agent`

The script below will create that tab and header row automatically if it does not exist.

## 2. Add the Apps Script

In the Google Sheet:

1. Open `Extensions -> Apps Script`.
2. Replace the default script with the contents of [newsletter-signup.gs](/Users/robertrozin/Developer/Narnia Escapes/narnia-escapes/scripts/newsletter-signup.gs).
3. Save the project.

## 3. Deploy the web app

1. Click `Deploy -> New deployment`.
2. Choose `Web app`.
3. Set `Execute as` to your account.
4. Set `Who has access` to `Anyone`.
5. Deploy and copy the web app URL.

## 4. Add the endpoint to the site

Edit [index.html](/Users/robertrozin/Developer/Narnia Escapes/narnia-escapes/index.html) and set the inline config value:

```html
<script>
  window.NARNIA_CONFIG = {
    newsletterEndpoint: "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL",
  };
</script>
```

The app currently initializes `window.NARNIA_CONFIG` if it is missing, so replacing that stub is sufficient.

## 5. Test

1. Open the site.
2. Scroll far enough to trigger the newsletter modal.
3. Submit a test email.
4. Confirm a new row appears in the `Newsletter` tab.

If submission fails, the modal will show the returned error message.
