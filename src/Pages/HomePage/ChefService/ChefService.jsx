import bg from '../../../assets/home/chef-service.jpg'
const ChefService = () => {
    return (
        <section style={{
            backgroundImage:`url('${bg}')`,
            backgroundSize:'cover',
            backgroundPosition:'center',

        }} className='h-[572px] container mx-auto flex justify-center items-center mb-28'>
            <div className='w-[1000px] h-[335px] bg-white flex justify-center items-center flex-col px-40 gap-y-3'>
                <h1 className='uppercase text-5xl font-normal text-center'>Bistro Boss</h1>
                <p className='text-[#151515] text-base font-normal text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
            </div>
        </section>
    );
};

export default ChefService;