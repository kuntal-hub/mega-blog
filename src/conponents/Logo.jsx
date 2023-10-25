import React,{memo} from 'react'
import { Link } from 'react-router-dom'
import postService from '../appwrite/post';

function Logo({className="w-12 h-12"}) {
  return (
    <div className={`${className}`}>
        <Link to='/'>
        <img src={postService.getPreview({fileId:"652d183893f5548d9h6f",quality:5})} alt="Logo" className='h-full w-full rounded-full'/>
        </Link>
    </div>
  )
}
export default memo(Logo);