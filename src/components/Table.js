import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import {useDispatch, useSelector} from 'react-redux';
import {actions} from '../store/actions';
import seatImage from '../bundledImages/seat.png';
import { Seat } from './Seat';

export const Table = ({table, currentShowing}) => {
    const dispatch = useDispatch();
    const reserveSeat = (seat) => dispatch(actions.addSeatToCart(seat, currentShowing));

    const getTableWidth = (seats) => ({width: seats.length * 40  + 'px'});
       return ( <>
            <div style={styles.wrapper}>
      <div style={styles.tableWrapper}>
        <div style={{ ...styles.tableItself, ...getTableWidth(table.seats) }}>{table.table_number}</div>  
      </div>
      <div style={styles.seatWrapper}>
        {table.seats.map(seat => (
          <Seat key={seat.id} seat={seat} currentShowing={currentShowing} />
        ))}
            
       </div>
    </div>
        </>
        )
}
    const styles = {
        header:{
          width:"95vw",
          margin:"10px auto",
          padding: "10px"
        },
        tableSection:{
          paddingBottom:"40px",
          display:"grid",
          gridTemplateColumns:"1fr 1fr 1fr 1fr 1fr"
        },
        wrapper:{
          margin:"20px",
          float:"left"
        },
        tableWrapper:{
          display:"flex",
          justifyContent:"center",
          alignItems:"center"
        },
        tableItself:{
          height:"40px",
          backgroundColor:"black",
          borderRadius:"20px",
          color:"white",
          fontSize:"20px",
          dispaly:"flex",
          justifyContent:"center",
          alignItems: "center",
          textAlign: "center",
          lineHeight:"2em"
        },
          seatWrapper:{
              display:"flex",
              justifyContent:"center",
              alignItems:"center"
          },
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