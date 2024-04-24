import React from 'react'
import VehicleList from './VehicleList'
import AddVehicleForm from './AddVehicleForm'
import styles from './VehiclePage.module.sass'

const VehiclePage = () => {
    return (
        <div className={styles.vehicle_page}>
            <VehicleList />
            <AddVehicleForm />
        </div>
    )
}

export default VehiclePage
