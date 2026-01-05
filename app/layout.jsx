export const metadata = {
  title: "Horlax Home Interior & Exterior Design",
  description: "Premium furniture, interior and exterior design services across Nigeria.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-neutral-50 text-neutral-900">{children}</body>
    </html>
  );
}
