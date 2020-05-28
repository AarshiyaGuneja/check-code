import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

import { DoughnutGraph,LineGraph} from './components';
import {GroupFund} from './GroupFund';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(0)
  }
}));



const HomePage = () => {
  const classes = useStyles();
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
    <div className={classes.root}>
      <Grid
        container
        spacing={1}
      >
        <Grid 
          item
          lg={8}
          md={6}
          xl={3}
          xs={12}
        >
          <LineGraph />
        </Grid>
        <Grid
          item
          lg={4}
          md={6}
          xl={3}
          xs={12}
        >
          <DoughnutGraph />
        </Grid>
        <GroupFund/>
        <GroupFund/>
        <GroupFund/>
        <GroupFund/>
        <GroupFund/>
        <GroupFund/>
        <GroupFund/>
        <GroupFund/>
        <GroupFund/>
        <GroupFund/>
             </Grid>
    </div>
  );
};

export default HomePage;


















// import React from 'react';
// import PropTypes from 'prop-types';
// import clsx from 'clsx';
// import { lighten, makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TablePagination from '@material-ui/core/TablePagination';
// import TableRow from '@material-ui/core/TableRow';
// import TableSortLabel from '@material-ui/core/TableSortLabel';
// import Paper from '@material-ui/core/Paper';
// import Checkbox from '@material-ui/core/Checkbox';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Switch from '@material-ui/core/Switch';
// import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
// import BuildRoundedIcon from '@material-ui/icons/BuildRounded';
// import Badge from '@material-ui/core/Badge';
// import ExpansionPanel from '@material-ui/core/ExpansionPanel';
// import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
// import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
// import Typography from '@material-ui/core/Typography';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import PerfectScrollbar from 'react-perfect-scrollbar';
// import Collapse from '@material-ui/core/Collapse';
// import { SearchInput } from 'components';
// import {
//   Card,
//   CardContent,
//   CardActions,
//   CardHeader,
//   Divider,
// } from '@material-ui/core';
// import IconButton from '@material-ui/core/IconButton';
// import { StatusBullet } from 'components';
// import StarTwoToneIcon  from '@material-ui/icons/StarTwoTone';
// import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

// //id in Headcells should MATCH WITH JASON NAMES and messages sorted by color
// const headCells = [
//   { id: 'application', numeric: false, disablePadding: true, label: 'Application' },
//   { id: 'client', numeric: false, disablePadding: false, label: 'Client' },
//   { id: 'fund', numeric: false, disablePadding: false, label: 'Fund' },
//   { id: 'msgnotificationType', numeric: false, disablePadding: false, label: 'Message' },
//   { id: 'time', numeric: true, disablePadding: false, label: 'Time' },
// ];

// function descendingComparator(a, b, orderBy) {
//   if (b[orderBy] < a[orderBy]) {
//     return -1;
//   }
//   if (b[orderBy] > a[orderBy]) {
//     return 1;
//   }
//   return 0;
// }

// function getComparator(order, orderBy) {
//   return order === 'desc'
//     ? (a, b) => descendingComparator(a, b, orderBy)
//     : (a, b) => -descendingComparator(a, b, orderBy);
// }
// function stableSort(array, comparator) {
//   console.log(array)
//   console.log(comparator)
// const stabilizedThis = array.map((el, index) => [el, index]);
// stabilizedThis.sort((a, b) => {
//   const order = comparator(a[0], b[0]);
//   if (order !== 0) return order;
//   return a[1] - b[1];
// });
// console.log(stabilizedThis)
// console.log(stabilizedThis.map((el) => el[0]))
// return stabilizedThis.map((el) => el[0]);
// }

// const messageColor=[
//   {warning:"red",information:"yellow"}
// ]
  
// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//   },
//   paper: {
//     width: '100%',
//     marginBottom: theme.spacing(0),
//     marginTop:theme.spacing(0)
//   },
//   table: {
//     minWidth: 750,
//   },
//   visuallyHidden: {
//     border: 0,
//     clip: 'rect(0 0 0 0)',
//     height: 1,
//     margin: -1,
//     overflow: 'hidden',
//     padding: 0,
//     position: 'absolute',
//     top: 20,
//     width: 1,
//   },
//     heading: {
//     fontSize: theme.typography.pxToRem(14),
//     flexBasis: '10%',
//     flexShrink: 0,
//   },
//   secondaryHeading: {
//     fontSize: theme.typography.pxToRem(14),
//   },
//   expansion: {
//     fontSize: theme.typography.pxToRem(13),
//     color: theme.palette.text.secondary,
//   },
// }));

