import profiles from '../data/Profiles.js'
import Card from './Card'

const CardContainer = () => {
  
  return (
    <div className='bg-blue-100 py-25 flex flex-wrap justify-center gap-5 w-8/10 m-auto mt-20'>
      {profiles.map(data => {
        return <Card key={data.id} profile={data}/>
      })}
    </div>
  )
}

export default CardContainer
