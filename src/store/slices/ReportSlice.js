import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	selected: 1,
	list: [
		{
			id:1,
			name:"Report1",
			groups:[
				{
					id: 1,
					name: "Отдел продаж",
					goal: 10000,
					done: 9000,
					workers: [
						{id: 1, name: 'worker1', goal: 5000, done: 2500},
						{id: 2, name: 'worker2', goal: 5000, done: 6500},
					]
				},
				{
					id:2,
					name: "Отдел разработки",
					goal: 50000,
					done: 39000,
					workers: [
						{id: 1, name: 'worker1', goal: 25000, done: 10000},
						{id: 2, name: 'worker2', goal: 25000, done: 5000},
					]
				},
				{
					id:3,
					name: "Отдел по работе с клиентами",
					goal: 60000,
					done: 44000,
					workers: [
						{id: 1, name: 'worker1', goal: 30000, done: 32000},
						{id: 2, name: 'worker2', goal: 30000, done: 12000},
					]
				},
				{
					id:4,
					name: "Отдел 2",
					goal: 60000,
					done: 44000,
					workers: [
						{id: 1, name: 'worker1', goal: 30000, done: 32000},
						{id: 2, name: 'worker2', goal: 30000, done: 12000},
					]
				}
			]
		},
		{
			id:2,
			name:"Report2",
			groups:[
				{
					id: 1,
					name: "Отдел продаж",
					goal: 20000,
					done: 9000,
					workers: [
						{id: 1, name: 'worker1', goal: 5000, done: 2500},
						{id: 2, name: 'worker2', goal: 5000, done: 6500},
					]
				},
				{
					id:2,
					name: "Отдел 2",
					goal: 60000,
					done: 44000,
					workers: [
						{id: 1, name: 'worker1', goal: 30000, done: 32000},
						{id: 2, name: 'worker2', goal: 30000, done: 12000},
					]
				}
			]
		},
		{
			id:3,
			name:"Report 3",
			groups:[
				{
					id: 1,
					name: "Отдел продаж",
					goal: 20000,
					done: 9000,
					workers: [
						{id: 1, name: 'worker1', goal: 5000, done: 2500},
						{id: 2, name: 'worker2', goal: 5000, done: 6500},
					]
				},
				{
					id:2,
					name: "Отдел 2",
					goal: 60000,
					done: 44000,
					workers: [
						{id: 1, name: 'worker1', goal: 30000, done: 32000},
						{id: 2, name: 'worker2', goal: 30000, done: 12000},
					]
				},
				{
					id:3,
					name: "Отдел 3",
					goal: 60000,
					done: 44000,
					workers: [
						{id: 1, name: 'worker1', goal: 30000, done: 32000},
						{id: 2, name: 'worker2', goal: 30000, done: 12000},
					]
				},
				{
					id:4,
					name: "Отдел 4",
					goal: 60000,
					done: 44000,
					workers: [
						{id: 1, name: 'worker1', goal: 30000, done: 32000},
						{id: 2, name: 'worker2', goal: 30000, done: 12000},
					]
				},
				{
					id:5,
					name: "Отдел 5",
					goal: 60000,
					done: 44000,
					workers: [
						{id: 1, name: 'worker1', goal: 30000, done: 32000},
						{id: 2, name: 'worker2', goal: 30000, done: 12000},
					]
				}
			]
		},
	],
}

export const reportSlice = createSlice({
	name: 'reports',
	initialState,
	reducers: {
		selectReport: (state,action) => {
			state.selected = action.payload;
		}
	},
})  

export const { selectReport } = reportSlice.actions

export default reportSlice.reducer