'use client'

import Image from 'next/image'
import { useState } from 'react'

interface Quest {
  id: number
  title: string
  description: string
  progress: number
  total: number
  reward: number
}

const MOCK_QUESTS: Quest[] = [
  {
    id: 1,
    title: "Banana Bounty Hunter",
    description: "Collect 10 banana peels",
    progress: 3,
    total: 10,
    reward: 50
  },
  {
    id: 2,
    title: "Plastic Warrior",
    description: "Recycle 20 plastic bottles",
    progress: 15,
    total: 20,
    reward: 100
  }
]

export default function HomePage() {
  const [quests] = useState<Quest[]>(MOCK_QUESTS)

  return (
    <div className="min-h-screen relative bg-black/90">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/quests.png"
          alt="Background"
          fill
          className="object-cover opacity-60 mix-blend-overlay"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 p-4 pb-24">
        {/* Profile Stats - darker background */}
        <div className="bg-black/70 border-2 border-[#FF6B4A] rounded-lg p-6 mb-6 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-[#FFFF00] text-2xl font-bold">WARRIOR STATS</h2>
            <span className="text-[#00FF00]">Level 5</span>
          </div>

          {/* XP Bar */}
          <div className="w-full bg-gray-800 rounded-full h-4 mb-4">
            <div
              className="bg-[#00FF00] h-4 rounded-full"
              style={{ width: '60%' }}
            />
          </div>

          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="bg-black/30 p-3 rounded">
              <div className="text-[#FFFF00]">XP</div>
              <div className="text-2xl">1,234</div>
            </div>
            <div className="bg-black/30 p-3 rounded">
              <div className="text-[#FFFF00]">TRASH</div>
              <div className="text-2xl">50.5</div>
            </div>
          </div>
        </div>

        {/* Active Quests - removed button */}
        <div className="bg-black/70 border-2 border-[#FF6B4A] rounded-lg p-6 backdrop-blur-sm">
          <h2 className="text-[#FFFF00] text-2xl font-bold mb-4">ACTIVE QUESTS</h2>
          <div className="space-y-4">
            {quests.map(quest => (
              <div key={quest.id} className="bg-black/30 p-4 rounded">
                <div className="flex justify-between mb-2">
                  <h3 className="text-[#00FF00] font-bold">{quest.title}</h3>
                  <span className="text-[#FFFF00]">{quest.reward} XP</span>
                </div>
                <p className="text-gray-400 text-sm mb-2">{quest.description}</p>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div
                    className="bg-[#FF6B4A] h-2 rounded-full"
                    style={{ width: `${(quest.progress / quest.total) * 100}%` }}
                  />
                </div>
                <div className="text-right text-sm mt-1">
                  {quest.progress}/{quest.total}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* New Quest Button */}
      <div className="fixed bottom-8 left-0 right-0 z-20 px-4">
        <button className="w-full bg-[#FF6B4A] hover:bg-[#FF8B6A] text-black font-bold py-4 rounded-lg transition-colors shadow-lg">
          NEW QUEST
        </button>
      </div>
    </div>
  )
}
