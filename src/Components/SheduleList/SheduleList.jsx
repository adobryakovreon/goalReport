import React from "react";
import classes from "./SheduleList.module.css"
import "./../../App.css"


const SheduleList = ({children}) => {

	return (
		<>
			<div className={classes.sheduleList_container}> 
				{children}
			</div>
		</>
	)
} 

export default SheduleList