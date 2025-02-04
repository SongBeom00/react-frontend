import React from 'react'
import ModifyComponent from "../../components/todo/ModifyComponent";
import {useParams} from "react-router-dom";

const ModifyPage = () => {

    const {tno} = useParams();

  return (
    <div className='p-4 w-full bg-orange-200 '>
        <div className={'text-3xl font-light'}>
            ModifyPage
        </div>
        <ModifyComponent tno={tno}/>
    </div>
  )
}

export default ModifyPage