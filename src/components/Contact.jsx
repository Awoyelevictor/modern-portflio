// components/Contact.jsx
import { useState, useEffect } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [emailjsReady, setEmailjsReady] = useState(false);

  // Check if EmailJS is loaded
  useEffect(() => {
    const checkEmailJS = () => {
      if (typeof window !== 'undefined' && window.emailjs) {
        setEmailjsReady(true);
        return true;
      }
      return false;
    };

    // Check immediately
    if (checkEmailJS()) return;

    // If not ready, check every 100ms for up to 5 seconds
    const interval = setInterval(() => {
      if (checkEmailJS()) {
        clearInterval(interval);
      }
    }, 100);

    // Cleanup
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!emailjsReady) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await window.emailjs.send(
        'service_3wvh4pe',
        'template_hhxlcxl',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'awoyeleemma1@gmail.com',
          reply_to: formData.email
        }
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error('Failed to send message:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-4">
          Get In Touch
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Have a project in mind or want to chat? Feel free to reach out!
        </p>
        
        {submitStatus === 'success' && (
          <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
            Thank you for your message! I'll get back to you soon.
          </div>
        )}
        {submitStatus === 'error' && (
          <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg">
            Sorry, there was an error sending your message. Please try again or contact me directly at awoyeleemma1@gmail.com
          </div>
        )}
        
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center">
                  <i className="fas fa-envelope text-indigo-600 dark:text-indigo-400 text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Email</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    <a href="mailto:awoyeleemma1@gmail.com" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                      awoyeleemma1@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center">
                  <i className="fab fa-whatsapp text-indigo-600 dark:text-indigo-400 text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">WhatsApp</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    <a 
                      href="https://wa.me/2347017304536?text=Hello%20I%20just%20visited%20your%20portfolio%20and%20I'd%20like%20to%20work%20with%20you" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      +234 701 730 4536
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center">
                  <i className="fas fa-phone text-indigo-600 dark:text-indigo-400 text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Phone</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    <a 
                      href="tel:+2347017304536" 
                      className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      +234 701 730 4536
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center">
                  <i className="fas fa-map-marker-alt text-indigo-600 dark:text-indigo-400 text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Location</h3>
                  <p className="text-gray-600 dark:text-gray-400">Nigeria, Osogbo</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/Awoyelevictor" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors"
                >
                  <i className="fab fa-github text-gray-700 dark:text-gray-300"></i>
                </a>
                <a 
                  href="https://www.linkedin.com/in/awoyele-victor" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors"
                >
                  <i className="fab fa-linkedin text-gray-700 dark:text-gray-300"></i>
                </a>
                <a 
                  href="https://x.com/FistPhoeni76748?t=Rz65iNEkrZ1hokO1j8Oeag&s=09" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors"
                >
                  <i className="fab fa-twitter text-gray-700 dark:text-gray-300"></i>
                </a>
                <a 
                  href="https://www.instagram.com/awoyele.victor.31/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors"
                >
                  <i className="fab fa-instagram text-gray-700 dark:text-gray-300"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <form onSubmit={handleSubmit} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-md">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-600 dark:text-white"
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-600 dark:text-white"
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-600 dark:text-white"
                  required
                  disabled={isSubmitting}
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting || !emailjsReady}
                className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white rounded-lg transition-colors flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;