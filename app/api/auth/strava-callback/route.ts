import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get('code')

  if (!code) {
    return NextResponse.json({ error: 'Código não recebido do Strava' }, { status: 400 })
  }

  try {
    const response = await fetch('https://www.strava.com/oauth/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        client_id: process.env.STRAVA_CLIENT_ID,
        client_secret: process.env.STRAVA_CLIENT_SECRET,
        code,
        grant_type: 'authorization_code',
      }),
    })

    const data = await response.json()

    if (!data.access_token) {
      return NextResponse.json({ error: 'Token inválido', data }, { status: 500 })
    }

    console.log('Usuário conectado via Strava:', data)

    return NextResponse.redirect(new URL('/bem-vindo', req.url))
  } catch (err) {
    console.error('Erro na callback do Strava:', err)
    return NextResponse.json({ error: 'Erro na autenticação com Strava' }, { status: 500 })
  }
}
