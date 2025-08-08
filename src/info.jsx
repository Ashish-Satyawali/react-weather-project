import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './weather.css'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';


export default function Infobox({info}){
    let imgrain = "https://static.vecteezy.com/system/resources/thumbnails/043/032/587/small/a-person-walking-through-a-forest-during-a-gentle-rain-photo.jpg"
    let imgsun = "https://media.istockphoto.com/id/1389765355/photo/beautiful-sunny-day-out.jpg?s=612x612&w=0&k=20&c=yRwx6RXMTxfVFV7zOl6_7wA6whg43mwn1O7iHAKTKDU="
    let imgcold = "https://www.shutterstock.com/image-photo/winter-forest-south-park-sofia-600nw-2483073899.jpg"
    return(
    <div className='infobox'>
        <Card className='fullcard'>
            <CardMedia
                component="img"
                alt="green iguana"
                height="175"
                image={info.humidity >=80?imgrain:info.temp>=18?imgsun:imgcold}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {info.city}&nbsp;&nbsp;{info.humidity >=80?<ThunderstormIcon/>:info.temp>=18?<SunnyIcon/>:<AcUnitIcon/>}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"} className='content'>
                   <div>Temperature : {info.temp}&deg;C </div>
                   <div>Min Temperature : {info.tempMin}&deg;C</div>
                   <div>Max Temperature : {info.tempMax}&deg;C</div>
                   <div>Humidity : {info.humidity}</div>
                   <div>the weather can be described as <i>{info.weather}</i> and feels like <i>{info.feelslike}&deg;C</i></div>
                </Typography>

            </CardContent>
            
        </Card>
    </div>
    )
}