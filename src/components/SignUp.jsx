import React, { use } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";

const SignUp = () => {
  const navigate = useNavigate();
  const { createUser, googleSignIn, setUser, updateUser } = use(AuthContext);
  const handleSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photoURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const isLongEnough = password.length >= 6;

    if (!hasUppercase) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password must have at least one UPPERCASE letter.",
      });
    }

    if (!hasLowercase) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password must have at least one lowercase letter.",
      });
    }

    if (!isLongEnough) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password should be at least 6 characters long.",
      });
    }
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        if(user){
          navigate('/')
          updateUser({
          displayName: name,
          photoURL: photo
        })
          .then(() => {
            setUser({...user,displayName: name,
          photoURL: photo});
          })
          .catch((error) => {
            console.log(error);
            setUser(user);
          });
          e.target.reset()
        }
      })
      .catch((error) => {});
  };
  const handleGoogleRegister = (e) => {
    e.preventDefault();
    googleSignIn()
      .then((result) => {
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error.message,
        });
      });
  };
  return (
    <div>
      <div className="my-10 flex justify-center  items-center">
        <div className="card border bg-blue-50 text-blue-900 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSignUp} className="fieldset">
              <h1 className="text-center text-3xl font-bold">Sign Up</h1>
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                required
                className="input"
                placeholder="Name"
              />
              <label className="label">Photo URL</label>
              <input
                type="text"
                name="photoURL"
                className="input"
                placeholder="Photo URL"
              />

              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                required
                className="input"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                required
                className="input"
                placeholder="Password"
              />

              <button className="btn btn-outline btn-info  my-4">SignUp</button>
              <button
                className="btn btn-outline btn-success"
                onClick={handleGoogleRegister}
              >
                <FcGoogle></FcGoogle> Sign Up With Google
              </button>
            </form>
            <p>
              Already Have an Account?{" "}
              <Link className="text-blue-900 underline" to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
