import React, {useEffect, useState} from "react";
import classes from "./Report.module.css"
import "./../../App.css"
import Shedule from "../Shedule/Shedule";


const Report = ({report}) => {

	const [test, setTest] = useState(report);

	useEffect(() => {
		setTest({});
		setTest(report)
	}, [report]);

	return (
		<div className={classes.report_container}>
			<h3 className={classes.report__name}>{report.name}</h3>
			{test.groups.map(group => <Shedule key={group.id} group={group}/>)}
		</div>
	)
} 

export default Report