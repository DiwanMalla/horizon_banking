import Sidebar from "@/components/ui/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = {
    $id: "unique-id",
    email: "diwan@example.com",
    userId: "user-id",
    dwollaCustomerUrl: "https://api.dwolla.com/customers/unique-id",
    dwollaCustomerId: "unique-dwolla-customer-id",
    firstName: "Diwan",
    lastName: "Malla",
    name: "Diwan Malla",
    address1: "123 Main St",
    city: "New York",
    state: "NY",
    postalCode: "10001",
    dateOfBirth: "1990-01-01",
    ssn: "123-45-6789",
  };
  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />
      {children}
    </main>
  );
}
