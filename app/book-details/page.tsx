import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BookOpen, Heart, MessageCircle, Share2, Star } from 'lucide-react'

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
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <img src="/placeholder.svg?height=600&width=400" alt="Book cover" className="w-full rounded-lg shadow-lg" />
          </div>
          <div className="md:w-2/3">
            <h1 className="text-4xl font-bold mb-2">The Great Gatsby</h1>
            <p className="text-xl text-gray-400 mb-4">by F. Scott Fitzgerald</p>
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-3xl font-bold text-purple-400">$12.99</span>
              <span className="text-sm text-gray-400 bg-gray-800 px-2 py-1 rounded">Very Good</span>
            </div>
            <div className="flex items-center space-x-1 mb-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className={`w-5 h-5 ${star <= 4 ? 'text-yellow-400' : 'text-gray-600'}`} fill="currentColor" />
              ))}
              <span className="ml-2 text-sm text-gray-400">(4.0 - 120 reviews)</span>
            </div>
            <p className="text-gray-300 mb-6">
              A classic novel set in the Jazz Age, "The Great Gatsby" tells the story of the mysterious millionaire Jay Gatsby and his obsession with the beautiful Daisy Buchanan. This pre-owned copy is in excellent condition, perfect for both collectors and first-time readers.
            </p>
            <div className="flex space-x-4 mb-8">
              <Button size="lg" className="bg-purple-500 hover:bg-pink-500 transition-colors">
                Add to Cart
              </Button>
              <Button size="lg" variant="outline" className="hover:bg-gray-800 transition-colors">
                <Heart className="mr-2" />
                Add to Wishlist
              </Button>
            </div>
            <Card className="bg-gray-800 border-0">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/placeholder.svg?height=50&width=50" alt="Seller avatar" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">John Doe</p>
                    <p className="text-sm text-gray-400">Seller • 4.8 ★ • 50+ books sold</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex justify-between">
                <Button variant="outline" className="hover:bg-gray-700 transition-colors">
                  <MessageCircle className="mr-2" />
                  Contact Seller
                </Button>
                <Button variant="ghost" className="hover:bg-gray-700 transition-colors">
                  <Share2 className="mr-2" />
                  Share
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((book) => (
              <Card key={book} className="bg-gray-800 border-0 overflow-hidden group">
                <CardContent className="p-0">
                  <div className="relative aspect-[2/3] overflow-hidden">
                    <img 
                      src={`/placeholder.svg?height=300&width=200&text=Book+${book}`}
                      alt={`Book ${book} cover`}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col items-start p-4">
                  <h3 className="font-semibold mb-1">Related Book {book}</h3>
                  <p className="text-sm text-gray-400 mb-2">Author Name</p>
                  <p className="font-bold text-purple-400">$14.99</p>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 mt-16 py-12 px-6">
        <div className="container mx-auto text-center text-gray-400">
          <p>&copy; 2023 SecondChapter. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}