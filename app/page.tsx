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
    <div className="flex min-h-screen items-center justify-center">
      <button
        onClick={handleConnectStrava}
        className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 text-lg font-bold"
      >
        Conectar com Strava
      </button>
    </div>
  )
}
