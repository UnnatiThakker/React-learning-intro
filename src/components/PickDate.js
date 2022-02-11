import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { actions } from '../store/actions';

export function PickDate({ }) {
    const dispatch = useDispatch();
    const handlePickDate = (date) => dispatch(actions.setCurrentDate(date));
    return (
        <>
            <CardActions>
                {Date.getArrayOfDays(7).map(day => (
                    <Button size="small" style={{ minWidth: "40px" }} key={day.getTime()} onClick={() => handlePickDate(day)}>{day.toShortDayOfWeekString()}</Button>

                ))}


            </CardActions>
        </>
    )
}