
const SectionHeading = ({title,subTitle}) => {
    return (
        <div className="font-inter text-center mx-auto">
            <p className="text-[#D99904] text-xl font-normal border-b-4 pb-4 w-[424px]">--- {subTitle} ---</p>
            <h1 className="text-4xl font-normal text-[#151515] my-5 border-b-4 w-[424px] pb-4">{title}</h1>
        </div>
    );
};

export default SectionHeading;