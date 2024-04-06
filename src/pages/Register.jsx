import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { updateProfile } from "firebase/auth";
import { isStrongPassword, validateEmail } from "../utilities/inputvalidation";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const Register = () => {
  const { createUser, signUpWithGoogle, signUpWithFacebook, signUpWithGithub } =
    useContext(AuthContext);
  const [isPassword, setIsPassword] = useState(true);
  const navigate = useNavigate();

  // register user with email and password
  async function handleRegister(e) {
    e.preventDefault();
    const displayName = e.target.displayName.value;
    const email = e.target.email.value;
    const pass = e.target.password.value;
    console.log(validateEmail(email), isStrongPassword(pass));
    const result = await createUser(email, pass);
    await updateProfile(result.user, {
      displayName: displayName,
    });
    e.target.reset();
    navigate("/");
  }

  // register user with google
  function handleSignUpWithGoogle() {
    signUpWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => console.error(error.message));
  }

  // register user with facebook
  function handleSignUpWithFacebook() {
    signUpWithFacebook();
  }

  // register user with Github
  async function handleSignUpWithGitHub() {
    const result = await signUpWithGithub();

    console.log(result.user);
  }

  return (
    <div className="card mt-6 py-5 shrink-0 w-full max-w-sm mx-auto shadow-2xl bg-base-100">
      <h3 className="text-center text-2xl font-bold">Register now</h3>
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Display Name</span>
          </label>
          <input
            name="displayName"
            type="text"
            placeholder="Display name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <input
              type={isPassword ? "password" : "text"}
              name="password"
              placeholder="Password"
              minLength="8"
              required
              className="grow"
            />
            <span onClick={() => setIsPassword(!isPassword)}>
              {!isPassword ? <FaRegEye /> : <FaRegEyeSlash />}
            </span>
          </label>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </div>
      </form>

      <p className="text-center">
        Have account{" "}
        <Link to="/login">
          <button className="btn btn-link">Login</button>
        </Link>
      </p>

      <p className="text-center">
        Sign up with{" "}
        <button
          onClick={handleSignUpWithGoogle}
          className="btn btn-sm btn-link text-blue-600 underline"
        >
          Google
        </button>
      </p>

      <p className="text-center">
        Sign up with{" "}
        <button
          onClick={handleSignUpWithFacebook}
          className="btn btn-sm btn-link text-blue-600 underline"
        >
          Facebook
        </button>
      </p>
      <p className="text-center">
        Sign up with{" "}
        <button
          onClick={handleSignUpWithGitHub}
          className="btn btn-sm btn-link text-blue-600 underline"
        >
          Git Hub
        </button>
      </p>
    </div>
  );
};

export default Register;
