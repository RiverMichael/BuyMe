import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IoPerson, IoMail, IoPencil, IoChatboxEllipses } from "react-icons/io5";

const schema = yup.object({
  fullName: yup.string().min(3, "Full name must be at least 3 characters").required(),
  email: yup.string().email("Please enter a valid email address").required("Please enter a valid email address"),
  subject: yup.string().min(3, "Subject must be at least 3 characters").required(),
  body: yup.string().min(3, "Message must be at least 3 characters").required(),
});

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), mode: "onChange" });

  function onSubmit(data) {
    console.log("Contact form data:", data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-control items-center gap-5">
      <div className="form-control w-full gap-1">
        <label htmlFor="fullName" className="label w-full py-0">
          <span className="flex items-center gap-2">
            <IoPerson aria-hidden="true" />
            Full name
          </span>
          <span className="label-text-alt font-light">Required</span>
        </label>
        <input
          id="fullName"
          {...register("fullName")}
          className={`input input-bordered rounded grow ${errors.fullName ? "border-error focus:border-error" : "border-silver-chalice"} hover:border-gunmetal-gray focus:outline-none focus:border-2`}
          placeholder="Firstname Lastname"
        />
        <p className="text-error text-sm" aria-live="polite">
          {errors.fullName?.message}
        </p>
      </div>

      <div className="form-control w-full gap-1">
        <label htmlFor="email" className="label w-full py-0">
          <span className="flex items-center gap-2">
            <IoMail aria-hidden="true" />
            Email
          </span>
          <span className="label-text-alt font-light">Required</span>
        </label>
        <input
          type="email"
          id="email"
          {...register("email")}
          className={`input input-bordered rounded grow ${errors.email ? "border-error focus:border-error" : "border-silver-chalice"} hover:border-gunmetal-gray focus:outline-none focus:border-2`}
          placeholder="name@mail.com"
        />
        <p className="text-error text-sm" aria-live="polite">
          {errors.email?.message}
        </p>
      </div>

      <div className="form-control w-full gap-1">
        <label htmlFor="subject" className="label w-full py-0">
          <span className="flex items-center gap-2">
            <IoPencil aria-hidden="true" />
            Subject
          </span>
          <span className="label-text-alt font-light">Required</span>
        </label>
        <input
          id="subject"
          {...register("subject")}
          className={`input input-bordered rounded grow ${errors.subject ? "border-error focus:border-error" : "border-silver-chalice"} hover:border-gunmetal-gray focus:outline-none focus:border-2`}
          placeholder="Write the subject here"
        />
        <p className="text-error text-sm" aria-live="polite">
          {errors.subject?.message}
        </p>
      </div>

      <div className="form-control w-full gap-1">
        <label htmlFor="message" className="label w-full py-0">
          <span className="flex items-center gap-2">
            <IoChatboxEllipses aria-hidden="true" /> Message
          </span>
          <span className="label-text-alt font-light">Required</span>
        </label>
        <textarea
          cols={30}
          rows={5}
          id="message"
          {...register("body")}
          className={`textarea textarea-bordered text-base rounded grow ${
            errors.body ? "border-error focus:border-error" : "border-silver-chalice"
          } hover:border-gunmetal-gray focus:outline-none focus:border-2`}
          placeholder="Write your message here"></textarea>
        <p className="text-error text-sm" aria-live="polite">
          {errors.body?.message}
        </p>
      </div>

      <button className="btn btn-wide bg-gunmetal-gray text-ghost-white hover:text-gunmetal-gray">Send message</button>
    </form>
  );
}
