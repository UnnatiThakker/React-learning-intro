import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

export function PickDate() {
    return (
        <>
            <CardActions>
                {Date.getArrayOfDays(7).map(day => (
                    <Button size="small" style={{ minWidth: "40px" }} key={day.getTime()}>{day.toShortDayOfWeekString()}</Button>

                ))}


            </CardActions>
        </>
    )
}