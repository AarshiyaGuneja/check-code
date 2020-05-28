import React from 'react';
import { Grid } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

import {TaskProgress} from '../components';
import GroupFundPage from './GroupFundPage';
var data=[{"id":"2804202001","alertid":"booth0","parentalertid":"booth0","user":"Abhinay","application":"M2","time":"2020-04-12T07:12:00","category":"info","fund":"Fund1","client":"BoothBay","msg":"File Reading started.","notificationType":"information"},{"id":"2804202002","alertid":"booth1","parentalertid":"booth0","user":"Abhinay","application":"M2","time":"2020-04-12T07:20:00","category":"info","fund":"Fund1","client":"BoothBay","msg":"File Reading Failed!","notificationType":null},{"id":"2804202003","alertid":"booth2","parentalertid":"booth2","user":"Abhinay","application":"M2","time":"2020-04-12T07:40:00","category":"info","fund":"Fund1","client":"BoothBay","msg":"File Reading started","notificationType":"information"},{"id":"2804202004","alertid":"booth3","parentalertid":"booth2","user":"Abhinay","application":"M2","time":"2020-04-12T08:12:00","category":"info","fund":"Fund1","client":"BoothBay","msg":"File Reading completed with some exceptions","notificationType":"warning"},{"id":"2804202005","alertid":"booth4","parentalertid":"booth4","user":"Abhinay","application":"M2","time":"2020-04-12T08:20:00","category":"info","fund":"Fund1","client":"BoothBay","msg":"Signoff done successfully","notificationType":"completed"},{"id":"2804202006","alertid":"booth5","parentalertid":"booth5","user":"Abhinay","application":"M2","time":"2020-04-12T08:37:00","category":"info","fund":"Fund1","client":"BoothBay","msg":"PNS started","notificationType":"information"},{"id":"2804202007","alertid":"booth6","parentalertid":"booth6","user":"Abhinay","application":"M2","time":"2020-04-12T08:59:00","category":"info","fund":"Fund1","client":"BoothBay","msg":"Regeneration of Gain Started","notificationType":"information"},{"id":"2804202009","alertid":"booth8","parentalertid":"booth8","user":"Abhinay","application":"M2","time":"2020-04-12T09:13:00","category":"info","fund":"Fund1","client":"BoothBay","msg":"All Position Generated Successfully","notificationType":"completed"}]


function GroupFund() {

    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState('paper');
    const handleClickOpen = (scrollType) => () => {
      setOpen(true);
      setScroll(scrollType);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
      if (open) {
        const { current: descriptionElement } = descriptionElementRef;
        if (descriptionElement !== null) {
          descriptionElement.focus();
        }
      }
    }, [open]);

    return (
            <Grid
item
lg={3}
sm={6}
xl={3}
xs={12}
>
<TaskProgress onClick={handleClickOpen('paper')}/>
<Dialog
open={open}
onClose={handleClose}
scroll={scroll}
aria-labelledby="scroll-dialog-title"
aria-describedby="scroll-dialog-description"
maxWidth='lg'
>


<GroupFundPage notifications = {data}/>


<DialogActions>
<Button onClick={handleClose} color="primary">
  Cancel
</Button>
   </DialogActions>
</Dialog>
</Grid>
    )
}

export default GroupFund;



