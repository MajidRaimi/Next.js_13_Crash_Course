const fetchRepos = async () => {
    const response = await fetch('https://api.github.com/users/MajidRaimi/repos')
    return await response.json()
}


const ReposPage = async () => {
    const repos = await fetchRepos();
    return (
        <div>{
            repos.map((repo, index) => (
                <div key={index}>{repo.name}</div>
            ))
        }</div>
    )
}

export default ReposPage