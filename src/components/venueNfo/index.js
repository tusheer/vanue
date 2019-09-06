import React from 'react';
import Zoom from 'react-reveal/Zoom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import icon_calendar from '../../resources/images/icons/calendar.png';
import icon_location from '../../resources/images/icons/location.png';

const VunueNfo = () => {
	return (
		<div className="bck_black">
			<div className="center_wrapper ">
				<div className="vn_wrapper row">
					<Zoom duration={500} className="col-md-6">
						<div className="vn_item col-md-6">
							<div className="vn_outer">
								<div className="vn_inner">
									<div className="vn_icon_square bck_red" />
									<div
										className="vn_icon"
										style={{
											background: `url(${icon_calendar})`,
										}}
									/>
									<div className="vn_title">Event Date & Time</div>
									<div className="vn_desc">7 August 2017 @10.00 pm</div>
								</div>
							</div>
						</div>
					</Zoom>

					<Zoom duration={500} delay={500} className="col-md-6">
						<div className="vn_item col-md-6">
							<div className="vn_outer">
								<div className="vn_inner">
									<div className="vn_icon_square bck_yellow" />
									<div
										className="vn_icon"
										style={{
											background: `url(${icon_location})`,
										}}
									/>
									<div className="vn_title">Event Location</div>
									<div className="vn_desc">345 Speer Street Oakland, CA 9835</div>
								</div>
							</div>
						</div>
					</Zoom>
				</div>
			</div>
		</div>
	);
};

export default VunueNfo;
