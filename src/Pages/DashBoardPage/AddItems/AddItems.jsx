import { FaUtensils } from "react-icons/fa";
import SectionHeading from "../../../Component/SectionHeading/SectionHeading";
import { useForm } from "react-hook-form";
import { imageUpload } from "../../../Utility";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";

// const image_hosting_api = import.meta.env.VITE_IMAGE_HOSTING_API
// const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_api}`


const AddItems = () => {
  const axiosSecure = useAxiosSecure()
    const { register, handleSubmit , reset ,formState: { errors }  } = useForm();
    const onSubmit = async data =>{
      
      const imageFile = data.image[0]
      
      try{
        const image = await imageUpload(imageFile)
        const menuItem = {
          name:data.name,
          recipe:data.details,
          image,
          category:data.category,
          price:parseFloat(data.price)
        }
        const res = await axiosSecure.post('/addmenu',menuItem)
        if(res.data.insertedId){
          toast.success(`${name} Is Added in Menu`)
          reset()
        }

      }
      catch (err){
        console.log(err.message);
      }
      // const {data} = axiosCommon.post(image_hosting_url)
    } 
    


  return (
    <section>
      <div className="flex w-full justify-center mt-5 mb-6">
        <SectionHeading
          title="ADD AN ITEM"
          subTitle="What's new?"
        ></SectionHeading>
      </div>
      <div className="w-[990px] p-12 h-[830px] bg-[#F3F3F3] mx-auto ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="text-xl font-semibold text-[#444]" htmlFor="name">Recipe name*</label>
            <input  {...register("name",{ required: true })} className="bg-[#FFF] h-14 input block w-full mt-4" placeholder="Recipe name" id="name" name="name" type="text" />
            {errors.name && <span className="text-red-600 font-medium" >This field is required</span>}
          </div>
          <div className="flex items-center gap-x-6 mt-3">
            <div className="w-1/2">
              <label className="text-xl font-semibold text-[#444]">
                <div className="label">
                  <span className="text-xl font-semibold text-[#444]">Category*</span>
                </div>
                <select defaultValue='default' {...register("category",{ required: true })} className="select select-bordered bg-[#FFF] h-14 input block w-full">
                  <option disabled value='default'>
                  Category
                  </option>
                  <option value='salad'>SALAD</option>
                  <option value='pizza'>PIZZA</option>
                  <option value='soup'>SOUP</option>
                  <option value='dessert'>DESSERTS</option>
                  <option value='drinks'>DRINKS</option>
                </select>
              </label>
              {errors.category && <span className="text-red-600 font-medium" >This field is required</span>}
            </div>
            <div className="w-1/2">
            <label className="text-xl font-semibold text-[#444]" htmlFor="price">Price*</label>
            <input {...register("price",{ required: true })} className="bg-[#FFF] h-14 input block w-full mt-3" id="price" name="price" placeholder="Price" type="text" />
            {errors.price && <span className="text-red-600 font-medium" >This field is required</span>}
          </div>
          </div>
          <div className="mt-3">
          <label className="text-xl font-semibold text-[#444]" htmlFor="details">Recipe Details*</label>  
          <textarea {...register("details",{ required: true })} id="details" name="details" placeholder="Recipe Details" className="textarea textarea-bordered textarea-lg bg-[#FFF] h-[250px] input block w-full mt-3" ></textarea>
          {errors.details && <span className="text-red-600 font-medium" >This field is required</span>}
          </div>
          <div className="mt-6">
            <input {...register("image",{ required: true })} type="file" className="file-input file-input-bordered block  w-full max-w-xs" />
            {errors.image && <span className="text-red-600 font-medium" >This field is required</span>}
          </div>
          <div>
            <button type="submit" className="px-7 py-4 mt-9 bg-gradient-to-r from-[#835D23] to-[#B58130] text-xl font-bold flex items-center gap-x-2 text-white">Add Item <FaUtensils/></button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddItems;
