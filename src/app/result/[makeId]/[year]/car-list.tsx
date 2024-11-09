import { CarSelect } from '@/components/car-select'
import { Button } from '@/components/ui/button'
import { api } from '@/lib/api'
import Image from 'next/image'

interface Car {
  Make_ID: number
  Make_Name: string
  Model_ID: number
  Model_Name: string
}

interface Response {
  Count: number
  Message: string
  SearchCriteria: string
  Results: Car[]
}

async function getCars(makeId: string, year: string) {
  const res = await api.get(
    `/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`,
  )
  const data = res.data as Response
  return data.Results
}

export async function CarList({
  makeId,
  year,
}: {
  makeId: string
  year: string
}) {
  const cars = await getCars(makeId, year)

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-4xl font-bold">{cars[0].Make_Name}</h1>
      <div className="w-full h-[1px] bg-input mt-8" />
      <CarSelect cars={cars} />
      <div className="w-full h-[1px] bg-input" />
      <div className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold">Cars</h2>
        <div className="grid grid-cols-3 gap-8">
          {cars.map((car, idx) => (
            <div
              className="flex flex-col border rounded-xl overflow-hidden"
              key={car.Model_ID + '-' + idx}
            >
              <Image
                src={`/0${(idx % 3) + 1}.jpg`}
                alt={car.Model_Name}
                width={1080}
                height={608}
                className="w-full"
              />
              <div className="flex flex-col p-4 gap-3">
                <h3 className="text-lg font-semibold uppercase">
                  {year} {car.Make_Name} {car.Model_Name}
                </h3>
                <p className="text-sm opacity-60">
                  4.0 V8 Twin-turbo Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit.
                </p>
                <p className="text-xl font-bold">$89.400,00</p>
                <Button className="rounded-md">Compare</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
