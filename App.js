import React from "react";
import { View,Text,FlatList,Image,ScrollView} from 'react-native'

const App=()=>{
  const arr = [{ camid: 1, camname: "New 1" }, { camid: 2, camname: "New 2" }, { camid: 3, camname: "New 3"
 }]
return <>

<View >
<Text style={{ marginLeft: 20, marginTop: 30, fontFamily: "Poppins-Medium", fontSize: 20, color: "#8a8a8a" }} >
                Hey Iclear test user ,
            </Text>

            <Text style={{  left: 30, marginTop: 0, fontFamily: "Poppins-Medium", fontSize: 30 }} >
                Welcome To AI World
            </Text>

            <FlatList style={{}}
            data={arr}
            renderItem={
              ({item})=>
              <Text style={{width: '100%', backgroundColor: "white", color: "black", opacity: 0.7, justifyContent: "center"
              , fontWeight: "bold", padding: 30, borderRadius: 10, marginBottom: 20
      }}>
        <View style={{}}>

 <Image style={{width:40,height:40}} source={{uri: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'}}/>
        </View>
              {item.camname}
              </Text>
              
            }
            
            />
           
    <View style={{flexDirection:"row",top:150}}>    
   <Text  style={{marginRight:22,backgroundColor:"grey", borderRadius:4,padding:5,fontWeight:"bold"}}>Alarm</Text>
   <Text style={{marginRight:22,backgroundColor:"grey", borderRadius:4,padding:5,fontWeight:"bold"}} >Gallery</Text>
   <Text style={{marginRight:22,backgroundColor:"grey", borderRadius:4,padding:5,fontWeight:"bold"}}>Home</Text>
   <Text style={{marginRight:22,backgroundColor:"grey", borderRadius:4,padding:5,fontWeight:"bold"}}>Notifications</Text>
   <Text style={{marginRight:22,backgroundColor:"grey", borderRadius:4,padding:5,fontWeight:"bold"}}>Subscribe</Text>
    </View>       
</View>
</>


}

export default App