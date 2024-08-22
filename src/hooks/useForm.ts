import { useFormik } from 'formik';
import * as Yup from 'yup';

const useContactForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('First name is required'),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Last name is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      subject: Yup.string()
        .required('Subject is required'),
      message: Yup.string()
        .required('Message is required'),
    }),
    onSubmit: (values) => {
      console.log('Form data:', values);
      // Handle form submission
    },
  });

  return formik;
};

export default useContactForm;
