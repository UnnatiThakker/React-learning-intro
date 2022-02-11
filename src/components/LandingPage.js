import { useSelector, useDispatch } from 'react-redux';
import styles from './landing.module.css';
import Grid from '@mui/material/Grid';
import { FilmBrief } from './FilmBrief';


export function Landing() {
  console.log('in landing Component');
  const films = useSelector(state => state.films);
  const showings = useSelector(state => state.showings);
  const currentDate = new Date(useSelector(state => state.currentDate));
  //const film = films[1] || {};

  return (
    <>
      <section className={styles.header + "mdl-card mdl-shadow--2dp"}>
        <div className="mdl-card__title">
          <span className="mdl-card__title-text">Showings for {currentDate.toShowingDateString()}</span>
        </div>
      </section>
      <section className={styles.filmsWrapper} style={{ overflow: "hidden" }}>

        <Grid sx={{ flexGrow: 1 }} container spacing={2} style={{ margin: "10px" }}>
          {

            films.map(film => (

              <FilmBrief key={film.id} film={film} showings={showings} currentDate={currentDate} />

            ))
          }
        </Grid>

      </section>
    </>
  )
}