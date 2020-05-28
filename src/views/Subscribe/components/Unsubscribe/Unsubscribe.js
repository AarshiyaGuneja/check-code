import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardActions,
  CardHeader,
  CardContent,
  Divider,
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


class Unsubscribe extends Component {

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

      const subscription = checkArray[i];
      const url = `https://cors-anywhere.herokuapp.com/http://nav-notification.herokuapp.com/subscriptions/unsubscribe/${subscription}`;

      axios.delete(url)
        .then((res) => {
          console.log(res.data)
        }).catch((error) => {
          console.log(error)
        });
    }

  }

  render() {
    const { unsubscribe } = this.props;
    return (
      <Card >
        <form>
          <CardHeader
            subheader="Want to unsubscribe? Select from below options!"
            title="Unsubscribe"
          />
          <CardContent>
            <CardActions>
              <Autocomplete
                multiple
                id="checkboxes-tags-demo"
                options={unsubscribe}
                disableCloseOnSelect
                getOptionLabel={(option) => option.subscription}
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
                    {option.subscription}
                  </React.Fragment>
                )}
                style={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params}
                    variant="outlined"
                    label="Select from subscribed entities"
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
              Unsubscribe
        </Button>
          </CardActions>
        </form>
      </Card>
    );
  };
}

Unsubscribe.propTypes = {
  className: PropTypes.string
};

export default Unsubscribe;
