
import {useDispatch, useSelector} from 'react-redux';
import {actions} from '../store/actions';
import { useEffect } from 'react';
import { Table } from './Table';

export function PickSeats(){
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.fetchReservationsForShowing(1));
    console.log('fetchReservationsForShowing called for showingid 1')
  },[1]);
    console.log('in PickSeats Component');
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
       
    };
    const theaters = useSelector(state => state.theaters);
    const showings = useSelector(state => state.showings);
    const films = useSelector(state => state.films);
    const reservations = useSelector(state => state.reservations);
    const cart = useSelector(state => state.cart);
    const currentDate = new Date(useSelector(state => state.currentDate));

    let currentShowing, currentFilm, currentTheater = {};
    if(showings?.length){
       currentShowing = showings.find(showing => showing.id === 1);
       currentFilm = films.find(film => film.id === currentShowing.film_id);
       currentTheater = theaters.find(theater => theater.id === currentShowing.theater_id) || {};
    }

    const tables = currentTheater?.tables;

   
    //let table =  theater.tables ? theater.tables[0] : {};
    
    let seat =  {};


    return (
        <section style={styles.header} className="mdl-card mdl-shadow--2dp">
  <div className="mdl-card__title mdl-color--primary mdl-color-text--white">
    <h1 className="mdl-card__title-text">Where would you like to sit?</h1>
  </div>

  <p>Watching FILM_TITLE in {currentTheater.name} on {currentDate.toShowingDateString()} at {currentDate.toShowingTimeString()}</p>
  <section style={styles.tablesSection}>
    <p>LIST OF TABLES WILL GO HERE</p>
    <p>Here is one table:</p>
    {tables && tables.map(table =>(
      <Table table={table} key={table.id} />
    ))}
  </section>
  <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" style={styles.submitButton} >Check out</button>
</section>
    )
}