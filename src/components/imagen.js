'use client'
import {
    changeHandler,
    dblclickHandler,
    dragOverHandler,
    dropHandler
} from '@/lib/eventos'
import Image from 'next/image'



function Imagen({ src }) {
    return (
        <>
            <img
                id='imgPreview'
                src={src}
                alt="imagen"
                width={240}
                height={240}
                onDrop={dropHandler}
                onDragOver={dragOverHandler}
                onDoubleClick={dblclickHandler}
                className='object-cover object-center'
            />
            <input type='file'
                name='file'
                accept='image/*'
                onChange={changeHandler}
                className='hidden'
            />
        </>
    )
}

export default Imagen