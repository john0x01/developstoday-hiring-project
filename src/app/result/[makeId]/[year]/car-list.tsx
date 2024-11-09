import { api } from '@/lib/api'

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
    <div className="flex flex-col gap-4">
      <h1>Marca: {cars[0].Make_Name}</h1>
      {cars.map((car, idx) => (
        <div key={car.Model_ID + '-' + idx}>
          <h2>
            {car.Make_Name} {car.Model_Name}
          </h2>
          <p>Ano: {year}</p>
        </div>
      ))}
    </div>
  )
}
