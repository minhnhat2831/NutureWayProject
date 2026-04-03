import { useMemo, useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router'
import queryString from 'query-string'
import { PARAMS, type PARAMS_TYPE } from '@/constants/SchemaConstant'

export const useQueryParams = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const params = useMemo<PARAMS_TYPE>(() => {
    const parsed = queryString.parse(location.search)

    const transformed = {
      ...parsed,
      page: parsed.page ? Number(parsed.page) : undefined,
      limit: parsed.limit ? Number(parsed.limit) : undefined,
      offset: parsed.offset ? Number(parsed.offset) : undefined,
    }

    const result = PARAMS.safeParse(transformed)

    return result.success ? result.data : {}
  }, [location.search])

  const setParams = useCallback((newParams: Partial<PARAMS_TYPE>) => {
    const current = queryString.parse(location.search)

    const merged = {
      ...current,
      ...newParams,
    }

    // remove null/undefined
    Object.keys(merged).forEach((key) => {
      const typedKey = key as keyof typeof merged

      if (
        merged[typedKey] === undefined ||
        merged[typedKey] === null ||
        merged[typedKey] === ''
      ) {
        delete merged[typedKey]
      }
    })

    const stringified = queryString.stringify(merged)

    navigate({
      pathname: location.pathname,
      search: stringified,
    })
  }, [navigate, location.search, location.pathname])

  const clearParams = useCallback(() => {
    navigate({
      pathname: location.pathname,
      search: '',
    })
  }, [navigate, location.pathname])

  return {
    params,
    setParams,
    clearParams,
  }
}