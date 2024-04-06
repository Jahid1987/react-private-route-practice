import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const Home = () => {
  const { user, verifyEmail } = useContext(AuthContext);

  function handleEmailVerification() {
    verifyEmail()
      .then(() => console.log("sent"))
      .catch((error) => console.log(error.message));
  }

  return (
    <div>
      <h3 className="mb-5">This is home page</h3>
      {user?.emailVerified ? (
        <p>You are verified</p>
      ) : (
        <p
          onClick={handleEmailVerification}
          className="text-green-600 underline"
        >
          Verify your email
        </p>
      )}
    </div>
  );
};

export default Home;
