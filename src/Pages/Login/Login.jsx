import { useContext, useEffect, useState } from 'react';
import bg from '../../assets/loginbg.png'
import img from '../../assets/others/authentication1.png'
import { loadCaptchaEnginge, LoadCanvasTemplate,  validateCaptcha } from 'react-simple-captcha';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/ContextComponent';
import toast from 'react-hot-toast';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';


const Login = () => {

    const [disabledLogin,setDisableLogin] = useState(true)
    const {logIn} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/'
    
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        logIn(email,password)
        .then(result => {
            console.log(result.user);    
            toast.success('Login Successfully')
            navigate(from,{replace:true})
        })
        .catch(error => {
            console.log(error.message);
        })

    }

    const handleOnChange = e => {
        // console.log(e.target.value);
        const userInputCaptch = e.target.value
        if(validateCaptcha(userInputCaptch)){
            setDisableLogin(false)
        }
        else{
            setDisableLogin(true)
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
                        <input onBlur={handleOnChange} className='block px-4 rounded-lg border w-[535px] h-[52px]' type="text" name="" id="" placeholder='Type Here Captcha' />
                        <label className='block mt-3'>
                        <LoadCanvasTemplate />
                        </label>
                    </div>
                    <div className='w-[535px] mx-auto'>
                        <input disabled={disabledLogin} className={`text-2xl py-6 font-semibold rounded-lg ${disabledLogin ? 'bg-gray-400 cursor-not-allowed' : 'bg-[rgba(209,160,84,0.70)] cursor-pointer'}  text-white w-full`} type="submit" value="Sign In" name="" id="" />
                    </div>
                </form>
                <div className='text-center mt-3'>
                <p className='text-[rgba(209,160,84,0.70)] text-xl font-medium'>New here? <Link to='/signup'>Create a New Account</Link></p>
                    <SocialLogin/>
                </div>
            </div>
            </div>
        </section>
    );
};

export default Login;