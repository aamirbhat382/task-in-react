export const fetchUserList = async (userId,token,data)=>{
	try {
        const response = await fetch(`https://randomuser.me/api/?results=5`, {
            method: "GET",
        })
        return await response.json()
    } catch (err) {
        return console.log(err)
    }

}