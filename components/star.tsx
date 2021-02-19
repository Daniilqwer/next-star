import styled from '@emotion/styled';

import { jsx, css, keyframes } from '@emotion/react';
import Image from 'next/image';

const Star = ({left, animationDelay, time}) => {

		const star_ran = keyframes`
			0% {
				top: -60px;
				transform: rotate(0deg);
			}
			100% {
				top: 1000px;
				transform: rotate(400deg);
			}
		`
		const breakpoints = [800, 750, 600, 550]

		const mq = breakpoints.map(
		  bp => `@media (max-width: ${bp}px)`
		)

		const Star = styled.div({
			position: "absolute",
			left: `${left}px`,
			top: `-100px`,
			animation: `${star_ran} ${time}s ease-in infinite`,
			animationDelay: `${animationDelay}s`,

			[mq[0]]: {
	          left: `${left - 40}px`
	        },
	        [mq[1]]: {
	          left: `${left - 70}px`
	        },
	        [mq[2]]: {
	          left: `${left - 150}px`
	        },
	        [mq[3]]: {
	          left: `${left - 190}px`
	        },
		});
 
		return (
			<Star>
				<Image
				    src="/images/star.png"
				    height={75} 
				    width={75} 
				    alt="star"
				  />
			</Star>
		);
};

export default Star;