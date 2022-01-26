import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({

  para: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    fontFamily:"'Nunito', 'sans-serif'",
    boxShadow: "3px 3px 3px 3px #9E9E9E"
  },
  photos: {
      display:'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      width:'100%',
      marginBottom:'2vh'
  },
  photo: {
    borderRadius:25,
    width: '20vw',
    height: '20vw',
    resizeMode: 'contain'
  }

}));
