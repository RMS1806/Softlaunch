// Public routes share no extra layout wrapper (each page includes its own Navbar + Footer)
// This exists only as required by Next.js route groups
export default function PublicLayout({ children }) {
  return <>{children}</>;
}
