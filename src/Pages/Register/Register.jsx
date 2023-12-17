import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const { registerUser, updateUser } = useContext(AuthContext);
  const [passLength, setPassLength] = useState(false);
  const [isCapLetter, setIsCapLetter] = useState(false);
  const [isSpecialChar, setIsSpecialChar] = useState(false);
  const [buttonDisabled, setbuttonDisabled] = useState(true);

  const handlePassOnChange = (e) => {
    const passwordFieldValue = e.target.value;

    passwordFieldValue.length > 5 ? setPassLength(true) : setPassLength(false);

    const oneCapLetter = /^(?=.*[A-Z])[\s\S]*$/.test(passwordFieldValue);
    oneCapLetter ? setIsCapLetter(true) : setIsCapLetter(false);

    const oneSpecialChar = /^(?=.*[!@#$%^&*()_+])[\s\S]*$/.test(
      passwordFieldValue
    );
    oneSpecialChar ? setIsSpecialChar(true) : setIsSpecialChar(false);

    // setbuttonDisabled(passLength && isCapLetter && isSpecialChar);
  };

  //This is why useEffect is used here: It seems like you might be encountering an issue with the asynchronous nature of state updates in React. If you are checking the conditions immediately after setting the state, the updated state might not be available yet.

  // To address this, you can use the useEffect hook to perform the state-checking logic after the state updates have been applied

  //Toggling the button
  useEffect(() => {
    if (passLength && isCapLetter && isSpecialChar) {
      setbuttonDisabled(false);
    } else {
      setbuttonDisabled(true);
    }
  }, [passLength, isCapLetter, isSpecialChar]);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const image = form.get("image");
    const email = form.get("email");
    const password = form.get("password");

    registerUser(email, password)
      .then((res) => {
        updateUser(name, image)
          .then(() => toast.success(`${name} Created an account successfully`))
          .catch((error) => toast.error(error.message));
      })
      .catch((error) => toast.error(error.message));
  };
  return (
    <div>
      <Helmet>
        <title>Register | CAREER⚡FAIR</title>
      </Helmet>
      <div>
        <div className="hero min-h-[90vh] py-8">
          <div className="hero-content w-[350px] sm:w-[500px]">
            <div className="card w-full shadow-2xl bg-base-100">
              <form onSubmit={handleRegister} className="card-body">
                <h1 className="text-4xl font-bold mb-3 text-center">
                  Create an account!!
                </h1>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo</span>
                  </label>
                  <input
                    type="text"
                    name="image"
                    placeholder="Your Photo URL"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="text"
                    name="password"
                    placeholder="Your Password"
                    className="input input-bordered mb-3"
                    onChange={handlePassOnChange}
                    required
                  />
                  <div id="password-validators" className="text-sm">
                    <p>Must have at least:</p>
                    <div>
                      <p
                        className={
                          passLength ? "text-green-400" : "text-red-600"
                        }
                      >
                        - {passLength ? "✅" : "⛔"} 6 characters
                      </p>
                      <p
                        className={
                          isCapLetter ? "text-green-400" : "text-red-600"
                        }
                      >
                        - {isCapLetter ? "✅" : "⛔"} one Capital Letter
                      </p>
                      <p
                        className={
                          isSpecialChar ? "text-green-400" : "text-red-600"
                        }
                      >
                        - {isSpecialChar ? "✅" : "⛔"} one special
                        character(eg. ! @ # $ % ^ & * ( ) _ +)
                      </p>
                    </div>
                  </div>
                </div>
                <div className="form-control mt-6 mb-4">
                  <button
                    className={`btn ${
                      buttonDisabled ? "btn-disabled" : "btn-primary"
                    }`}
                  >
                    Register
                  </button>
                </div>
                <p>
                  Already have an account? Please{" "}
                  <Link to="/login" className="text-blue-500 underline">
                    Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
