import heroImg from '../Assets/hero-img.svg';
import arrowImg from '../Assets/arrow-img.svg';
import playstoreIcon from '../Assets/playstore-icon.svg';
import appstoreIcon from '../Assets/appstore-icon.svg';

function Hero() {
    return (
      <>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-[40%] flex flex-col gap-[160px] z-[1]">
            <div className="flex flex-col gap-[30px] justify-left py-[154px] pl-[250px] pr-[50px] bg-black">
              <p className="text-white font-gilroy text-[72px] font-bold leading-normal text-left">
                Play Songs & Earn Money.
              </p>
              <p className='text-[#E5E5E5] font-Gilroy text-[18px] font-normal leading-[30px] text-left'>
                Sign up or login as a DJ and earn money playing requested song
                on clubs, patries.
              </p>
              <div className='flex gap-[20px]'>
                <button className='bg-gradient-to-r from-[#FAB00C] to-[#FA0064] py-[16px] px-[50px] rounded-[12px] text-white'>Get Start</button>
                <button className='rounded-[15px] border border-solid border-[#848484] bg-[rgba(47, 47, 47, 0.50)] py-[16px] px-[28px] bg-[#171717] backdrop-blur-[50px] text-white text-center font-gilroy text-base font-medium leading-[27px]'>Download App</button>
              </div>
            <div className='flex flex-col gap-[22px]'>
                <div className='flex gap-[6px] items-center'>
                    <p className='text-white font-gilroy text-3xl font-bold leading-normal'>Available on</p>
                    <img src={arrowImg} alt="_arrow-img"/>
                </div>
                <div className='flex gap-[20px]'>
                <button className='rounded-[15px] border border-solid border-[#848484] bg-[rgba(47, 47, 47, 0.50)] py-[18px] px-[31px] bg-[#171717] backdrop-blur-[50px] text-white text-center font-gilroy text-base font-medium leading-[27px] flex gap-[10px] items-center'><img src={playstoreIcon} alt="_playstore"/>Play Store</button>
                <button className='rounded-[15px] border border-solid border-[#848484] bg-[rgba(47, 47, 47, 0.50)] py-[18px] px-[34px] bg-[#171717] backdrop-blur-[50px] text-white text-center font-gilroy text-base font-medium leading-[27px] flex gap-[10px] items-center'><img src={appstoreIcon} alt="_appstore"/>App Store</button>
                </div>
            </div>
            </div>
          </div>
          <div className="w-full md:w-[60%] bg-[#000]">
            <img src={heroImg} alt="_hero" className='md:ml-[-400px]'/>
          </div>
        </div>
      </>
    );
}

export default Hero;