import React, { useState } from 'react';
import NotificationBar from '@shared/NotificationBar';
import { useForm } from 'react-hook-form';
import SubmitButton from '@styled/SubmitButton';

const FeedbackForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const [formSubmit, setFormSubmit] = useState(false);

  const closeNotification = () => {
    setFormSubmit(false);
  };

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      {formSubmit && (
        <NotificationBar
          onClose={closeNotification}
          type="success"
          message="Your feedback is submitted! Thanks a lot for the participation."
        />
      )}

      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Your feedback
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              We promise! Each feedback is important to us.
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Name
                    </label>
                    <input
                      {...register('username', { required: true })}
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                    {errors.username && (
                      <span className="text-red-700">Username is required</span>
                    )}
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      {...register('email', { required: true })}
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                    {errors.email && (
                      <span className="text-red-700">Email is required</span>
                    )}
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Message
                    </label>
                    <textarea
                      {...register('message', { required: true })}
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                    {errors.message && (
                      <span className="text-red-700">Message is required</span>
                    )}
                  </div>
                </div>
                <div className="p-2 w-full">
                  <SubmitButton
                    $valid={isValid}
                    onClick={handleSubmit(onSubmit)}
                  >
                    Submit
                  </SubmitButton>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default FeedbackForm;
