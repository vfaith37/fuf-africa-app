import React from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
import Modal from "./Modal";
// import { PaystackButton } from "react-paystack";

interface DonateProps {
  toggleModal: () => void;
  isModalOpen: boolean;
}

const Donate: React.FC<DonateProps> = ({ toggleModal, isModalOpen }) => {
  // const publicKey = "your-public-key"; // Use your actual public key here

  // const validationSchema = Yup.object({
  //   email: Yup.string().email("Invalid email address").required("Required"),
  //   amount: Yup.number()
  //     .typeError("Amount must be a number")
  //     .positive("Amount must be a positive number")
  //     .required("Required"),
  //   name: Yup.string().required("Required"),
  //   phone: Yup.string()
  //     .matches(/^[0-9]+$/, "Phone number is not valid")
  //     .required("Required"),
  // });

  // const style = {
  //   input:
  //     "block w-full px-4 py-2 mb-4 rounded-md border border-gray-300 focus:outline-none focus:border-primary-500",
  //   button: "block w-full px-4 py-2 bg-[#F2C94C] rounded-md text-black",
  //   error: "text-red-500 text-sm mt-1",
  // };

  const bankDetails = [
    { label: 'Bank', value: 'Zenith Bank' },
    { label: 'Naira Number', value: '1312223844' },
    { label: 'Dollar Account', value: '5074733085' },
    { label: 'Account Name', value: 'FRANCISCO UDOFIA FOUNDATION AFRICA' },
  ]

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      // alert('Copied to clipboard: ' + text)
    }).catch(err => {
      console.error('Failed to copy: ', err)
    })
  }

  return (
    <div className="Donate font-bold">
      {isModalOpen && (
        <Modal>
         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white text-black p-8 rounded-lg max-w-md w-full">
              <h2 className="text-2xl font-bold text-center mb-6">Make your Donation</h2>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Bank Details</h3>
                <p className="text-sm text-gray-600 mb-4">Use the following details to make your donation</p>
                <div className="space-y-4">
                  {bankDetails.map((detail, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="font-medium">{detail.label}:</span>
                      <div className="flex items-center">
                        <span className="font-semibold mr-2">{detail.value}</span>
                        <button
                          className="text-yellow-400 hover:text-yellow-500"
                          onClick={() => copyToClipboard(detail.value)}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={toggleModal}
                className="mt-6 w-full bg-yellow-400 text-black font-bold py-2 px-4 rounded hover:bg-yellow-500 transition duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Donate;
