import { use, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { FcGoogle } from 'react-icons/fc';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const Login = () => {
    const navigate = useNavigate();
    const [showPassword,setShowPassword]=useState(false)
    const {signInUser,googleSignIn}=use(AuthContext)
    const handleGoogleSignIn=(e)=>{
        e.preventDefault()
        googleSignIn()
        .then(result=>{
            const user=result.user
          if (user?.email) {
        Swal.fire({
          icon: 'success',
          title: 'You have successfully logged in.',
          text: 'Login Successful',
        });
        navigate('/');
      }
         else {
        throw new Error("Invalid email");
      }         

                    
                  
        })
        .catch(error => {
                
               Swal.fire({
                         icon: 'error',
                         title: 'Error',
                         text: error.message,
                       });
              });
              
    }
    const handleLogin=(e)=>{
e.preventDefault()
const email=e.target.email.value;
        const password=e.target.password.value;
        signInUser(email,password)
        .then(result=>{
          
          const user=result.user;
          if(user?.email){
            navigate('/')
          Swal.fire({
                    icon: 'success',
                    title: 'You have successfully logged in.',
                    text: 'Login Successful',
                  });
          }
                  

                    
                  
        })
        .catch(error => {
                
               Swal.fire({
                         icon: 'error',
                         title: 'Error',
                         text: error.message,
                       });
              });
    }
    const handleShowPassword=(e)=>{
      e.preventDefault()
        setShowPassword(!showPassword)
    }
    return (
        <div className='my-20 h-full  flex justify-center items-center'>
          
            <div className="card border bg-blue-50 text-blue-900 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleLogin} className="fieldset">
            <h1 className='text-center text-3xl font-bold'>Log In Now</h1>
          <label className="label">Email</label>
          <input type="email"  name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
         <div className='relative'>
         <input 
         type={showPassword? 'text':'password'}
          name='password' className="input" placeholder="Password" />
         <button onClick={handleShowPassword} className='btn btn-ghost btn-xs absolute top-2 right-5'>{showPassword? <FaEyeSlash/>:<FaEye/>} </button>
         </div>
          <div><a  className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
          
                    <button className="btn btn-neutral " onClick={handleGoogleSignIn}><FcGoogle></FcGoogle> Sign In With Google</button>

        </form>
        <p>New to this site? Click here to <Link className='text-blue-900 underline' to='/signup'>SignUp</Link></p>
      </div>
    </div>
        </div>
    );
};

export default Login;