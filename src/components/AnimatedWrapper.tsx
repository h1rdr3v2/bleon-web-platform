'use client'

import { motion } from 'framer-motion'

interface AnimatedWrapperProps {
  children: React.ReactNode
  initial?: any
  animate?: any
  whileInView?: any
  exit?: any
  transition?: any
  viewport?: any
  className?: string
}

const AnimatedWrapper = ({ 
  children, 
  initial, 
  animate, 
  whileInView,
  exit, 
  transition, 
  viewport,
  className 
}: AnimatedWrapperProps) => {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      whileInView={whileInView}
      exit={exit}
      transition={transition}
      viewport={viewport}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedWrapper
