import React from 'react'

import Button from '@mui/material/Button';

import * as Style from './styled'

const PalletItem = ({data, show, deleteItem}) => {
	return (
	  <>
      <Style.Item>
        <div className="wrapper" onClick={show}>
          <div className="title">{data.title}</div>
          <img src={data.thumbnailUrl} alt="image"/>
        </div>
        <Button variant={'outlined'} onClick={deleteItem}>Delete this photo</Button>
        <Style.AlbumID>album id = {data.albumId}</Style.AlbumID>
      </Style.Item>
    </>
	)
}

export default PalletItem