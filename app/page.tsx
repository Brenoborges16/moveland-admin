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
    <div className="flex h-screen items-center justify-center">
      <button
        onClick={handleConnectStrava}
        className="bg-orange-500 text-white px-6 py-3 rounded-xl text-lg hover:bg-orange-600"
      >
        Conectar com Strava
      </button>
    </div>
  )
}
export default function BemVindo() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-white text-black">
      <h1 className="text-4xl font-bold mb-4">🚀 Bem-vindo ao MoveLand!</h1>
      <p className="text-lg">Você se conectou com sucesso via Strava. Agora é só curtir o movimento! 🏃‍♂️</p>
    </main>