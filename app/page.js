import HeroSlider from "@/components/hero";
import Timeline from "@/components/timeline";
import Footer from "@/components/footer";

export default function Home() {
	return (
		<div className="scroll-smooth">
			<HeroSlider />
			<Timeline />
			<Footer />
		</div>
	);
}
