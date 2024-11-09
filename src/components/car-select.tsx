'use client'

import { Button } from './ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger } from './ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'

export function CarSelect() {
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
          <Select>
            <SelectTrigger className="rounded-none">Select car</SelectTrigger>
            <SelectContent>
              <SelectItem value="2024">Aston Martin</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="rounded-none">Select year</SelectTrigger>
            <SelectContent>
              <SelectItem value="2024">2024</SelectItem>
            </SelectContent>
          </Select>
          <Button className="rounded-none bg-violet-900">Next</Button>
        </TabsContent>
        <TabsContent value="rent" className="grid grid-cols-3">
          <p className="italic opacity-40">W.I.P... Come back later!</p>
        </TabsContent>
      </Tabs>
    </div>
  )
}
