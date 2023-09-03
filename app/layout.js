import LayoutClient from "@/app/LayoutClient";
import "./globalStyles.css";

export const metadata = {
  title: "Gifty",
  description: "Gifty",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
