# Notes

[View source code](https://github.com/elliotreed/elliotreed_client)

## Table of Contents

- [Deployment](#deployment)
- [Structure](#structure)
- [Errors](#errors)

## Deployment

    npm run clean
    npm run build
    copy public folder contents to public_html on hosting

### .htaccess

.htaccess tells Apache about your site
for custon error pages add:
ErrorDocument 404 /404/index.html (path to page)

## Structure

## Musician

(src/pages/index.tsx)

## Errors

### gatsby-plugin-mdx

Pinned version "@mdx-js/react": "2.0.0",

"@mdx-js/react": "^2.0.0",
current version should update to 3.0.0, but has a conflict with gatsby-remark-mdx. Will try --legacy-?
