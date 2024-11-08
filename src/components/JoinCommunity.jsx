import { useState } from "react";
import axios from "axios";
import emailjs from "emailjs-com";
import { BsSend } from "react-icons/bs";

const JoinCommunity = ({ show, onClose }) => {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessages, setErrorMessages] = useState({});

  const googlesheetAPI =
    "https://sheet.best/api/sheets/6747ad5c-2840-4b30-8564-8a398b0364c3";

  const sendEmail = (e) => {
    e.preventDefault();

    const name = e.target.user_name.value.trim();
    const email = e.target.user_email.value.trim();
    const errors = {};

    if (!email) {
      errors.email = "Please enter your email.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Please enter a valid email address";
    }

    if (Object.keys(errors).length === 0) {
      setLoading(true);
      emailjs
        .sendForm(
          "service_n321785",
          "template_zdqf97i",
          e.target,
          "dxYmFVX6N945DEO9m"
        )
        .then(
          (result) => {
            setSent(true);
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        )
        .finally(() => {
          setLoading(false);
        });

      axios
        .post(googlesheetAPI, { Name: name, Email: email })
        .then((response) => {
          console.log("Google Sheets Response:", response);
        })
        .catch((error) => {
          console.error("Error sending data to Google Sheets:", error);
        });

      e.target.reset();
    }
    setErrorMessages(errors);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative bg-white rounded-lg shadow-lg max-w-md w-full p-8">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        <h2 className=" text-center  text-purple-900">Join our Community</h2>
        {/* change font of the community name to be unique  */}
        <h1 className="text-4xl font-bold  text-center mt-2 text-purple-900 font-mono">
          UoN Coding Club
        </h1>

        {loading ? (
          <p className="text-green-400 font-semibold text-center mt-4">
            Sending email...
          </p>
        ) : sent ? (
          <p className="text-green-400 font-semibold text-center mt-4">
            Confirmation email sent, thank you!
          </p>
        ) : (
          <form onSubmit={sendEmail} className="mt-6">
            <div className="text-red-600 font-semibold">
              {errorMessages.email && <p>{errorMessages.email}</p>}
            </div>
            <div className="mb-4">
              <input
                name="user_name"
                className="w-full px-4 py-2 border rounded-md"
                placeholder="Please enter your Name"
              />
            </div>
            <div className="mb-4">
              <input
                name="user_email"
                className="w-full px-4 py-2 border rounded-md"
                placeholder="Please enter your Email"
              />
            </div>
            <button
              type="submit"
              className="flex items-center justify-center w-full py-2 bg-purple-700 text-white rounded-md hover:bg-purple-800"
            >
              <p className="mr-2">Join</p> <BsSend />
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default JoinCommunity;
