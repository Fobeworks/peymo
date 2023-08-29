import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/components/landing/imageslider.css"
import React from 'react'

const ImageSlider = ({ images }) => {

	const settings = {
		infinite: true,
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		lazyLoad: true,
		autoplay: true,
		autoplaySpeed: 2000,
	};
	return (
		<>
			<div className="imgslider">
				<Slider {...settings}>
					{images.map((item, index) => (
						<div key={item.id} className="testimonials-card-section" >
							<div className="testimonials-card">
								<div className="testimonial-image">
									<img src={item.src} alt="Testimonial" />
								</div>
								<div className="testimony">
									<h1>I am happy here</h1>
									<p>Deserunt amet minim et proident elit amet anim non ullamco dolor ipsum esse exercitation. Incididunt laboris cillum irure sint. Reprehenderit et incididunt officia est eiusmod voluptate nostrud irure eu aliquip excepteur fugiat labore. Nostrud enim eiusmod culpa proident quis duis aliqua. Laborum ad excepteur non excepteur enim laboris commodo ex officia labore ullamco.</p>
								</div>
							</div>
						</div>
					))}
				</Slider>
			</div>

		</>
	)
}

export default ImageSlider;
