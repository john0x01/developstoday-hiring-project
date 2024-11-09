import { SelectValue } from '@radix-ui/react-select'
import Link from 'next/link'
import { Button } from './ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger } from './ui/select'

interface Car {
  Make_ID: number
  Make_Name: string
  Model_ID: number
  Model_Name: string
}

export function CarSelect({ cars }: { cars: Car[] }) {
  return (
    <div className="flex flex-col w-full max-w-5xl bg-secondary/80 p-6 gap-6 rounded-xl">
      <h2 className="text-2xl font-bold text-violet-900">Select a Car</h2>
      <div className="grid grid-cols-3">
        <Select disabled>
          <SelectTrigger className="rounded-none">
            {cars[0].Make_Name}
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
        <Select>
          <SelectTrigger className="rounded-none">
            <SelectValue placeholder="Select a car" />
          </SelectTrigger>

          <SelectContent>
            {cars.map((item, idx) => (
              <SelectItem
                value={String(item.Model_ID)}
                key={item.Model_ID + '-' + idx}
              >
                {item.Model_Name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Link href="#">
          <Button className="rounded-none bg-violet-900 w-full">Search</Button>
        </Link>
      </div>
    </div>
  )
}
