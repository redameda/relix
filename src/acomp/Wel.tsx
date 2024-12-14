import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Briefcase, Users, TrendingUp } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import img from '../../public/wel.png'
export default function WelcomePage() {
  
  return (
 <>
 <main className="flex-1 py-10">
   <div className="flex flex-col items-center space-y-4 pb-20 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-gray-800 dark:text-white">
                  Welcome to Relix 
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Your gateway to seamless job connections and career growth. Join us today and unlock a world of opportunities.
                </p> 
              </div>
              <div className="flex ">
                <div className="w-80">
                  <Link href={'/signin'}>
                <Button className="w-full">Log in</Button>
                  </Link>
                </div>
              </div>
<span className="text-gray-600"> Don't have an account? 
  <Link href={''} className="font-[500] text-gray-800 hover:underline">Create one.</Link></span>
              </div>
      <Separator/>       

      </main>
 
 </>
      

  )
}

