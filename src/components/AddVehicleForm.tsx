'use client'
import React, { FormEvent, useEffect, useState } from 'react'
import styles from './AddVehicleForm.module.sass'
import { Brand } from '@/models/Brands.model'
import { FaSquarePlus } from 'react-icons/fa6'
import VuesInput from './VuesInput'
import Photo from '@/models/Photo.model'

const AddVehicleForm = ({ inputPhotos }: { inputPhotos: Photo[] }) => {
    const [brands, setBrands] = useState<Brand[]>([])
    const [displayAddBrand, setDisplayAddBrand] = useState<boolean>(false)
    const [newBrand, setNewBrand] = useState<string>('')

    useEffect(() => {
        getBrands()
    }, [])

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        await fetch('/api/createVehicleSubmit', {
            method: 'POST',
            body: formData,
        })
    }

    const handleAddBrand = async () => {
        await fetch('/api/brands', {
            method: 'POST',
            body: JSON.stringify({ newBrand: newBrand.toUpperCase() }),
        })
        setNewBrand('')
        setDisplayAddBrand(false)
        getBrands()
    }

    const getBrands = async () => {
        const response = await fetch('/api/brands')
        const data: { brands: Brand[] } = await response.json()
        setBrands(data.brands)
    }

    return (
        <div className={styles.add_vehicle_form}>
            <h1>Ajouter un véhicule</h1>
            <form onSubmit={onSubmit}>
                <label htmlFor="brand">Marque</label>
                <div className={styles.brand_select_and_add}>
                    <select name="brand">
                        {brands && brands.length > 0 ? (
                            brands.map((brand, index) => (
                                <option key={index} value={brand.name}>
                                    {brand.name}
                                </option>
                            ))
                        ) : (
                            <option>Chargement</option>
                        )}
                    </select>
                    <div className={styles.add_brand_button}>
                        <FaSquarePlus size={40} onClick={() => setDisplayAddBrand(!displayAddBrand)} />
                    </div>
                </div>
                {displayAddBrand ? (
                    <div className={styles.new_brand}>
                        <label htmlFor="newBrand">Nouvelle marque</label>
                        <input type="text" name="newBrand" onChange={(e) => setNewBrand(e.target.value)} />
                        <button type="button" onClick={handleAddBrand} disabled={newBrand.length <= 0}>
                            Ajouter
                        </button>
                    </div>
                ) : null}
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
                <textarea name="comment" id="" rows={3}></textarea>
                <VuesInput photos={inputPhotos} />
                <button type="submit">Ajouter</button>
            </form>
        </div>
    )
}

export default AddVehicleForm
