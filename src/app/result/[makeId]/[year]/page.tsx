import { MakeResponse } from '@/components/make-select'
import { NavBar } from '@/components/nav-bar'
import { api } from '@/lib/api'
import { Loader2 } from 'lucide-react'
import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { CarList } from './car-list'

export async function generateStaticParams() {
  try {
    const years = [
      '2015',
      '2016',
      '2017',
      '2018',
      '2019',
      '2020',
      '2021',
      '2022',
      '2023',
      '2024',
    ]
    const data = await api
      .get('/vehicles/GetMakesForVehicleType/car?format=json')
      .then((res) => res.data as MakeResponse)

    return data.Results.map((car) => {
      return years.map((year) => ({
        makeId: car.MakeId,
        year,
      }))
    })
  } catch {
    return []
  }
}

function Loading() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Loader2 className="animate-spin" />
    </div>
  )
}

function Error() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <h1>Sorry, we could not do that right now.</h1>
    </div>
  )
}

export default async function Page({
  params,
}: {
  params: Promise<{ makeId: string; year: string }>
}) {
  const { makeId, year } = await params

  return (
    <main className="w-full h-screen flex flex-col items-center relative">
      <NavBar short />
      <ErrorBoundary fallback={<Error />}>
        <Suspense fallback={<Loading />}>
          <section className="w-full h-full max-w-7xl flex flex-col p-4 gap-16">
            <CarList makeId={makeId} year={year} />
          </section>
        </Suspense>
      </ErrorBoundary>
    </main>
  )
}
