import { auth } from '@/../auth'

export default async function Accueil() {
    const session = await auth()
    let sessionInfos
    if (session) {
        sessionInfos = <p>{session?.user?.name}</p>
    }
    return (
        <div>
            <h1>Accueil</h1>
        </div>
    )
}
