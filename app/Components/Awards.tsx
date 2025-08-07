import React from 'react'

const Awards = () => {
  return (
    <div className='flex justify-center items-center flex-col'>
        <h2 className="text-4xl font-bold text-center flex justify-center items-center underline underline-offset-4 mb-6">Awards</h2>
        <ul className="space-y-4">
            <li className="flex items-center gap-3">
                <span role="img" aria-label="trophy" className="text-2xl">🏆</span>
                National UCMAS Competition 2016 (Champion)
            </li>
            <li className="flex items-center gap-3">
                <span role="img" aria-label="rocket" className="text-2xl">🚀</span>
                Cubes in Space Astronomy Competition, NASO 2021 (Finalist)
            </li>
            <li className="flex items-center gap-3">
                <span role="img" aria-label="presentation" className="text-2xl">📊</span>
                Powerpoint Presentation Competition 2024 (Finalist)
            </li>
            <li className="flex items-center gap-3">
                <span role="img" aria-label="medal" className="text-2xl">🥉</span>
                Wikipedia Asian Month 2019 (Third)
            </li>
            <li className="flex items-center gap-3">
                <span role="img" aria-label="microphone" className="text-2xl">🎤</span>
                Slam Poetry Competition (First)
            </li>
           
        </ul>


    </div>
  )
}

export default Awards