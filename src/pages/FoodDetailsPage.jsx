import { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

const FoodDetailsPage = () => {
  const params = useParams()
  const [searchParams, setSearchParams] = useSearchParams()

  const [isLoading, setIsLoading] = useState(true)

  console.log(params)
  console.log('Search param', searchParams.get('pep'))

  useEffect(() => {
    if (isLoading) {
      setSearchParams({ pep: false })
      setIsLoading(false)
    }
  }, [isLoading])

  return <h1>{params.foodId}</h1>
}

export default FoodDetailsPage
