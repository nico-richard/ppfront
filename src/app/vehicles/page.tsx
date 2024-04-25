import VehicleList from '@/components/VehicleList'
import AddVehicleForm from '@/components/AddVehicleForm'

export default async function Vehicle() {
    return (
        <div className="vehicle_page">
            <VehicleList />
            <AddVehicleForm />
        </div>
    )
}
