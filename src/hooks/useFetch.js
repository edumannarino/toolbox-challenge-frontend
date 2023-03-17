import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import {
  fetchDataRequest,
  fetchDataSuccess,
  fetchDataFailure,
} from "../redux/reducer"

const useFetch = (url) => {
  const dispatch = useDispatch()
  const { data, isLoading, error } = useSelector((state) => state)

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchDataRequest())

      try {
        const response = await fetch(url)
        const data = await response.json()

        dispatch(fetchDataSuccess(data))
      } catch (error) {
        dispatch(fetchDataFailure(error))
      }
    }

    fetchData()
  }, [url, dispatch])

  return { data, isLoading, error }
}

export default useFetch
