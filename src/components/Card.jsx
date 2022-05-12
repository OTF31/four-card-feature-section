const Card = ({ topColor, title, paragraph, image }) => {
  return (
    <>
      <div className="border-2 relative border-none h-[225px] rounded-t-lg rounded-b-lg w-[310px] mx-auto bg-[#FFF] shadow-2xl shadow-GrayishBlue/[50%] flex flex-col items-center">
        <div
          className={`${topColor} w-[99.2%] rounded-full h-[10px] top-0 absolute`}
        ></div>
        <div className="bg-[#FFF] w-full rounded-b-lg h-[221px] z-30 bottom-0 absolute font-Poppins px-7 pt-5 tracking-[-0.04em]">
          <h3 className="font-[600] text-[1.3em] text-VeryDarkBlue">{title}</h3>
          <p className="font-[200] text-[0.75em] tracking-[0.06em] leading-[22px] mt-[5px] text-VeryDarkBlue">
            {paragraph}
          </p>
          <img
            src={image}
            alt="Supervisor"
            className="absolute right-0 m-7 bottom-0 w-[64px] h-[64px] scale-95"
          />
        </div>
      </div>
    </>
  );
};

export default Card;
