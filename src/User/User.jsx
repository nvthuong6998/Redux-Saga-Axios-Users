// import React, { Component } from 'react'
// import { Text, View } from 'react-native'


// export default class User extends Component {
//     constructor(props){
//         super(props);
//     }
//     componentDidMount(){
//         this.props.getListUserAction();
//     }
//     render() {
//         return (
//             <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'red'}}>
//                 <Text style={{color: 'black'}}> {
//                     this.props.stateUserAction.map((user) => {
//                         <View key={user.id}>
//                             <Text>{user.name}</Text>
//                             <Text>{user.username}</Text>
//                         </View>
//                     })
//                 }</Text>
//             </View>
//         )
//     }
// }

import React, {useEffect} from 'react'
import { View, Text } from 'react-native'

export default function User(props) {
    useEffect(() =>{
        props.getListUserAction();
    }, [])
    return (
        <View style={{flex: 1, alignItrems: 'center', justifyContent: 'center', backgroundColor: 'red'}}>
            <Text style={{color: 'black'}}> {
                props.stateUserAction.map(users => {
                    <View key={users.id}>
                        {/* <Text>{users.name}</Text>
                        <Text>{users.username}</Text> */}
                    </View>
                })
            }</Text>
        </View>
    )
}
