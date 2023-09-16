import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Typography } from "@mui/material";


function UsersImage({ list }) {
    return (
        <div className="d-flex flex-wrap justify-content-space-around" style={{ marginLeft:'55px'}} >
            {list.map((item, index) => {
                return (
                    <Card sx={{ maxWidth: 250 }} key={index} className="m-4">
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="195"
                                image={item.image}
                                alt="green iguana"
                            />
                            <Typography gutterBottom variant="h5" component="div" style={{textAlign:'center', lineHeight:'2em'}}>
                                    {item.firstName} {item.lastName}
                                </Typography>
                            <CardContent>
                                <Typography variant="h7" color="black" style={{lineHeight:'2.3em'}}>
                                <span style={{fontWeight:'600'}}> Email: </span>  {item.email}
                                </Typography>
                                <br />

                                <Typography variant="h7" color="black" style={{lineHeight:'2.3em'}}>
                                <span style={{fontWeight:'600'}}>Age</span>  {item.age}
                                </Typography>
                                <br />

                                <Typography variant="h7" color="black" style={{lineHeight:'2.3em'}}>
                                   <span style={{fontWeight:'600'}}>Gender:</span> {item.gender}
                                </Typography>
                                <br />

                                <Typography variant="h7" color="black" >
                                  <span style={{fontWeight:'600'}}>  UserAgent:</span>  {item.userAgent}
                                </Typography>
                            </CardContent>

                        </CardActionArea>
                        {/* <CardActions>
                            <Button size="small" color="primary">
                                more
                            </Button>
                        </CardActions> */}
                    </Card>
                )
            })}
        </div>
    )
}

export default UsersImage;