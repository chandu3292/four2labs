import { freeSlots } from './_calendar'

export async function GET() {
  try {
    const slots = await freeSlots()
    return Response.json(
      { slots: slots.map((s) => s.toISOString()) },
      {
        headers: {
          // Browsers always ask again; Vercel's edge serves one shared copy worldwide
          // for 30s and refreshes it in the background for up to 5 min after that
          'Cache-Control': 'no-store',
          'Vercel-CDN-Cache-Control': 'max-age=30, stale-while-revalidate=300',
        },
      },
    )
  } catch (err) {
    console.error(err)
    return Response.json({ error: 'Could not load available times' }, { status: 500 })
  }
}
