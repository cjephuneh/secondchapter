import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { BookOpen, Search, TrendingUp, BookMarked, BookPlus, ChevronRight } from 'lucide-react'

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
        <section className="mb-16 text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
            Discover Your Next Literary Adventure
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Explore thousands of pre-loved books and give them a new home.
          </p>
          <div className="max-w-2xl mx-auto relative">
            <Input 
              type="search" 
              placeholder="Search for books, authors, or ISBN..." 
              className="w-full pl-12 pr-4 py-3 rounded-full bg-gray-800 text-gray-100 border-2 border-purple-500 focus:border-pink-500 transition-colors"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full px-6 bg-purple-500 hover:bg-pink-500 transition-colors">
              Search
            </Button>
          </div>
        </section>

        <section className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-semibold">Featured Books</h2>
            <Button variant="link" className="text-purple-400 hover:text-pink-400 transition-colors">
              View all <ChevronRight className="ml-1 w-4 h-4" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((book) => (
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
                  <Button variant="ghost" size="icon" className="rounded-full hover:bg-purple-500 hover:text-white transition-colors">
                    <BookPlus className="w-5 h-5" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8">Popular Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Fiction', 'Non-Fiction', 'Mystery', 'Sci-Fi', 'Romance', 'Biography', 'History', 'Self-Help'].map((category) => (
              <Button 
                key={category} 
                variant="outline" 
                className="h-auto py-8 flex flex-col items-center justify-center bg-gray-800 border-2 border-gray-700 hover:border-purple-500 hover:bg-gray-700 transition-all"
              >
                <BookMarked className="mb-2 w-8 h-8 text-purple-400" />
                <span className="text-lg font-medium">{category}</span>
              </Button>
            ))}
          </div>
        </section>

        <section className="text-center bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Sell Your Books?</h2>
          <p className="text-xl mb-8">Turn your old books into someone else's new adventure!</p>
          <Button size="lg" className="bg-white text-purple-500 hover:bg-gray-100 transition-colors">
            <BookPlus className="mr-2" />
            Start Selling
          </Button>
        </section>

        <section className="mt-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-semibold">Trending Now</h2>
            <Button variant="link" className="text-purple-400 hover:text-pink-400 transition-colors">
              See more <ChevronRight className="ml-1 w-4 h-4" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((book) => (
              <Card key={book} className="bg-gray-800 border-0 flex overflow-hidden">
                <div className="w-1/3">
                  <img 
                    src={`/placeholder.svg?height=200&width=130&text=Book+${book}`} 
                    alt={`Book ${book} cover`} 
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardContent className="w-2/3 p-4 flex flex-col justify-between">
                  <div>
                    <h3 className="font-semibold mb-1">Trending Book {book}</h3>
                    <p className="text-sm text-gray-400 mb-2">Author Name</p>
                    <p className="text-sm text-gray-300 line-clamp-2">A brief description of the book goes here, highlighting its key features and why it's trending.</p>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <p className="font-bold text-purple-400">$24.99</p>
                    <Button variant="ghost" size="sm" className="hover:text-purple-400 transition-colors">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 mt-16 py-12 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">SecondChapter is your go-to marketplace for pre-loved books, connecting readers and spreading the joy of literature.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Home</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Browse</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Sell</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@secondchapter.com</li>
              <li>Phone: (123) 456-7890</li>
              <li>Address: 123 Book St, Reading City</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Stay updated with our latest offers and new arrivals.</p>
            <div className="flex">
              <Input type="email" placeholder="Your email" className="rounded-l-md" />
              <Button className="rounded-r-md bg-purple-500 hover:bg-pink-500 transition-colors">Subscribe</Button>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; 2023 SecondChapter. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}