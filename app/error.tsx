'use client'
 
import ErrorDisplay from '@/components/error/ErrorDisplay'
 
export default function Error({error, reset}: {error: Error & { digest?: string }, reset: () => void}) {

  console.error(error)

  return <ErrorDisplay message={error.message} reset={reset} />
}