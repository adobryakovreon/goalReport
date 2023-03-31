import React, { useEffect, useState } from "react";
import classes from "./ReportDisplay.module.css"
import "./../../App.css"
import Report from "../Report/Report";
import { useSelector } from "react-redux";
import Settingsbar from "../Settingsbar/Settingsbar";

const ReportDisplay = () => {
	
	const [report] = useSelector(state => state.reports.list.filter(report => report.id === state.reports.selected));
	const [selectedReport, setSelectedReport] = useState(report);

	const [seletedGroups, setSelectedGroups] = useState(report.groups) 
	const [filterList, setFilterList] = useState(seletedGroups.map(group => group.id))


	useEffect(() => {
		setSelectedReport(report);
	}, [report]);

	const setFilter = (filterList) => {
	
	}

	return (
		<div className={classes.reportDisplay_container}>
			<Settingsbar filters={setFilter} groups={selectedReport.groups}/>
			<Report report={selectedReport}/>
		</div>
	)
} 

export default ReportDisplay