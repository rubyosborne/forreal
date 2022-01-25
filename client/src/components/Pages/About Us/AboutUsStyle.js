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
    fontFamily:"'Nunito', 'sans-serif'"
  },
  photos: {
      display:'flex',
      flexDirection: 'row',
      height: 200,
      justifyContent: 'space-around',
  },
  photo: {
    borderRadius:25
  }

}));
