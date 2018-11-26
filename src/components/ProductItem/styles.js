import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  image: {
    width: 60,
    height: 60,
    marginLeft: 2,
  },
  mainContainer: {
    paddingTop: 5,
    paddingBottom: 10,
    borderBottomColor: 'rgba(20,20,20,0.2)',
    borderBottomWidth: 1,
    marginLeft: 18,
    flexDirection: 'row',
    alignItems: 'center',
  },
  mainName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  fullName: {
    fontSize: 12,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 3,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 0.98,
  },
  buyButtom: {},
})
