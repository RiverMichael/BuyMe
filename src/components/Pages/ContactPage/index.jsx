import ContactForm from "../../ContactForm";
import useUpdateHead from "../../Hooks/useUpdateHead";

export default function ContactPage() {
  useUpdateHead("Contact", "Feel free to contact us at BuyMe if you have any questions");

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
