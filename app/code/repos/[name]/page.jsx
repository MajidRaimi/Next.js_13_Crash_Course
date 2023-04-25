
const RepoPage = ({ params }) => {
    const { name } = params;
    return (
        <div className='bg-slate-200 rounded-xl p-16 max-w-xl mx-auto m-12'>
            <h1 className = 'text-center text-3xl font-bold'>{name}</h1>
            <p>Repo Details</p>
        </div>
    )
}

export default RepoPage