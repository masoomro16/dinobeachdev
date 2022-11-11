import React, {useState} from 'react'

const ServiceTitle = () => {
  const [Focus, setFocus] = useState(true);

  const focusedText = 'text-5xl text-pink';

  return (
    <div>
        <h2 className={`text-4xl mx-16 my-12 text-blue font-bold title-text hover:${focusedText} ${Focus && focusedText}`} onClick={setFocus}
        >Day at Dino Beach</h2>
    </div>
  )
}

export default ServiceTitle