import { Parallax } from 'react-parallax';
const Cover = ({bg,heading,description,bgColor}) => {
    return (
        <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={bg}
        bgImageAlt="the dog"
        strength={-200}
    >
       <section  className='h-[700px] flex justify-center items-center mb-28'>
            <div className={`w-[1000px] h-[335px] bg-black bg-opacity-60 text-white flex justify-center items-center flex-col px-40 gap-y-3`}>
                <h1 className='uppercase text-5xl font-normal  text-center'>{heading}</h1>
                <p className=' text-base font-normal text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
            </div>
        </section>
    </Parallax>
    );
};

export default Cover;