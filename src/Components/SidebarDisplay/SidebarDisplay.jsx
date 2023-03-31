import React from "react";
import classes from "./SidebarDisplay.module.css"
import "./../../App.css"
import { useDispatch, useSelector } from "react-redux";
import { selectReport } from "../../store/slices/ReportSlice";


const SidebarDisplay = () => {
	const dispatch = useDispatch()
	const reports = useSelector(state => state.reports.list)
	return (
		<>
			<div className={classes.sidebar_container}>
				{reports.map(report => 
					<div 
						className={classes.select_button} 
						key={report.id}
						onClick={() => dispatch(selectReport(report.id))}
					>
						{report.name}
					</div>
				)}
			</div>
		</>
	)
} 

export default SidebarDisplay