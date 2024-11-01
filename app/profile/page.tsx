import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BookOpen, Settings, Star, Edit, Trash2 } from 'lucide-react'

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
          <aside className="w-full md:w-1/3">
            <Card className="bg-gray-800 border-0">
              <CardContent className="p-6">
                <div className="flex flex-col items-center">
                  <Avatar className="w-32 h-32">
                    <AvatarImage src="/placeholder.svg?height=128&width=128" alt="User avatar" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <h1 className="text-2xl font-bold mt-4">John Doe</h1>
                  <p className="text-gray-400">Joined: January 2023</p>
                  <div className="flex items-center mt-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className={`w-5 h-5 ${star <= 4 ? 'text-yellow-400' : 'text-gray-600'}`} fill="currentColor" />
                    ))}
                    <span className="ml-2 text-sm text-gray-400">(4.2)</span>
                  </div>
                </div>
                <div className="mt-6 space-y-2">
                  <Button className="w-full bg-purple-500 hover:bg-pink-500 transition-colors">
                    <Settings className="mr-2" />
                    Edit Profile
                  </Button>
                  <Button className="w-full" variant="outline">
                    Manage Listings
                  </Button>
                </div>
              </CardContent>
            </Card>
          </aside>
          <div className="flex-grow">
            <Tabs defaultValue="listings" className="w-full">
              <TabsList className="w-full bg-gray-800">
                <TabsTrigger value="listings" className="flex-1 data-[state=active]:bg-purple-500">My Listings</TabsTrigger>
                <TabsTrigger value="purchases" className="flex-1 data-[state=active]:bg-purple-500">My Purchases</TabsTrigger>
                <TabsTrigger value="wishlist" className="flex-1 data-[state=active]:bg-purple-500">Wishlist</TabsTrigger>
              </TabsList>
              <TabsContent value="listings" className="mt-6">
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
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between items-center p-4">
                        <div>
                          <h3 className="font-semibold mb-1">Book Title {book}</h3>
                          <p className="text-sm text-purple-400">$19.99</p>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="icon" variant="ghost" className="hover:bg-purple-500 hover:text-white transition-colors">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button size="icon" variant="ghost" className="hover:bg-red-500 hover:text-white transition-colors">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="purchases" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2, 3].map((book) => (
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
                      <CardFooter className="flex justify-between items-center p-4">
                        <div>
                          <h3 className="font-semibold mb-1">Purchased Book {book}</h3>
                          <p className="text-sm text-purple-400">$24.99</p>
                        </div>
                        <Button variant="outline" size="sm" className="hover:bg-purple-500 hover:text-white transition-colors">
                          Leave Review
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="wishlist" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                      <CardFooter className="flex justify-between items-center p-4">
                        <div>
                          <h3 className="font-semibold mb-1">Wishlist Book {book}</h3>
                          <p className="text-sm text-purple-400">$29.99</p>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline" className="hover:bg-purple-500 hover:text-white transition-colors">
                            View
                          </Button>
                          <Button size="sm" variant="ghost" className="hover:bg-red-500 hover:text-white transition-colors">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
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