import Skill from './Skill.jsx'


export const Card = ({ profile }) => {
  return (
    <div className='h-max w-[250px] bg-white px-5 py-5 flex flex-col items-center justify-center gap-2 shadow pb-0'>
      <div className='flex items-center justify-between w-full '>
        <button className='bg-green-400 rounded-full py-[3px] px-3 text-[13px] text-white'>Availabe</button>
        <span>{profile.price}</span>
      </div>
      <img src={profile.image} className='h-25 rounded-full' />
      <span className="name text-gray-800 font-medium">{profile.name}</span>
      <span className='post text-[12px] text-gray-600 font-medium'>{profile.role}</span>
      <span className="work text-sky-500 text-[12px]"><i class="fa-regular fa-building"></i> Epic coders</span>
      <div className='flex items-center gap-1'>
        {profile.skills.map((skill, idx) => {
          return <Skill key={idx} skill={skill} />
        })}
      </div>
      <p className='text-[12px] text-gray-800 text-center w-full'>{profile.description}</p>
      <hr className='w-20 bg-gray-500 h-px border-0 mt-[10px]' />
      <button className='uppercase text-[12px] font-medium py-2 hover:bg-blue-400 w-[250px] h-[50px] hover:text-white transition-all duration-500'>view profile</button>
    </div>
  )
}

export default Card
