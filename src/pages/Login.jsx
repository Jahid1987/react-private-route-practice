import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  function handleLogin(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        navigate("/");
      })
      .catch((error) => console.log(error.message));
  }
  return (
    <div className="hero mt-6 ">
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <h3 className="text-center text-2xl font-bold">Login now</h3>
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </form>

        <p className="text-center">
          New Please{" "}
          <Link to="/register">
            <button className="btn btn-link">Register</button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
