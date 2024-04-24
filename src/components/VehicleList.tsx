'use client'
import React, { useEffect, useState } from 'react'
import { Vehicles } from '@/models/Vehicles.model'
import styles from './VehicleList.module.sass'

const VehicleList = () => {
    const [vehicles, setVehicles] = useState<Vehicles[]>([])

    useEffect(() => {
        const fetchVehicles = async () => {
            const response = await fetch('api/vehicles')
            const data: { vehicles: Vehicles[] } = await response.json()
            setVehicles(data.vehicles)
        }
        fetchVehicles()
    }, [])

    return (
        <div className={styles.vehicle_list}>
            <h1>Liste des véhicules</h1>
            <ul>
                {vehicles && vehicles.length > 0 ? (
                    vehicles.map((vehicle) => (
                        <li key={vehicle.id}>
                            {vehicle.brand} {vehicle.model}
                        </li>
                    ))
                ) : (
                    <li>Aucun véhicule trouvé</li>
                )}
            </ul>
        </div>
    )
}

export default VehicleList
