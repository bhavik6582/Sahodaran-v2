'use client';

import React, { useState } from 'react';
import { RiMapPinLine, RiPhoneLine, RiMailLine, RiTimeLine, RiSendPlaneLine } from 'react-icons/ri';
import useWeb3Forms from '@web3forms/react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { submit: submitForm } = useWeb3Forms({
    access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || '',
    settings: {
      from_name: 'Sahodaran Website',
      subject: 'New Contact Form Message'
    },
    onSuccess: (successMessage, data) => {
      console.log('Form submitted successfully:', successMessage, data);
    },
    onError: (errorMessage, data) => {
      console.error('Form submission error:', errorMessage, data);
    }
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSuccess(false);

    try {
      await submitForm({
        ...formState,
        'form-name': 'contact-form'
      });

      setIsSuccess(true);
      setFormState({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('Failed to submit form:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
// Remove setError line since error state is not defined
    setIsSuccess(false);
  };

  return (
    <section 
      id="contact" 
      className="contact py-16 lg:py-24 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--background)] to-[var(--background-secondary)] opacity-50"></div>
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="var(--accent)" strokeWidth="0.5"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--accent)] mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            Have questions or want to support our mission? We're here to help and listen.
          </p>
        </div>

        <div className="contact-content grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Contact Information */}
          <div className="contact-info space-y-6 lg:space-y-8">
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {/* Address Card */}
              <div className="contact-card bg-[var(--background)] p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] hover:bg-gradient-to-br from-[var(--background)] to-[var(--background-secondary)]">
                <div className="icon-wrapper bg-[var(--accent)]/10 text-[var(--accent)] p-4 rounded-xl mb-4 inline-block">
                  <RiMapPinLine className="text-3xl" />
                </div>
                <h4 className="text-lg font-bold text-[var(--accent)] mb-2">Visit Us</h4>
                <p className="text-[var(--text-secondary)]">
                  No. 27, New no.75, 3rd St Extn,<br />
                  Railway colony, Aminjikarai,<br />
                  Chennai-600029
                </p>
              </div>

              {/* Phone Card */}
              <div className="contact-card bg-[var(--background)] p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] hover:bg-gradient-to-br from-[var(--background)] to-[var(--background-secondary)]">
                <div className="icon-wrapper bg-[var(--accent)]/10 text-[var(--accent)] p-4 rounded-xl mb-4 inline-block">
                  <RiPhoneLine className="text-3xl" />
                </div>
                <h4 className="text-lg font-bold text-[var(--accent)] mb-2">Call Us</h4>
                <p className="text-[var(--text-secondary)]">
                  044-23740486<br />
                  +91 9841865423
                </p>
              </div>

              {/* Email Card */}
              <div className="contact-card bg-[var(--background)] p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] hover:bg-gradient-to-br from-[var(--background)] to-[var(--background-secondary)]">
                <div className="icon-wrapper bg-[var(--accent)]/10 text-[var(--accent)] p-4 rounded-xl mb-4 inline-block">
                  <RiMailLine className="text-3xl" />
                </div>
                <h4 className="text-lg font-bold text-[var(--accent)] mb-2">Email Us</h4>
                <p className="text-[var(--text-secondary)]">
                  sahodaranchennai@gmail.com
                </p>
              </div>

              {/* Working Hours Card */}
              <div className="contact-card bg-[var(--background)] p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] hover:bg-gradient-to-br from-[var(--background)] to-[var(--background-secondary)]">
                <div className="icon-wrapper bg-[var(--accent)]/10 text-[var(--accent)] p-4 rounded-xl mb-4 inline-block">
                  <RiTimeLine className="text-3xl" />
                </div>
                <h4 className="text-lg font-bold text-[var(--accent)] mb-2">Working Hours</h4>
                <p className="text-[var(--text-secondary)]">
                  Monday - Saturday:<br />10:00 AM to 6:00 PM<br />
                  Sundays: Closed
                </p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="contact-form bg-[var(--background)] p-8 rounded-2xl shadow-xl relative overflow-hidden">
            {/* Form Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <pattern id="form-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="var(--accent)" strokeWidth="0.5"/>
                </pattern>
                <rect width="100%" height="100%" fill="url(#form-grid)" />
              </svg>
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-6 text-[var(--accent)]">
                Send Us a Message
              </h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name" className="block mb-2 text-[var(--text-secondary)] font-medium">
                    Full Name
                  </label>
                  <div className="relative">
                    <input 
                      type="text" 
                      id="name" 
                      value={formState.name}
                      onChange={handleChange}
                      className="
                        w-full px-4 py-3 pl-12
                        bg-[var(--background-secondary)]/50
                        rounded-xl border-2 border-transparent
                        focus:border-[var(--accent)]
                        focus:outline-none
                        transition-all duration-300
                        placeholder-[var(--text-secondary)]/50
                      " 
                      placeholder="Your Name" 
                      required 
                    />
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]/50">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="block mb-2 text-[var(--text-secondary)] font-medium">
                    Email Address
                  </label>
                  <div className="relative">
                    <input 
                      type="email" 
                      id="email" 
                      value={formState.email}
                      onChange={handleChange}
                      className="
                        w-full px-4 py-3 pl-12
                        bg-[var(--background-secondary)]/50
                        rounded-xl border-2 border-transparent
                        focus:border-[var(--accent)]
                        focus:outline-none
                        transition-all duration-300
                        placeholder-[var(--text-secondary)]/50
                      " 
                      placeholder="you@example.com" 
                      required 
                    />
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]/50">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="block mb-2 text-[var(--text-secondary)] font-medium">
                    Your Message
                  </label>
                  <div className="relative">
                    <textarea 
                      id="message" 
                      value={formState.message}
                      onChange={handleChange}
                      rows={4} 
                      className="
                        w-full px-4 py-3 pl-12
                        bg-[var(--background-secondary)]/50
                        rounded-xl border-2 border-transparent
                        focus:border-[var(--accent)]
                        focus:outline-none
                        transition-all duration-300
                        placeholder-[var(--text-secondary)]/50
                        resize-none
                      " 
                      placeholder="How can we help you?" 
                      required
                    ></textarea>
                    <span className="absolute left-4 top-6 text-[var(--text-secondary)]/50">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </div>
                </div>

                {/* Form Status Messages */}
                {/* Error message removed since error state is not defined */}
                  <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
                  </div>
                {isSuccess && (
                  <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg">
                    Thank you for your message! We'll get back to you soon.
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="
                    w-full
                    bg-[var(--accent)]
                    text-[var(--background)]
                    py-4
                    rounded-xl
                    font-semibold
                    hover:bg-[var(--accent-hover)]
                    transform hover:scale-[1.02]
                    transition-all duration-300
                    flex items-center justify-center gap-2
                    shadow-lg shadow-[var(--accent)]/20
                    disabled:opacity-50 disabled:cursor-not-allowed
                  "
                >
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  {!isSubmitting && <RiSendPlaneLine className="text-xl" />}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
