import {useDispatch, useSelector} from 'react-redux';
import {actions} from '../../store/actions';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export function Account(){
    console.log('in Account Component');
    const styles = {};
    const dispatch = useDispatch();
    const [showPassword,setPassword] = useState(false);
    const inputType = showPassword ? "text" : "password";
    const [showConfirmPassword,setConfirmPassword] = useState(false);
    const inputConfirmType = showConfirmPassword ? "text" : "password";
    console.log(showConfirmPassword)
    const register = (event) => {
      event.preventDefault();
      const user = {
        email: event.target['email'].value,
        password: event.target['password'].value,
        name: {given: event.target['given'].value, family: event.target['family'].value},
        phone: event.target['phone'].value,
        creditCard: {
          number: event.target['number'].value,
          expiration: event.target['expiration'].value
        }
      }
      dispatch(actions.register(user));
      console.log("Hello World!");
    }

    return (
        <section style={styles.wrapper} className="mdl-card mdl-shadow--2dp">
  <div className="mdl-card__title mdl-color--primary mdl-color-text--white">
    <h1 className="mdl-card__title-text">Register</h1>
  </div>
  <div className="mdl-card__supporting-text">
    <form onSubmit={(event) => register(event)}>
      <div style={styles.inputDivs}>
        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input id="email" className="mdl-textfield__input" />
          <label className="mdl-textfield__label" htmlFor="email">Email</label>
        </div>
      </div>


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

      <FormControl sx={{ m: 1, width: '35ch' }} variant="standard">
          <Input
            id="standard-confirm-password"
            type={inputConfirmType}
            placeholder="Password (again)"
            
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setConfirmPassword(!showConfirmPassword)}
                  
                >
                  {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      

      <div style={styles.inputDivs}>
        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input id="given" className="mdl-textfield__input" />
          <label className="mdl-textfield__label" htmlFor="given">First name (given name)</label>
        </div>
      </div>

      <div style={styles.inputDivs}>
        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input id="family" className="mdl-textfield__input" />
          <label className="mdl-textfield__label" htmlFor="family">Last name (family name)</label>
        </div>
      </div>

      <div style={styles.inputDivs}>
        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input id="phone" className="mdl-textfield__input" />
          <label className="mdl-textfield__label" htmlFor="phone">Phone</label>
        </div>
      </div>

      <div style={styles.inputDivs}>
        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input id="number" className="mdl-textfield__input" />
          <label className="mdl-textfield__label" htmlFor="number">Credit card</label>
        </div>
      </div>

      <div style={styles.inputDivs}>
        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input id="expiration" type="date" className="mdl-textfield__input" />
          <label className="mdl-textfield__label" htmlFor="expiration">Expiration</label>
        </div>
      </div>

      <input type='submit' value='Save' className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" style={styles.submitButton} />
    </form>
  </div>
</section>
    )
}