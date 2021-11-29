import { useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router";
import axios from "axios";
import {getShowLoading, getShowSucess} from '../redux/show/action'
import { useEffect } from "react";
import { useDispatch } from "react-redux";
export const Home = ()=>{
  const dispatch = useDispatch()
  let history = useHistory()
  useEffect(async()=>{
    dispatch(getShowLoading())
    try{
      const {data} = await axios.get('http://localhost:3001/show')
      dispatch(getShowSucess(data))
    }
    catch(err){
      console.log(err);
    }
  },[])
  const handleDetail = (e)=>{
    history.push(`detail/${e}`)
  }
    const store = useSelector((store) => store);
    let books = store.show.data
    if(store.auth.token === ''){
      return  <Redirect to="/login"></Redirect>
    }
    else{
        return books.length > 0 ? <div>{books.map((e)=>(
          <div key={e.id}><h4 onClick={()=>{
            handleDetail(e.id)
          }}>{e.movie}</h4>
          </div>
        ))}</div>
        : 'loading'
    }
}