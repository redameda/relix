import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Bold, Italic, Underline } from "lucide-react"
 
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"
import { Checkbox } from '@/components/ui/checkbox'
import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import Link from 'next/link'

 
const SignIn = () => {
  return (
  <>
  <div className="flex  w-full place-content-center  h-[100vh] items-center">

 <Card className='w-96 rounded-none sm:rounded-lg py-10'>
    <CardHeader>
      <CardTitle className='text-4xl font-bold text-center'>Relix</CardTitle>
      <h1 className='text-center font-[600] text-lg text-gray-700'>Sign in to your accout</h1>
    </CardHeader>
  <CardContent className='flex flex-col gap-3'>
    <Input autoFocus placeholder='reidn' type='name' id='e'/>
    <Input placeholder='password' type='password' />
    <Button>Submit</Button>
    <h1 className='text-center'>or</h1>
    <Button variant={'secondary'}>Continue with Google</Button>
  </CardContent>

  <CardFooter className='flex place-content-center'>
    <h1 className='text-center'>Don't have an account <Link className='text-center hover:underline font-[600]' href={'/create'}>Create one</Link>.</h1>
  </CardFooter>
 </Card>
  </div>
  </>
  )
}

export default SignIn