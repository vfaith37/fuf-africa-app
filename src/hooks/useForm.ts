import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";

const useContactForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("First name is required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Last name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      subject: Yup.string().required("Subject is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: (values, { setSubmitting, resetForm }) => {
      emailjs
        .send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID, // Replace with your EmailJS service ID
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Replace with your EmailJS template ID
          {
            from_name: `${values.firstName} ${values.lastName}`, // Full name
            from_email: values.email, // Email from contact form
            subject: values.subject,
            message: values.message,
          },
          import.meta.env.VITE_EMAILJS_USER_ID // Replace with your EmailJS user ID
        )
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
          resetForm();
        })
        .catch((error) => {
          console.log("FAILED...", error);
        })
        .finally(() => {
          setSubmitting(false);
        });
    },
  });

  return formik;
};

export default useContactForm;
