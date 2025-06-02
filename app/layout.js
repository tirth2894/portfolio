import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Tirth's Portfolio",
  description: "Explore my projects, skills, and achievements in a creative file explorer design!",
  keywords: [
    "Tirth Patel",
    "Tirth Portfolio",
    "Tirth Patel Portfolio",
    "Tirth Patel Developer",
    "Web Developer Portfolio",
    "Full Stack Web Developer",
    "Frontend Developer Portfolio",
    "Backend Developer Portfolio",
    "React Developer Portfolio",
    "Next.js Developer Portfolio",
    "JavaScript Developer",
    "Creative Web Portfolio",
    "Software Engineer Portfolio",
    "Modern Portfolio Website",
    "Freelance Web Developer",
    "Web Development Projects",
    "Personal Developer Portfolio",
    "File Explorer Style Portfolio",
    "Portfolio Website Inspiration",
    "UI/UX Portfolio",
    "Programmer Portfolio",
    "Developer Resume Website",
    "Custom Portfolio Design",
    "GitHub Portfolio Projects",
    "Responsive Portfolio Website"
  ],
  authors: [{ name: "Tirth Patel" }],
  robots: "index, follow",
  icons: {
    icon: "/images/favicon.ico", 
  },
  openGraph: {
    title: "Tirth's Portfolio",
    description: "Explore Tirth Patel's creative portfolio styled like a file explorer.",
    url: "https://tirth-patel-portfolio.vercel.app",
    siteName: "Tirth's Portfolio",
    images: [
      {
        url: "https://tirth-patel-portfolio.vercel.app/images/previewImage.png",
        width: 1200,
        height: 630,
        alt: "Tirth's Portfolio Preview",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  verification: {
    google: "KcRVI8mggXp1CuFxr41IADAEJjnBFHhHNiSk457O-5U",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-adsense-account" content="ca-pub-6603581257329396" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
