import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../config/firebase";

const Footer: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        await addDoc(collection(db, "subscribers"), {
          email: values.email,
        });
        console.log("Email successfully added:", values.email);
        resetForm(); // Reset the form after submission
      } catch (error) {
        console.error("Error adding email to Firestore:", error);
      }
    },
  });

  return (
    <footer className="bg-black text-white p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-lg font-bold">FUF AFRICA</h2>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-sm font-bold">Home</h3>
            <ul>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Team
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  What we do
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold">More</h3>
            <ul>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Projects
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Donate
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold">Connect</h3>
            <ul>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-bold">Subscribe to our newsletters</h3>
          <form onSubmit={formik.handleSubmit} className="flex mt-4">
            <input
              id="email"
              name="email"
              type="email"
              className="bg-gray-800 p-2 w-full rounded-l-lg text-gray-400 focus:outline-none"
              placeholder="Your email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            <button
              type="submit"
              className="bg-white text-black p-2 rounded-r-lg hover:bg-gray-300"
            >
              Subscribe
            </button>
          </form>
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500 text-sm mt-2">
              {formik.errors.email}
            </div>
          ) : null}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
