"use client";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

/**
 * A React component for a contact form that sends emails using EmailJS.
 * It provides user feedback, loading state, and error handling.
 */
export const ContactUs: React.FC = () => {
  // A ref to the form element for direct DOM access.
  const form = useRef<HTMLFormElement>(null);
  
  // State to manage the loading status of the form submission.
  const [isSending, setIsSending] = useState(false);
  
  // State to manage the feedback message for the user.
  const [feedbackMessage, setFeedbackMessage] = useState('');
  
  // State to manage the feedback message type (success or error).
  const [messageType, setMessageType] = useState<'success' | 'error' | ''>('');

  /**
   * Handles the form submission by sending the email using EmailJS.
   * @param e - The form submission event.
   */
  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Check if the form ref is available before proceeding.
    if (!form.current) {
      console.error('Form reference is not available.');
      setFeedbackMessage('An unexpected error occurred. Please try again.');
      setMessageType('error');
      return;
    }

    // Set the loading state to true and clear any previous messages.
    setIsSending(true);
    setFeedbackMessage('');
    setMessageType('');

    try {
      // Send the email using the EmailJS service.
      const result = await emailjs.sendForm(
        'YOUR_SERVICE_ID', 
        'YOUR_TEMPLATE_ID',       // Your EmailJS Template ID
        form.current,             // The form element to send data from
        'YOUR_PUBLIC_KEY'       // Your EmailJS Public Key
      );
      
      console.log('SUCCESS!', result.text);
      // Set a success message for the user.
      setFeedbackMessage('Your message has been sent successfully!');
      setMessageType('success');
      
      // Optionally, reset the form after successful submission.
      form.current.reset();
      
    } catch (error) {
      // Handle any errors that occur during the submission.
      console.log('FAILED...', (error as Error).message);
      // Set an error message for the user.
      setFeedbackMessage('Failed to send the message. Please try again later.');
      setMessageType('error');
      
    } finally {
      // Reset the loading state after the process is complete.
      setIsSending(false);
    }
  };

  // Determine the CSS class for the feedback message based on its type.
  const feedbackClass = messageType === 'success' ? 'text-green-500' : 'text-red-500';

  return (
    <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4 text-white max-w-2xl mx-auto p-8  ">
      <h2 className="text-3xl font-bold text-center underline underline-offset-4 mb-6">Contact Me</h2>
      
      {/* This div is for user feedback */}
      {feedbackMessage && (
        <div className={`p-3 rounded ${messageType === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          {feedbackMessage}
        </div>
      )}

      {/* Name input field */}
      <div className="flex flex-col">
          <label htmlFor="user_name" className="mb-1 font-semibold text-gray-700">Name</label>
          <input 
              id="user_name"
              type="text" 
              name="user_name" 
              required 
              placeholder="Your Name"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
          />
      </div>

      {/* Email input field */}
      <div className="flex flex-col">
          <label htmlFor="user_email" className="mb-1 font-semibold text-gray-700">Email</label>
          <input 
              id="user_email"
              type="email" 
              name="user_email" 
              required 
              placeholder="you@example.com"
              // Corrected a typo in the class name: 'line-none' -> 'outline-none'
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
          />
      </div>
      
      {/* Message textarea field */}
      <div className="flex flex-col">
          <label htmlFor="message" className="mb-1 font-semibold text-gray-700">Message</label>
          <textarea 
              id="message"
              name="message" 
              required 
              rows={6} // Increased rows for a larger textarea
              placeholder="Your message here..."
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y transition-shadow"
          />
      </div>
      
      {/* Submit button */}
      <button 
          type="submit" 
          className="mt-6 p-4 font-bold text-lg text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
          disabled={isSending} // Disable the button while the email is being sent.
      >
          {isSending ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};