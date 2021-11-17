import React from 'react';
import Icons from 'react-native-vector-icons/Ionicons';
import { View,SafeAreaView, Text,TouchableOpacity ,TextInput, StyleSheet,Button, Image, _ScrollView} from 'react-native';
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import logo from '../images/logo.png';
import { ScrollView } from 'react-native-gesture-handler';
const SignUp=({navigation})=>{

    return(
        <SafeAreaView >

            <TouchableOpacity>
                <Icon name ="arrow-back" size ={25} color='black' style={{marginTop:25, marginLeft:20}} ></Icon>
                </TouchableOpacity>
           <ScrollView>
            <View style={styles.container}>
            <Image 
         style={{marginTop:0,elevation: 10,}}
         source={require('../images/logo.png')}
            />
            
             <View style={styles.inputCon}>
            
             <View style={styles.lovers} >
             <Icon name='person' size={22} color='black' style={{ margin: 9 }}></Icon>
                        <TextInput 
                         autoFocus={true}
                           placeholder="ENTER YOUR FIRST NAME "  ></TextInput>
                 </View>


                 <View style={styles.lovers} >
                        <Icon name='person' size={22} color='black' style={{ margin: 10 }}></Icon>
                        <TextInput placeholder="ENTER YOUR LAST NAME" ></TextInput>
                    </View>

                    <View style={styles.lovers} >
                        <Icon name='email' size={22} color='black' style={{ margin: 10 }}></Icon>
                        <TextInput   placeholder="ENTER YOUR EMAIL">

                        </TextInput>
                    </View>
                    <View style={styles.lovers} >
                        <Icon name='perm-phone-msg' size={22} color='black' style={{ margin: 10 }}></Icon>
                        <TextInput    placeholder="ENTER YOUR PHONE NO " ></TextInput>
                    </View>
                    <View style={styles.lovers} >
                        <Icon name='lock' size={22} color='black' style={{ margin: 10 }}></Icon>
                        <TextInput   placeholder="ENTER YOUR PASSWORD" ></TextInput>
                        
                    </View>
                    <View style={styles.lovers} >
                        <Icon name='lock' size={22} color='black' style={{ margin: 10 }}></Icon>
                        <TextInput style={{width:'100%'}} placeholder="CONFIRM PASSWORD " ></TextInput>
                    </View>
                  <TouchableOpacity style={{backgroundColor:'blue',width:'75%',height:35,borderRadius:10,alignItems:'center',   elevation: 10,marginTop:20}}>
                      <Text style={{padding:8,color:'#fff'}}>
                      REGISTER
                      </Text>
                  </TouchableOpacity>
             </View>
            
             <View style={styles.text} >
                    <Text style={{padding:8}}>
                        Already Have An Account?
                    </Text>
                    <TouchableOpacity>
                    <Text style={{ fontWeight: 'bold', padding: 8, }}>
                        Sign Up
                    </Text>
                    </TouchableOpacity>
                </View>
            </View>

            </ScrollView>

        </SafeAreaView>
    )
}
const styles =StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
       
    },
    inputCon: {
        width: '95%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        marginTop:0,
       
    },
    input: {
    
        borderRadius: 5,
        backgroundColor: '#ebebeb',
        height: 40,
        width: '100%',
        marginBottom: 8,
        
    },
    button: {
        width: '60%',
        margin: 250,
        marginBottom: 5,
        marginTop: 8,
        height: 25,
        borderRadius: 8,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
        color: 'white',
        alignItems: 'center',
    },
    lovers: {
   
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#fff',
        borderColor: 'black',
        borderRadius: 5,
        height: 40,
        width: '100%',
        margin: 8,
        elevation: 10,
      

    },
    text: {
        flexDirection: 'row',
        color:'gray',
        elevation: 10,
    }
     
})
export default SignUp






























































































































































