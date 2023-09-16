import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";


function List({ list }) {
    return (
        <div className="d-flex flex-wrap justify-content-space-around" style={{ marginLeft:'50px'}}>
            {list.map((item, index) => {
                return (
                    <Card sx={{ maxWidth: 260 }} key={index} className="m-4" >
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="150"
                                image={item.images[0]}
                                alt="green iguana"
                            />
                            <Typography gutterBottom variant="h5" component="div" style={{textAlign:'center', lineHeight:'2em'}}>
                                    {item.title}
                            </Typography>
                            <CardContent >
                                <Typography variant="h5" className='mt-2' color="black" style={{lineHeight:'2em'}}>
                                    price: $ {item.price}
                                </Typography>

                                <Typography variant="h7" className='mt-2' color="black" >
                                   <span  style={{fontWeight:'600'}}> Description:</span> {item.description}
                                </Typography>
                                <br />
                                <Typography variant="h7" className='mt-2' color="black" sx={{lineHeight:'2.2em'}} >
                                   <span  style={{fontWeight:'600'}}> Discount Percentage:</span> {item.discountPercentage}
                                </Typography>
                                <br />
                                <Typography variant="h7" className='mt-2' color="black" sx={{lineHeight:'2.2em'}} >
                                    <span  style={{fontWeight:'600'}}>Rating:</span> {item.rating}
                                </Typography>
                                <br />
                                <Typography variant="h7" className='mt-2' color="black" sx={{lineHeight:'2.2em'}}>
                                   <span style={{fontWeight:'600'}}> Brand:</span> {item.brand}
                                </Typography>
                                <br />
                                <Typography variant="h7" className='mt-2' color="black" >
                                   <span  style={{fontWeight:'600'}}> Category:</span> {item.category}
                                </Typography>
                            </CardContent>

                        </CardActionArea>
                        <CardActions>
                        <Link size="small" to={`/products/${item.id}`} color="primary">
                                more
                            </Link>
                        </CardActions>
                    </Card>
                )
            })}
        </div>
    )
}

export default List;