import dj1 from '../Assets/dj-1.svg';
import dj2 from '../Assets/dj-2.svg';
import dj3 from '../Assets/dj-3.svg';
import tickIcon from '../Assets/tick-icon.svg';

function DJ(){
    const dfsData = [
        {name: "Djmlk" , img : dj1, state: "California" , spins : "1,380", followers: "58.7K", following: "4,553"},
        {name: "Djmlk" , img : dj2, state: "California" , spins : "1,380", followers: "58.7K", following: "4,553"},
        {name: "Djmlk" , img : dj3, state: "California" , spins : "1,380", followers: "58.7K", following: "4,553"},
        {name: "Djmlk" , img : dj1, state: "California" , spins : "1,380", followers: "58.7K", following: "4,553"},
        {name: "Djmlk" , img : dj2, state: "California" , spins : "1,380", followers: "58.7K", following: "4,553"},
        {name: "Djmlk" , img : dj3, state: "California" , spins : "1,380", followers: "58.7K", following: "4,553"},
        {name: "Djmlk" , img : dj1, state: "California" , spins : "1,380", followers: "58.7K", following: "4,553"},
        {name: "Djmlk" , img : dj2, state: "California" , spins : "1,380", followers: "58.7K", following: "4,553"},
        {name: "Djmlk" , img : dj3, state: "California" , spins : "1,380", followers: "58.7K", following: "4,553"},
    ]
    return(<>
    <div className="flex flex-col gap-[99px] bg-[#000] px-[64px] md:px-[100px] xl:px-[240px]">
        <h2 className="text-white text-center font-gilroy text-6xl font-bold leading-normal">Featured DJs</h2>
        <div className="flex flex-wrap gap-[120px] justify-center items-center">
            {dfsData?.map((item) => (
            <div className="flex gap-[20px]">
                <img src={dj1} alt="_dj" className='rounded-[150px]'/>
                <div className='flex flex-col gap-[20px]'>
                    <div className='flex flex-col gap-1'>
                        <p className='flex gap-[10px] text-white font-gilroy text-4xl font-semibold leading-[54px]'>{item.name}<img src={tickIcon} alt="_tick"/></p>
                        <p className='text-[#FFF] text-left font-gilroy text-sm font-medium leading-[21px]'>{item.state}</p>
                    </div>
                    <div className='flex gap-[30px]'>
                        <div className='flex flex-col gap-[4px]'>
                            <p className='text-white font-gilroy text-base font-semibold leading-normal'>{item.spins}</p>
                            <p className='text-white font-gilroy text-sm font-normal leading-normal'>Spins</p>
                        </div>
                        <div className='flex flex-col gap-[4px]'>
                            <p className='text-white font-gilroy text-base font-semibold leading-normal'>{item.followers}</p>
                            <p className='text-white font-gilroy text-sm font-normal leading-normal'>Followers</p>
                        </div>
                        <div className='flex flex-col gap-[4px]'>
                            <p className='text-white font-gilroy text-base font-semibold leading-normal'>{item.following}</p>
                            <p className='text-white font-gilroy text-sm font-normal leading-normal'>Following</p>
                        </div>
                    </div>
                </div>
            </div>
            ))}
        </div>
    </div>
    </>)
}

export default DJ;