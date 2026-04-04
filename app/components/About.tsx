import Image from "next/image"

export default function About(){
	return(
		<section id="about" className="py-14 px-8">
		
<div className="grid grid-cols-2 gap-16">
		
		<div className="relative h-96 w-96 rounded-full overflow-hidden ring-4 ring-accent">
		<Image src="/connoraboutimg.jpg"  alt="placeholder img" fill className="object-cover"/>
		</div>

		<div className="flex flex-col items-center"> 
			<h2 className="text-4xl font-bold mb-4">About</h2>
			<p className="text-foreground/70 leading-relaxed">Connor Alexander is a Nottingham-based videographer and content creator with a passion for visual storytelling. Graduating with a BA in Content Creation, Connor brings a creative eye and technical precision to every project — from brand campaigns to personal showreels. His work spans commercial, lifestyle, and event videography, crafting narratives that connect and resonate.</p>
		</div>

		<div className="flex gap-8 mt-8">
			<div>
				<p className="text-3xl fontbold">28</p>
				<p className="text-sm text-foreground/60">Projects Completed</p>
			</div>

			<div>
				<p className="text-3xl fontbold">1,584</p>
				<p className="text-sm text-foreground/60">Instagram Likes</p>
			</div>

			<div>
				<p className="text-3xl fontbold">BA</p>
				<p className="text-sm text-foreground/60">Content Creation</p>
			</div>
		</div>
</div>
		</section>
	)
}