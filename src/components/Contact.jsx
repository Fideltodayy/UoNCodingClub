const Contact = () => {
  return (
    <section className="p-8 md:p-16 bg-gray-50">
      <h2 className="text-center text-2xl font-bold text-gray-800">
        Contact Us!
      </h2>
      <form className="mt-8 max-w-lg mx-auto">
        <input
          type="text"
          placeholder="Your Name"
          className="block w-full p-3 mb-4 border rounded"
        />
        <input
          type="email"
          placeholder="Email"
          className="block w-full p-3 mb-4 border rounded"
        />
        <textarea
          placeholder="Message"
          className="block w-full p-3 mb-4 border rounded"
        ></textarea>
        <button
          type="submit"
          className="w-full p-3 bg-purple-600 text-white rounded"
        >
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
