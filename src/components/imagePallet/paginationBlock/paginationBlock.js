import React, {useState, useEffect} from 'react'

import * as Style from './styled'

const PaginationBlock = ({count, page}) => {

  const [pages, setPages] = useState(0)
  const [current, setCurrent] = useState(1)

  useEffect(() => {
    setPages(count);
  }, [count])

  useEffect(() => {
    setCurrent(page);
  }, [page])

	return (
		<Style.Wrapper>
      {
        Array.from(Array(pages), (pageItem, i) => {
          const number = i + 1;
          const active = number === current ? 1 : 0;
          return <Style.Item key={i} active={active} to={'/' + number}>{number}</Style.Item>
        })
      }
		</Style.Wrapper>
	)
}

export default PaginationBlock