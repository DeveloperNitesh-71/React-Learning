import React, { useEffect, useState } from 'react'
import axios from 'axios'
const App = () => {

  const [imagedata, setImagedata] = useState([])
  const [index, setIndex] = useState(1)
  async function getImage() {
    let response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=15`)
    setImagedata(response.data);

  }
  useEffect(() => {
    setImagedata([])
    getImage()
  }, [index])

  let contentLoading = <div className='text-white '>Loading...</div>
  if (imagedata.length > 0) {
    contentLoading = imagedata.map((image, idx) => {
      return <a href={image.url} target='_blank' key={idx}><img  src={image.download_url} className='h-50 w-50 object-cover' /></a>
    })
  }

  return (
    <div className='min-h-screen bg-black p-5 gap-2.5 flex flex-wrap items-center justify-center'>
      {contentLoading}
      <div className="buttons flex gap-2.5 fixed bottom-2">
        <button className='bg-amber-500 text-white text-lg font-medium px-5 py-px rounded active:scale-98'
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1)
            }
          }
          }
        >Prev</button>
        <p className='text-white text-lg font-medium'>Page {index}</p>
        <button className='bg-amber-500 text-white text-lg font-medium px-5 py-px rounded active:scale-98'
          onClick={() => {
            setIndex(index + 1)
          }
          }
        >Next</button>
      </div>
    </div>
  )
}

export default App