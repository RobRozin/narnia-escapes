# Square Appointments setup

The generic Square Appointments integration is retained as dormant source and is not registered in the active application bundle. Current retreat-date reservation links are rendered directly from `retreatDates`. The dormant integration does not store Square API keys or process cards in frontend code.

## Dashboard setup

1. In Square Dashboard, enable Square Appointments online booking.
2. Create services for:
   - Guided Retreats
   - Sauna Experience
   - Private Events
3. Configure service duration, staff, availability, capacity, and deposits in Square.
4. Copy each service-specific online booking link.
5. Paste the links into `bookingLinks` in `js/data/site-content.js`.

```js
export const bookingLinks = {
  retreat: "https://square.site/book/...",
  sauna: "https://square.site/book/...",
  event: "https://square.site/book/...",
};
```

## Runtime behavior

After restoring `createBookingLinksFeature()` in `js/app.js` and wiring service CTAs to its helpers:

- If a Square link is configured, the service CTA opens it in a new tab.
- If a Square link is missing, the CTA falls back to the contact section with the matching inquiry message.
- Square handles appointment availability, deposits, payment receipts, and booking confirmation emails.

## Test checklist

- Verify each CTA opens the correct Square service booking page.
- Book a test appointment and confirm the deposit/payment flow works.
- Confirm the buyer receives Square's receipt and booking confirmation email.
- Confirm the appointment appears in Square Appointments.
- Re-test the fallback by temporarily clearing one link and clicking that service CTA.
