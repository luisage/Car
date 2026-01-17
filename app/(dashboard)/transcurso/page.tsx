'use client'
import { useEffect, useState } from 'react'
//import { SedanSVG } from '../../components/tipoAutos'
import { getAutoStatus, AutoStatus } from '../../actions/monitor/actions'
import Lane from '../../components/monitor/Carril'
import { motion, AnimatePresence } from 'framer-motion'

//import { prisma } from "@/lib/prisma";

export default function WaitingRoomScreen() {
const [autos, setAutos] = useState<AutoStatus[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAutoStatus()
      console.log('DATA FROM API:', data, Array.isArray(data))
      setAutos(data)
    }

    fetchData()
    const interval = setInterval(fetchData, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
  layout
  className="h-screen bg-gray-900 p-6 space-y-6"
>
      <AnimatePresence>
        {autos.map((auto) => (
        <Lane key={auto.id} auto={auto} />
        ))}
        </AnimatePresence>
    </motion.div>
  )
}
