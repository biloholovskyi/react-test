import React, {useState, useEffect} from 'react'
import {useParams, Navigate} from "react-router";
import axios from "axios";

import PalletItem from "./palletItem/palletItem";
import PaginationBlock from "./paginationBlock/paginationBlock";
import PalletModal from "./palletModal/palletModal";
import AlbumList from "./albumsList/albumsList";

import Modal from '@mui/material/Modal';

import * as Style from './styled'

const ImagePallet = () => {
  const params = useParams()


  const [data, setData] = useState([])
  const [allData, setAllData] = useState([]);
  const [pages, setPages] = useState(1)
  const [current, setCurrent] = useState(1)
  const [showModal, setShowModal] = useState(false)
  const [albumIDs, setAlbumIDs] = useState([])
  const [filter, setFilter] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const postPerPage = 40;

  useEffect(() => {
    const getDataFromApi = async () => {
      axios.get('https://jsonplaceholder.typicode.com/photos')
        .then(res => {
          setData(res.data);
          setAllData(res.data);

          setPages(Math.ceil(res.data.length / postPerPage));

          const albums = [];

          res.data.forEach(item => {
            if (!albums.includes(item.albumId)) {
              albums.push(item.albumId);
            }
          })

          setAlbumIDs(albums)
        })
    }

    getDataFromApi().catch(error => console.error(error));
  }, [])

  useEffect(() => {
    if (params.pageNumber) {
      setCurrent(+params.pageNumber)
    }
  }, [params.pageNumber])

  const showModalItem = (data) => {
    setShowModal(data);
  }

  const deleteItem = (id) => {
    const index = data.findIndex(elem => +elem.id === +id);
    const newArr = [...data.slice(0, index), ...data.slice(index + 1)];

    const indexAll = allData.findIndex(elem => +elem.id === +id);
    const newArrAll = [...allData.slice(0, indexAll), ...allData.slice(indexAll + 1)];

    setData(newArr);
    setAllData(newArrAll);
  }

  const filterAlbum = (id) => {
    setFilter(id);
    const filterData = allData.filter(item => +item.albumId === +id);

    setData(filterData);

    setPages(Math.ceil(filterData.length / postPerPage));
    setRedirect(true);
  }

  useEffect(() => {
    if(redirect) {
      setRedirect(false)
    }
  }, [redirect])

  return (
    <Style.Body>

      {
        redirect && <Navigate to={'/1'}/>
      }

      <Modal
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        open={showModal}
        onClose={() => setShowModal(false)}
      >
        <PalletModal data={showModal}/>
      </Modal>

      <AlbumList list={albumIDs} filter={filter} setFilter={filterAlbum}/>

      <div className="flex-wrapper">
        {
          data?.slice((current - 1) * postPerPage, postPerPage * current).map(data => {
            return <PalletItem
              key={data.id}
              data={data}
              show={() => showModalItem(data)}
              deleteItem={() => deleteItem(data.id)}
            />
          })
        }
      </div>
      <PaginationBlock
        count={pages}
        page={current}
      />
    </Style.Body>
  )
}

export default ImagePallet