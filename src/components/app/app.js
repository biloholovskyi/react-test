import React from 'react'
import {Route, Routes, Navigate} from "react-router";

import Header from "../header/header";
import ImagePallet from "../imagePallet/imagePallet";

const App = () => {
	return (
		<>
      <Header/>
      <Routes>
        <Route path={'/'} element={<Navigate to={'/1'}/>} />
        <Route path={'/:pageNumber'} element={<ImagePallet/>}/>
      </Routes>
		</>
	)
}

export default App