import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const LogIn = () => {
  const {singInUser, singInWithGoogle} = useContext(AuthContext)
  const navigate = useNavigate()

    const handelLogIn = e => {
        e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;
      console.log(email, password);
      singInUser(email, password)
      .then(result => {
        console.log(result.user);
        e.target.reset()
        navigate('/')
      })
      .catch(error => {
        console.error(error)
      })

    }

    const handelGoogleSingIn = ()=> {
      singInWithGoogle()
      .then( result => {
        console.log(result.user);
      })
      .catch(error => console.error(error))
    }
    return (
        <div>
            <div className="hero min-h-[70vh] bg-base-300 rounded-xl mt-12">
  <div className="hero-content flex-col ">
    <div className="text-center ">
      <h1 className="text-4xl font-bold">Login now!</h1>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handelLogIn} className="card-body">
        {/* <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
        </div> */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className="p-2 text-xl text-black font-medium">New to here ? please <Link to = '/register'>
      <button className="btn btn-link font-extrabold text-2xl">Register </button>
      </Link>
      </p>
      <p>
        <button onClick={handelGoogleSingIn} className="btn btn-ghost my-2 ml-2 font-extrabold text-2xl">Google </button>
        </p>
    </div>
  </div>
</div>
        </div>
    );
};

export default LogIn;