import { MakeResponse } from '@/components/car-select'
import { NavBar } from '@/components/nav-bar'
import { api } from '@/lib/api'
import { Loader2 } from 'lucide-react'
import { Suspense } from 'react'
import { CarList } from './car-list'

export async function generateStaticParams() {
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
    .get('/veicles/GetMakesForVehicleType/car?format=json')
    .then((res) => res.data as MakeResponse)

  return data.Results.map((car) => {
    return years.map((year) => ({
      makeId: car.MakeId,
      year,
    }))
  })
}

function Loading() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Loader2 className="animate-spin" />
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
      <Suspense fallback={<Loading />}>
        <section className="w-full h-full max-w-7xl flex flex-col p-4 gap-16">
          <CarList makeId={makeId} year={year} />
        </section>
      </Suspense>
    </main>
  )
}
