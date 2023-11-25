export const fetchCareerData = async () =>{
    const  res = await fetch('http://localhost:4000/careers',{
        method: 'GET'
    })

    if(!res.ok){
        throw Error("Could not find the career")
    }
    return res.json()
}

export const fetchCareerDetail = async(id) => {
    const res = await fetch(`http://localhost:4000/careers/${id}`,{
        method: "GET"
    })

    if(!res.ok){
        throw Error("Could not find the careers")
    }
    return res.json()
}