'use client'

import { api } from '@/lib/api'
import { SelectValue } from '@radix-ui/react-select'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import { useState } from 'react'
import { Button } from './ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger } from './ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'

export interface Car {
  MakeId: number
  MakeName: string
  VehicleTypeId: number
  VehicleTypeName: string
}

export interface MakeResponse {
  Count: number
  Message: string
  SearchCriteria: string
  Results: Car[]
}

export function CarSelect() {
  const [makeId, setMakeId] = useState<number | null>(null)
  const [year, setYear] = useState<string | null>(null)
  const { data } = useQuery({
    queryKey: ['cars'],
    queryFn: async () => {
      return await api
        .get('/vehicles/GetMakesForVehicleType/car?format=json')
        .then((res) => res.data as MakeResponse)
    },
  })

  return (
    <div className="w-full max-w-5xl h-48 bg-secondary/80 p-6 rounded-xl">
      <Tabs defaultValue="buy">
        <TabsList className="gap-6">
          <TabsTrigger
            className="data-[state=active]:border-b-pink-900"
            value="buy"
          >
            Buy cars
          </TabsTrigger>
          <TabsTrigger
            value="rent"
            className="data-[state=active]:border-b-pink-900"
          >
            Rent cars
          </TabsTrigger>
        </TabsList>
        <TabsContent value="buy" className="px-4 py-8 grid grid-cols-3">
          <Select onValueChange={(val) => setMakeId(Number(val))}>
            <SelectTrigger className="rounded-none">
              <SelectValue placeholder="Select a car" />
            </SelectTrigger>
            {data && (
              <SelectContent>
                {data.Results.map((item, idx) => (
                  <SelectItem
                    value={String(item.MakeId)}
                    key={item.MakeId + '-' + idx}
                  >
                    {item.MakeName}
                  </SelectItem>
                ))}
              </SelectContent>
            )}
          </Select>
          <Select onValueChange={(val) => setYear(val)}>
            <SelectTrigger className="rounded-none">
              <SelectValue placeholder="Select year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2024">2024</SelectItem>
              <SelectItem value="2023">2023</SelectItem>
              <SelectItem value="2022">2022</SelectItem>
              <SelectItem value="2021">2021</SelectItem>
              <SelectItem value="2020">2020</SelectItem>
              <SelectItem value="2019">2019</SelectItem>
              <SelectItem value="2018">2018</SelectItem>
              <SelectItem value="2017">2017</SelectItem>
              <SelectItem value="2016">2016</SelectItem>
              <SelectItem value="2015">2015</SelectItem>
            </SelectContent>
          </Select>
          <Link href={`/result/${makeId}/${year}`}>
            <Button
              className="rounded-none bg-violet-900 w-full"
              disabled={!makeId || !year}
            >
              Next
            </Button>
          </Link>
        </TabsContent>
        <TabsContent value="rent" className="grid grid-cols-3">
          <p className="italic opacity-40">W.I.P... Come back later!</p>
        </TabsContent>
      </Tabs>
    </div>
  )
}
