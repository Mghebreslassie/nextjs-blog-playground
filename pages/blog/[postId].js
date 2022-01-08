
const GetPost = ({post}) => {
    console.log(post)
    return <div>
        <h1>{post.title}</h1>
        <h3>{post.body}</h3>
    </div>
}

export const getStaticPaths = async () => {
    const res = await fetch('http://localhost:8080/allPosts')
    const data = await res.json()
    const paths = data.data.map((post) => ({
        params: { postId: `${post.id}` },
      }))
    return {paths, fallback: false}
}
export const getStaticProps = async ({params}) => {
    const res = await fetch(`http://localhost:8080/posts/${params.postId}`)
    const data = await res.json()

    return {
        props: {post: data.data}
    }
}
export default GetPost