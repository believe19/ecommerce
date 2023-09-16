import { Button, Card, CardActionArea,  CardContent, Typography } from "@mui/material";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from "react-router-dom";





function SingleProducts({single}) {
    
  return (
    <div >
            {single.map((item, index) => {
                return (
                    <Card sx={{ maxWidth: 300 }} key={item.id} className="m-4">
                        <CardActionArea>
                        <Typography variant="h5" className='mt-2' color="black" textAlign='center'>
                            This is a Single Product
                      </Typography>
                        <LazyLoadImage
                                alt={`Image no found or not found`}
                                height={195}
                                src={item.images[2]} 
                                placeholderSrc="black-and-white"
                                opacity={1.2}
                                width={265} 
                                effect="blur"
                                
                                />
                            
                            <Typography gutterBottom variant="h5" component="div" style={{textAlign:'center', lineHeight:'1.5em'}}>
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
                            <Link size="small" to={`/home/${item.id}`} color="primary">
                                    Back
                            </Link>

                        </CardActionArea>
                    </Card>
                )
            })}
        </div>
  )
}
export default SingleProducts;

