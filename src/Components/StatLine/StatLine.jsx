import React, { useEffect, useState } from "react";
import classes from './StatLine.module.css'


const StatLine = ({name, goal, done}) => {

	const [goalStyle, setGoalStyle] = useState({
			transition: `2s`,
			maxWidth: 0,
			minHeight: `max-content`,
			textAlign: `right`,
	})

	

	const animation = () => {
		let proportional = done/goal;
		let background = '';
		let maxWidth = `${proportional*100}%`;

		if(proportional < .25) {
			background = `#d54c4c`
		}
		if((.25 <= proportional) && (proportional < .5)) {
			background = `rgb(240, 240, 50)`
		}
		if((.5 <= proportional) && (proportional < .75)) {
			background = `rgb(158, 197, 113)`
		}
		if(proportional >= .75) {
			background = `rgb(120, 180, 120)`

		}
		setTimeout(() => {
			setGoalStyle({
				...goalStyle,
				maxWidth,
				background,
			});
		}, 500)
	}

	useEffect(() => {
		setGoalStyle({
			...goalStyle,
			transition: `0s`,
			maxWidth: 0,
		})
		animation();
		
	}, [name,goal,done])

	return (
		<div 
			className={ done/goal < 1 
			?
				classes.statline_container
			:
				classes.statline_container__complete
			}
		>
			<div className={classes.statline_name}>{name}</div>
			<div className={classes.statline_container_done}>
				<div
					className={classes.statline_container_done__progressbar}
					style={{...goalStyle}}
				>
					<div className={classes.statline_container__progressbar_value}>{done}₽</div>
				</div>
			</div>
			<div className={classes.statline_container_goal}>{goal}₽</div>
		</div>
	)
}

export default StatLine;