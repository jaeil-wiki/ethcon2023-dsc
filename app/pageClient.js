'use client'

import { useState, useEffect } from 'react'

export default function PageClient() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    console.log(1)
  })

  return ready && <>Hello</>
}
