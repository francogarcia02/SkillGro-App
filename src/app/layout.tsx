"use client"
import "../styles/index.scss"
import { Provider } from "react-redux";
import store from "@/redux/store";

const isDev = process.env.NODE_ENV === 'development'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={isDev}>
      <head>
        <meta name="description" content="SkillGro - Online Courses & Education." />
        <link rel="icon" href="/favicon.png" sizes="any" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600&display=swap" />
      </head>
      <body suppressHydrationWarning={true}>
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  );
}
