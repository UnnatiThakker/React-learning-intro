import {useSelector} from 'react-redux';
import { PickDate } from './PickDate';
import { ShowingTimes } from './ShowingTimes';

export function FilmDetails(){
    console.log('in FilmDetails Component');
    const films = useSelector(state => state.films);
    const film = films[3] || {};
    const showings = useSelector(state => state.showings);
    const currentDate = new Date(useSelector(state => state.currentDate));
    const styles = {
      container:{
        width:"95%",
        margin: "20px 20px",
        padding: "20px"
      },
      poster:{
        maxWidth:"95%",
        objectFit:"contain"
      },
      wrapper:{
        marginTop:"20px"
      },
      headline:{
        fontsize:"1.2em"
      },
      showingTimesWrapper:{
        display:"flex",
        flexWrap:"wrap"
      },
      title:{
        background:"black",
        color: "white",
        fontWeight:"bold",
        padding: "20px",
        margin: "10px"
      }
    };
    return (
        <>
  <div style={{ ...styles.container }} className='mdl-card mdl-shadow--2dp'>
    <div style={{}}>
      <h1>{film.title}</h1>
    </div>
    <div style={{ display: 'flex' }}>
      <div style={{ flex: '1 1 30%' }}>
        <img src={film.poster_path} alt="" style={styles.poster} />
      </div>
      <div style={{ flex: '1 1 70%' }}>
        <h1>{film.title}</h1>
        <h2>{film.tagline}</h2>
        <p>{film.overview}</p>
        <p>Viewer's ratings: <span>{film.vote_average}</span> / <span>{film.vote_count}</span></p>
        <p>Released: {film.release_date}</p>
        <p>Runtime minutes</p>
        <a href="HOMEPAGE" target="movie_site">{film.home_page}</a>
        Pick dates will go here
        <ShowingTimes currentDate={currentDate} currentFilm={film} showings={showings} />
      </div>
    </div>
    <PickDate/>
  </div>
</>
    )
}