# João Bastos - Personal Portfolio & Blog

This is the personal portfolio and blog of João Bastos, built with modern web technologies. This project serves as a centralized hub for professional experience, personal projects, and blog posts.

## Technologies Used

- **Framework**: [Next.js 15](https://nextjs.org/)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Language**: TypeScript
- **Components**: [Shadcn UI](https://ui.shadcn.com/) & [Radix UI](https://www.radix-ui.com/)
- **Content**: Markdown (parsed via `gray-matter` & `remark`)

## Key Features

- **Multi-page Architecture**: Dedicated pages for About, Experience, Blog, and Contact.
- **Markdown Blog System**: Easy-to-manage blog posts written in markdown format.
- **Responsive Design**: Fully responsive layout optimized for mobile and desktop devices.
- **Dark Mode**: Integrated light/dark theme switching support.
- **Secure Contact Form**: reCAPTCHA v3 protection integrated with Google Apps Script for form submissions.

## Project Structure

- `src/app/`: Contains the Next.js App Router structure, including pages for the main routes (`/`, `/about`, `/blog`, `/experience`, `/contact`).
- `src/components/`: Reusable React components (UI elements, layout components).
- `src/lib/`: Utility functions and library wrappers (e.g., markdown parser).
- `posts/`: Directory containing all blog posts in `.md` format.

## Environment Variables

To run this project locally, you will need to set up the following environment variables. Copy the `.env.example` file to `.env.local` and fill in the values:

```env
# reCAPTCHA
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
RECAPTCHA_SECRET_KEY=your_recaptcha_secret_key

# Apps Script
NEXT_PUBLIC_GOOGLE_SCRIPT_URL=your_google_apps_script_url
```

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new). Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
