import React, { useEffect, useState } from "react";
import classes from "./Settingsbar.module.css"
import "./../../App.css"

const Settingsbar = ({groups}) => {

	const [groupList, setGroupList] = useState(groups)
	const [filterGroups, setFilterGroups] = useState(groups.map(group => group.id))
	useEffect(() => {
		setGroupList(groups)
		setFilterGroups(groups.map(group => group.id))
		// console.log(filterGroups)
	}, [groups])

	const switchGroupIndex = (e) => {
		if (e.target.checked) {
			setFilterGroups(filterGroups.filter(groupId => groupId !== e.target.value))
		} else {
			setFilterGroups(...filterGroups, e.target.value)
		}
		console.log(filterGroups)
	} 

	return (
		<div className={classes.settingsbar_container}>
			<div className={classes.settingsbar__settingspanel}>
				<button className={classes.button_input}>Filtres</button>
				<button className={classes.button_input}>Goal settings</button>
			</div>
			<div className={classes.settingsbar__description__wrapper}>
				<div className={classes.settingsbar__description}>
					Задайте цели для фокусировки вашей команды и роста вашего бизнеса. Установление конкретных показателей помогает вашей команде эффективно выполнять цели. amoCRM помогает вам видеть состояние продаж и отслеживать прогресс выполнения целей вашей команды.
				</div>
			</div>
			<div className={classes.settingsbar__quick_select}>
				{groupList.map(group => 
					<div 
						key={group.id}
						className={classes.settingsbar__quick_select__selectitem}
					>
						<input checked={filterGroups.includes(Number(group.id))} onChange={(e) => switchGroupIndex(e)} value={group.id} type="checkbox" />
						<div 
							value={group.id}
							>
							{group.name}
						</div>
					</div>
				)}
			</div>
		</div>
	)
} 

export default Settingsbar