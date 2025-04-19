'use client'

export default function Home() {
  const handleConnectStrava = () => {
    const clientId = process.env.NEXT_PUBLIC_STRAVA_CLIENT_ID
    const redirectUri = process.env.NEXT_PUBLIC_STRAVA_REDIRECT_URI
    const scope = 'read,activity:read_all,profile:read_all'

    const authUrl = `https://www.strava.com/oauth/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&approval_prompt=force&scope=${scope}`

    window.location.href = authUrl
  }

  return (
    <main className="flex flex-col h-screen items-center justify-center bg-white text-black p-8">
      <h1 className="text-3xl font-bold mb-6">Página inicial do MoveLand 🏃‍♂️🌍</h1>
      <button
        onClick={handleConnectStrava}
        className="bg-orange-500 text-white px-6 py-3 rounded-xl text-lg hover:bg-orange-600"
      >
        Conectar com Strava
      </button>
    </main>
  )
}
