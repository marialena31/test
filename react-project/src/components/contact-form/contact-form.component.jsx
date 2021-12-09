import React from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from "yup";
import ButtonOnDark from "../button-on-dark/button-on-dark.component";
import { ReactComponent as IconError } from '../../assets/contact/desktop/icon-error.svg'

import './contact-form.styles.scss'

const SignInSchema = Yup.object().shape({
  name: Yup.string().required("Can't be empty"),
  email: Yup.string().required("Can't be empty").matches(
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          "Please use a valid email address"
        ),

  message: Yup.string().required("Can't be empty")
});

const ContactForm = () => {
    return (
      <Formik
        initialValues={{
              name: '',
              email: '',
              phone: '',
              message: ''
          }}
          validationSchema={SignInSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
         >
         {(formik) => {
          const { errors, touched } = formik;
          return (
            <Form className="contact-form" novalidate>
              <label htmlFor="name"></label>
              <Field name="name" type="text" placeholder="Name" className="contact-form__text-input"/>
              <div className="contact-form__error">
                <ErrorMessage name="name" component="span" className="contact-form__error__msg"/>
                {errors.name && touched.name ? <span className="contact-form__error__icon"><IconError/></span> : null}
              </div>
              <label htmlFor="email" ></label>
              <Field name="email" type="email" placeholder="Email Address" className="contact-form__text-input"/>
              <div className="contact-form__error">
                <ErrorMessage name="email" component="span" className="contact-form__error__msg"/>
                {errors.email && touched.email ? <span className="contact-form__error__icon"><IconError/></span> : null}
              </div>
              <label htmlFor="phone" ></label>
              <Field name="phone" type="text" placeholder="Phone" className="contact-form__text-input" />
              <ErrorMessage name="phone" component="span" className="contact-form__error__msg"/>

              <label htmlFor="message"></label>
              <Field name="message" type="textarea" placeholder="Your message" className="contact-form__text-area"/>
              <div className="contact-form__error">
                <ErrorMessage name="message" component="span" className="contact-form__error__msg" />
                {errors.message && touched.message ? <span className="contact-form__error__icon"><IconError/></span> : null}
              </div> 
              <div className="contact-form__btn">
                <ButtonOnDark title="Submit"/>
              </div>
              
            </Form>
            );
      }}
      </Formik>
    )
}

export default ContactForm;