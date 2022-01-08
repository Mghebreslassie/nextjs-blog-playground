
const AllPosts = ({posts}) => {
    return <div>
        <ul>
            {posts.data.map(post=> {
                return (
                    <div key={post.id}>
                    <li>{post.title}</li>
                    <h3>{post.body}</h3>
                    </div>
                )
            })}
        </ul>
    </div>
}

export const getStaticProps = async () => {

    const res = await fetch('http://localhost:8080/allPosts')
    const data = await res.json()

    return {
        props: {posts: data}
    }
}

export default AllPosts