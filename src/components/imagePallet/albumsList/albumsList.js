import React from 'react'

import Button from "@mui/material/Button";

import * as Style from './styled'

const AlbumList = ({list, filter, setFilter}) => {
	return (
	  <>
      <Style.Title>Albums</Style.Title>
      <Style.Wrapper>
        {
          list?.map(item => {
            return <Button
              key={item}
              style={{marginRight: 15, marginBottom: 15}}
              variant={filter === item ? 'contained' : 'outlined'}
              size="small"
              onClick={() => setFilter(item)}
            >
              {item}
            </Button>
          })
        }

      </Style.Wrapper>
    </>
	)
}

export default AlbumList