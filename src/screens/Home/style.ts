import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  }, 

  form: {
    width: '100%',
    flexDirection: 'row',
   
    left: 24,
    right: 24,
    marginTop: -30,
  },

  textInput: {
    backgroundColor: '#262626',
    border: '1px solid #0D0D0D',
    borderRadius: 6,
    gap: 4,
    width: 271,
    height: 54,
    padding: 16,
    cursor: 'pointer',
    color: '#F2F2F2',
    marginBottom: 33,
    
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 18,
    marginLeft: 4,
    
    width: 52,
    height: 52,

    backgroundColor: '#1E6F9F',
    borderRadius: 6,
  },

  listEmptyText: {
    color: '#808080',
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  listEmptyText1: {
    color: '#808080',
    fontSize: 14,
    textAlign: 'center',
  },

  img: {
    flexDirection: 'column',
    width: 56,
    height: 56,
    marginLeft: 168,
    marginTop: 100,
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  counts: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 48,
    borderBottomWidth: 1,
    borderBottomColor: '#333333',
    marginLeft: 20,
    marginRight: 40,
    marginTop: 15,
    
  },

  criadas: {
    color: '#4EA8DE',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 17,
    marginLeft: 5,
    marginBottom: 20,

    width: 61,
    height: 17,
  },

  concluidas: {
    color: '#8284FA',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 17,
    marginRight: 5,

    width: 79,
    height: 17,
  },

  created: {
    flexDirection: 'row',
    backgroundColor: '#333333',
    borderRadius: 999,
    width: 25,
    height: 19,
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -150,
    lineHeight: 17,
  },

  counterCreated: {
    color:'#D9D9D9' ,
    fontSize: 12,
    fontWeight: 'bold',
    lineHeight: 15,
    
  }


})