import { configureStore } from '@reduxjs/toolkit'
import reportSlice from './slices/ReportSlice'

const store = configureStore({
	reducer: {
		reports: reportSlice
	}
})
export default store