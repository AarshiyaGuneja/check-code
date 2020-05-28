import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardActions,
  CardHeader,
  CardContent,
  Divider,
  Typography,
  Grid,
  Button
} from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import axios from 'axios';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 800
  },
  statusContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  status: {
    marginRight: theme.spacing(1)
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));

class Subscriptions extends Component {

  constructor(props) {
    super(props);
    this.state = {
      checkedItems: []
    };
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange = (event, values) => {
    if (event.target.checked) {
      this.setState({
        checkedItems: [...this.state.checkedItems, event.target.value],
      }, () => {
        console.log(this.state.checkedItems);
      });
    }
    else {
      let remove = this.state.checkedItems.indexOf(event.target.value);
      this.setState({
        checkedItems: this.state.checkedItems.filter((_, i) => i !== remove)
      },
        () => {
          console.log('checkeditems', this.state.checkedItems);
        }
      );
    }
  }

  onSubmit = (e) => {
    e.preventDefault();

    const checkArray = this.state.checkedItems;

    for (var i = 0; i < checkArray.length; i++) {
      const params = {
        userid: '1',
        subscription: checkArray[i]
      }
      axios.put('https://cors-anywhere.herokuapp.com/http://nav-notification.herokuapp.com/subscriptions/userid/1', params)
        .then((res) => {
          console.log(res.data)
        }).catch((error) => {
          console.log(error)
        });
    }

  }

  render() {
    return (
      <Card >
        <form>
          <CardHeader
            subheader="Want to subscribe? Select from below options!"
            title="Subscribe"
          />
          <CardContent>
            <CardActions>
              <Autocomplete
                multiple
                id="checkboxes-tags-demo"
                options={Groups}
                disableCloseOnSelect
                getOptionLabel={(option) => option.title}
                renderOption={(option, { selected }) => (
                  <React.Fragment>
                    <Checkbox
                      icon={icon}
                      checkedIcon={checkedIcon}
                      style={{ marginRight: 7 }}
                      value={option.subscription}
                      checked={selected}
                      onChange={this.handleChange}
                    />
                    {option.title}
                  </React.Fragment>
                )}
                style={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params}
                    variant="outlined"
                    label="Select from Group names"
                  />
                )}
              />
            </CardActions>
          </CardContent>
          <Divider />
          <CardActions>
            <Button
              color="primary"
              variant="contained"
              onClick={this.onSubmit}
            >
              Subscribe
        </Button>
          </CardActions>
        </form>
      </Card>
    );
  };
}

const Groups = [
  { title: 'Boothbay MultiStategy' },
  { title: 'Cambellceam' },
  { title: 'Yakira' },
  { title: 'Crawford' },
  { title: 'Whitestone Capital' },
];

const Funds = [
  { title: 'Fund1' },
  { title: 'Fund2' },
  { title: 'Fund3' },
  { title: 'Fund4' },
  { title: 'Fund5' },
];

const Application = [
  { title: 'Main2' },
  { title: 'Main' },
  { title: 'RPS' },
  { title: 'FAS' },
  { title: 'RTA' },
];

Subscriptions.propTypes = {
  className: PropTypes.string
};

export default Subscriptions;
