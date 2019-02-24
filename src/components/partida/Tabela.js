import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    // minWidth: 700,
  },
});

const Tabela = (props) => {
  const { classes, time, times } = props;
  
  return (
      <Table className={classes.table} >
        <TableHead>
          <TableRow>
            <TableCell>{ time }</TableCell>
            <TableCell align="right">Gols</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>  
          { 
            times.map(time => {
                return (
                  <TableRow>
                    <TableCell component="th" scope="row">
                      { time.nmApelido }
                    </TableCell>
                    <TableCell align="right">{ time.nuGol }</TableCell>
                  </TableRow>          
                )
              }
            )
          }        
        </TableBody>
      </Table>
  );
}

Tabela.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Tabela);