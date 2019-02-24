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
  pontos: {
      width: 10
  }
});

const Tabela = (props) => {
  const { classes, socios } = props;
  
  return (
      <Table className={classes.table} >
        <TableHead>
          <TableRow>
          <TableCell className={ classes.pontos } align="right">Classif.</TableCell>
            <TableCell >Sócio</TableCell>
            <TableCell className={ classes.pontos } align="right">P</TableCell>
            <TableCell className={ classes.pontos } align="right">J</TableCell>
            <TableCell className={ classes.pontos } align="right">V</TableCell>
            <TableCell className={ classes.pontos } align="right">E</TableCell>
            <TableCell className={ classes.pontos } align="right">D</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>  
          { 
            socios.map(socio => {
                return (
                  <TableRow>
                    <TableCell className={ classes.pontos } align="right">{socio.nuClassificacao}</TableCell>
                    <TableCell>{socio.nmApelido}</TableCell>
                    <TableCell className={ classes.pontos } align="right">{socio.nuPontos}</TableCell>
                    <TableCell className={ classes.pontos } align="right">{socio.nuJogos}</TableCell>
                    <TableCell className={ classes.pontos } align="right">{socio.nuVitorias}</TableCell>
                    <TableCell className={ classes.pontos } align="right">{socio.nuEmpates}</TableCell>
                    <TableCell className={ classes.pontos } align="right">{socio.nuDerrotas}</TableCell>
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
  classes: PropTypes.object.isRequired,
  socios: PropTypes.array.isRequired
};

export default withStyles(styles)(Tabela);