import songsImg from '../Assets/songs-img.svg';

function Songs() {
  return (
    <>
      <div className="flex flex-col gap-[39px] mx-[64px] md:mx-[100px] xl:mx-[240px] mt-[200px] rounded-[34px]" style={{backgroundImage: `url(${songsImg})`}}>
        <div className="flex flex-col gap-[20px] w-[411px] pl-[30px] sm:pl-[80px] md:pl-[150px] pt-[80px]">
          <p className="text-white font-gilroy text-5xl font-bold leading-normal text-left">
            Play songs Get Paid
          </p>
          <p className="text-[#E5E5E5] font-gilroy text-base font-medium leading-[27px] text-left">
            Sign up or login as a DJ and earn money playing requested song on
            clubs, patries.{" "}
          </p>
        </div>
        <button className="bg-gradient-to-r from-[#FAB00C] to-[#FA0064] py-[16px] px-[50px] mb-[80px] w-fit ml-[30px] sm:ml-[80px] md:ml-[150px] rounded-[12px] text-white">
          Sign In
        </button>
      </div>
    </>
  );
}

export default Songs;
