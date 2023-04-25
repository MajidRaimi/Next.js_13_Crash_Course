const fetchRepoContent = async (name) => {
    const response = await fetch(`https://api.github.com/repos/MajidRaimi/${name}/contents`)
    return await response.json()
}


const RepoDirs = async ({ name }) => {

    const content = await fetchRepoContent(name);
    // const dirs = content.filter((content) => content.type === '');


    return (
        <div className='mx-auto max-w-lg'>
            <h3 className='text-center py-2 text-3xl'>Directories</h3>
            <ul>
                {content.map((file, index) => (
                    <li key={index} className=''>{file.type === 'dir' ? '📁' : '📃'} {file.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default RepoDirs