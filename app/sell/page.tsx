import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { BookOpen, Upload } from 'lucide-react'

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
            <Link href="/shop" className="hover:text-purple-400 transition-colors">Browse</Link>
            <Link href="/sell" className="hover:text-purple-400 transition-colors">Sell</Link>
            <Link href="/profile" className="hover:text-purple-400 transition-colors">Profile</Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <Card className="max-w-2xl mx-auto bg-gray-800 border-0">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Sell Your Book</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Book Title</Label>
                <Input id="title" placeholder="Enter the book title" className="bg-gray-700 border-gray-600" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="author">Author</Label>
                <Input id="author" placeholder="Enter the author's name" className="bg-gray-700 border-gray-600" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="isbn">ISBN (optional)</Label>
                <Input id="isbn" placeholder="Enter ISBN" className="bg-gray-700 border-gray-600" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="condition">Condition</Label>
                <Select>
                  <SelectTrigger id="condition" className="bg-gray-700 border-gray-600">
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
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select>
                  <SelectTrigger id="category" className="bg-gray-700 border-gray-600">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fiction">Fiction</SelectItem>
                    <SelectItem value="non-fiction">Non-Fiction</SelectItem>
                    <SelectItem value="mystery">Mystery</SelectItem>
                    <SelectItem value="sci-fi">Sci-Fi</SelectItem>
                    <SelectItem value="biography">Biography</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="price">Price ($)</Label>
                <Input id="price" type="number" placeholder="Enter price" min="0" step="0.01" className="bg-gray-700 border-gray-600" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="Describe the book's condition, any marks or highlights, etc." className="bg-gray-700 border-gray-600" />
              </div>
              <div className="space-y-2">
                <Label>Book Cover Image</Label>
                <div className="flex items-center justify-center w-full">
                  <Label
                    htmlFor="dropzone-file"
                    className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-600 border-dashed rounded-lg cursor-pointer bg-gray-700 hover:bg-gray-600 transition-colors"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <Upload className="w-10 h-10 mb-3 text-gray-400" />
                      <p className="mb-2 text-sm text-gray-400">
                        <span className="font-semibold">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-xs text-gray-500">PNG, JPG or GIF (MAX. 800x400px)</p>
                    </div>
                    <Input id="dropzone-file" type="file" className="hidden" />
                  </Label>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-purple-500 hover:bg-pink-500 transition-colors">List Book for Sale</Button>
          </CardFooter>
        </Card>
      </main>

      <footer className="bg-gray-800 mt-16 py-12 px-6">
        <div className="container mx-auto text-center text-gray-400">
          <p>&copy; 2023 SecondChapter. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}