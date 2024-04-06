import ContactForm from "../../ContactForm";

export default function ContactPage() {
  return (
    <>
      <main className="mt-10 mb-20 container mx-auto items-center flex flex-col gap-y-10">
        <div className="flex flex-col items-center gap-5 max-w-sm">
          <h1>Contact us</h1>
          <p className="text-center">Please send us a message if you have any questions or concerns about our products.</p>
        </div>

        <ContactForm />
      </main>
    </>
  );
}