// const statusColors = {
//   completed: 'success',
//   information: 'info',
//   error: 'danger',
//   warning: 'warning'
// };

// export default function EnhancedTable(props) {
//   const classes = useStyles();
//   const [order, setOrder] = React.useState('asc');
//   const [orderBy, setOrderBy] = React.useState('time');
//   const [selected, setSelected] = React.useState([]);
//   const [page, setPage] = React.useState(0);
//   const [dense, setDense] = React.useState(true);
//   const [rowsPerPage, setRowsPerPage] = React.useState(25);
//   const [table,setTable]=React.useState('parent')
//   const [parentAlertId, setParentAlertId]= React.useState([])
//   const [expanded, setExpanded] = React.useState(false);
//   const [star, setStar] = React.useState([]);
//   const [read, setRead] = React.useState([]);

  
//   const rows =props.notifications

// console.log(rows)
// //give collection of combination of parentalertid and alertid present in data
// var uniqueCombinationsOfIds = rows.filter((rows, index, self) =>
//     index === self.findIndex((t) => (t.parentalertid === rows.parentalertid && t.alertid === rows.alertid)))
// console.log(uniqueCombinationsOfIds);

// var parentNotification = uniqueCombinationsOfIds.filter( element => element.alertid === element.parentalertid)
// console.log(parentNotification)

// var childNotification = rows.filter( element => element.parentalertid ===parentAlertId[0])
// console.log(childNotification)

// var rank = function(items, prop) {

//   var results = {}
//   for(var i=0;i< items.length;i++) {
//     var value = items[i][prop];
//     var count = (results[value] || 0) + 1;
//     results[value] = count;
//   }

//  return results
// }

// var sorted = rank(props.notifications, "parentalertid");
// parentNotification.map(i=>i.displayNumber=sorted[i.parentalertid])
// console.log(parentNotification)

//   const handleRequestSort = (event, property) => {
//     const isAsc = orderBy === property && order === 'asc';
//     setOrder(isAsc ? 'desc' : 'asc');
//     setOrderBy(property);
//     console.log('cool')
//     console.log(orderBy)
//     console.log(order)
//   };


//     const handleExpandClick  = (panel) => (event) => {
//     console.log(expanded)
//     if(expanded===false){
//     setExpanded(panel)}   
//      else {
//       setExpanded(false)
//      }
//   };
  
//   const handleRowClick = (event, parentalertidproperty) => {
//     console.log(parentalertidproperty)
//     if (event.target.selected) {
//         if(table==='parent'){
//       const Newtable = 'child'
//       setTable(Newtable);
     
//         }
//         if(table==='child'){
//             const Newtable = 'parent'
//             setTable(Newtable);
//               }
//       return;
//     }
//     console.log(parentAlertId)
//     setTable();
//     setParentAlertId([parentalertidproperty.parentalertid,parentalertidproperty.application,parentalertidproperty.client,parentalertidproperty.fund])
//     console.log(parentAlertId)

//     const selectedIndex = read.indexOf(parentalertidproperty.id);
//     let newSelected = [];

//     if (selectedIndex === -1) {
//       newSelected = newSelected.concat(read, parentalertidproperty.id);
//     }else{
//       newSelected=read
//     }
//     setRead(newSelected);

//   };
  

//   const handleClick = (event,id) => {
//     const selectedIndex = selected.indexOf(id);
//     let newSelected = [];

//     if (selectedIndex === -1) {
//       newSelected = newSelected.concat(selected, id);
//     } else if (selectedIndex === 0) {
//       newSelected = newSelected.concat(selected.slice(1));
//     } else if (selectedIndex === selected.length - 1) {
//       newSelected = newSelected.concat(selected.slice(0, -1));
//     } else if (selectedIndex > 0) {
//       newSelected = newSelected.concat(
//         selected.slice(0, selectedIndex),
//         selected.slice(selectedIndex + 1),
//       );
//     }
//     setSelected(newSelected);
//   };

