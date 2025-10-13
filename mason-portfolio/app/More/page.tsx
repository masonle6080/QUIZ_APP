'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { ArrowLeft, User, Book, Grid3X3, Film, ChevronDown, ChevronRight, Mic, Heart, Camera, ChevronLeft } from 'lucide-react'

export default function More() {
  const [expandedTabs, setExpandedTabs] = useState<{ [key: string]: boolean }>({
    background: false,
    photography: false,
    films: false,
    books: false,
    podcasts: false,
    hobbies: false
  })

  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [initialScrollY, setInitialScrollY] = useState<number>(0)

  // Photo array for navigation
  const photos = [
    '_DSC0371.jpg', '_DSC0531.jpg', '_DSC0907.jpg', '_DSC0975.jpg',
    '_DSC1349.jpg', '_DSC1763.jpg', '_DSC1782.jpg', '_DSC2753.jpg',
    '_DSC3456.jpg', '_DSC3530.jpg', '_DSC4523.jpg', '_DSC5512.jpg',
    '_DSC6521.png', '_DSC6662.png', '_DSC6898.jpg', '_DSC6923.jpg',
    '_DSC7539.jpg', '_DSC7606.jpg', '_DSC7775.jpg', 'DSCF1706.jpg'
  ]

  // Photo descriptions
  const photoDescriptions: { [key: string]: string } = {
    '_DSC0371.jpg': 'Golden Gate Bridge from Hawk Hill',
    '_DSC0531.jpg': 'Lilly in NYC',
    '_DSC0907.jpg': 'Raglan at Campus Point',
    '_DSC0975.jpg': 'Raglan near Campus Point',
    '_DSC1349.jpg': 'Maui clouds',
    '_DSC1763.jpg': 'Rainy hike in Maui',
    '_DSC1782.jpg': 'Maui trees',
    '_DSC2753.jpg': 'SF from across the bay',
    '_DSC3456.jpg': 'Porsche',
    '_DSC3530.jpg': 'Lambo',
    '_DSC4523.jpg': 'Emerson\'s Miata',
    '_DSC5512.jpg': 'Iago\'s painted Tesla',
    '_DSC6521.png': 'Cuban Cigar Leaf Farmer',
    '_DSC6662.png': 'Streets of Havana',
    '_DSC6898.jpg': 'Tam High Volleyball team',
    '_DSC6923.jpg': 'Tam High Volleyball team',
    '_DSC7539.jpg': 'Jacob',
    '_DSC7606.jpg': 'Random NYC citizen',
    '_DSC7775.jpg': 'Under an Umbrella in NYC',
    'DSCF1706.jpg': 'Benson on the beach',
  }

  const toggleTab = (tabKey: string) => {
    setExpandedTabs(prev => ({
      ...prev,
      [tabKey]: !prev[tabKey]
    }))
  }

  const navigatePhoto = (direction: 'prev' | 'next') => {
    if (!selectedImage) return

    const currentIndex = photos.indexOf(selectedImage)
    let newIndex

    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : photos.length - 1
    } else {
      newIndex = currentIndex < photos.length - 1 ? currentIndex + 1 : 0
    }

    setSelectedImage(photos[newIndex])
  }

  useEffect(() => {
    const handleScroll = () => {
      if (selectedImage) {
        const currentScrollY = window.scrollY
        const scrollDifference = Math.abs(currentScrollY - initialScrollY)

        // Close modal if scrolled more than 100 pixels
        if (scrollDifference > 45) {
          setSelectedImage(null)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [selectedImage, initialScrollY])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!selectedImage) return

      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault()
          navigatePhoto('prev')
          break
        case 'ArrowRight':
          event.preventDefault()
          navigatePhoto('next')
          break
        case 'Escape':
          event.preventDefault()
          setSelectedImage(null)
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedImage])
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Portfolio
            </Link>
          </div>
          <h1 className="text-3xl font-bold mt-4">More</h1>
          <p className="text-muted-foreground mt-2">
            More about my interests and projects
          </p>
        </div>
      </div>

      

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-6">
        <div className='pt-12 space-y-6'>

          {/* Background Tab */}
          <div className='border rounded-lg'>
            <button
              onClick={() => toggleTab('background')}
              className='w-full p-6 flex items-center justify-between hover:bg-muted/50 transition-colors'
            >
              <div className='flex items-center gap-3'>
                <User className='h-6 w-6' />
                <h2 className='text-2xl font-bold text-left'>Background</h2>
              </div>
              {expandedTabs.background ? (
                <ChevronDown className='h-5 w-5' />
              ) : (
                <ChevronRight className='h-5 w-5' />
              )}
            </button>
            {expandedTabs.background && (
              <div className='px-6 pb-6 border-t'>
                <div className='pt-20 px-12 grid lg:grid-cols-[55%_45%] gap-12'>
                  <div className='flex flex-col lg:col-span-1 gap-4'>
                    {/*hometwon*/}
                    <div className='flex flex-col gap-3'>
                      <p className='pt-2 text-muted-foreground'>I grew up in Marin County (a little north of SF) and was raised with my younger brother by my mom and dad. As Vietnamese immigrants, my parents instilled the principles of diligence, hard work, and empathy. </p>
                      <p className='text-muted-foreground'>Much of my childhood was spent playing sports and exploring the outdoors. Living in Marin my parents would always take me on hikes, and eventually I got into other naturey actviities like mountain biking and backpacking. I played competitive soccer for most of my childhood and only stopped during Covid. Instead I pivoted towards photography, creating <a href='https://www.youtube.com/@6sly685' target='_blank'>YouTube</a> videos, and eventually filmmaking.</p>
                    </div>
                    
                  </div>
                  <div className='flex flex-col items-center gap-4 lg:cols-span-1'>
                    <img src='/photos/IMG_4378.jpeg' className='item-center rounded-md w-[60%] h-auto aspect-[4/5] object-cover object-right'></img>
                    <p className='text-muted-foreground'>Left:me; Right:brother</p>
                  </div>
                  

                </div>
              </div>
            )}
          </div>

          {/* Hobbies Tab */}
          <div className='border rounded-lg'>
            <button
              onClick={() => toggleTab('hobbies')}
              className='w-full p-6 flex items-center justify-between hover:bg-muted/50 transition-colors'
            >
              <div className='flex items-center gap-3'>
                <Heart className='h-6 w-6' />
                <h2 className='text-2xl font-bold text-left'>Hobbies</h2>
              </div>
              {expandedTabs.hobbies ? (
                <ChevronDown className='h-5 w-5' />
              ) : (
                <ChevronRight className='h-5 w-5' />
              )}
            </button>
            {expandedTabs.hobbies && (
              <div className='px-6 pb-6 border-t'>
                <div className='pt-6 grid lg:grid-cols-3 gap-12'>
                  <div className='lg:col-span-1'>
                    <div className='space-y-4 text-muted-foreground'>
                      <p className='text-sm uppercase tracking-wider font-medium'>Current Interests</p>
                    </div>
                  </div>
                  <div className='lg:col-span-2'>
                    <p className='text-muted-foreground'>Running</p>
                    <p className='text-muted-foreground'>Weight Lifting</p>
                    <p className='text-muted-foreground'>Reading</p>
                    <p className='text-muted-foreground'>Podcasts</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Photography Tab */}
          <div className='border rounded-lg'>
            <button
              onClick={() => toggleTab('photography')}
              className='w-full p-6 flex items-center justify-between hover:bg-muted/50 transition-colors'
            >
              <div className='flex items-center gap-3'>
                <Camera className='h-6 w-6' />
                <h2 className='text-2xl font-bold text-left'>Photography</h2>
              </div>
              {expandedTabs.photography ? (
                <ChevronDown className='h-5 w-5' />
              ) : (
                <ChevronRight className='h-5 w-5' />
              )}
            </button>
            {expandedTabs.photography && (
              <div className='px-6 pb-6 border-t'>
                <div className='pt-20 relative'>
                  <p className='text-center text-muted-foreground mb-8 px-30'>During 8th grade I got into photography. I started on my phone, then found one of my mom's old cameras. From there I continued, taking a camera everywhere I went.</p>
                  <p className='pt-4 text-center text-muted-foreground mb-8 px-30'>A few photos I have taken. (click to fullscreen)</p>
                  <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    {photos.map((photo, index) => (
                      <div
                        key={index}
                        className='relative'
                        onClick={() => {
                          setSelectedImage(photo)
                          setInitialScrollY(window.scrollY)
                        }}
                      >
                        <img
                          src={`/photos/thumbnails/${photo.replace(/\.[^/.]+$/, '_thumb.jpg')}`}
                          className='rounded-lg w-full h-48 object-cover hover:scale-105 transition-transform cursor-pointer'
                          alt='Photography'
                        />
                      </div>
                    ))}
                  </div>

                  {/* Click overlay for full aspect ratio */}
                  {selectedImage && (
                    <div
                      className='fixed inset-0 bg-black/80 flex flex-col items-center justify-center z-50 cursor-pointer p-8'
                      onClick={() => setSelectedImage(null)}
                    >
                      {/* Left arrow */}
                      <button
                        className='absolute left-8 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10'
                        onClick={(e) => {
                          e.stopPropagation()
                          navigatePhoto('prev')
                        }}
                      >
                        <ChevronLeft className='w-12 h-12' />
                      </button>

                      {/* Right arrow */}
                      <button
                        className='absolute right-8 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10'
                        onClick={(e) => {
                          e.stopPropagation()
                          navigatePhoto('next')
                        }}
                      >
                        <ChevronRight className='w-12 h-12' />
                      </button>

                      <img
                        src={`/photos/${selectedImage}`}
                        className='max-w-[80vw] max-h-[70vh] object-contain rounded-lg shadow-2xl'
                        alt='Photography full size'
                        onClick={(e) => e.stopPropagation()}
                      />
                      {photoDescriptions[selectedImage] && (
                        <p className='text-white text-center mt-4 max-w-2xl text-lg leading-relaxed'>
                          {photoDescriptions[selectedImage]}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Films Tab */}
          <div className='border rounded-lg'>
            <button
              onClick={() => toggleTab('films')}
              className='w-full p-6 flex items-center justify-between hover:bg-muted/50 transition-colors'
            >
              <div className='flex items-center gap-3'>
                <Film className='h-6 w-6' />
                <h2 className='text-2xl font-bold text-left'>Filmmaking</h2>
              </div>
              {expandedTabs.films ? (
                <ChevronDown className='h-5 w-5' />
              ) : (
                <ChevronRight className='h-5 w-5' />
              )}
            </button>
            {expandedTabs.films && (
              <div className='px-6 pb-6 border-t'>
              <div className='pt-20 px-12 grid flex flex-col gap-20'>
                <div className='flex flex-col gap-4'>
                  {/*filmmaking*/}
                  <div className='flex flex-col gap-3'>
                    <h2 className='font-bold text-2xl text-center'>Films</h2>
                    <p className='pt-2 px-26 text-center text-muted-foreground'>During Covid I started creating Minecraft YouTube videos. Then in high school I found a film program, Academy of Integrated Humanities and New Media. Here I created documentaries, short films, music videos, etc.</p>
                  </div>
                  
                </div>
                <div className='pt-20 flex flex-col items-center gap-4 flex flex-col gap-20'>

                  <div className='grid lg:grid-cols-[40%_60%] gap-12'>
                    <div>
                      <h2 className='font-bold text-2xl lg:col-span-1'>Expedition Amana</h2>
                      <p className='pt-2 text-muted-foreground'>A short documentary covering the testing of a prototype exploring the possibility that Native Americans arrived on the Big Island of Hawaii thousands of years ago.</p>
                      <div className='pt-3'>
                        <a href='https://www.youtube.com/watch?v=QfYIyWk8xCw' target='_blank' className='inline-flex items-center text-accent hover:underline font-medium transition-colors'>watch here →</a>
                      </div>
                    </div>
                    <a href='https://www.youtube.com/watch?v=QfYIyWk8xCw' target='_blank'><img src='/photos/Screenshot 2025-04-30 at 5.21.13 PM.png' className='hover:scale-102 drop-shadow-1xl transition duration-300 ease-in-out lg:col-span-1 rounded-md w-[90%] h-auto object-cover'></img></a>
                  </div>

                  <div className='grid lg:grid-cols-[60%_40%] gap-12'>
                    <a href='https://www.youtube.com/watch?v=PaYBGsz-8FM' target='_blank'><img src='/photos/Screenshot 2025-04-30 at 5.23.18 PM.png' className='hover:scale-102 drop-shadow-1xl transition duration-300 ease-in-out lg:col-span-1 rounded-md w-[90%] h-auto object-cover'></img></a>
                    <div className='pr-12'>
                      <h2 className='font-bold text-2xl lg:col-span-1 text-right'>Paul Revere Music Video</h2>
                      <p className='pt-2 text-right text-muted-foreground'>Music video for Paul Revere by the Beastie Boys</p>
                      <div className='pt-3 text-right'>
                        <a href='https://www.youtube.com/watch?v=PaYBGsz-8FM' target='_blank' className='inline-flex items-center text-accent hover:underline font-medium transition-colors'>← watch here</a>
                      </div>
                    </div>
                  </div>

                  <div className='grid lg:grid-cols-[40%_60%] gap-12'>
                    <div>
                      <h2 className='font-bold text-2xl lg:col-span-1'>The Price to Learn</h2>
                      <p className='pt-2 text-muted-foreground'>A short documentary about the 2023-2024 statewide CSU teach strike.</p>
                      <div className='pt-3'>
                        <a href='https://youtu.be/PYqm86OomCc' target='_blank' className='inline-flex items-center text-accent hover:underline font-medium transition-colors'>watch here →</a>
                      </div>
                    </div>
                    <a href='https://youtu.be/PYqm86OomCc' target='_blank'><img src='/photos/Screenshot 2025-04-30 at 5.24.00 PM.png' className='hover:scale-102 drop-shadow-1xl transition duration-300 ease-in-out lg:col-span-1 rounded-md w-[90%] h-auto object-cover'></img></a>
                    <p className='pt-2'></p>
                  </div>

                </div>
                

              </div>
            </div>
            )}
          </div>

          {/* Books Tab */}
          <div className='border rounded-lg'>
            <button
              onClick={() => toggleTab('books')}
              className='w-full p-6 flex items-center justify-between hover:bg-muted/50 transition-colors'
            >
              <div className='flex items-center gap-3'>
                <Book className='h-6 w-6' />
                <h2 className='text-2xl font-bold text-left'>Books</h2>
              </div>
              {expandedTabs.books ? (
                <ChevronDown className='h-5 w-5' />
              ) : (
                <ChevronRight className='h-5 w-5' />
              )}
            </button>
            {expandedTabs.books && (
              <div className='px-6 pb-6 border-t'>
                <div className='pt-6 grid lg:grid-cols-3 gap-12'>
                  <div className='lg:col-span-1'>
                    <div className='space-y-4 text-muted-foreground'>
                      <p className='text-sm uppercase tracking-wider font-medium'>Favorite Books</p>
                    </div>
                  </div>
                  <div className='lg:col-span-2'>
                    <p className='text-muted-foreground'>The Wheel of Time</p>
                    <p className='text-muted-foreground'>Everything I Know About Love</p>
                    <p className='text-muted-foreground'>Shoe Dog</p>
                    <p className='text-muted-foreground'>The Old Man and the Sea</p>


                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Podcasts Tab */}
          <div className='border rounded-lg'>
            <button
              onClick={() => toggleTab('podcasts')}
              className='w-full p-6 flex items-center justify-between hover:bg-muted/50 transition-colors'
            >
              <div className='flex items-center gap-3'>
                <Mic className='h-6 w-6' />
                <h2 className='text-2xl font-bold text-left'>Podcasts</h2>
              </div>
              {expandedTabs.podcasts ? (
                <ChevronDown className='h-5 w-5' />
              ) : (
                <ChevronRight className='h-5 w-5' />
              )}
            </button>
            {expandedTabs.podcasts && (
              <div className='px-6 pb-6 border-t'>
                <div className='pt-6 grid lg:grid-cols-3 gap-12'>
                  <div className='lg:col-span-1'>
                    <div className='space-y-4 text-muted-foreground'>
                      <p className='text-sm uppercase tracking-wider font-medium'>Favorite Episodes</p>
                    </div>
                  </div>
                  <div className='lg:col-span-2'>
                    <div className='flex flex-col'>
                      <a href='https://youtu.be/wAnDWfEIwoE?si=pgb0A2zVzHLstgJn' className='text-muted-foreground'>The Art of Learning & Living Life | Josh Waitzkin</a>
                      <a href='https://youtu.be/VKJNwcLKsl8?si=GvpE_nztRLAe5hXw' className='text-muted-foreground'>Why Most Smart People Become Stupid - Ryan Holiday</a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>


        </div>
      </div>

    </div>
  )
}