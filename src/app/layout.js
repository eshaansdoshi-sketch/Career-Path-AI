import "./globals.css";

export const metadata = {
  title: "CareerPath AI - Intelligent Career Recommendation System",
  description: "An AI-powered platform that analyzes your interests, strengths, personality, and skills to recommend personalized career paths and learning roadmaps.",
  keywords: "career guidance, AI, career recommendation, skill assessment, personality test",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
