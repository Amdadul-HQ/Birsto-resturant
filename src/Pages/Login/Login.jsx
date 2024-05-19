import { useEffect, useState } from 'react';
import bg from '../../assets/loginbg.png'
import img from '../../assets/others/authentication1.png'
import { loadCaptchaEnginge, LoadCanvasTemplate,  validateCaptcha } from 'react-simple-captcha';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa';


const Login = () => {

    const [disabledLogin,setDisableLogin] = useState(true)
    
    const handleLogin = e => {
        e.preventDefault();
        
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        

    }
    const handleOnChange = e => {
        // console.log(e.target.value);
        const userInputCaptch = e.target.value
        if(validateCaptcha(userInputCaptch)){
            setDisableLogin(false)
        }
    }

    useEffect(()=> {
        loadCaptchaEnginge(6); 
    },[])


    return (
        <section style={{
            background:`url('${bg}')`,
            backgroundSize:'cover',
            backgroundPosition:'center',
        }} className='h-screen flex justify-center items-center font-inter'>
            <div className='w-11/12 h-4/5 shadow-2xl gap-x-6 flex justify-center items-center'>
            <div className='w-1/2 flex justify-end'>
                <img className='w-[650px] bg-transparent' src={img} alt="" />
            </div>
            <div className='w-1/2'>
                <form className='w-full ' onSubmit={handleLogin}>
                    <h1 className='text-4xl text-[#151515] font-bold text-center'>Login</h1>
                    <div className='w-[535px] mx-auto mb-6'>
                        <label className='text-2xl font-semibold text-[#444] block mb-1' htmlFor='email'>Email</label>
                        <input className='block px-4 rounded-lg border mx-auto w-[535px] h-[52px]' type="email" name="email" id="email" placeholder='Type Here Email' />
                    </div>
                    <div className='w-[535px] mx-auto mb-6'>
                        <label className='text-2xl font-semibold text-[#444] block mb-1' htmlFor='password'>Password</label>
                        <input className='block px-4 rounded-lg border w-[535px] h-[52px]' type="password" name="password" id="password" placeholder='Type Here Password' />
                    </div>
                    <div className='w-[535px] mx-auto  mb-6'>
                        <input onChange={handleOnChange} className='block px-4 rounded-lg border w-[535px] h-[52px]' type="text" name="" id="" placeholder='Type Here Captcha' />
                        <label className='block mt-3'>
                        <LoadCanvasTemplate />
                        </label>
                    </div>
                    <div className='w-[535px] mx-auto'>
                        <input disabled={disabledLogin}  className={`text-2xl py-6 font-semibold rounded-lg ${disabledLogin ? 'bg-gray-400 cursor-not-allowed':'bg-[rgba(209,160,84,0.70)] cursor-pointer'} text-white w-full`} type="submit" value="Sign In" name="" id="" />
                    </div>
                </form>
                <div className='text-center mt-3'>
                <p className='text-[rgba(209,160,84,0.70)] text-xl font-medium'>New here? <Link to='/signup'>Create a New Account</Link></p>
                    <p className='text-xl font-medium text-[#444]'>Or sign in with</p>
                    <div className='text-4xl flex justify-center gap-x-6 mt-3'>
                    <FaFacebookF className='p-2 cursor-pointer border border-black rounded-full' />
                    <FaGoogle className='p-2 cursor-pointer border border-black rounded-full' />
                    <FaGithub className='p-2 cursor-pointer border border-black rounded-full' />
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
};

export default Login;