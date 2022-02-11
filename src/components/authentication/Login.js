import {useDispatch, useSelector} from 'react-redux';
import {actions} from '../../store/actions';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export function Login(){
    console.log('in Login Component');
    const styles = {};
    const dispatch = useDispatch();
    const [showPassword,setPassword] = useState(false);
    const inputType = showPassword ? "text" : "password";

    const loginUser = (event) => {
      event.preventDefault();
      dispatch(actions.login(event.target['email'].value, event.target['password'].value));
      console.log("Hello World!");
    }


    return (
        <section style={styles.wrapper} className="mdl-card mdl-shadow--2dp">
  <div className="mdl-card__title mdl-color--primary mdl-color-text--white">
    <h1 className="mdl-card__title-text">Login</h1>
  </div>
  <div className="mdl-card__supporting-text">
    <div>
      <p>First time user? <a href="/account">Register</a></p>
    </div>
    <form onSubmit={(event)=> loginUser(event)}>


    <FormControl sx={{ m: 1, width: '35ch' }} variant="standard">
          <Input
            id="standard-email"
            placeholder="Email"
          />
        </FormControl>

      <FormControl sx={{ m: 1, width: '35ch' }} variant="standard">
          <Input
            id="standard-adornment-password"
            type={inputType}
            placeholder="Password"
            
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setPassword(!showPassword)}
                  
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

      <input type="submit" value="Login" className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" style={styles.submitButton} />

    </form>
  </div>
</section>
    )
}