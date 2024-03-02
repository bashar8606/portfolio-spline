"use client"
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useSubscribe } from './useSubscribe';

export default function Subscribe({ style }) {
  const { initialValues, handleSubmit, validationSchema, hasSubmitted, handleSubscribe } = useSubscribe({})


  return (
    <>
      <h3 className={`${style.footer_spec__title} h2 mb-1   fw-500  text-white`}>Get subscribe now!</h3>
      <p className='mb-0 title-md fw-400 text-white opacity-75 mb-3 mb-lg-4'>EducationTechPlus is your gateway to a world of endless possibilities.</p>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          console.log("values", values);
          handleSubscribe(values, actions)
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="input-group border rounded-pill border-white p-1 border-opacity-50 ">
              <Field className='form-control bg-transparent border-0 rounded-pill text-white title-sm' id="email" name="email" type="email" placeholder="name@example.com" />
              <button type="submit" className={`btn btn-white rounded-pill fw-500 title-sm ${isSubmitting && "text-transparent"}`} >
                {isSubmitting &&
                  <div className='position-absolute top-50 start-50 translate-middle'>
                    <div className="spinner-border text-secondary spinner-border-sm" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>}Subscribe</button>
            </div>
            <ErrorMessage className="d-block invalid-feedback  title-sm fw-500 " name="email" component="div" />
            {hasSubmitted && <div className='text-success title-sm fw-500 '>Newsletter  subscribed successfully.</div>}
          </Form>
        )}
      </Formik>
    </>
  );
}