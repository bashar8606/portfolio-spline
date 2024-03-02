import React, { useState } from 'react';
import style from "./EnquireForm.module.scss"
import Image from 'next/image';
import { FloatingLabel } from 'react-bootstrap';
import { useEnquireForm } from './useEnquireForm';
import { Formik, Field, Form, ErrorMessage } from 'formik';

export default function EnquireForm({ }) {
    const { main, initialValues, validationSchema, hasSubmitted, contactUs, width } = useEnquireForm(style);

    return (
        <div className={` ${style.card}`} ref={main}>
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="col-lg-8 mx-auto">
                        <h2 className='h4 fw-700'> Chat to our team </h2>
                        <p className='text-grey title-sm  mb-lg-4'>We’d love to talk about how we can help you.</p>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={(values, actions) => {
                                contactUs(values, actions);
                            }}
                        >

                            {({ isSubmitting }) => (
                                <Form>
                                    <FloatingLabel controlId="floatingInput" label="Name" className="mb-3" >
                                        <Field className='form-control' type="text" id="name" name="name" placeholder="Full Name" />
                                        <ErrorMessage className="d-block invalid-feedback  title-sm fw-500" name="name" component="div" />
                                    </FloatingLabel>

                                    <FloatingLabel controlId="floatingInput" label="Phone" className="mb-3" >
                                        <Field className='form-control' type="text" id="phone" name="phone" placeholder="Phone Number" />
                                        <ErrorMessage className="d-block invalid-feedback  title-sm fw-500" name="phone" component="div" />
                                    </FloatingLabel>

                                    <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3" >
                                        <Field className='form-control' id="email" name="email" type="email" placeholder="name@example.com" />
                                        <ErrorMessage className="d-block invalid-feedback  title-sm fw-500" name="email" component="div" />
                                    </FloatingLabel>

                                    <FloatingLabel controlId="floatingTextarea2" className='mb-3' label="Message">
                                        <Field as="textarea"
                                            id="message" name="message"
                                            className='form-control'
                                            placeholder="Leave a comment here"
                                            style={{ height: '100px' }}
                                        />
                                        <ErrorMessage className="d-block invalid-feedback  title-sm fw-500" name="message" component="div" />
                                    </FloatingLabel>
                                    <button type="submit" className={`btn btn-secondary w-100 ${isSubmitting && "text-transparent"} `} disabled={isSubmitting}>
                                        {isSubmitting &&
                                            <div className='position-absolute top-50 start-50 translate-middle'>
                                                <div className="spinner-border text-light spinner-border-sm" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </div>
                                            </div>}Submit
                                    </button>
                                </Form>
                            )}
                        </Formik>
                        {(width < 992 && hasSubmitted) ?

                            <div className={`${style.success}  row gx-0 align-items-center  mt-3 border border-lightblue`}>
                                <div className={`${style.success_img} rounded-circle col-auto`}></div>
                                <div className={`col ps-3 ${style.success_content}`}>
                                    <p className='mb-0 fw-600'>Your enquiry sent successfully.</p>
                                </div>
                            </div> : ""}
                    </div>
                </div>
                <div className="col-lg-6 d-none d-lg-block">
                    <div className={`${style.card_img}   ratio overflow-hidden `}>
                        <div className='p-lg-4 d-flex align-items-end z-3'>
                            <div className={`${style.success}  row gx-0 align-items-center`}>
                                <div className={`${style.success_img} rounded-circle col-auto`}></div>
                                <div className={`col ps-3 ${style.success_content}`}>
                                    <p className='mb-0 fw-600'>Your enquiry sent successfully.</p>
                                </div>
                            </div>
                        </div>
                        <div className='row gx-0 z-1 '>
                            <div className={`col ${style.col1}`}></div>
                            <div className={`col ${style.col1}`}></div>
                            <div className={`col ${style.col1}`}></div>
                            <div className={`col ${style.col1}`}></div>
                            <div className={`col ${style.col1}`}></div>
                            <div className={`col ${style.col1}`}></div>
                            <div className={`col ${style.col1}`}></div>
                            <div className={`col ${style.col1}`}></div>
                        </div>
                        <div className={` ${style.card_wrap}  ${hasSubmitted ? style.submitted : ""}  `}>
                            <Image src={`/assets/images/1.png`} quality={90} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 50vw" className={`object-fit-cover ${style.img1}`} priority={true} fill alt="logo" />
                            {/* <Image src={`/assets/images/2.png`} quality={90} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 50vw" className='object-fit-cover' priority={true} fill alt="logo" /> */}
                            <Image src={`/assets/images/3.png`} quality={90} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 50vw" className={`object-fit-cover ${style.img2}`} priority={true} fill alt="logo" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}