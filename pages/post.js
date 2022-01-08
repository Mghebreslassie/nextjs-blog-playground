import {useState} from 'react'

const Post = () => {
    const [values, setValues] = useState({
        title: '',
        body: ''
    })

    const handleChange = (e) =>{
        setValues({
            ...values,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const body = {
            title: values.title,
            body: values.body
        }
        const res = await fetch('http://localhost:8080/addPost',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            body: JSON.stringify(body)
        })
        const data = await res.json()
        console.log(data)
    }

    const handleClear = () => {
        setValues({
            title: '',
            body: ''
        })
        
    }
    return <div>
        <form onSubmit={e => handleSubmit(e)}>

        <input onChange={e => handleChange(e)} value={values.title} type="text" name="title" placeholder="title" />
        <input onChange={e => handleChange(e)} value={values.body} type="text" name="body" placeholder="body" />
        <button type='submit'>add post</button>
        </form>
    </div>
}

export default Post