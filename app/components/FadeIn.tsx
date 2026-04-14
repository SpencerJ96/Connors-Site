"use client"

import { useInView } from "framer-motion"
import { useRef } from "react"
import { motion } from "framer-motion"

export default function FadeIn( {children, delay = 0} : { children:React.ReactNode, delay?: number } ){
	const ref = useRef(null)
	const isInView = useInView(ref, {once : true})
	
	return(
		<motion.div
		ref={ref}
		initial={{ opacity: 0, y: 20 }}
		animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
		transition={{ duration: 1, delay }}
		>
			{children}
		</motion.div>
	)
}