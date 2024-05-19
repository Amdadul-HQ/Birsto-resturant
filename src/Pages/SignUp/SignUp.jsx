
import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import bg from '../../assets/loginbg.png'
import img from '../../assets/others/authentication1.png'

const SignUp = () => {

    const handleSignUp = e => {
        e.preventDefault()

    }


    return (
        <section style={{
            background:`url('${bg}')`,
            backgroundSize:'cover',
            backgroundPosition:'center',
        }} className='h-screen flex justify-center items-center font-inter'>
            <div className='w-11/12 h-4/5 shadow-2xl gap-x-6 flex flex-row-reverse justify-center items-center'>
            <div className='w-1/2 flex justify-end'>
                <img className='w-[650px] bg-transparent' src={img} alt="" />
            </div>
            <div className='w-1/2'>
                <form className='w-full ' onSubmit={handleSignUp}>
                    <h1 className='text-4xl text-[#151515] font-bold text-center'>Sign Up</h1>
                    <div className='w-[535px] mx-auto mb-6'>
                        <label className='text-2xl font-semibold text-[#444] block mb-1' htmlFor='name'>Name</label>
                        <input className='block px-4 rounded-lg border mx-auto w-[535px] h-[52px]' type="text" name="name" id="name" placeholder='Type Here Name' />
                    </div>
                    <div className='w-[535px] mx-auto mb-6'>
                        <label className='text-2xl font-semibold text-[#444] block mb-1' htmlFor='email'>Email</label>
                        <input className='block px-4 rounded-lg border mx-auto w-[535px] h-[52px]' type="email" name="email" id="email" placeholder='Type Here Email' />
                    </div>
                    <div className='w-[535px] mx-auto mb-6'>
                        <label className='text-2xl font-semibold text-[#444] block mb-1' htmlFor='password'>Password</label>
                        <input className='block px-4 rounded-lg border w-[535px] h-[52px]' type="password" name="password" id="password" placeholder='Type Here Password' />
                    </div>
                    <div className='w-[535px] mx-auto'>
                        <input   className={`text-2xl py-6 font-semibold rounded-lg bg-[rgba(209,160,84,0.70)] cursor-pointer text-white w-full`} type="submit" value="Sign In" name="" id="" />
                    </div>
                </form>
                <div className='text-center mt-3'>
                <p className='text-[rgba(209,160,84,0.70)] text-xl font-medium'>Already registered?<Link to='/login'>Sign In Now</Link></p>
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

export default SignUp;