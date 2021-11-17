import React from 'react';
import { View,SafeAreaView, Text , StyleSheet,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const ForgetPasswordSuccessFul=({navigation})=>{

    return(
        <SafeAreaView>
            <View style={styles.container}>
            <Icon name ="checkmark-circle" size ={150} color='#00FF00' style={{marginTop:40, marginLeft:15}} ></Icon>
            <Text>
                 Lorem ipusjk jfhcdkj dcash acg
                </Text>
                <Text>
                 ipusjk jfhcdkj dcash
                </Text>
                <TouchableOpacity 
            
                style={{backgroundColor:'#0000CD',width:'75%',height:45,borderRadius:10,alignItems:'center',   elevation: 10,marginTop:30}}>
                      <Text style={{padding:13,color:'#fff', fontSize:20}}>
                      NEXT
                      </Text>
                  </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        marginTop:350,
    }
})

export default ForgetPasswordSuccessFul