'use client'

import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Mock login - replace with real auth later
    router.push('/home')
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/background.png"
          alt="Background"
          fill
          className="object-cover opacity-30"
        />
      </div>

      <div className="z-10 flex flex-col items-center gap-6 w-full max-w-md px-4">
        {/* Top spacing */}
        <div className="h-24">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
        {/* Login Form */}
        <div className="w-full bg-black/50 border-2 border-[#FF6B4A] p-6 text-center rounded-lg">
          <h3 className="text-[#00FF00] mb-4">ENTER CREDENTIALS:</h3>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="warrior@junkbrawl.com"
            className="w-full bg-black/70 border border-[#00FF00] text-[#00FF00] p-2 mb-4 rounded"
          />

          <div className="text-center text-[#FFFF00] text-sm mb-4">
            1INCH TOKEN SWAP READY
          </div>

          <div className="bg-black/70 border border-gray-600 p-2 mb-6 rounded text-center text-gray-400">
            ETH → TRASH: 0.001 ETH
          </div>

          <div className="text-center text-[#FFFF00] text-sm mb-4">
            <button
              onClick={handleSubmit}
              className="w-full bg-[#FF6B4A] hover:bg-[#FF8B6A] text-black font-bold py-3 rounded transition-colors"
            >
              ENTER THE JUNK BRAWL
            </button>
          </div>
        </div>

        {/* Push TRASH WARRIORS to bottom */}
        <div className="flex-grow"></div>

        {/* TRASH WARRIORS at bottom */}
        <div className="text-center mb-8">
          <h2 className="text-[#FFFF00] text-4xl font-bold">TRASH WARRIORS</h2>
        </div>
      </div>
    </div>
  )
}
