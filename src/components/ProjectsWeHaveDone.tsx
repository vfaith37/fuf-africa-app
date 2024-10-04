import React from "react";
import HorizontalScroll from "./horizontalScrollable";
import { useNavigate } from "react-router-dom";
import { scrollData } from "../data";

const PWHD: React.FC = () => {
	const navigate = useNavigate();
	
	const handleLearnMore = (id: number) => {
		navigate(`/project/readmore/${id}`, { state: { item: scrollData.find(data => data.id === id) } });
	};

	return (
		<section className="py-10 md:py-16">
			<div className="text-black px-5 md:px-10 xl:px-56">
				<div className="flex items-center gap-4">
					<div className="border border-black h-[1px] w-12" />
					<p className="text-sm md:text-base font-bold">PROJECTS WE HAVE DONE</p>
				</div>
				<div className="pt-6 md:pt-8 px-2">
					<h1 className="font-bold text-2xl md:text-3xl mb-4 md:mb-5">
						We are creating a place where children with special needs can thrive
					</h1>
				</div>
			</div>
			<HorizontalScroll>
				{scrollData.map((item) => (
					<div key={item.id} className="relative flex-none w-96 px-8 py-12 rounded-md bg-cover text-white"
						style={{ backgroundImage: `url(${item.images[0]})` }}>
						{/* Overlay */}
						<div className="absolute inset-0 bg-black opacity-50 rounded-md"></div>

						<div className="relative flex flex-col z-10 h-72">
							<h2 className="font-semibold">{item.title}</h2>
							<p className="">{item.paragraphs[0]}</p>
							<button className="px-9 py-4 bg-white text-black self-end rounded-md absolute bottom-0"
								onClick={() => handleLearnMore(item.id)}>Learn more</button>
						</div>
					</div>
				))}
			</HorizontalScroll>
		</section>
	);
};

export default PWHD;
