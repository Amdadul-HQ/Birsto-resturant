
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const {logInWithGoogle} = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/'

    const handleGoogleLogin = () => {
        logInWithGoogle()
        .then(result => {
            console.log(result.user);
            toast.success('Login Successfully')
            navigate(from,{replace:true})
        })
        .catch(error => {
            console.log(error.message);
        })
    }
  return (
    <div>
      <p className="text-xl font-medium text-[#444]">Or sign in with</p>
      <div className="text-4xl flex justify-center gap-x-6 mt-3">
        <FaFacebookF className="p-2 cursor-pointer border border-black rounded-full" />
        <FaGoogle
          onClick={handleGoogleLogin}
          className="p-2 cursor-pointer border border-black rounded-full"
        />
        <FaGithub className="p-2 cursor-pointer border border-black rounded-full" />
      </div>
    </div>
  );
};

export default SocialLogin;
