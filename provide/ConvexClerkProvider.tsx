import { ClerkProvider, useAuth } from '@clerk/nextjs'
import  { ReactNode } from 'react'
import {ConvexReactClient} from "convex/react"
import {ConvexProviderWithClerk} from "convex/react-clerk";
type Props = {
  children:ReactNode
}
const CONVEX_URL = process.env.NEXT_PUBLIC_CONVEX_URL!;
const convex = new ConvexReactClient(CONVEX_URL)


const ConvexClerkProvider = ({children}: Props) => {
  return (
    <ClerkProvider>
      <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
        {children}
      </ConvexProviderWithClerk>
    </ClerkProvider>
  )
}

export default ConvexClerkProvider