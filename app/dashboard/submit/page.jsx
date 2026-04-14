import SubmitForm from "./SubmitForm";

export const metadata = { title: "FINOVA 2.0 | DEPLOY_PAYLOAD" };

export default function SubmitPage() {
  return (
    <section>
      <h1 className="mb-4 font-headline text-6xl font-black leading-none tracking-tighter">PROJECT <span className="text-primary italic">DEPLOYMENT</span></h1>
      <p className="mb-8 max-w-xl text-on-surface-variant">Upload your core protocol artifacts. High-stakes validation is active.</p>
      <SubmitForm />
    </section>
  );
}
