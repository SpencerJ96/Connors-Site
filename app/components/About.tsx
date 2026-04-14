"use client"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa"


function CountUp ( { target, isInView, step = 1 } : { target: number, isInView: boolean, step? : number}) {
	const [count, setCount] = useState(0)

	useEffect(() => {
		if (isInView) {
			const interval = setInterval(() => {
				setCount(prev =>{
					if (prev >= target) {
						clearInterval(interval)
						return target
					}
					return prev + step
				})
			},20)
		}
	}, [isInView])
		return <span>{count}</span>

}




export default function About(){
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true })


	return(
		<section id="about" className="py-14 px-8 md:px-16">
		
<div className="grid grid-cols-1 gap-8   md:grid-cols-2 md:gap-16">
<div className="flex flex-col items-center justify-self-center gap-4">
	
	<div className="relative h-100 w-64 md:w-96 rounded-full overflow-hidden ring-4 ring-accent">
		<Image src="/ConnorImg.jpg"  alt="placeholder img" fill className="object-cover"/>
	</div>
	<div className="flex gap-4 justify-center">
    <a href="#" className="text-3xl hover:text-accent transition-colors duration-200"><FaInstagram /></a>
    <a href="#" className="text-3xl hover:text-accent transition-colors duration-200"><FaTiktok /></a>
    <a href="#" className="text-3xl hover:text-accent transition-colors duration-200"><FaYoutube /></a>
  </div> 
</div>
		<div className="flex flex-col items-center pl-1 w-full"> 
			<h2 className="text-accent text-5xl font-bold mb-4">About</h2>
			<div className="w-16 h-0.5 bg-accent mb-6"></div>
			<p className="py-4 text-small md:text-2xl text-foreground/70 leading-relaxed">Connor Alexander is a Nottingham-based videographer and content creator with a passion for visual storytelling. Graduating with a BA in Content Creation, Connor brings a creative eye and technical precision to every project — from brand campaigns to personal showreels. His work spans commercial, lifestyle, and event videography, crafting narratives that connect and resonate.</p>
		
		<div ref={ref}className="flex gap-8 mt-8 text-center bg-foreground/5 rounded-2xl px-8 py-6">
			<div>
				<p className="text-accent text-4xl font-bold mb-2"> <CountUp target={28} isInView={isInView} /> </p>
				<p className="uppercase tracking-widest text-xs text-foreground/60 ">Projects Completed</p>
			</div>

			<div>
				<p className="text-accent text-4xl font-bold mb-2"> <CountUp target={1584} isInView={isInView} step={12} /> </p>
				<p className="uppercase tracking-widest text-xs text-foreground/60 ">Instagram Likes</p>
			</div>

			<div>
				<p className="text-accent text-4xl font-bold mb-2">BA</p>
				<p className="uppercase tracking-widest text-xs text-foreground/60 ">Content Creation</p>
			</div>
		</div>
		
		</div>

		
</div>
		</section>
	)
}