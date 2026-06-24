# Senuth Premium Spring Portfolio - Added Features Version

Run:

```bash
mvn spring-boot:run
```

Open:

```text
http://localhost:8080
```

CV download test:

```text
http://localhost:8080/docs/Senuth-Nethwin-CV.pdf
```

## New additions

- Live Projects buttons
- Project screenshot placeholder areas
- Services section
- Floating WhatsApp button
- Currently Learning section
- My Goal / Security Architect section
- Certificate card action buttons
- Contact form opens email app with pre-filled message
- Loading animation message updated
- Visitor counter/status badge
- Skill percentage progress bars
- Testimonials/feedback section
- Updated AI guide to include services

## Important WhatsApp note

The floating WhatsApp button currently opens WhatsApp with a message only. To connect it directly to your number, edit `index.html` and replace:

```html
https://wa.me/?text=Hello%20Senuth,%20I%20visited%20your%20portfolio
```

with your real number, for example:

```html
https://wa.me/947XXXXXXXX?text=Hello%20Senuth,%20I%20visited%20your%20portfolio
```
