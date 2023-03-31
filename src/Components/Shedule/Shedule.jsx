import React from "react";
import classes from "./Shedule.module.css"
import "./../../App.css"
import StatLine from "../StatLine/StatLine";


const Shedule = ({group}) => {

	return (
		<div className={classes.shedule_container}>
			<StatLine {...group}/>
			<div className={classes.shedule_container__worker_container}>
				{group.workers.map(worker => <StatLine key={worker.id} {...worker}/>)}
			</div>
		</div>
	)
} 

export default Shedule;