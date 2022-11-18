import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: 327,
    height: 64,
    marginLeft: 24,
    backgroundColor: '#262626',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 8,
    
  },

  textDecoration: {
    flex: 1,
    color: '#FFFF',
    fontSize: 16,
    marginLeft: -10,
    marginRight: 55,
    
  },

  check: {
   flexDirection: 'row',
   alignItems: 'center',
  },

  trash: {
    position: 'absolute',
    width: 12,
    marginLeft: 280,
  },

  

})