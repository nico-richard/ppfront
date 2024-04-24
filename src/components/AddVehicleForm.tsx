'use client'
import React, { FormEvent } from 'react'
import styles from './AddVehicleForm.module.sass'

const AddVehicleForm = () => {
    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        await fetch('/api/createVehicleSubmit', {
            method: 'POST',
            body: formData,
        })
    }
    return (
        <div className={styles.add_vehicle_form}>
            <h1>Ajouter un véhicule</h1>
            <form onSubmit={onSubmit}>
                <label htmlFor="brand">Marque</label>
                <input type="text" name="brand" />
                <label htmlFor="model">Modèle</label>
                <input type="text" name="model" />
                <label htmlFor="equipment">Equipement</label>
                <input type="text" name="equipment" />
                <label htmlFor="owner">Propriétaire</label>
                <input type="text" name="owner" />
                <label htmlFor="date">Date de prise de vue</label>
                <input type="date" name="date" />
                <label htmlFor="licensePlate">Plaque d&apos;immatriculation</label>
                <input type="text" name="licensePlate" />
                <label htmlFor="comment">Commentaires</label>
                <input type="textarea" name="comment" />
                <button type="submit">Ajouter</button>
            </form>
        </div>
    )
}

export default AddVehicleForm
