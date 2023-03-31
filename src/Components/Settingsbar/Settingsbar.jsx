import React, { useEffect, useState } from "react";
import classes from "./Settingsbar.module.css"
import "./../../App.css"

const Settingsbar = ({groups, filters}) => {

	const [filter, setFilter] = useState(groups)

	useEffect(() => {
		setFilter(groups)
	}, [groups])

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
				{filter.map(group => 
					<div 
					className={classes.settingsbar__quick_select__selectitem}
					>
						<input checked value={group.id} type="checkbox" />
						<div 
							key={group.id} 
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