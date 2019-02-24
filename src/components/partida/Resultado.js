import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  placar: {
    display: 'flex',
    justifyContent: 'space-evenly'
  },

  title: {
    fontSize: 14,
    fontWeight: 'bold',
    padding: 3
  }
  
});

const Resultado = (props) => {
  const { classes, data, placar } = props;

  return (
    <div className={ classes.placar }>
        <div>
            <span className={ classes.title }>Data:</span> { data }
        </div>
        <div>
            <span className={ classes.title }>Placar:</span>{ placar }
        </div>
    </div>
  )
}

Resultado.propTypes = {
  data: PropTypes.string.isRequired,
  placar: PropTypes.string.isRequired
}

export default withStyles(styles)(Resultado);
