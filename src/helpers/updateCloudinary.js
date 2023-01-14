/**
 * Update Img to cloudinary
 * @param {*} files coloca lo que optengas del input file
 * @returns { string }
*/

const updateCloudinary = async ( files ) =>{
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "images");
    
    const res = await fetch(
        "https://api.cloudinary.com/v1_1/dq5sd02fy/image/upload",
        {
            method: "POST",
            body: data,
        }
    )
    const file = await res.json();

    return file.secure_url
}

export default updateCloudinary