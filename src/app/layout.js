import "../styles/globals.css";

export const metadata = {
  title: "Prueba Técnica",
  description: "Prueba técnica para Security and System",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
