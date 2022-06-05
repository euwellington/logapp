import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    // padding: 20,
    backgroundColor: '#f9f9f9',
    flex: 1,
    // justifyContent: 'center',
    paddingTop: 20
  },
  header:
  {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: '#fff'
    padding: 18
  },
  address:
  {

  },
  user: 
  {
    fontWeight: '700',
    fontSize: 17,
    color: 'rgba(0,0,0,0.7)'
  },
  cardIcon:
  {
    backgroundColor: '#EE7942',
    marginLeft: 10,
    padding: 5,
    borderRadius: 60
  },





  devicesContent:
  {
    // marginTop: 20,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    elevation: 1,
    width: '90%',
    alignSelf: 'center'
  },
  devicesTitle:
  {
    fontWeight: '400',
    fontSize: 12
  },
  devicesSubTitle:
  {
    fontSize: 11
  },
  devicesInfo:
  {
    fontSize: 12,
    alignSelf: 'center',
    fontWeight: '600'
  },



  listContentDevices:
  {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  boxDevices:
  {
    padding: 10,
    backgroundColor: '#f3f3f3',
    borderRadius: 4,
    height: 140,
    width: 150,
    margin: 4
  },
  headerListDevice:
  {

  },

  contentInfo:
  {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#f1f1f1',
    elevation: 1,
  },
  contentInfoTitle:
  {
    fontSize: 12,
    width: 200
  },
  btnComment: {
    borderColor: '#4951EC',
    borderWidth: 1,
    borderRadius: 8,
    width: '50%',
    marginTop: 10,
    padding: 5
  },
  titleBtnComment: {
      color: '#4951EC',
      fontWeight: '800',
      textAlign: 'center',
      fontSize: 13,
  },
  img:
  {
    height: 100,
    width: 100
  }
});