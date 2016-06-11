import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardText from 'material-ui/lib/card/card-text';
import Table from 'material-ui/lib/table/table';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableHeader from 'material-ui/lib/table/table-header';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import TableBody from 'material-ui/lib/table/table-body';

import { fetchLeagueTable } from '../actions/leagues';

class LeagueTables extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    const { id } = this.props.routeParams;

    dispatch(fetchLeagueTable(id));
  }

  render() {
    const { leagues } = this.props;
    return (
      <Card>
        <CardHeader title={ leagues.leagueCaption } />
        <CardText>
          <Table selectable={ false }>
            <TableHeader
              adjustForCheckbox={ false }
              displaySelectAll={ false }>
              <TableRow>
                <TableHeaderColumn>#</TableHeaderColumn>
                <TableHeaderColumn>Team</TableHeaderColumn>
                <TableHeaderColumn>PG</TableHeaderColumn>
                <TableHeaderColumn>GD</TableHeaderColumn>
                <TableHeaderColumn>Pts</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={ false }>
              { leagues.standing.map((team) =>
                <TableRow>
                  <TableRowColumn>{ team.position }</TableRowColumn>
                  <TableRowColumn>{ team.teamName }</TableRowColumn>
                  <TableRowColumn>{ team.playedGames }</TableRowColumn>
                  <TableRowColumn>{ team.goalDifference }</TableRowColumn>
                  <TableRowColumn>{ team.points }</TableRowColumn>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardText>
      </Card>
    );
  }
}
function mapStateToProps(state) {
  const { leagues } = state;
  return { leagues };
}

export default connect(mapStateToProps)(LeagueTables);
