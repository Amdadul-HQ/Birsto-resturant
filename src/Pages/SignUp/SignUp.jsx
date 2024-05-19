
import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import bg from '../../assets/loginbg.png'
import img from '../../assets/others/authentication1.png'
import { useContext } from 'react';
import { AuthContext } from '../../Context/ContextComponent';
import { useForm } from 'react-hook-form';
import toast  from 'react-hot-toast';

const SignUp = () => {

    const {createUser,updateUser,logOut} = useContext(AuthContext)
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()

      const onSubmit = (data) => {
        console.log(data)
        createUser(data.email,data.password)
        .then(result =>{
            console.log(result.user);
            updateUser(data.name,null)
            .then(()=> {
                console.log('updated');
            })
            toast.success('Sign Up Successfully!')
            logOut()
            navigate('/login')
        })
        .catch(error => {
            console.log(error.message);
        })

      }

    // const handleSignUp = e => {
    //     e.preventDefault()
    //     const form = e.target;
    //     const name = form.name.value;
    //     const email = form.email.value;
    //     const password = form.password.value;

    //     createUser(email,password)
    //     .then(result =>{
    //         console.log(result.user);
    //         updateUser(name,null)
    //         .then(()=> {
    //             console.log('updated');
    //         })
    //         logOut()
    //         navigate('/login')
    //     })
    //     .catch(error => {
    //         console.log(error.message);
    //     })


    // }

    // console.log(watch("example"))
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
                <form className='w-full ' onSubmit={handleSubmit(onSubmit)}>
                    <h1 className='text-4xl text-[#151515] font-bold text-center'>Sign Up</h1>
                    <div className='w-[535px] mx-auto mb-2'>
                        <label className='text-2xl font-semibold text-[#444] block mb-1' htmlFor='name'>Name</label>
                        <input className='block px-4 rounded-lg border mx-auto w-[535px] h-[52px]'  {...register("name",{ required: true })} type="text" name="name" id="name" placeholder='Type Here Name' />
                        {errors.name && <span className='text-red-600'>This field is required</span>} 
                    </div>
                    <div className='w-[535px] mx-auto mb-2'>
                        <label className='text-2xl font-semibold text-[#444] block mb-1' htmlFor='email'>Email</label>
                        <input className='block px-4 rounded-lg border mx-auto w-[535px] h-[52px]'  {...register("email",{ required: true})} type="email" name="email" id="email" placeholder='Type Here Email' />
                        {errors.email && <span className='text-red-600'>This field is required</span>} 
                    </div>
                    <div className='w-[535px] mx-auto mb-2'>
                        <label className='text-2xl font-semibold text-[#444] block mb-1' htmlFor='password'>Password</label>
                        <input className='block px-4 rounded-lg border w-[535px] h-[52px]'  {...register("password",{ required:true , minLength:6 , maxLength:16 , pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$/ })} type="password" name="password" id="password" placeholder='Type Here Password' />
                        {errors.password?.type === "required" && (
        <p className='text-red-600' role="alert">Password required</p>
      )}
                        {errors.password?.type === "minLength" && (
        <p className='text-red-600' role="alert">Password Must be More Then 6 Character</p>
      )}
                        {errors.password?.type === "maxLength" && (
        <p className='text-red-600' role="alert">Password Must be Less Then 16 Character</p>
      )}
                        {errors.password?.type === "pattern" && (
        <p className='text-red-600' role="alert">Password Must have At least one upper case one lower case and one number</p>
      )}
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