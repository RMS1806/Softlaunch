import Link from "next/link";

export const metadata = { title: "FINOVA 2.0 | REDIRECTING" };

export default function VerifyEmailPage() {
  return (
    <div className="bg-surface text-on-surface font-body min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-headline text-3xl font-black text-primary mb-4">PAGE DEPRECATED</h1>
        <p className="text-on-surface-variant font-mono text-sm mb-8">Email verification is no longer required.</p>
        <Link href="/login" className="bg-primary px-8 py-3 text-on-primary-container font-headline font-bold uppercase tracking-widest">
          PROCEED TO LOGIN
        </Link>
      </div>
    </div>
  );
}
