import {useState} from 'react'

export const PostContainer = ({children}) => {
    const [posts, setPosts] = useState([])
    console.log(posts)
    console.log('container console')
    return <div>
        {children}
    </div>
}