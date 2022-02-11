import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import {useDispatch, useSelector} from 'react-redux';
import {actions} from '../store/actions';
import seatImage from '../bundledImages/seat.png';

export const Seat = ({seat, currentShowing}) => {
    const dispatch = useDispatch();
    const reserveSeat = (seat) => dispatch(actions.addSeatToCart(seat, currentShowing));

       return (
        <div key={seat.id} style={{...styles.seatItself}} onClick={() => reserveSeat(seat)}>
        {seat.seat_number}
    </div>
        )
}
    const styles = {
          seatItself:{
              backgroundImage :`url(${seatImage})`,
              backgroundSize: '100% 100%',
              width:"30px",
              height:"30px",
              fontWeight:"bold",
              display:"flex",
              alignItems: "center",
              justifyContent:"center",
              borderRadius:"10px 10px 0px 0px",
              cursor:"pointer"
          }
      };