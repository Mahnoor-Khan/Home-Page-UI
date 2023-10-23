import logo from '../Assets/logo.svg';
import fb from '../Assets/fb-icon.svg';
import twitter from '../Assets/twitter-icon.svg';
import google from '../Assets/google-plus-icon.svg';
import insta from '../Assets/insta-icon.svg';

function Footer() {return(<>
<div className='flex flex-col md:flex-row gap-[30px] mx-[64px] md:mx-[100px] xl:mx-[240px] md:justify-between mt-[200px] pb-[120px]'>
    <div className='flex flex-col lg:flex-row gap-[180px]'>
    <div className='flex flex-col gap-[10px] items-center'>
        <img src={logo} alt="_logo"/>
        <div className='flex gap-[20px] md:gap-[10px]'>
            <img src={fb} alt="_fb" className='bg-white rounded-full p-[20px] lg:p-[20px] px-[25px] md:p-[10px] md:px-[15px] lg:px-[25px] '/>
            <img src={twitter} alt="_twitter" className='bg-white rounded-full p-[20px] lg:p-[20px] md:p-[10px] '/>
            <img src={google} alt="_google" className='bg-white rounded-full p-[20px] lg:p-[20px] md:p-[10px] '/>
            <img src={insta} alt="_insta" className='bg-white rounded-full p-[20px] lg:p-[20px] md:p-[10px] '/>
        </div>
    </div>
    <div className='flex flex-row lg:flex-col gap-[20px] justify-center align-baseline'>
        <p className='text-[#E5E5E5] text-left font-gilroy text-base font-medium leading-[30px]'>Home</p>
        <p className='text-[#E5E5E5] text-left font-gilroy text-base font-medium leading-[30px]'>Dashboard</p>
        <p className='text-[#E5E5E5] text-left font-gilroy text-base font-medium leading-[30px]'>Our App</p>
        <p className='text-[#E5E5E5] text-left font-gilroy text-base font-medium leading-[30px]'>Contacts</p>
    </div>
    </div>
    <div className='flex flex-col gap-[64px]'>
        <p className='text-white font-gilroy text-5xl font-bold leading-normal'>Join To Our Newsletter</p>
        <div className='flex gap-[20px] flex-wrap items-center justify-center'>
        <input type="text" placeholder='Enter your name' className='bg-[#171717] py-[26px] w-full lg:w-[426px] pl-[20px]  rounded-[12px]'/>
        <button className="bg-gradient-to-r from-[#FAB00C] to-[#FA0064] py-[26px] px-[50px] rounded-[12px] text-white">
        Subscribe
              </button>
        </div>
    </div>
</div>
</>)}

export default Footer;