//   const handleStar = (event,id) => {
//     const selectedIndex = star.indexOf(id);
//     let newSelected = [];

//     if (selectedIndex === -1) {
//       newSelected = newSelected.concat(star, id);
//     } else if (selectedIndex === 0) {
//       newSelected = newSelected.concat(star.slice(1));
//     } else if (selectedIndex === star.length - 1) {
//       newSelected = newSelected.concat(star.slice(0, -1));
//     } else if (selectedIndex > 0) {
//       newSelected = newSelected.concat(
//         star.slice(0, selectedIndex),
//         star.slice(selectedIndex + 1),
//       );
//     }
//     setStar(newSelected);
//   };

//   const handleSelectAllClick = (event) => {
//     if (event.target.checked) {
//       const newSelecteds = rows.map((n) => n.id);
//       setSelected(newSelecteds);
//       return;
//     }
//     setSelected([]);
//   };

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   const handleChangeDense = (event) => {
//     setDense(event.target.checked);
//   };

//   const createSortHandler = (property) => (event) => {
//     handleRequestSort(event, property); 
//   };

//   const isSelected = (id) => selected.indexOf(id) !== -1;
//   const isStar = (id) => (star.indexOf(id) !== -1) ? 'primary':'disabled' ;
//   const isRead = (id) => (read.indexOf(id) !== -1) ? 'normal':'bold' ;


//   const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

//   return (
//     <div
//     className={clsx(classes.root, {
//       [classes.highlight]: table !== 'parent',
//     })}
//   >
//     {table === 'parent' ? (
//       <Card>
//       <CardContent className={classes.content}>
//         <PerfectScrollbar>
      

//     <div className={classes.root}>
//       <Paper className={classes.paper}>
       
//         <TableContainer className={classes.container}>
//           <Table
//             className={classes.table}
//             aria-labelledby="tableTitle"
//             size={dense ? 'small' : 'medium'}
//             aria-label="enhanced table"
//           >
//              <TableRow >
               
//             <TableCell padding="checkbox" colSpan={5}>
//             <SearchInput
//              className={classes.searchInput}
//              placeholder="Search"
//            />
//              </TableCell>
//              <TableCell></TableCell>
//              <TableCell align='right'><DeleteOutlineIcon fontSize='small' color='primary' /></TableCell>
//              </TableRow>
//              </Table>
//              <Table
//             className={classes.table}
//             aria-labelledby="tableTitle"
//             size={dense ? 'small' : 'medium'}
//             aria-label="enhanced table"
//           >
//             <TableHead className={classes.heading}>
//              <TableRow >
//             <TableCell >
//             <Checkbox 
       
//             onChange={handleSelectAllClick}
//             inputProps={{ 'aria-label': 'select all desserts' }}
          
//             onClick={(event) => handleClick(event, parentNotification.name)}/>
//              </TableCell>
//              {headCells.map((headCell) => (
//             <TableCell
//             key={headCell.id}
//             align={headCell.numeric ? 'right' : 'left'}
//             padding={headCell.disablePadding ? 'none' : 'default'}
//             sortDirection={orderBy === headCell.id ? order : false}
//           >
//             <TableSortLabel
//               active={orderBy === headCell.id}
//               direction={orderBy === headCell.id ? order : 'asc'}
//               onClick={createSortHandler(headCell.id)}
//             >
//               {headCell.label}
//               {orderBy === headCell.id ? (
//                 <span className={classes.visuallyHidden}>
//                   {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
//                 </span>
//               ) : null}
//               </TableSortLabel>
//             </TableCell>
//           ))}
//         </TableRow>
//         </TableHead>
//             <TableBody>
//               {stableSort(parentNotification, getComparator(order, orderBy))
//                 .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                 .map((parentNotification, index) => {
//                   const isItemSelected = isSelected(parentNotification.id);
//                   const isItemStar = isStar(parentNotification.id);
//                   const isItemRead = isRead(parentNotification.id);
//                   const labelId = `enhanced-table-checkbox-${index}`;

//                   return (
//                     <TableRow
//                       hover
//                       role="checkbox"
//                       aria-checked={isItemSelected}
//                       tabIndex={-1}
//                       key={parentNotification.id}
//                       tableType ={table}
//                       selected={isItemSelected}
                      
//                     >
//                       <TableCell >
//                       <StarTwoToneIcon   style={{margin: "auto"}}fontSize='small'  color={isItemStar}
//                                   onClick={(event) => handleStar(event, parentNotification.id)}
//                                     />
//                       <Badge badgeContent={parentNotification.displayNumber} color="primary" overlap='circle'>
//                         <Checkbox
//                           checked={isItemSelected}   
//                           onClick={(event) => handleClick(event, parentNotification.id)}
//                         />
//                         </Badge>
//                           </TableCell>
//                       {console.log(parentNotification.parentalertid)}
//                       <TableCell style={{fontWeight: isItemRead}} component="th" id={labelId} scope="row" padding="none" onClick={(event) => handleRowClick(event, parentNotification)}>
//                         {parentNotification.application}
//                       </TableCell>
//                       <TableCell style={{fontWeight: isItemRead}} align="left" onClick={(event) => handleRowClick(event, parentNotification)} >{parentNotification.client}</TableCell>
//                       <TableCell style={{fontWeight: isItemRead}} align="left" onClick={(event) => handleRowClick(event, parentNotification)}>{parentNotification.fund}</TableCell>
//                       <TableCell style={{fontWeight: isItemRead}} align="left" onClick={(event) => handleRowClick(event, parentNotification)}>
//                       <StatusBullet
//                           padding="100px"
//                            className={classes.status}
//                            color={statusColors[parentNotification.notificationType]}
//                            size="md"
//                          />
//                          {parentNotification.msg}</TableCell>
//                       <TableCell  style={{fontWeight: isItemRead}} align="right" onClick={(event) => handleRowClick(event, parentNotification)}>{parentNotification.time.slice(12,20)}</TableCell>
//                     </TableRow>
//                   );
//                 })}
//               {emptyRows > 0 && (
//                 <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
//                   <TableCell colSpan={6} />
//                 </TableRow>
//               )}
//             </TableBody>
//           </Table>
//         </TableContainer>
//         <TablePagination
//           rowsPerPageOptions={[5, 10, 25]}
//           component="div"
//           count={rows.length}
//           rowsPerPage={rowsPerPage}
//           page={page}
//           onChangePage={handleChangePage}
//           onChangeRowsPerPage={handleChangeRowsPerPage}
//         />
//       </Paper>
//       <FormControlLabel
//         control={<Switch checked={dense} onChange={handleChangeDense } color='primary' />}
//         label="Dense padding"
//       />
//     </div>
//     </PerfectScrollbar>
//     </CardContent>
//     </Card>
//     ): (
//       <Card>
//       <CardContent className={classes.content}>
//         <PerfectScrollbar>
      

//     <div className={classes.root}>
//       <Paper className={classes.paper}>
       
//         <TableContainer className={classes.container}>

//             <Table
//            className={classes.table}
//            aria-labelledby="tableTitle"
//            size={dense ? 'small' : 'medium'}
//            aria-label="enhanced table"
//          >
//              <TableRow >
//              <TableCell padding="checkbox">               
//               <ArrowBackRoundedIcon  fontSize="large" viewBox="0 25 50 2" onClick ={(event) => setTable('parent') } />
//              </TableCell>
//              <TableCell padding="checkbox">
//              <Typography className={classes.heading}><b>Application:</b>{parentAlertId[1]}</Typography> </TableCell> 
//               <TableCell padding="checkbox">
//               <Typography className={classes.secondaryHeadingding}><b>Client:</b>{parentAlertId[2]}</Typography>
//               </TableCell>
//               <TableCell padding="checkbox">
//               <Typography className={classes.heading}><b>Fund:</b>{parentAlertId[3]}</Typography>
//               </TableCell>
//               <TableCell />
//               <TableCell padding="checkbox" colSpan={2}>
//            <SearchInput
//              className={classes.searchInput}
//              placeholder="Search"
//            />
//               </TableCell>
           
                      
//               </TableRow>
//               </Table>

//               <Table
//            className={classes.table}
//            aria-labelledby="tableTitle"
//            size={dense ? 'small' : 'medium'}
//            aria-label="enhanced table"
//          >
//                        <TableHead className={classes.highlight}>
//              <TableRow >
//             <TableCell padding="checkbox">
//             <Checkbox onClick={(event) => handleClick(event, parentNotification.name)}/>
//              </TableCell>
          
//             <TableCell
//             align='left'
//             sortDirection={orderBy === 'time' ? order : false}
//           >
//             <TableSortLabel
//               active={orderBy === 'time'}
//               direction={orderBy === 'time' ? order : 'asc'}
//               onClick={createSortHandler('time')}
//             >
//               <h4>Time</h4>
//               {orderBy === 'time' ? (
//                 <span className={classes.visuallyHidden}>
//                   {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
//                 </span>
//               ) : null}
//               </TableSortLabel>
//             </TableCell>

//             <TableCell
//             align='left'
//             sortDirection={orderBy === 'notificationType' ? order : false}
//           >
//             <TableSortLabel
//               active={orderBy === 'notificationType'}
//               direction={orderBy === 'notificationType' ? order : 'asc'}
//               onClick={createSortHandler('notificationType')}
//             >
//               <h4>Message</h4>
//               {orderBy === 'notificationType' ? (
//                 <span className={classes.visuallyHidden}>
//                   {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
//                 </span>
//               ) : null}
//               </TableSortLabel>
//             </TableCell>
//             <TableCell /> 
//         <TableCell /> 
//         <TableCell /> 
//         <TableCell /> 
//         <TableCell /> 
//         <TableCell /> 
//         <TableCell /> 
//         <TableCell /> 
//         <TableCell /> 
//         <TableCell />
//         <TableCell /> 
//         <TableCell /> 
//         <TableCell /> 
//         <TableCell />  
       
//               </TableRow>
//               </TableHead>
//               </Table>



//           <Table
//             className={classes.table}
//             aria-labelledby="tableTitle"
//             size={dense ? 'small' : 'medium'}
//             aria-label="enhanced table"
//           >
//             <TableBody>
//               {stableSort(childNotification, getComparator(order, orderBy))
//                 .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                 .map((childNotification, index) => {
//                   const isItemSelected = isSelected(childNotification.name);
//                   const labelId = `enhanced-table-checkbox-${index}`;

//                   return (
//                     <TableRow
//                       hover
                      
//                       tabIndex={-1}
//                       key={parentNotification.name}
//                       tableType ={table}
                  
//                     >
//                       <TableCell padding="checkbox" onClick={handleExpandClick(childNotification.id)}>
//                       {console.log(expanded)}
//                         <CardActions disableSpacing>
//            <Typography className={classes.heading}>
//            <StarTwoToneIcon   style={{margin: "auto"}}fontSize='small' 
//                                   onClick={(event) => handleStar(event, parentNotification.id)}/>
//            <Checkbox onClick={(event) => handleClick(event, childNotification.name)}/>
//              {childNotification.time.slice(12,20)} </Typography>{console.log(expanded)}
//              <StatusBullet
//                            padding="100px"
//                            margin-left="10px"
//                             className={classes.status}
//                             color={statusColors[childNotification.notificationType]}
//                             size="sm"
//                           />
//            <Typography className={classes.secondaryHeading}> {childNotification.msg}</Typography>        
//          </CardActions>
//          {console.log(expanded)}
//           <Collapse in={expanded === childNotification.id} timeout="auto" unmountOnExit>
//          <CardContent>
//            <Typography paragraph>
//            {childNotification.msg}
//            </Typography>
//            </CardContent>
//            </Collapse>

//                       </TableCell>
                      
                      
//                     </TableRow>
//                   );
//                 })}
//               {emptyRows > 0 && (
//                 <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
//                   <TableCell colSpan={6} />
//                 </TableRow>
//               )}
//             </TableBody>
//           </Table>
//         </TableContainer>
//         <TablePagination
//           rowsPerPageOptions={[5, 10, 25]}
//           component="div"
//           count={rows.length}
//           rowsPerPage={rowsPerPage}
//           page={page}
//           onChangePage={handleChangePage}
//           onChangeRowsPerPage={handleChangeRowsPerPage}
//         />
//       </Paper>
//       <FormControlLabel
//         control={<Switch checked={dense} onChange={handleChangeDense } color='primary' />}
//         label="Dense padding"
//       />
//     </div>
//     </PerfectScrollbar>
//     </CardContent>
//     </Card>
    
//   )}
//   </div>
//   )
// }
