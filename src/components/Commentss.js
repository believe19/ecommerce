import React, { useEffect, useState } from 'react'


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';





const api ='https://dummyjson.com/comments'
function Commentss() {
    const [comment, setComment] = useState([]);
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState("")
    const fetchComments = async () => {
        try {
            setError("")
            setLoader(true)  
            const resposne = await fetch(api)
            if (!resposne.ok) {
                throw new Error("something went wrong")
            }
            const data = await resposne.json()
            setComment(data.comments)
            setLoader(false)
            setError("")
            console.log(data.comments)
        } catch (err) {
            console.log(err.message)
            setError(err.message) 
        }
    }
    useEffect(() => {
        fetchComments()
    }, []);
  return (
    <div className='d-flex flex-wrap justify-content-space-around' style={{ marginLeft:'50px'}}>
        {comment.map((com, index) =>{
            return(
                <Card sx={{ maxWidth: 260 }} key={index} className="m-4" >
                <CardContent key={index} >
                    <Typography  variant="h6" component="div">
                    {com.id}
                    </Typography>

                    <Typography  variant="h5" component="div">
                    user: {com.user.username}
                    </Typography>

                    <Typography  variant="h7" component="div">
                    {com.body}
                    </Typography>
                </CardContent>
                </Card>
            )
        })}
        
    </div>
  )
}

export default Commentss;