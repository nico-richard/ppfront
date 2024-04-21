import { auth } from '@/../auth'

export default async function Accueil() {
    const session = await auth()

    return (
        <div>
            <h1>Accueil</h1>
        </div>
    )
}
