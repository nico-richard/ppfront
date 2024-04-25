'use client'
import React, { useEffect, useState } from 'react'
import { Vehicles } from '@/models/Vehicles.model'
import styles from './VehicleList.module.sass'
import Spinner from './Spinner'

const VehicleList = () => {
    const [vehicles, setVehicles] = useState<Vehicles[]>([])
    const [isVehicles, setIsVehicles] = useState<boolean>(true)

    useEffect(() => {
        const fetchVehicles = async () => {
            const response = await fetch('api/vehicles')
            const data: { vehicles: Vehicles[] } = await response.json()
            if (data.vehicles.length === 0) {
                setIsVehicles(false)
            }
            setVehicles(data.vehicles)
        }
        fetchVehicles()
    }, [])

    return (
        <div className={styles.vehicle_list}>
            <h1>Liste des véhicules</h1>
            {!isVehicles ? (
                <p>Pas de véhicule trouvé</p>
            ) : (
                <ul>
                    {vehicles && vehicles.length > 0 ? (
                        vehicles.map((vehicle) => (
                            <li key={vehicle.id}>
                                {vehicle.brand} {vehicle.model}
                            </li>
                        ))
                    ) : (
                        <Spinner />
                    )}
                </ul>
            )}
        </div>
    )
}

export default VehicleList
