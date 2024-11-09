'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'
import { Toaster } from './ui/sonner'
import { TooltipProvider } from './ui/tooltip'

const queryClient = new QueryClient()

export function Providers({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {children}
        <Toaster richColors />
      </TooltipProvider>
    </QueryClientProvider>
  )
}
