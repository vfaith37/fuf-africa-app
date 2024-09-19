import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Modal from "./Modal";
import { PaystackButton } from "react-paystack";

interface DonateProps {
  toggleModal: () => void;
  isModalOpen: boolean;
}

const Donate: React.FC<DonateProps> = ({ toggleModal, isModalOpen }) => {
  const publicKey = "your-public-key"; // Use your actual public key here

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    amount: Yup.number()
      .typeError("Amount must be a number")
      .positive("Amount must be a positive number")
      .required("Required"),
    name: Yup.string().required("Required"),
    phone: Yup.string()
      .matches(/^[0-9]+$/, "Phone number is not valid")
      .required("Required"),
  });

  const style = {
    input:
      "block w-full px-4 py-2 mb-4 rounded-md border border-gray-300 focus:outline-none focus:border-primary-500",
    button: "block w-full px-4 py-2 bg-[#F2C94C] rounded-md text-black",
    error: "text-red-500 text-sm mt-1",
  };

  return (
    <div className="Donate font-bold">
      {isModalOpen && (
        <Modal>
          <div className="p-6">
            <h1 className="text-center text-[25px] my-4 font-[600]">
              Make your Donations here
            </h1>
            <div className="max-w-md mx-auto my-4">
              <Formik
                initialValues={{ email: "", amount: "", name: "", phone: "" }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                  // handleSubmit logic if needed
                  console.log(values);
                }}
              >
                {({ values }) => {
                  const componentProps = {
                    email: values.email,
                    amount: parseInt(values.amount) * 100,
                    metadata: {
                      custom_fields: [
                        {
                          display_name: "Name",
                          variable_name: "name",
                          value: values.name,
                        },
                        {
                          display_name: "Phone Number",
                          variable_name: "phone",
                          value: values.phone,
                        },
                      ],
                    },
                    publicKey,
                    text: "Pay Now",
                    onSuccess: () =>
                      alert(
                        "Thanks for donating to us! We do not take it for granted!!"
                      ),
                    onClose: () =>
                      alert("Wait! You need to donate, don't go!!!!"),
                  };

                  return (
                    <Form>
                      <Field
                        name="email"
                        type="email"
                        placeholder="Email"
                        className={style.input}
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className={style.error}
                      />

                      <Field
                        name="amount"
                        type="number"
                        placeholder="Amount"
                        className={style.input}
                      />
                      <ErrorMessage
                        name="amount"
                        component="div"
                        className={style.error}
                      />

                      <Field
                        name="name"
                        type="text"
                        placeholder="Name"
                        className={style.input}
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className={style.error}
                      />

                      <Field
                        name="phone"
                        type="text"
                        placeholder="Phone number"
                        className={style.input}
                      />
                      <ErrorMessage
                        name="phone"
                        component="div"
                        className={style.error}
                      />

                      <PaystackButton
                        className={style.button}
                        {...componentProps}
                      />

                      <button
                        type="button"
                        onClick={toggleModal}
                        className="btn btn-secondary mt-4"
                      >
                        Close Modal
                      </button>
                    </Form>
                  );
                }}
              </Formik>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Donate;
