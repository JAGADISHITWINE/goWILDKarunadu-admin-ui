# GoWILD Karunadu Admin UI

## Overview

This is the admin dashboard frontend for GoWILD Karunadu. It is used by staff/admin users to manage treks, bookings, users, content, referrals, analytics, and operational settings.

## Tech stack

- Angular 20
- Ionic Angular
- TypeScript
- RxJS
- Bootstrap Icons
- Chart.js

## Project structure

```text
goWILDKarunadu-admin-ui/
├── src/
│   ├── app/
│   ├── assets/
│   ├── environments/
│   └── global.scss
├── angular.json
├── package.json
├── tsconfig.json
└── README.md
```

## Local setup

```bash
cd goWILDKarunadu-admin-ui
npm install
npm start
```

Default local port:

- `4700`

## Main routes

- `/`
- `/admin/dashboard`
- `/admin/treks/list`
- `/admin/treks/add`
- `/admin/treks/edit`
- `/admin/bookings`
- `/admin/users`
- `/admin/reviews`
- `/admin/blog/posts`
- `/admin/blog/editor`
- `/admin/content-pages`
- `/admin/revenue`
- `/admin/batch-management`
- `/admin/operations`
- `/admin/notifications`
- `/admin/dropdowns`
- `/admin/categories`
- `/admin/referrals`
- `/admin/coupons`

## Environment config

The app reads runtime values such as:

- `API_BASE_URL`
- `CONTENT_API_URL`
- `MEDIA_BASE_URL`
- `ENCRYPTION_KEY`
- `ENCRYPTION_SALT`

Main production config file:

- `src/environments/environment.prod.ts`

## Production notes

- Replace localhost URLs in the environment file with live API URLs.
- Confirm CORS is configured on the API for the correct domains.
- Ensure media URLs point to the correct CloudFront or S3 host.

## Main file references

- Routing: `src/app/app.routes.ts`
- Environment: `src/environments/environment.prod.ts`

---

See also: `PROJECT_DOCUMENTATION.md` and `DEVELOPER_HANDOFF.md`.
