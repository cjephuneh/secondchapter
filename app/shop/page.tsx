import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { BookOpen, Search, SlidersHorizontal, ChevronDown } from 'lucide-react'

export default function Component() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <header className="bg-gray-800 py-4 px-6 sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold flex items-center text-purple-400">
            <BookOpen className="mr-2" />
            SecondChapter
          </Link>
          <nav className="space-x-6">
            <Link href="/search" className="hover:text-purple-400 transition-colors">Browse</Link>
            <Link href="/sell" className="hover:text-purple-400 transition-colors">Sell</Link>
            <Link href="/profile" className="hover:text-purple-400 transition-colors">Profile</Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          <aside className="w-full md:w-64 space-y-6">
            <Card className="bg-gray-800 border-0">
              <CardContent className="p-4">
                <h2 className="text-lg font-semibold mb-4">Filters</h2>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">Category</label>
                    <Select>
                      <SelectTrigger className="w-full bg-gray-700 border-gray-600">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fiction">Fiction</SelectItem>
                        <SelectItem value="non-fiction">Non-Fiction</SelectItem>
                        <SelectItem value="mystery">Mystery</SelectItem>
                        <SelectItem value="sci-fi">Sci-Fi</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Condition</label>
                    <Select>
                      <SelectTrigger className="w-full bg-gray-700 border-gray-600">
                        <SelectValue placeholder="Select condition" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new">Like New</SelectItem>
                        <SelectItem value="good">Good</SelectItem>
                        <SelectItem value="fair">Fair</SelectItem>
                        <SelectItem value="poor">Poor</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Price Range</label>
                    <Slider defaultValue={[0, 100]} max={100} step={1} className="my-4" />
                    <div className="flex justify-between text-sm text-gray-400">
                      <span>$0</span>
                      <span>$100+</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button className="w-full bg-purple-500 hover:bg-pink-500 transition-colors">
                  <SlidersHorizontal className="mr-2 h-4 w-4" />
                  Apply Filters
                </Button>
              </CardFooter>
            </Card>
          </aside>
          <div className="flex-grow">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold">Search Results</h1>
              <div className="flex items-center space-x-2">
                <Input type="search" placeholder="Refine search..." className="w-64 bg-gray-800 border-gray-700" />
                <Button type="submit" size="icon" className="bg-purple-500 hover:bg-pink-500 transition-colors">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((book) => (
                <Card key={book} className="bg-gray-800 border-0 overflow-hidden group">
                  <CardContent className="p-0">
                    <div className="relative aspect-[2/3] overflow-hidden">
                      <img 
                        src={`/placeholder.svg?height=300&width=200&text=Book+${book}`}
                        alt={`Book ${book} cover`}
                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <p className="text-sm font-medium">Author Name</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center p-4">
                    <div>
                      <h3 className="font-semibold mb-1">Book Title {book}</h3>
                      <p className="text-sm text-gray-400">$19.99</p>
                    </div>
                    <Button variant="outline" size="sm" className="rounded-full hover:bg-purple-500 hover:text-white transition-colors">
                      View Details
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="mt-8 flex justify-center">
              <Button variant="outline" className="text-purple-400 hover:text-pink-400 transition-colors">
                Load More <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 mt-16 py-12 px-6">
        <div className="container mx-auto text-center text-gray-400">
          <p>&copy; 2023 SecondChapter. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}