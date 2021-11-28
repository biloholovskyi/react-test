import React from 'react'

import * as Style from './styled'

const PalletModal = ({data}) => {
	return (
		<Style.Body>
      <img src={data?.url} alt="icon"/>
		</Style.Body>
	)
}

export default PalletModal