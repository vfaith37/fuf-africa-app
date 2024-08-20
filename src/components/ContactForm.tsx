import React from "react";
import useContactForm from "../hooks/useForm";
// import useContactForm from './useContactForm';

const ContactForm: React.FC = () => {
  const formik = useContactForm();

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="max-w-lg mx-auto p-4 flex flex-col text-[#1D2130] font-Roboto"
    >
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block mb-1 text-sm font-medium">First Name</label>
          <input
            type="text"
            name="firstName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
            className={`w-full border-b ${
              formik.touched.firstName && formik.errors.firstName
                ? "border-red-500"
                : "border-black"
            } px-3 py-2 focus:outline-none focus:border-[#FCEDC6]`}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <p className="text-red-500 text-sm">{formik.errors.firstName}</p>
          ) : null}
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium">Last Name</label>
          <input
            type="text"
            name="lastName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
            className={`w-full border-b ${
              formik.touched.lastName && formik.errors.lastName
                ? "border-red-500"
                : "border-black"
            } px-3 py-2 focus:outline-none focus:border-[#FCEDC6]`}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <p className="text-red-500 text-sm">{formik.errors.lastName}</p>
          ) : null}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block mb-1 text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className={`w-full border-b ${
              formik.touched.email && formik.errors.email
                ? "border-red-500"
                : "border-black"
            } px-3 py-2 focus:outline-none focus:border-[#FCEDC6]`}
          />
          {formik.touched.email && formik.errors.email ? (
            <p className="text-red-500 text-sm">{formik.errors.email}</p>
          ) : null}
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium">Subject</label>
          <input
            type="text"
            name="subject"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.subject}
            className={`w-full border-b ${
              formik.touched.subject && formik.errors.subject
                ? "border-red-500"
                : "border-black"
            } px-3 py-2 focus:outline-none focus:border-[#FCEDC6]`}
          />
          {formik.touched.subject && formik.errors.subject ? (
            <p className="text-red-500 text-sm">{formik.errors.subject}</p>
          ) : null}
        </div>
      </div>
      <div className="mb-4">
        <label className="block mb-1 text-sm font-medium">Message</label>
        <textarea
          name="message"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
          className={`w-full border ${
            formik.touched.message && formik.errors.message
              ? "border-red-500"
              : "border-black"
          } rounded px-3 py-2 focus:outline-none focus:border-[#FCEDC6]`}
          rows={5}
        />
        {formik.touched.message && formik.errors.message ? (
          <p className="text-red-500 text-sm">{formik.errors.message}</p>
        ) : null}
      </div>
      <button
        type="submit"
        className="bg-[#FCEDC6] text-black font-medium text-base py-2 px-4 rounded hover:bg-[#F2C94C] self-center"
      >
        Send message
      </button>
    </form>
  );
};

export default ContactForm;
